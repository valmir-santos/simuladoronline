import React, { useEffect, useState } from 'react';
import { PlusCircle, X, Lock, Send, ExternalLink, Sparkles } from 'lucide-react';
import { wpService, CompactTableUpdate } from '../services/wpService';
import SEO from '../components/SEO';

const MONTH_TABS = [
  { key: 'agosto', label: 'Agosto' },
  { key: 'julho', label: 'Julho' },
  { key: 'junho', label: 'Junho' },
  { key: 'maio', label: 'Maio' },
  { key: 'abril', label: 'Abril' },
  { key: 'marco', label: 'Março' },
  { key: 'fevereiro', label: 'Fevereiro' },
  { key: 'janeiro', label: 'Janeiro' }
];

export default function Noticias() {
  const [items, setItems] = useState<CompactTableUpdate[]>([]);
  const [activeTab, setActiveTab] = useState<string>('agosto');
  const [loading, setLoading] = useState(true);

  // Modal / Commercial Quick Add State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Single-Line Form State
  const [formBadge, setFormBadge] = useState<CompactTableUpdate['badge']>('ATUALIZ.');
  const [formText, setFormText] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formMonthKey, setFormMonthKey] = useState('agosto');
  const [formPostToX, setFormPostToX] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Preencher data padrão como DD/MM/YYYY de hoje
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    setFormDate(formattedDate);

    wpService.getCompactUpdates().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() === '2026' || accessCode.trim().toLowerCase() === 'simulador') {
      setIsAuthorized(true);
    } else {
      alert('Código de acesso incorreto. Use "2026" para o departamento comercial.');
    }
  };

  const handleAddRow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formText.trim()) return;

    setSubmitting(true);

    const targetMonth = MONTH_TABS.find(m => m.key === formMonthKey);

    try {
      const created = await wpService.addCompactUpdate({
        badge: formBadge,
        text: formText.trim(),
        date: formDate.trim() || new Date().toLocaleDateString('pt-BR'),
        monthKey: formMonthKey,
        monthLabel: targetMonth ? targetMonth.label : 'Agosto'
      });

      setItems([created, ...items]);
      setActiveTab(formMonthKey);

      // Post to X API Serverless endpoint
      if (formPostToX) {
        try {
          await fetch('/api/tweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: created.text,
              operadora: 'SIMULADOR ON-LINE',
              category: created.badge
            })
          });
        } catch (err) {
          console.warn('Postagem no X disparada em ambiente de simulação.');
        }
      }

      setFormText('');
      setIsModalOpen(false);
    } catch (err) {
      alert('Erro ao adicionar linha.');
    } finally {
      setSubmitting(false);
    }
  };

  // Renderizador de Badge com as cores exatas do HTML original
  const renderBadge = (badge: CompactTableUpdate['badge']) => {
    switch (badge) {
      case 'NOVO':
        return <span className="bg-[#28a745] text-white font-bold text-[9px] px-1.5 py-0.5 rounded uppercase inline-block min-w-[60px] text-center border-none">NOVO</span>;
      case 'SUSPENSO':
        return <span className="bg-[#dc3545] text-white font-bold text-[9px] px-1.5 py-0.5 rounded uppercase inline-block min-w-[60px] text-center border-none">SUSPENSO</span>;
      case 'REAJUSTE':
        return <span className="bg-[#f39c12] text-white font-bold text-[9px] px-1.5 py-0.5 rounded uppercase inline-block min-w-[60px] text-center border-none">REAJUSTE</span>;
      case 'ATUALIZ.':
      default:
        return <span className="bg-[#17a2b8] text-white font-bold text-[9px] px-1.5 py-0.5 rounded uppercase inline-block min-w-[60px] text-center border-none">ATUALIZ.</span>;
    }
  };

  // Divide o texto da linha em Parte da Operadora (antes dos dois pontos) e Descrição
  const formatTextContent = (fullText: string) => {
    const colonIdx = fullText.indexOf(':');
    if (colonIdx !== -1) {
      const operadoraPart = fullText.substring(0, colonIdx + 1);
      const descPart = fullText.substring(colonIdx + 1);
      return (
        <>
          <span className="font-bold text-[#19137a] mr-1">{operadoraPart}</span>
          <span className="text-[#444]">{descPart}</span>
        </>
      );
    }
    return <span className="text-[#444]">{fullText}</span>;
  };

  const currentTabItems = items.filter(item => item.monthKey === activeTab);

  return (
    <div className="bg-white min-h-screen p-2 md:p-6 font-['Segoe_UI',Arial,sans-serif] text-[11px] leading-tight selection:bg-[#19137a] selection:text-white">
      <SEO 
        title="Notícias & Atualizações de Tabelas" 
        description="Acompanhe o histórico de atualizações de tabelas do Simulador On-Line por mês." 
        canonical="https://www.simuladoronline.com/noticias" 
      />

      <div className="max-w-6xl mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden bg-white">
        
        {/* HEADER EXATO DO HTML DA PLATAFORMA */}
        <div className="bg-[#19137a] color-white text-white px-3 py-2 flex items-center justify-between font-bold text-xs">
          <div className="flex items-center gap-2">
            <span>📢 ATUALIZAÇÕES SIMULADOR ON-LINE</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00d1ff] hover:bg-cyan-300 text-[#19137a] font-extrabold px-2.5 py-1 rounded text-[10px] uppercase transition-all flex items-center gap-1 shadow-sm"
            >
              <PlusCircle size={12} /> + Nova Linha Comercial
            </button>

            <span>
              X: <a href="https://x.com/SimuladorSP/" target="_blank" rel="noopener noreferrer" className="text-[#00d1ff] hover:underline font-bold">@SimuladorSP</a>
            </span>
          </div>
        </div>

        {/* ABAS DOS MESES (TAB-BTN ACTIVE) */}
        <div className="flex overflow-x-auto border-b-2 border-[#19137a] bg-gray-50 scrollbar-none">
          {MONTH_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-2 font-bold text-[11px] uppercase whitespace-nowrap transition-colors border-none outline-none cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#19137a] text-white rounded-t'
                  : 'text-gray-600 hover:bg-gray-200 hover:text-[#19137a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TABELA COMPACTA EXATA DA PLATAFORMA */}
        <div className="p-1">
          {loading ? (
            <div className="p-8 text-center font-bold text-[#19137a]">
              Carregando atualizações de tabelas...
            </div>
          ) : currentTabItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500 font-medium">
              Nenhuma atualização cadastrada para este mês.
            </div>
          ) : (
            <table className="w-full border-collapse table-fixed">
              <tbody>
                {currentTabItems.map((row) => (
                  <tr 
                    key={row.id} 
                    className="border-b border-[#f2f2f2] hover:bg-[#f9faff] transition-colors"
                  >
                    {/* Badge Column */}
                    <td className="w-[75px] py-1 px-1 align-middle whitespace-nowrap">
                      {renderBadge(row.badge)}
                    </td>

                    {/* Text Content Column */}
                    <td className="py-1 px-1 align-middle overflow-hidden text-ellipsis whitespace-nowrap">
                      {formatTextContent(row.text)}
                    </td>

                    {/* Date Column */}
                    <td className="w-[75px] py-1 px-1 align-middle text-right font-sans text-gray-500 whitespace-nowrap text-[10px]">
                      {row.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* QUICK SINGLE-LINE PUBLISH MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-300 max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            {!isAuthorized ? (
              /* AUTH CODE STEP */
              <form onSubmit={handleAuthorize} className="space-y-4 text-center py-2">
                <div className="w-10 h-10 bg-[#19137a]/10 text-[#19137a] rounded-full flex items-center justify-center mx-auto">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold text-[#19137a]">Autenticação Comercial</h3>
                <p className="text-gray-500 text-xs">
                  Digite a senha do departamento comercial para inserir uma nova linha:
                </p>
                <input
                  type="password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Senha (ex: 2026)"
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded text-center text-sm font-bold focus:outline-none focus:border-[#19137a]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="w-full bg-[#19137a] text-white font-bold py-2.5 rounded text-xs uppercase"
                >
                  Confirmar Acesso
                </button>
              </form>
            ) : (
              /* SINGLE-LINE INPUT FORM STEP */
              <form onSubmit={handleAddRow} className="space-y-4">
                <div className="flex items-center gap-2 text-[#19137a] font-bold text-xs uppercase border-b pb-2 border-gray-200">
                  <Sparkles size={14} /> Publicar Linha de Notícia (Simples)
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">Tag da Notícia:</label>
                  <select
                    value={formBadge}
                    onChange={(e) => setFormBadge(e.target.value as CompactTableUpdate['badge'])}
                    className="w-full bg-gray-50 border border-gray-300 p-2 rounded font-bold text-xs"
                  >
                    <option value="ATUALIZ.">ATUALIZ. (Cyan)</option>
                    <option value="REAJUSTE">REAJUSTE (Laranja)</option>
                    <option value="NOVO">NOVO (Verde)</option>
                    <option value="SUSPENSO">SUSPENSO (Vermelho)</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1">Linha de Texto da Notícia:</label>
                  <textarea
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    placeholder="Ex: HSMED SAÚDE - RJ: Atualização de rede credenciada disponível (Individual, PME e Adesão)"
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-300 p-2.5 rounded font-medium text-xs focus:outline-none focus:border-[#19137a]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Mês da Aba:</label>
                    <select
                      value={formMonthKey}
                      onChange={(e) => setFormMonthKey(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 p-2 rounded text-xs font-bold"
                    >
                      {MONTH_TABS.map(m => (
                        <option key={m.key} value={m.key}>{m.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-gray-700 block mb-1">Data (DD/MM/YYYY):</label>
                    <input
                      type="text"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 p-2 rounded text-xs font-bold"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="postToX"
                    checked={formPostToX}
                    onChange={(e) => setFormPostToX(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="postToX" className="font-bold text-gray-700 cursor-pointer text-xs">
                    Postar automaticamente no Twitter/X (@SimuladorSP)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#19137a] hover:bg-[#00d1ff] hover:text-[#19137a] text-white font-bold py-3 rounded text-xs uppercase transition-all shadow flex items-center justify-center gap-1.5"
                >
                  <Send size={14} /> {submitting ? 'Adicionando...' : 'Adicionar Linha ao Histórico'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
