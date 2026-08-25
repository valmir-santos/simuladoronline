import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Calendar, 
  Tag, 
  Bell, 
  PlusCircle, 
  X, 
  CheckCircle2, 
  Send, 
  FileText, 
  ShieldAlert, 
  Filter,
  Share2,
  Lock,
  Sparkles
} from 'lucide-react';
import { wpService, TableUpdate } from '../services/wpService';
import SEO from '../components/SEO';

const OPERADORAS_POPULARES = [
  'Todas',
  'Amil',
  'Bradesco Saúde',
  'SulAmérica',
  'Notredame Intermédica',
  'Hapvida',
  'Porto Seguro Saúde'
];

export default function Noticias() {
  const [updates, setUpdates] = useState<TableUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('Todos');
  const [selectedOperadora, setSelectedOperadora] = useState('Todas');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Form State
  const [formOperadora, setFormOperadora] = useState('Amil');
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<TableUpdate['category']>('Troca de Tabela');
  const [formMonthYear, setFormMonthYear] = useState('Agosto / 2026');
  const [formDescription, setFormDescription] = useState('');
  const [formDetailsText, setFormDetailsText] = useState('');
  const [formPostToX, setFormPostToX] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    wpService.getTableUpdates().then((data) => {
      setUpdates(data);
      setLoading(false);
    });
  }, []);

  // Extrair lista única de meses disponíveis para o filtro
  const availableMonths = ['Todos', ...Array.from(new Set(updates.map(u => u.monthYear)))];

  // Filtragem combinada por busca, mês e operadora
  const filteredUpdates = updates.filter((u) => {
    const matchesSearch = 
      u.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.operadora.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMonth = selectedMonth === 'Todos' || u.monthYear === selectedMonth;
    const matchesOperadora = selectedOperadora === 'Todas' || u.operadora.toLowerCase().includes(selectedOperadora.toLowerCase());

    return matchesSearch && matchesMonth && matchesOperadora;
  });

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() === '2026' || accessCode.trim().toLowerCase() === 'simulador') {
      setIsAuthorized(true);
    } else {
      alert('Código de acesso incorreto. Tente "2026" ou solicite ao administrador.');
    }
  };

  const handleCreateUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formDescription) return;

    setSubmitting(true);
    setFeedbackMsg(null);

    const detailsArray = formDetailsText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    try {
      const created = await wpService.addTableUpdate({
        title: formTitle,
        operadora: formOperadora,
        category: formCategory,
        monthYear: formMonthYear,
        description: formDescription,
        details: detailsArray.length > 0 ? detailsArray : undefined,
        postedToX: formPostToX
      });

      setUpdates([created, ...updates]);

      // Disparar envio para Vercel Serverless (API do X.com)
      if (formPostToX) {
        try {
          await fetch('/api/tweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: created.title,
              operadora: created.operadora,
              category: created.category
            })
          });
        } catch (err) {
          console.warn('Serviço de tweet disparado em simulação.');
        }
      }

      setFeedbackMsg({
        type: 'success',
        text: 'Nova tabela/notícia publicada no histórico com sucesso!'
      });

      // Reset Form
      setFormTitle('');
      setFormDescription('');
      setFormDetailsText('');

      setTimeout(() => {
        setIsModalOpen(false);
        setFeedbackMsg(null);
      }, 1500);

    } catch (err) {
      setFeedbackMsg({
        type: 'error',
        text: 'Erro ao cadastrar a notícia.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans">
      <SEO 
        title="Central de Atualizações de Tabelas & Notícias" 
        description="Acompanhe o histórico de alterações de tabelas de planos de saúde, reajustes e comunicados das operadoras organizados por mês." 
        canonical="https://www.simuladoronline.com/noticias" 
      />

      {/* HERO HEADER */}
      <section className="bg-brand-secondary text-white py-16 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-brand-primary/30">
                <Bell size={14} className="animate-bounce" /> Canal Oficial do Corretor
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
                Central de Tabelas & Notícias
              </h1>
              <p className="text-gray-300 font-medium text-base md:text-lg max-w-2xl">
                Histórico proprietário de alterações de preços, regras e comunicados das operadoras, organizados mês a mês.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#f05a41] hover:bg-opacity-90 text-white font-black px-6 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <PlusCircle size={20} /> Cadastrar Nova Tabela
            </button>
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-6">
        <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-200 space-y-6">
          
          {/* SEARCH INPUT */}
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busque por operadora (ex: Amil, Bradesco) ou palavra-chave..."
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-14 pr-6 py-4 font-bold text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 transition-all text-base"
            />
          </div>

          {/* MONTH TABS (HISTÓRICO ACUMULADO) */}
          <div>
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-primary" /> Histórico por Mês:
            </span>
            <div className="flex flex-wrap gap-2">
              {availableMonths.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                    selectedMonth === m
                      ? 'bg-brand-secondary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* OPERADORAS PILLS */}
          <div>
            <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
              <Filter size={14} className="text-brand-primary" /> Filtrar por Operadora:
            </span>
            <div className="flex flex-wrap gap-2">
              {OPERADORAS_POPULARES.map((op) => (
                <button
                  key={op}
                  onClick={() => setSelectedOperadora(op)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                    selectedOperadora === op
                      ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-black'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UPDATES FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {loading ? (
          <div className="py-20 text-center font-bold text-brand-secondary">
            Carregando histórico de tabelas...
          </div>
        ) : filteredUpdates.length === 0 ? (
          <div className="bg-white p-12 rounded-[2.5rem] text-center space-y-4 border border-gray-200 shadow-sm">
            <ShieldAlert size={48} className="mx-auto text-gray-300" />
            <h3 className="text-xl font-black text-brand-secondary">Nenhuma alteração encontrada</h3>
            <p className="text-gray-500 font-medium text-sm">
              Tente mudar o filtro de mês ou limpar o termo de pesquisa.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <span className="text-xs font-black text-gray-400 uppercase tracking-wider">
                Exibindo {filteredUpdates.length} atualização(ões)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredUpdates.map((item) => {
                const formattedDate = new Date(item.date).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                });

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="bg-brand-secondary text-white text-xs font-black px-3.5 py-1.5 rounded-xl">
                          {item.operadora}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 text-[11px] font-black px-3 py-1 rounded-lg">
                            {item.category}
                          </span>
                          <span className="bg-gray-100 text-gray-600 text-[11px] font-bold px-3 py-1 rounded-lg flex items-center gap-1">
                            <Calendar size={12} /> {formattedDate}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-xl font-black text-brand-secondary mb-3 leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Bullet Details */}
                      {item.details && item.details.length > 0 && (
                        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                          <ul className="space-y-2">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                                <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Card Footer Info */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-bold">
                      <span>Mês: <strong className="text-brand-secondary">{item.monthYear}</strong></span>
                      {item.postedToX && (
                        <span className="flex items-center gap-1 text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                          <Share2 size={12} /> Publicado no @SimuladorSP
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* QUICK PUBLISH MODAL FOR COMMERCIAL DEPT */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 max-w-xl w-full p-8 md:p-10 relative overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all"
              >
                <X size={20} />
              </button>

              {!isAuthorized ? (
                /* AUTH STEP */
                <form onSubmit={handleAuthorize} className="space-y-6 text-center py-4">
                  <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto">
                    <Lock size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-secondary">Acesso Comercial</h3>
                    <p className="text-xs text-gray-500 font-medium mt-1">
                      Digite o código de autorização comercial para publicar novas tabelas.
                    </p>
                  </div>
                  <div>
                    <input
                      type="password"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                      placeholder="Código de acesso (ex: 2026)"
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl font-black text-center text-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-secondary hover:bg-brand-primary text-white font-black py-4 rounded-2xl text-sm transition-all"
                  >
                    Acessar Painel de Cadastro
                  </button>
                </form>
              ) : (
                /* PUBLISH FORM STEP */
                <form onSubmit={handleCreateUpdate} className="space-y-5">
                  <div className="flex items-center gap-2 text-brand-primary font-black text-xs uppercase tracking-widest">
                    <Sparkles size={16} /> Painel de Cadastro Comercial
                  </div>
                  <h3 className="text-2xl font-black text-brand-secondary">Cadastrar Nova Tabela</h3>

                  {feedbackMsg && (
                    <div className={`p-4 rounded-2xl text-xs font-bold ${
                      feedbackMsg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700'
                    }`}>
                      {feedbackMsg.text}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-1">Operadora</label>
                      <input
                        type="text"
                        value={formOperadora}
                        onChange={(e) => setFormOperadora(e.target.value)}
                        placeholder="Ex: Amil, Bradesco..."
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-bold text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-1">Categoria</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value as TableUpdate['category'])}
                        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-bold text-sm"
                      >
                        <option value="Troca de Tabela">Troca de Tabela</option>
                        <option value="Reajuste">Reajuste</option>
                        <option value="Lançamento">Lançamento</option>
                        <option value="Regras de Aceitação">Regras de Aceitação</option>
                        <option value="Informativo">Informativo</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Mês / Ano</label>
                    <input
                      type="text"
                      value={formMonthYear}
                      onChange={(e) => setFormMonthYear(e.target.value)}
                      placeholder="Ex: Agosto / 2026"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-bold text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Título da Notícia/Tabela</label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="Ex: Reajuste e Novas Tabelas PME"
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-bold text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Resumo Explicativo</label>
                    <textarea
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Descreva resumidamente o que mudou na tabela..."
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-medium text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Destaques / Detalhes (Uma por linha)</label>
                    <textarea
                      value={formDetailsText}
                      onChange={(e) => setFormDetailsText(e.target.value)}
                      placeholder="- Carência reduzida para 2 vidas&#10;- Vigência a partir de 01/09"
                      rows={2}
                      className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl font-medium text-sm"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="postToX"
                      checked={formPostToX}
                      onChange={(e) => setFormPostToX(e.target.checked)}
                      className="w-4 h-4 text-brand-primary rounded"
                    />
                    <label htmlFor="postToX" className="text-xs font-bold text-gray-700 cursor-pointer">
                      Postar automaticamente no Twitter/X (@SimuladorSP)
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-secondary hover:bg-brand-primary text-white font-black py-4 rounded-2xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    <Send size={18} /> {submitting ? 'Publicando...' : 'Publicar Notícia no Histórico'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
