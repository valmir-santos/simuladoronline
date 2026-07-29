import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ObrigadoNewsletter() {
  return (
    <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl text-center max-w-2xl w-full border border-gray-100">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-black text-brand-secondary mb-6 tracking-tight">
          Inscrição Confirmada!
        </h1>
        
        <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
          Agradecemos por se inscrever em nossa Newsletter. A partir de agora você irá receber notícias, atualizações e dicas exclusivas sobre nossa plataforma diretamente no seu e-mail.
        </p>
        
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-black tracking-widest text-sm uppercase hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-brand-primary/30"
        >
          <ArrowLeft size={18} /> Voltar para o Blog
        </Link>
      </div>
    </div>
  );
}
