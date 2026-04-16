import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ChevronRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpService, WPPost } from '../services/wpService';

export default function Blog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wpService.getPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black text-brand-secondary mb-8 tracking-tight">Conteúdo para <span className="text-brand-primary">Corretores</span> de Elite.</h1>
            <p className="text-xl text-gray-500 font-medium">Notícias, tutoriais e estratégias de vendas vindo diretamente do nosso WordPress Headless.</p>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
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
            ) : (
              posts.map((post) => (
                <motion.article 
                  key={post.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-[400px] mb-8 overflow-hidden rounded-[2.5rem] shadow-xl">
                      <img 
                        src={post.featuredImage} 
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
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-primary" /> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    <span className="flex items-center gap-2"><User size={14} className="text-brand-primary" /> Por Equipe Simulador</span>
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
            
            {/* Pagination Placeholder */}
            {!loading && (
              <div className="flex gap-4 pt-10">
                <button className="w-12 h-12 rounded-2xl bg-brand-secondary text-white font-black">1</button>
                <button className="w-12 h-12 rounded-2xl border border-gray-200 text-gray-400 font-black hover:bg-gray-50 hover:text-brand-secondary transition-all">2</button>
                <button className="w-12 h-12 rounded-2xl border border-gray-200 text-gray-400 font-black hover:bg-gray-50 transition-all flex items-center justify-center">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-12">
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
               <h4 className="text-xl font-black text-brand-secondary mb-6">Buscar</h4>
               <div className="relative">
                 <input type="text" placeholder="Pesquisar artigos..." className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium" />
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
               </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
               <h4 className="text-xl font-black text-brand-secondary mb-6">Categorias</h4>
               <ul className="space-y-4 font-bold text-gray-500">
                 {['Dicas de Vendas', 'Mercado de Saúde', 'Tutoriais', 'Novidades'].map(cat => (
                   <li key={cat} className="flex justify-between items-center group cursor-pointer hover:text-brand-primary transition-colors">
                     <span>{cat}</span>
                     <span className="bg-white px-2.5 py-1 rounded-lg text-xs border border-gray-100 group-hover:border-brand-primary/30">12</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-brand-secondary p-10 rounded-[2.5rem] text-white">
               <h4 className="text-2xl font-black mb-6 leading-tight">Receba novidades no seu e-mail.</h4>
               <p className="text-gray-400 text-sm font-medium mb-8">Sem spam. Apenas conteúdo de valor para corretores profissionais.</p>
               <div className="space-y-4">
                 <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 font-medium" />
                 <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-black tracking-widest text-sm uppercase flex items-center justify-center gap-2">
                   Inscrever <Tag size={16} />
                 </button>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
