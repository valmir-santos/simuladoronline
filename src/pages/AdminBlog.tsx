import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, Trash2, ExternalLink, RefreshCw } from 'lucide-react';
import { wpService, BlogPost } from '../services/wpService';
import SEO from '../components/SEO';

export default function AdminBlog() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await wpService.getBlogPosts();
      setPosts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() === '2026' || accessCode.trim().toLowerCase() === 'simulador') {
      setIsAuthenticated(true);
      loadPosts();
    } else {
      alert('Senha de administração incorreta.');
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
        await loadPosts();
      } else {
        alert('Falha ao remover o artigo. Tente novamente.');
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <SEO title="Painel de Administração do Blog | Simulador On-Line" noindex={true} />

      <div className="max-w-4xl mx-auto">
        {!isAuthenticated ? (
          /* TELA DE AUTENTICAÇÃO PRIVADA DA ADMINISTRAÇÃO */
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md mx-auto text-center">
            <div className="w-12 h-12 bg-[#19137a]/10 text-[#19137a] rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={24} />
            </div>
            <h1 className="text-xl font-bold text-[#19137a] mb-2">Painel Privado de Gestão do Blog</h1>
            <p className="text-gray-500 text-xs mb-6">
              Área restrita à gerência. Digite a senha comercial para gerenciar ou excluir matérias:
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
          /* PAINEL DE CONTROLE DAS MATÉRIAS */
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* CABEÇALHO DO PAINEL */}
            <div className="bg-[#19137a] text-white p-6 flex items-center justify-between">
              <div>
                <h1 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#00d1ff]" /> Gestão Privada de Artigos do Blog
                </h1>
                <p className="text-xs text-gray-300 mt-1">
                  Exclua ou gerencie matérias publicadas no blog sem nenhuma exposição para os visitantes públicos.
                </p>
              </div>

              <button
                onClick={loadPosts}
                className="bg-white/10 hover:bg-white/20 text-white font-bold p-2.5 rounded-lg text-xs transition-all flex items-center gap-1.5 border-none cursor-pointer"
                title="Atualizar lista"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Atualizar
              </button>
            </div>

            {/* TABELA DE ARTIGOS */}
            <div className="p-6">
              {loading ? (
                <div className="py-12 text-center text-gray-500 font-bold">
                  Carregando artigos do blog...
                </div>
              ) : posts.length === 0 ? (
                <div className="py-12 text-center text-gray-400 font-medium">
                  Nenhum artigo encontrado no blog.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500 uppercase tracking-wider font-bold">
                        <th className="py-3 px-2">Título do Artigo</th>
                        <th className="py-3 px-2">Categoria</th>
                        <th className="py-3 px-2">Data</th>
                        <th className="py-3 px-2 text-right">Ação</th>
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
                                title="Ver matéria pública"
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
                          <td className="py-3.5 px-2 text-gray-500 whitespace-nowrap">
                            {post.date}
                          </td>
                          <td className="py-3.5 px-2 text-right whitespace-nowrap">
                            <button
                              onClick={() => handleDeletePost(post)}
                              disabled={deletingId === (post.id || post.slug)}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-1 ml-auto border-none cursor-pointer disabled:opacity-50"
                            >
                              <Trash2 size={12} />
                              {deletingId === (post.id || post.slug) ? 'Excluindo...' : 'Excluir'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
