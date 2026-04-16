import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { wpService, WPPost } from '../services/wpService';
import { Calendar, User, ArrowLeft, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<WPPost | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      wpService.getPostBySlug(slug).then(data => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) return <div className="py-40 text-center font-black text-brand-secondary">Carregando Artigo...</div>;
  if (!post) return <div className="py-40 text-center">Artigo não encontrado.</div>;

  return (
    <div className="bg-white pb-32">
      <div className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.featuredImage} 
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
            
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-2">
                {['Vendas', 'Saúde', 'Digital'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-500 font-bold text-xs rounded-xl border border-gray-100 italic">#{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 font-black text-brand-secondary text-sm tracking-widest">
                Compartilhar:
                <a href="#" className="text-blue-600">FB</a>
                <a href="#" className="text-blue-400">TW</a>
                <a href="#" className="text-green-500">WA</a>
              </div>
            </div>
         </div>
         
         <div className="mt-16 text-center">
            <h3 className="text-3xl font-black text-brand-secondary mb-8">Gostou deste conteúdo?</h3>
            <Link to="/produtos" className="bg-brand-button text-white px-10 py-5 rounded-2xl font-black text-lg inline-flex items-center gap-3 hover:scale-105 transition-all">
              Conheça nossas ferramentas <ArrowLeft size={20} className="rotate-180" />
            </Link>
         </div>
      </div>
    </div>
  );
}
