import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  BarChart3, 
  ArrowRight,
  Monitor,
  Database,
  Search,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { wpService, Product } from '../services/wpService';
import HeroCarousel from '../components/HeroCarousel';
import PricingTable from '../components/PricingTable';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    wpService.getProducts().then(setProducts);
  }, []);

  return (
    <div className="flex flex-col">
      <HeroCarousel />

      {/* PARTNERS / TRUST */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Nossa Tecnologia é Confiada pelas maiores operadoras do Mercado</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
             {/* Mock Partner Logos */}
             <div className="font-black text-2xl italic tracking-tighter">SULAMERICA</div>
             <div className="font-black text-2xl italic tracking-tighter">BRADESCO</div>
             <div className="font-black text-2xl italic tracking-tighter">AMIL</div>
             <div className="font-black text-2xl italic tracking-tighter">PORTO SEGURO</div>
             <div className="font-black text-2xl italic tracking-tighter">NOTRE DAME</div>
             <div className="font-black text-2xl italic tracking-tighter">ALLCARE</div>
             <div className="font-black text-2xl italic tracking-tighter">CORPE SAÚDE</div>
             <div className="font-black text-2xl italic tracking-tighter">SALE LIFE</div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-primary text-sm font-black tracking-[0.2em] uppercase mb-4">Por que escolher o Simulador On-line?</h2>
            <p className="text-4xl md:text-5xl font-black text-brand-secondary mb-6 tracking-tight">Tudo o que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">dominar o mercado</span>.</p>
            <p className="text-lg text-gray-500 font-medium">Desde o primeiro contato até o fechamento, fornecemos as ferramentas que tornam o processo simples para você e transparente para o cliente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Database className="text-white" />, 
                title: "Banco de Dados Completo", 
                desc: "Acesso instantâneo a todas as tabelas de preços, rede credenciada e carências de planos nacionais e estaduais.",
                bg: "bg-brand-primary"
              },
              { 
                icon: <Monitor className="text-white" />, 
                title: "Site Personalizado", 
                desc: "Templates exclusivos para corretores, otimizados para SEO e prontos para captação de leads direto no seu painel.",
                bg: "bg-brand-secondary"
              },
              { 
                icon: <Search className="text-white" />, 
                title: "Multi-Cálculos", 
                desc: "Realize comparativos detalhados entre operadoras em segundos e envie PDFs profissionais para seus clientes.",
                bg: "bg-brand-button"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-primary/30 transition-all group shadow-sm"
              >
                <div className={`${f.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-secondary mb-4">{f.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS / PRICING PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-primary text-sm font-black tracking-[0.2em] uppercase mb-4">Planos Flexíveis</h2>
            <p className="text-4xl md:text-5xl font-black text-brand-secondary tracking-tight">Cresça com a gente.</p>
          </div>

          <PricingTable />
        </div>
      </section>

      <Testimonials />

      {/* CALL TO ACTION */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-brand-secondary p-12 md:p-20 rounded-[4rem] shadow-3xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
               Pronto para vender <br />
               mais planos de saúde?
             </h2>
             <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
               Junte-se a mais de 35.000 corretores que utilizam o Simulador On-line diariamente. 
               Teste grátis por 5 dias.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/testar-gratis" className="inline-flex items-center justify-center bg-brand-button text-white px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
                 QUERO TESTAR GRÁTIS
               </Link>
               <a href="https://api.whatsapp.com/send?phone=551132190409&text=Olá sou corretor e gostaria de algumas informações" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all">
                 Falar com Consultor
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
