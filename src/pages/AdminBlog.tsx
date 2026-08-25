import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, Trash2, Edit3, ExternalLink, RefreshCw, Zap, X, Save, Globe, PlusCircle } from 'lucide-react';
import { wpService, BlogPost } from '../services/wpService';
import SEO from '../components/SEO';

interface NewsSource {
  id: string;
  name: string;
  url: string;
  feedUrl?: string;
  category: string;
}

export default function AdminBlog() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [sources, setSources] = useState<NewsSource[]>([]);
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Form de Novo Portal
  const [newPortalName, setNewPortalName] = useState('');
  const [newPortalUrl, setNewPortalUrl] = useState('');
  const [newPortalCategory, setNewPortalCategory] = useState('Notícias de Saúde');
  const [addingPortal, setAddingPortal] = useState(false);

  // Modal de Edição de Notícia
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editExcerpt, setEditExcerpt] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editCategory, setEditCategory] = useState('Mercado');
  const [editImageUrl, setEditImageUrl] = useState('');
  const [saving, setSaving] = useState(false);

  const loadPostsAndSources = async () => {
    setLoading(true);
    try {
      const data = await wpService.getBlogPosts();
      setPosts(data);

      const res = await fetch('/api/cron/news?action=sources');
      if (res.ok) {
        const sourcesData = await res.json();
        setSources(sourcesData);
      }
    } catch (e) {
      console.warn('Erro ao carregar fontes');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() === '2026' || accessCode.trim().toLowerCase() === 'simulador') {
      setIsAuthenticated(true);
      loadPostsAndSources();
    } else {
      alert('Senha de administração incorreta.');
    }
  };

  // Disparar Varredura Manual
  const handleTriggerScan = async () => {
    setScanning(true);
    try {
      const res = await fetch('/api/cron/news');
      const data = await res.json();
      if (res.ok && data.success) {
        alert(`Varredura concluída!\n\nNovo artigo gerado: "${data.article?.title || 'Artigo de Saúde'}"`);
        await loadPostsAndSources();
      } else {
        alert('Erro ao executar varredura.');
      }
    } catch (e) {
      alert('Erro ao conectar com a API de varredura.');
    } finally {
      setScanning(false);
    }
  };

  // Cadastrar Novo Portal de Notícias
  const handleAddPortal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPortalName.trim() || !newPortalUrl.trim()) return;

    setAddingPortal(true);
    try {
      const res = await fetch('/api/cron/news?action=sources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'sources',
          name: newPortalName.trim(),
          url: newPortalUrl.trim(),
          category: newPortalCategory,
          pin: accessCode
        })
      });

      if (res.ok) {
        alert('Novo portal cadastrado com sucesso nas fontes do robô!');
        setNewPortalName('');
        setNewPortalUrl('');
        await loadPostsAndSources();
      } else {
        alert('Erro ao cadastrar portal.');
      }
    } finally {
      setAddingPortal(false);
    }
  };

  // Remover Portal
  const handleDeletePortal = async (source: NewsSource) => {
    if (!confirm(`Deseja remover o portal "${source.name}" da lista de fontes?`)) return;

    try {
      const res = await fetch('/api/cron/news?action=sources', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sources', id: source.id, pin: accessCode })
      });

      if (res.ok) {
        await loadPostsAndSources();
      }
    } catch (e) {
      alert('Erro ao remover portal.');
    }
  };

  // Abrir modal de edição
  const handleOpenEdit = (post: BlogPost) => {
    setEditingPost(post);
    setEditTitle(post.title);
    setEditExcerpt(post.excerpt || '');
    setEditContent(post.content || '');
    setEditCategory(post.category || 'Mercado');
    setEditImageUrl(post.featuredImage || post.imageUrl || '');
  };

  // Salvar alterações da edição
  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    setSaving(true);
    try {
      const success = await wpService.updateBlogPost(
        {
          id: editingPost.id || editingPost.slug,
          title: editTitle,
          excerpt: editExcerpt,
          content: editContent,
          category: editCategory,
          imageUrl: editImageUrl
        },
        accessCode
      );

      if (success) {
        alert('Artigo atualizado com sucesso!');
        setEditingPost(null);
        await loadPostsAndSources();
      } else {
        alert('Falha ao salvar as alterações do artigo.');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDeletePost = async (post: BlogPost) => {
    if (!confirm(`Tem certeza que deseja apagar o artigo "${post.title}"? esta ação é irreversível.`)) {
      return;
    }

    setDeletingId(post.id || post.slug);
    try {
      const success = await wpService.deleteBlogPost(post.id || post.slug, accessCode);
      if (success) {
        alert('Artigo removido com sucesso!');
        await loadPostsAndSources();
      } else {
        alert('Falha ao remover o artigo. Tente novamente.');
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 font-sans">
      <SEO title="Painel de Administração do Blog | Simulador On-Line" noindex={true} />

      <div className="max-w-5xl mx-auto space-y-8">
        {!isAuthenticated ? (
          /* TELA DE AUTENTICAÇÃO PRIVADA DA ADMINISTRAÇÃO */
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md mx-auto text-center">
            <div className="w-12 h-12 bg-[#19137a]/10 text-[#19137a] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={24} />
            </div>
            <h1 className="text-xl font-bold text-[#19137a] mb-2">Painel Privado de Gestão do Blog</h1>
            <p className="text-gray-500 text-xs mb-6">
              Área restrita à gerência. Digite a senha comercial para gerenciar matérias e fontes:
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Digite a senha (ex: 2026)"
                className="w-full border border-gray-300 p-3 rounded-lg text-center font-bold text-sm focus:outline-none focus:border-[#19137a]"
                autoFocus
              />
              <button
                type="submit"
                className="w-full bg-[#19137a] hover:bg-blue-900 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition-all border-none cursor-pointer"
              >
                Acessar Painel Restrito
              </button>
            </form>
          </div>
        ) : (
          <>
            {/* SEÇÃO 1: PAINEL DE CONTROLE DAS MATÉRIAS */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-[#19137a] text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-lg font-bold flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[#00d1ff]" /> Gestão Privada de Artigos do Blog
                  </h1>
                  <p className="text-xs text-gray-300 mt-1">
                    Edite o texto, exclua ou execute varreduras manuais com IA sem exposição ao público.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTriggerScan}
                    disabled={scanning}
                    className="bg-[#00d1ff] hover:bg-cyan-300 text-[#19137a] font-extrabold px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-1.5 border-none cursor-pointer disabled:opacity-50"
                  >
                    <Zap size={14} className={scanning ? 'animate-bounce' : ''} />
                    {scanning ? 'Varrendo a Web...' : '⚡ Varredura com IA Agora'}
                  </button>

                  <button
                    onClick={loadPostsAndSources}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold p-2 rounded-lg text-xs transition-all flex items-center gap-1 border-none cursor-pointer"
                  >
                    <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                {loading ? (
                  <div className="py-12 text-center text-gray-500 font-bold">Carregando artigos...</div>
                ) : posts.length === 0 ? (
                  <div className="py-12 text-center text-gray-400 font-medium">Nenhum artigo no blog.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 text-gray-500 uppercase tracking-wider font-bold">
                          <th className="py-3 px-2">Título do Artigo</th>
                          <th className="py-3 px-2">Categoria</th>
                          <th className="py-3 px-2">Data</th>
                          <th className="py-3 px-2 text-right">Ações</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {posts.map((post) => (
                          <tr key={post.id || post.slug} className="hover:bg-gray-50 transition-colors">
                            <td className="py-3.5 px-2 font-bold text-gray-800">
                              <div className="flex items-center gap-2">
                                <span>{post.title}</span>
                                <a
                                  href={`/blog/${post.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  <ExternalLink size={12} />
                                </a>
                              </div>
                            </td>
                            <td className="py-3.5 px-2">
                              <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold">
                                {post.category}
                              </span>
                            </td>
                            <td className="py-3.5 px-2 text-gray-500 whitespace-nowrap">{post.date}</td>
                            <td className="py-3.5 px-2 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleOpenEdit(post)}
                                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1 border-none cursor-pointer"
                                >
                                  <Edit3 size={12} /> Editar
                                </button>

                                <button
                                  onClick={() => handleDeletePost(post)}
                                  disabled={deletingId === (post.id || post.slug)}
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1 border-none cursor-pointer disabled:opacity-50"
                                >
                                  <Trash2 size={12} />
                                  {deletingId === (post.id || post.slug) ? 'Excluindo...' : 'Excluir'}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* SEÇÃO 2: GERENCIADOR DE FONTES & PORTAIS DE NOTÍCIAS */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-800 text-white p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold flex items-center gap-2">
                    <Globe size={18} className="text-[#00d1ff]" /> Fontes e Portais de Notícias Monitorados
                  </h2>
                  <p className="text-xs text-gray-300 mt-1">
                    Cadastre novos blogs, portais ou sites institucionais para o robô monitorar automaticamente.
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* FORMULÁRIO DE NOVO PORTAL */}
                <form onSubmit={handleAddPortal} className="bg-gray-50 border border-gray-200 p-4 rounded-xl space-y-3">
                  <div className="text-xs font-bold text-gray-700 uppercase flex items-center gap-1.5">
                    <PlusCircle size={14} className="text-[#19137a]" /> Cadastrar Novo Portal / Blog
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={newPortalName}
                      onChange={(e) => setNewPortalName(e.target.value)}
                      placeholder="Nome do Portal (ex: Blog do Corretor)"
                      className="border border-gray-300 p-2.5 rounded-lg text-xs font-bold focus:outline-none focus:border-[#19137a]"
                      required
                    />
                    <input
                      type="url"
                      value={newPortalUrl}
                      onChange={(e) => setNewPortalUrl(e.target.value)}
                      placeholder="URL (ex: https://blogdocorretor.com.br/)"
                      className="border border-gray-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-[#19137a]"
                      required
                    />
                    <input
                      type="text"
                      value={newPortalCategory}
                      onChange={(e) => setNewPortalCategory(e.target.value)}
                      placeholder="Categoria (ex: Notícias de Saúde)"
                      className="border border-gray-300 p-2.5 rounded-lg text-xs font-bold focus:outline-none focus:border-[#19137a]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={addingPortal}
                    className="bg-[#19137a] hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-lg text-xs uppercase transition-all border-none cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                  >
                    <PlusCircle size={14} /> {addingPortal ? 'Salvando Portal...' : 'Adicionar Fonte de Notícias'}
                  </button>
                </form>

                {/* LISTA DE PORTAIS ATIVOS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sources.map((src) => (
                    <div key={src.id} className="border border-gray-200 rounded-xl p-3.5 flex items-center justify-between bg-white hover:shadow-sm transition-shadow">
                      <div className="overflow-hidden">
                        <h4 className="font-bold text-gray-800 text-xs flex items-center gap-1.5">
                          <span>{src.name}</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[10px] font-bold">{src.category}</span>
                        </h4>
                        <a href={src.url} target="_blank" rel="noreferrer" className="text-[11px] text-blue-500 hover:underline truncate block mt-0.5">
                          {src.url}
                        </a>
                      </div>

                      <button
                        onClick={() => handleDeletePortal(src)}
                        className="text-red-400 hover:text-red-600 p-1.5 rounded-lg border-none bg-transparent cursor-pointer"
                        title="Remover fonte"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* MODAL DE EDIÇÃO DE CONTEÚDO */}
      {editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditingPost(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-bold text-[#19137a] mb-4 flex items-center gap-2 border-b pb-2 border-gray-100">
              <Edit3 size={18} /> Editar Artigo do Blog
            </h2>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Título do Artigo:</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border border-gray-300 p-2.5 rounded-lg font-bold text-sm text-gray-800 focus:outline-none focus:border-[#19137a]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1 text-xs">Categoria:</label>
                  <input
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded text-xs font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1 text-xs">URL da Imagem de Destaque:</label>
                  <input
                    type="text"
                    value={editImageUrl}
                    onChange={(e) => setEditImageUrl(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Resumo (Excerpt):</label>
                <textarea
                  value={editExcerpt}
                  onChange={(e) => setEditExcerpt(e.target.value)}
                  rows={2}
                  className="w-full border border-gray-300 p-2 rounded font-medium text-xs focus:outline-none focus:border-[#19137a]"
                />
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1 text-xs">Conteúdo da Matéria (HTML / Texto Formatado):</label>
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={10}
                  className="w-full border border-gray-300 p-3 rounded-lg font-mono text-xs focus:outline-none focus:border-[#19137a] leading-relaxed"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-lg text-xs border-none cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 bg-[#19137a] hover:bg-blue-900 text-white font-bold rounded-lg text-xs uppercase flex items-center gap-1.5 border-none cursor-pointer disabled:opacity-50"
                >
                  <Save size={14} /> {saving ? 'Salvando Alterações...' : 'Salvar Alterações'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
