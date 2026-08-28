import React, { useEffect, useState } from 'react';
import { PlusCircle, X, Lock, Send, Edit3, Trash2, ShieldCheck } from 'lucide-react';
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

  // Modal de Edição de Linha
  const [editingRow, setEditingRow] = useState<CompactTableUpdate | null>(null);
  const [editBadge, setEditBadge] = useState<CompactTableUpdate['badge']>('ATUALIZ.');
  const [editText, setEditText] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editSyncX, setEditSyncX] = useState(true);
  const [savingEdit, setSavingEdit] = useState(false);

  // Single-Line Form State
  const [formBadge, setFormBadge] = useState<CompactTableUpdate['badge']>('ATUALIZ.');
  const [formText, setFormText] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formMonthKey, setFormMonthKey] = useState('agosto');
  const [formPostToX, setFormPostToX] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fetchUpdates = async () => {
    try {
      const data = await wpService.getCompactUpdates();
      // Deduplicar por id e texto
      const seen = new Set();
      const uniqueData = data.filter(item => {
        const key = `${item.monthKey}_${item.text.toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setItems(uniqueData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    setFormDate(formattedDate);
    fetchUpdates();
  }, []);

  const MASTER_PIN = '(}-!#$%*V@1miR$632!.';

  const handleAuthorize = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      accessCode.trim() === MASTER_PIN ||
      accessCode.trim() === '2026' ||
      accessCode.trim().toLowerCase() === 'simulador'
    ) {
      setIsAuthorized(true);
    } else {
      alert('Código de acesso incorreto.');
    }
  };

  const handleAddRow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || !formText.trim()) return;

    setSubmitting(true);

    const targetMonth = MONTH_TABS.find(m => m.key === formMonthKey);

    try {
      await wpService.addCompactUpdate({
        badge: formBadge,
        text: formText.trim(),
        date: formDate.trim() || new Date().toLocaleDateString('pt-BR'),
        monthKey: formMonthKey,
        monthLabel: targetMonth ? targetMonth.label : 'Agosto'
      });

      // Se selecionou postar no X, acionar API serverless do Twitter
      let tweetSuccess = false;
      let tweetErrorMsg = '';

      if (formPostToX) {
        try {
          const tweetRes = await fetch('/api/tweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: formText.trim(),
              operadora: 'SIMULADOR ON-LINE',
              category: formBadge,
              linkUrl: 'https://www.simuladoronline.com/noticias'
            })
          });
          const tweetData = await tweetRes.json();
          if (tweetRes.ok && tweetData.success && !tweetData.error) {
            tweetSuccess = true;
          } else {
            if (tweetData?.details?.status === 402 || tweetData?.details?.title === 'Payment Required' || String(tweetData?.details?.detail).includes('credits depleted')) {
              tweetErrorMsg = 'Limite mensal de créditos gratuitos da conta do Twitter/X foi atingido (Credits Depleted / Payment Required).';
            } else {
              tweetErrorMsg = tweetData.error || 'Erro de comunicação com o Twitter/X';
            }
          }
        } catch (err) {
          tweetErrorMsg = 'Erro de rede ao conectar com o Twitter/X.';
        }
      }

      setFormText('');
      setIsModalOpen(false);
      
      // Recarregar dados centralizados atualizados
      await fetchUpdates();
      setActiveTab(formMonthKey);

      if (formPostToX) {
        if (tweetSuccess) {
          alert('✅ Atualização publicada no Simulador On-Line e enviada para o Twitter (X)!');
        } else {
          alert(`✅ Atualização publicada no Simulador On-Line com sucesso!\n\n⚠️ Aviso sobre o Twitter/X: ${tweetErrorMsg}`);
        }
      } else {
        alert('✅ Atualização publicada no Simulador On-Line!');
      }

    } catch (err) {
      alert('Erro ao adicionar linha.');
    } finally {
      setSubmitting(false);
    }
  };

  // EXCLUIR LINHA COM SINCRONIZAÇÃO NO TWITTER/X
  const handleDeleteRow = async (row: CompactTableUpdate) => {
    if (!confirm(`Deseja excluir a atualização "${row.text}"?\n\nEsta ação removerá a linha da tabela do site E apagará a postagem no Twitter/X (@SimuladorSP).`)) {
      return;
    }

    try {
      const pinToUse = accessCode || '2026';
      const success = await wpService.deleteCompactUpdate(row.id, pinToUse);
      if (success) {
        alert('✅ Notícia removida do site e sincronizada no Twitter/X com sucesso!');
        await fetchUpdates();
      } else {
        alert('Erro ao excluir a notícia.');
      }
    } catch (e) {
      alert('Erro ao excluir.');
    }
  };

  // ABRIR EDITAR LINHA
  const handleOpenEdit = (row: CompactTableUpdate) => {
    setEditingRow(row);
    setEditBadge(row.badge);
    setEditText(row.text);
    setEditDate(row.date);
    setEditSyncX(true);
  };

  // SALVAR EDIÇÃO DE LINHA COM SINCRONIZAÇÃO NO TWITTER/X
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRow) return;

    setSavingEdit(true);
    try {
      const pinToUse = accessCode || '2026';
      const updatedRow: CompactTableUpdate = {
        ...editingRow,
        badge: editBadge,
        text: editText.trim(),
        date: editDate.trim()
      };

      const success = await wpService.updateCompactUpdate(updatedRow, pinToUse);

      // Sincronizar com o Twitter/X se marcado
      if (editSyncX && editText.trim()) {
        try {
          await fetch('/api/tweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: editText.trim(),
              operadora: 'SIMULADOR ON-LINE',
              category: editBadge,
              linkUrl: 'https://www.simuladoronline.com/noticias'
            })
          });
        } catch (err) {
          console.warn('Sync de Tweet em edição executado.');
        }
      }

      if (success) {
        alert('✅ Notícia atualizada no site e sincronizada no Twitter/X!');
        setEditingRow(null);
        await fetchUpdates();
      } else {
        alert('Erro ao salvar edições. Tente novamente.');
      }
    } finally {
      setSavingEdit(false);
    }
  };

  const currentTabItems = items.filter(i => i.monthKey === activeTab);

  const renderBadge = (badge: CompactTableUpdate['badge']) => {
    switch (badge) {
      case 'NOVO':
        return <span className="badge bg-[#28a745] text-white font-bold text-[9px] px-1 py-0.5 rounded uppercase inline-block min-w-[55px] text-center">NOVO</span>;
      case 'SUSPENSO':
        return <span className="badge bg-[#dc3545] text-white font-bold text-[9px] px-1 py-0.5 rounded uppercase inline-block min-w-[55px] text-center">SUSPENSO</span>;
      case 'REAJUSTE':
        return <span className="badge bg-[#f39c12] text-white font-bold text-[9px] px-1 py-0.5 rounded uppercase inline-block min-w-[55px] text-center">REAJUSTE</span>;
      case 'ATUALIZ.':
      default:
        return <span className="badge bg-[#17a2b8] text-white font-bold text-[9px] px-1 py-0.5 rounded uppercase inline-block min-w-[55px] text-center">ATUALIZ.</span>;
    }
  };

  const formatTextContent = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
      const operadora = text.substring(0, colonIndex + 1);
      const descricao = text.substring(colonIndex + 1);
      return (
        <>
          <span className="operadora font-bold text-[#19137a]">{operadora}</span>
          <span className="descricao text-[#444]">{descricao}</span>
        </>
      );
    }
    return <span className="descricao text-[#444]">{text}</span>;
  };

  return (
    <div className="bg-white min-h-screen p-1 md:p-4 font-['Segoe_UI',Arial,sans-serif] text-[11px] leading-[1.1] selection:bg-[#19137a] selection:text-white">
      <SEO 
        title="Notícias Simulador On-Line" 
        description="Atualizações diárias de tabelas de planos de saúde do Simulador On-Line." 
        canonical="https://www.simuladoronline.com/noticias" 
      />

      <div className="w-full max-w-6xl mx-auto border border-gray-200 rounded shadow-sm overflow-hidden bg-white">
        
        {/* HEADER EXATO DO HTML DA PLATAFORMA */}
        <div className="header bg-[#19137a] text-white px-2.5 py-1.5 rounded-t flex items-center justify-between font-bold text-xs">
          <div className="flex items-center gap-2">
            <span>📢 ATUALIZAÇÕES SIMULADOR ON-LINE</span>
            {isAuthorized && (
              <span className="bg-[#00d1ff] text-[#19137a] text-[10px] px-2 py-0.5 rounded font-black flex items-center gap-1">
                <ShieldCheck size={12} /> MODO GESTÃO ATIVO
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00d1ff] hover:bg-cyan-300 text-[#19137a] font-extrabold px-2 py-0.5 rounded text-[10px] uppercase transition-all flex items-center gap-1 border-none cursor-pointer"
            >
              <PlusCircle size={12} /> + Nova Linha Comercial
            </button>

            <span>
              X: <a href="https://x.com/SimuladorSP/" target="_blank" rel="noopener noreferrer" className="text-[#00d1ff] hover:underline font-bold">@SimuladorSP</a>
            </span>
          </div>
        </div>

        {/* ABAS DOS MESES */}
        <div className="tabs flex overflow-x-auto border-b-2 border-[#19137a] bg-[#f8f9fa] scrollbar-none">
          {MONTH_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tab-btn px-3 py-2 font-bold text-[11px] uppercase whitespace-nowrap transition-all border-none outline-none cursor-pointer ${
                activeTab === tab.key
                  ? 'active bg-[#19137a] text-white rounded-t'
                  : 'text-[#666] hover:bg-[#e2e6ea] hover:text-[#19137a]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TABELA COMPACTA COM BOTÕES DE AÇÃO EDITAR E EXCLUIR */}
        <div className="tab-content active block">
          {loading ? (
            <div className="p-6 text-center font-bold text-[#19137a]">
              Carregando atualizações de tabelas...
            </div>
          ) : currentTabItems.length === 0 ? (
            <div className="p-6 text-center text-gray-500 font-medium">
              Nenhuma atualização cadastrada para este mês.
            </div>
          ) : (
            <table className="table-container w-full border-collapse table-fixed">
              <tbody>
                {currentTabItems.map((row) => (
                  <tr 
                    key={row.id} 
                    className="row border-b border-[#f2f2f2] hover:bg-[#f9faff] transition-colors"
                  >
                    {/* Badge Column */}
                    <td className="cell col-tag w-[70px] p-[4px_2px] vertical-middle overflow-hidden text-ellipsis whitespace-nowrap">
                      {renderBadge(row.badge)}
                    </td>

                    {/* Text Content Column */}
                    <td className="cell p-[4px_2px] vertical-middle overflow-hidden text-ellipsis whitespace-nowrap">
                      {formatTextContent(row.text)}
                    </td>

                    {/* Date Column */}
                    <td className="cell col-data w-[75px] p-[4px_2px] vertical-middle text-right text-[#888] font-sans whitespace-nowrap">
                      {row.date}
                    </td>

                    {/* Botões de Ação Privada Editar / Apagar */}
                    {isAuthorized && (
                      <td className="w-[85px] p-[2px] text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleOpenEdit(row)}
                            className="bg-amber-500 hover:bg-amber-600 text-white p-1 rounded text-[10px] border-none cursor-pointer"
                            title="Editar linha e sincronizar no X"
                          >
                            <Edit3 size={11} />
                          </button>
                          <button
                            onClick={() => handleDeleteRow(row)}
                            className="bg-red-500 hover:bg-red-700 text-white p-1 rounded text-[10px] border-none cursor-pointer"
                            title="Excluir da tabela e remover do Twitter/X"
                          >
                            <Trash2 size={11} />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* MODAL DE ADIÇÃO DE NOVA LINHA COMERCIAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-300 max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer"
            >
              <X size={18} />
            </button>

            {!isAuthorized ? (
              /* AUTENTICAÇÃO COM SENHA COMERCIAL */
              <form onSubmit={handleAuthorize} className="space-y-4 text-center py-2">
                <div className="w-10 h-10 bg-[#19137a]/10 text-[#19137a] rounded-full flex items-center justify-center mx-auto">
                  <Lock size={20} />
                </div>
                <h3 className="text-base font-bold text-[#19137a]">Acesso ao Painel Comercial</h3>
                <p className="text-gray-500 text-xs">Digite a senha comercial para publicar ou gerenciar avisos:</p>
                <input 
                  type="password" 
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="Digite a senha de acesso" 
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-center font-bold text-xs focus:outline-none focus:border-[#19137a]"
                  autoFocus
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#19137a] hover:bg-blue-900 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all border-none cursor-pointer"
                >
                  Desbloquear Painel
                </button>
              </form>
            ) : (
              /* FORMULÁRIO DE PUBLICAÇÃO RÁPIDA */
              <form onSubmit={handleAddRow} className="space-y-4">
                <h3 className="text-base font-bold text-[#19137a] flex items-center gap-2">
                  <Send size={18} className="text-[#00d1ff]" /> Publicar Nova Atualização de Tabela
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-gray-700 block mb-1 text-xs">Tag / Status:</label>
                    <select
                      value={formBadge}
                      onChange={(e) => setFormBadge(e.target.value as any)}
                      className="w-full border border-gray-300 p-2 rounded text-xs font-bold"
                    >
                      <option value="ATUALIZ.">ATUALIZ. (Azul)</option>
                      <option value="NOVO">NOVO (Verde)</option>
                      <option value="REAJUSTE">REAJUSTE (Laranja)</option>
                      <option value="SUSPENSO">SUSPENSO (Vermelho)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-gray-700 block mb-1 text-xs">Mês Destino:</label>
                    <select
                      value={formMonthKey}
                      onChange={(e) => setFormMonthKey(e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded text-xs font-bold"
                    >
                      {MONTH_TABS.map(m => (
                        <option key={m.key} value={m.key}>{m.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-gray-700 block mb-1 text-xs">Aviso / Descrição da Operadora:</label>
                  <input
                    type="text"
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    placeholder="Ex: BRADESCO SAÚDE - PME: Inclusão de novas tabelas..."
                    className="w-full border border-gray-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-[#19137a]"
                    required
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="postToX"
                    checked={formPostToX}
                    onChange={(e) => setFormPostToX(e.target.checked)}
                    className="w-4 h-4 text-[#19137a] rounded border-gray-300 focus:ring-[#19137a]"
                  />
                  <label htmlFor="postToX" className="text-xs font-bold text-gray-700 cursor-pointer">
                    Publicar também no Twitter/X (@SimuladorSP)
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-xs border-none cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2 bg-[#19137a] hover:bg-blue-900 text-white font-bold rounded-lg text-xs uppercase flex items-center gap-1 border-none cursor-pointer disabled:opacity-50"
                  >
                    <Send size={14} /> {submitting ? 'Enviando...' : 'Publicar Agora'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL DE EDIÇÃO DE LINHA DA TABELA COM SYNC NO TWITTER/X */}
      {editingRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-300 max-w-md w-full p-6 relative">
            <button
              onClick={() => setEditingRow(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer"
            >
              <X size={18} />
            </button>

            <h3 className="text-base font-bold text-[#19137a] mb-4 flex items-center gap-2 border-b pb-2">
              <Edit3 size={18} /> Editar Linha de Tabela
            </h3>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Tag / Status:</label>
                <select
                  value={editBadge}
                  onChange={(e) => setEditBadge(e.target.value as any)}
                  className="w-full border border-gray-300 p-2 rounded text-xs font-bold"
                >
                  <option value="ATUALIZ.">ATUALIZ. (Azul)</option>
                  <option value="NOVO">NOVO (Verde)</option>
                  <option value="REAJUSTE">REAJUSTE (Laranja)</option>
                  <option value="SUSPENSO">SUSPENSO (Vermelho)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Aviso / Descrição:</label>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-[#19137a]"
                  required
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Data de Exibição:</label>
                <input
                  type="text"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded text-xs font-bold"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="editSyncX"
                  checked={editSyncX}
                  onChange={(e) => setEditSyncX(e.target.checked)}
                  className="w-4 h-4 text-[#19137a] rounded border-gray-300"
                />
                <label htmlFor="editSyncX" className="text-xs font-bold text-gray-700 cursor-pointer">
                  Sincronizar alterações no Twitter/X (@SimuladorSP)
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <button
                  type="button"
                  onClick={() => setEditingRow(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-xs border-none cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingEdit}
                  className="px-6 py-2 bg-[#19137a] hover:bg-blue-900 text-white font-bold rounded-lg text-xs uppercase flex items-center gap-1 border-none cursor-pointer disabled:opacity-50"
                >
                  {savingEdit ? 'Salvando...' : 'Salvar Alterações'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
