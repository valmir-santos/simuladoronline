import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center py-20 px-4 text-center">
      <SEO
        title="Página não encontrada"
        description="O endereço acessado não existe. Conheça o multicálculo de planos de saúde, os sites para corretores e o blog do Simulador On-Line."
        noindex
      />
      <div className="max-w-xl">
        <p className="text-sm font-black uppercase tracking-widest text-brand-primary mb-3">Erro 404</p>
        <h1 className="text-3xl md:text-5xl font-black text-brand-secondary mb-6 tracking-tight">Página não encontrada</h1>
        <p className="text-lg text-gray-500 font-medium mb-10">
          O endereço que você acessou não existe ou mudou de lugar. Comece por um destes caminhos:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="bg-brand-primary text-white px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider">Página inicial</Link>
          <Link to="/produtos" className="border-2 border-brand-secondary text-brand-secondary px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider">Produtos</Link>
          <Link to="/blog" className="border-2 border-brand-secondary text-brand-secondary px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider">Blog</Link>
        </div>
      </div>
    </div>
  );
}
