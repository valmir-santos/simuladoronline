import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wpService, WPPost } from '../services/wpService';
import { Calendar, User, ArrowLeft, MessageCircle, Facebook, Twitter } from 'lucide-react';

import SEO from '../components/SEO';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<WPPost | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      wpService.getBlogPostBySlug(slug).then(data => {
        setPost(data as any);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) return <div className="py-40 text-center font-black text-brand-secondary">Carregando Artigo...</div>;
  if (!post) return <div className="py-40 text-center">Artigo não encontrado.</div>;

  return (
    <div className="bg-white pb-32">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`https://www.simuladoronline.com/blog/${post.slug}`}
        type="article"
        imageUrl={post.imageUrl || post.featuredImage}
        articleData={{
          publishedTime: post.date,
          author: post.author || "Equipe Simulador On-Line",
          category: post.category,
          tags: post.tags
        }}
      />
      <div className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.imageUrl || post.featuredImage || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-secondary/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 pb-20 w-full text-center">
           <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 font-bold uppercase tracking-widest text-xs transition-colors">
             <ArrowLeft size={16} /> Voltar ao Blog
           </Link>

           <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
             {post.title}
           </h1>
           <div className="flex flex-wrap justify-center gap-8 text-white/70 font-bold uppercase tracking-widest text-xs">
              <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.date).toLocaleDateString('pt-BR')}</span>
              <span className="flex items-center gap-2"><User size={14} /> Por Equipe Simulador</span>
              <span className="flex items-center gap-2"><MessageCircle size={14} /> 12 Comentários</span>
           </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -translate-y-12 relative z-10">
         <div className="bg-white p-10 md:p-20 rounded-[3rem] shadow-3xl border border-gray-100">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-brand-secondary prose-headings:font-black prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed prose-li:text-gray-600 prose-li:font-medium prose-strong:text-brand-secondary prose-a:text-brand-primary prose-a:font-bold prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* BANNER DE CONVERSÃO / CRO */}
            <div className="mt-14 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-brand-secondary via-[#19137a] to-brand-primary text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider mb-3 text-cyan-300">
                    Otimize sua Corretora
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                    Acelere suas Vendas de Planos de Saúde
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl">
                    Tenha acesso instantâneo ao Multicálculo de Saúde e Odonto, criação de Sites Profissionais e CRM de Leads integrado.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link 
                    to="/testar-gratis"
                    className="inline-block px-8 py-4 bg-brand-button hover:bg-orange-600 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-xl transition-transform hover:scale-105"
                  >
                    Testar Grátis 7 Dias
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-14 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-2">
                {(post.tags || ['Vendas', 'Saúde', 'Digital']).map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-500 font-bold text-xs rounded-xl border border-gray-100 italic">#{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 font-black text-brand-secondary text-sm tracking-widest items-center">
                Compartilhar:
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 hover:opacity-70 transition-opacity"
                  title="Compartilhar no Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-400 hover:opacity-70 transition-opacity"
                  title="Compartilhar no Twitter (X)"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-green-500 hover:opacity-70 transition-opacity"
                  title="Compartilhar no WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
         </div>
         
         <div className="mt-16 text-center">
            <h3 className="text-3xl font-black text-brand-secondary mb-8">Gostou deste conteúdo?</h3>
            <Link 
              to={post.slug === 'site-para-corretor-de-plano-de-saude' ? "/produtos#sites" : "/produtos"} 
              className="bg-brand-button text-white px-10 py-5 rounded-2xl font-black text-lg inline-flex items-center gap-3 hover:scale-105 transition-all"
            >
              Conheça nossas ferramentas <ArrowLeft size={20} className="rotate-180" />
            </Link>
         </div>
      </div>
    </div>
  );
}
