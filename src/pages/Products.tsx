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
  Plus,
  MessageCircle
} from 'lucide-react';
import { wpService, Product, Template } from '../services/wpService';
import PricingTable from '../components/PricingTable';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [activeTab, setActiveTab] = useState<'simuladores' | 'sites' | 'crm'>('simuladores');

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

            <div className="flex flex-col md:flex-row md:inline-flex bg-gray-200 p-1.5 rounded-2xl gap-1">
              <button 
                onClick={() => setActiveTab('simuladores')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'simuladores' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Simulador - Planos
              </button>
              <button 
                onClick={() => setActiveTab('sites')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'sites' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Sites & Landing Pages
              </button>
              <button 
                onClick={() => setActiveTab('crm')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'crm' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                CRM/Gestor de Clientes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'simuladores' ? (
          <PricingTable />
        ) : activeTab === 'crm' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-xl max-w-6xl mx-auto"
          >
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <h2 className="text-3xl md:text-4xl font-black text-brand-secondary tracking-tight">Gestor de Clientes</h2>
                   <p className="text-gray-500 font-medium leading-relaxed">
                     O Gestor de Clientes é uma ferramenta integrada à plataforma Simulador Online desenvolvida para centralizar a administração de leads e vendas. 
                     O sistema permite o cadastro manual ou importação em massa de contatos, possibilitando que gestores distribuam clientes entre corretores e monitorem a origem de cada oportunidade. 
                     Entre suas principais funcionalidades, destacam-se a criação de formulários personalizados para captação digital e a geração de relatórios gerenciais detalhados para controle de produtividade.
                   </p>
                   <p className="text-gray-500 font-medium leading-relaxed">
                     Além disso, a plataforma facilita a elaboração de cotações de planos e o envio de propostas comerciais via WhatsApp ou e-mail.
                   </p>
                   <p className="text-gray-500 font-medium leading-relaxed">
                     Por fim, o recurso atua como um CRM especializado, incentivando a atualização constante do histórico de negociações e o fortalecimento do relacionamento com o público.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     <a 
                       href="/contratar" 
                       className="bg-brand-secondary hover:bg-brand-primary text-white font-bold py-4 px-8 rounded-xl transition-colors text-center"
                     >
                       Contratar
                     </a>
                     <a 
                       href="https://api.whatsapp.com/send?phone=551132190409&text=Ol%C3%A1%20sou%20corretor%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es%20sobre%20o%20*CRM/Gestor%20de%20Clientes*." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
                     >
                       <MessageCircle size={20} />
                       Falar no WhatsApp
                     </a>
                   </div>
                </div>
                <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src="https://www.youtube.com/embed/3natwztKJSM" 
                     title="Apresentação do Gestor de Clientes" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                </div>
             </div>
          </motion.div>
        ) : (
          <>
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
                <a href={t.demoUrl} target="_blank" rel="noreferrer" className="block relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-white/90 text-brand-secondary px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                      Visitar Site <ExternalLink size={18} />
                    </span>
                  </div>
                </a>
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-brand-secondary tracking-tight">{t.name}</h3>
                    <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg tracking-wider">
                      Premium
                    </span>
                  </div>
                  <p className="text-brand-secondary font-black text-sm md:text-base leading-relaxed mb-4">{t.description}</p>
                  
                  {t.features && (
                    <ul className="space-y-3 mb-8 flex-1">
                      {t.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-500 text-xs md:text-sm font-medium">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex gap-3 md:gap-4 mt-auto">
                    <a href={t.demoUrl} target="_blank" rel="noreferrer" className="flex-1 bg-brand-secondary text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:bg-brand-primary transition-colors text-center flex items-center justify-center gap-2">
                      Acessar <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <a 
              href="https://app.simuladoronline.com/contratacao/3" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center bg-brand-secondary hover:bg-brand-primary text-white font-black text-lg md:text-xl py-5 px-10 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Contrate um dos Nossos Modelos
            </a>
          </div>
          </>
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
