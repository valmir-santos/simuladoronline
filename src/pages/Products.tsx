import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Zap, 
  Layout as LayoutIcon, 
  ExternalLink, 
  Monitor, 
  Smartphone, 
  Send,
  Plus
} from 'lucide-react';
import { wpService, Product, Template } from '../services/wpService';
import PricingTable from '../components/PricingTable';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeTab, setActiveTab] = useState<'simuladores' | 'sites'>('simuladores');

  useEffect(() => {
    wpService.getProducts().then(setProducts);
    wpService.getTemplates().then(setTemplates);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* HEADER */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-brand-secondary mb-6 tracking-tight">O que você deseja construir hoje?</h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-12">
              Oferecemos soluções completas para digitalizar sua operação: de simuladores de preços a sites de alta conversão.
            </p>

            <div className="inline-flex bg-gray-200 p-1.5 rounded-2xl">
              <button 
                onClick={() => setActiveTab('simuladores')}
                className={`px-8 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'simuladores' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Simuladores SaaS
              </button>
              <button 
                onClick={() => setActiveTab('sites')}
                className={`px-8 py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'sites' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Sites & Templates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'simuladores' ? (
          <PricingTable />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {templates.map((t) => (
              <motion.div 
                key={t.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <a href={t.demoUrl} target="_blank" rel="noreferrer" className="w-full bg-white text-brand-secondary py-2.5 md:py-3 rounded-lg md:rounded-xl font-bold flex items-center justify-center gap-2 text-sm">
                       Demo ao Vivo <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-brand-secondary tracking-tight">{t.name}</h3>
                    <span className="bg-gray-100 text-brand-primary text-[10px] font-black uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg tracking-wider">
                      {t.platform}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed mb-6 md:mb-8">{t.description}</p>
                  <div className="flex gap-3 md:gap-4">
                    <button className="flex-1 bg-brand-secondary text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:bg-brand-primary transition-colors">
                      Customizar
                    </button>
                    <button className="p-3 md:p-4 border border-gray-200 rounded-lg md:rounded-xl hover:bg-gray-50 transition-colors shrink-0">
                      <Plus size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* WHY HEADLESS? */}
      <section className="bg-brand-secondary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-brand-primary text-sm font-black tracking-[0.2em] uppercase mb-4">Tecnologia Headless</h2>
            <p className="text-3xl md:text-5xl font-black mb-12 tracking-tight">O que isso significa para você?</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Rapidez Externa", desc: "Seu site carrega em milissegundos, melhorando o ranking no Google e a experiência do cliente." },
                { title: "Escalabilidade", desc: "Painel administrativo robusto no WordPress com frontend moderno e flexível no Next.js." },
                { title: "Segurança", desc: "Backend e frontend isolados diminuem drasticamente brechas de segurança comuns em temas padrão." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem]">
                  <h4 className="text-xl font-bold mb-4 text-brand-primary">{item.title}</h4>
                  <p className="text-gray-400 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
