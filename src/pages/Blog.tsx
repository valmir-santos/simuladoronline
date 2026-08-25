import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ChevronRight, Search, Tag, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpService, WPPost } from '../services/wpService';
import SEO from '../components/SEO';

export default function Blog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  useEffect(() => {
    wpService.getBlogPosts().then(data => {
      setPosts(data as any);
      setLoading(false);
    });
  }, []);

  // Calcular contagem dinâmica por categoria
  const categoryCounts = useMemo(() => {
    const map: Record<string, number> = {};
    posts.forEach(post => {
      const cat = post.category || 'Mercado';
      map[cat] = (map[cat] || 0) + 1;
    });
    return map;
  }, [posts]);

  // Lista de categorias dinâmicas únicas
  const categoriesList = useMemo(() => {
    return Object.keys(categoryCounts);
  }, [categoryCounts]);

  // Filtrar artigos por busca e por categoria selecionada
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEO title="Blog do Corretor" description="Artigos, dicas de vendas e notícias sobre o mercado de planos de saúde para corretores." canonical="https://www.simuladoronline.com/blog" />
      
      {/* HERO */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-brand-secondary mb-8 tracking-tight">Conteúdo para <span className="text-brand-primary">Corretores</span> de Elite.</h1>
            <p className="text-xl text-gray-500 font-medium">Notícias, regulamentações e estratégias de vendas em saúde suplementar geradas em tempo real.</p>
          </div>
        </div>
      </section>

      {/* LISTA DE ARTIGOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-20">
            {loading ? (
              <div className="animate-pulse space-y-12">
                {[1, 2].map(i => (
                  <div key={i} className="space-y-4">
                    <div className="h-64 bg-gray-100 rounded-[2rem]" />
                    <div className="h-8 bg-gray-100 w-3/4 rounded-lg" />
                    <div className="h-4 bg-gray-100 w-full rounded-lg" />
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
                <p className="text-xl text-gray-500 font-medium mb-4">Nenhum artigo encontrado para a busca selecionada.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('Todas'); }}
                  className="bg-brand-primary text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase"
                >
                  Limpar Filtros
                </button>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <motion.article 
                  key={post.id || post.slug} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-[400px] mb-8 overflow-hidden rounded-[2.5rem] shadow-xl">
                      <img 
                        src={(post as any).imageUrl || post.featuredImage || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-brand-primary text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center gap-6 text-sm text-gray-400 font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-primary" /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-brand-primary" /> Por {(post as any).author || "Equipe Simulador"}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-3xl font-black text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 font-medium text-lg leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-secondary font-black uppercase tracking-widest text-sm border-b-2 border-transparent hover:border-brand-primary py-2 transition-all">
                    Ler Artigo Completo <ChevronRight size={16} />
                  </Link>
                </motion.article>
              ))
            )}
          </div>

          {/* BARRA LATERAL (SIDEBAR COM CATEGORIAS DINÂMICAS) */}
          <aside className="space-y-12">
            {/* BUSCAR */}
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
               <h4 className="text-lg font-black text-brand-secondary mb-4">Buscar no Blog</h4>
               <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Pesquisar artigos..." 
                   className="w-full bg-white border border-gray-200 p-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium text-sm"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
               </div>
            </div>

            {/* CATEGORIAS DINÂMICAS */}
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
               <h4 className="text-lg font-black text-brand-secondary mb-4 flex items-center justify-between">
                 <span>Categorias</span>
                 <Filter size={16} className="text-brand-primary" />
               </h4>
               <ul className="space-y-2 font-bold text-gray-600 text-sm">
                 {/* Opção Todas as Categorias */}
                 <li 
                   onClick={() => setSelectedCategory('Todas')}
                   className={`flex justify-between items-center p-2.5 rounded-xl cursor-pointer transition-all ${
                     selectedCategory === 'Todas'
                       ? 'bg-brand-secondary text-white shadow-md'
                       : 'hover:bg-gray-200/60 hover:text-brand-primary'
                   }`}
                 >
                   <span>Todas as Categorias</span>
                   <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                     selectedCategory === 'Todas' ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-gray-700'
                   }`}>
                     {posts.length}
                   </span>
                 </li>

                 {/* Lista Dinâmica de Categorias */}
                 {categoriesList.map(cat => (
                   <li 
                     key={cat}
                     onClick={() => setSelectedCategory(cat)}
                     className={`flex justify-between items-center p-2.5 rounded-xl cursor-pointer transition-all ${
                       selectedCategory === cat
                         ? 'bg-brand-secondary text-white shadow-md'
                         : 'hover:bg-gray-200/60 hover:text-brand-primary'
                     }`}
                   >
                     <span>{cat}</span>
                     <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                       selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-white border border-gray-200 text-gray-700'
                     }`}>
                       {categoryCounts[cat]}
                     </span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="bg-brand-secondary p-8 rounded-[2.5rem] text-white">
               <h4 className="text-xl font-black mb-4 leading-tight">Receba novidades no e-mail</h4>
               <p className="text-gray-300 text-xs font-medium mb-6">Apenas conteúdo estratégico sobre o mercado de saúde.</p>
               <form action="https://formsubmit.co/suporte@simuladoronline.com" method="POST" className="space-y-3">
                 <input type="hidden" name="_subject" value="Cadastro de News" />
                 <input type="hidden" name="_next" value={window.location.origin + "/obrigado-newsletter"} />
                 <input type="hidden" name="_captcha" value="false" />
                 <input type="email" name="email" required placeholder="Seu e-mail profissional" className="w-full bg-white/10 border border-white/20 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-medium text-xs text-white placeholder:text-gray-400" />
                 <button type="submit" className="w-full bg-brand-primary text-white py-3 rounded-xl font-black tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-colors">
                   Inscrever-se <Tag size={14} />
                 </button>
               </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
