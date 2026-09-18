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
  MessageCircle,
  Sparkles,
  Layers,
  Globe,
  Tag,
  ShieldAlert,
  Clock
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { wpService, Product, Template, LandingPageItem } from '../services/wpService';
import PricingTable from '../components/PricingTable';
import SEO from '../components/SEO';

export default function Products() {
  const location = useLocation();
  
  const getInitialTab = (): 'simuladores' | 'sites' | 'crm' => {
    const hash = location.hash.replace('#', '');
    if (hash === 'sites' || hash === 'crm') return hash;
    return 'simuladores';
  };

  const [products, setProducts] = useState<Product[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [landingPages, setLandingPages] = useState<LandingPageItem[]>([]);
  const [siteSubTab, setSiteSubTab] = useState<'lps' | 'templates'>('lps');
  const [activeTab, setActiveTab] = useState<'simuladores' | 'sites' | 'crm'>(getInitialTab());

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'sites' || hash === 'crm' || hash === 'simuladores') {
      setActiveTab(hash as any);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  const handleTabChange = (tab: 'simuladores' | 'sites' | 'crm') => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  useEffect(() => {
    wpService.getProducts().then(setProducts);
    wpService.getTemplates().then(setTemplates);
    wpService.getLandingPages().then(setLandingPages);
  }, []);

  return (
    <div className="flex flex-col bg-white">
      <SEO 
        title="Produtos e Ferramentas" 
        description="Conheça nossas ferramentas SaaS: Multicálculo Estadual e Nacional, Criação de Sites para Corretores e CRM Gestor de Clientes." 
        canonical="https://www.simuladoronline.com/produtos"
      />
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
                onClick={() => handleTabChange('simuladores')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'simuladores' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Simulador de Planos de Saúde
              </button>
              <button 
                onClick={() => handleTabChange('sites')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'sites' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                Site para Corretor
              </button>
              <button 
                onClick={() => handleTabChange('crm')}
                className={`px-4 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm transition-all ${activeTab === 'crm' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-600 hover:text-brand-secondary'}`}
              >
                CRM para Corretor de Seguros
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
          <div className="space-y-16">
            {/* SUB-TABS: Landing Pages vs Sites Completos */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex gap-2 border border-gray-200 shadow-inner">
                <button
                  onClick={() => setSiteSubTab('lps')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                    siteSubTab === 'lps'
                      ? 'bg-brand-secondary text-white shadow-md'
                      : 'text-gray-600 hover:text-brand-secondary'
                  }`}
                >
                  <Sparkles size={16} className="text-amber-400" />
                  Landing Pages de Operadoras (Campanha R$ 50)
                </button>
                <button
                  onClick={() => setSiteSubTab('templates')}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                    siteSubTab === 'templates'
                      ? 'bg-brand-secondary text-white shadow-md'
                      : 'text-gray-600 hover:text-brand-secondary'
                  }`}
                >
                  <LayoutIcon size={16} />
                  Sites Completos WordPress
                </button>
              </div>
            </div>

            {siteSubTab === 'lps' ? (
              <div className="space-y-12">
                {/* CAMPAIGN HIGHLIGHT BANNER */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-brand-secondary via-[#0a3b68] to-brand-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="max-w-4xl relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-black uppercase tracking-wider">
                      <Sparkles size={14} /> Oferta Especial para Assinantes
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                      Landing Pages Prontas para Captar Leads por apenas <span className="text-amber-300">R$ 50,00</span> (Taxa Única)
                    </h2>

                    <p className="text-lg md:text-xl text-blue-100 font-medium leading-relaxed">
                      Assinantes do <strong>Plano 01 Nacional</strong> (ou superior) podem escolher <strong className="text-white underline decoration-amber-400 decoration-2">1 Landing Page por CPF / Plano</strong> com taxa única de ativação de apenas <strong>R$ 50,00</strong>. Sem mensalidades adicionais enquanto mantiver sua assinatura ativa!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <p className="text-amber-300 font-black text-sm mb-1">🎯 1 LP por CPF/Plano</p>
                        <p className="text-xs text-blue-100">Escolha o modelo da sua operadora preferida.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <p className="text-amber-300 font-black text-sm mb-1">🌐 Subdomínio Grátis</p>
                        <p className="text-xs text-blue-100">Ou use seu domínio próprio sem complicação.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <p className="text-amber-300 font-black text-sm mb-1">📊 Pronta p/ Anúncios</p>
                        <p className="text-xs text-blue-100">Pixel Meta, Google Ads e TikTok integrados.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                        <p className="text-amber-300 font-black text-sm mb-1">⚡ Sem Mensalidade Extra</p>
                        <p className="text-xs text-blue-100">Ativa enquanto durar sua assinatura Nacional.</p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4 items-center">
                      <a 
                        href="https://api.whatsapp.com/send?phone=551132190409&text=Ol%C3%A1!%20J%C3%A1%20sou%20assinante%20do%20Plano%20Nacional%20e%20gostaria%20de%20ativar%20minha%20Landing%20Page%20por%20R$%2050,00." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-amber-400 hover:bg-amber-300 text-brand-secondary font-black px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                      >
                        <MessageCircle size={18} />
                        Já sou Assinante: Ativar por R$ 50
                      </a>
                      
                      <a 
                        href="https://app.simuladoronline.com/contratacao/1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-blue-50 text-brand-secondary font-black px-6 py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                      >
                        <Zap size={18} className="text-amber-500 fill-amber-500" />
                        Contratar Plano Nacional
                      </a>

                      <a 
                        href="https://api.whatsapp.com/send?phone=551132190409&text=Ol%C3%A1!%20Ainda%20n%C3%A3o%20sou%20cliente%20do%20Simulador%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20campanha%20de%20Landing%20Pages%20e%20o%20Plano%20Nacional." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                      >
                        <MessageCircle size={18} />
                        Ainda não sou cliente: Falar no WhatsApp
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-blue-200 italic">
                        * Contas de e-mail corporativo não inclusas. Tráfego e anúncios por conta do corretor.
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* 13 LANDING PAGES GRID + CUSTOM OPERATOR CARD */}
                <div>
                  <div className="text-center mb-10">
                    <h3 className="text-2xl md:text-4xl font-black text-brand-secondary mb-3">
                      Conheça os Modelos Disponíveis
                    </h3>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">
                      Clique em <strong>Ver Demonstração</strong> para navegar na página em tempo real. Caso sua operadora não esteja na lista, você pode solicitar o desenvolvimento diretamente com nosso suporte!
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {landingPages.map((lp) => {
                      const isCustom = !!lp.isCustomRequest;
                      const targetPhone = isCustom ? "5511982590485" : "551132190409";

                      return (
                        <motion.div
                          key={lp.id}
                          layout
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ y: -6 }}
                          className={`bg-white rounded-3xl border ${isCustom ? 'border-purple-300 ring-2 ring-purple-500/20' : 'border-gray-200'} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
                        >
                          {/* CARD HEADER WITH GRADIENT */}
                          <div className={`p-6 bg-gradient-to-r ${lp.gradient} text-white flex justify-between items-start relative`}>
                            <div>
                              <span className="text-xs uppercase font-bold tracking-wider text-white/80">{lp.category}</span>
                              <h4 className="text-2xl font-black mt-1">{lp.name}</h4>
                            </div>
                            <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm ${lp.badgeColor}`}>
                              {lp.badge}
                            </span>
                          </div>

                          {/* CARD BODY */}
                          <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                            <div>
                              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {lp.description}
                              </p>

                              <ul className="space-y-2.5">
                                {lp.features.map((feat, idx) => (
                                  <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                                    <CheckCircle2 size={16} className={isCustom ? "text-purple-500 shrink-0" : "text-emerald-500 shrink-0"} />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>

                              {isCustom && (
                                <div className="mt-4 bg-purple-50/90 border border-purple-200 rounded-2xl p-3.5 text-xs text-purple-950 font-medium space-y-1.5 shadow-sm">
                                  <p className="font-black text-purple-900 flex items-center gap-1.5">
                                    <Clock size={14} className="text-purple-600 shrink-0" />
                                    Prazo de entrega: até 5 dias úteis
                                  </p>
                                  <p className="text-[11px] text-purple-800 leading-snug">
                                    * O trabalho de criação e configuração da página só é iniciado após a confirmação da contratação do <strong>Plano 01 Nacional</strong>.
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* ACTIONS */}
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                              {/* DEMO LINK OR CUSTOM BANNER */}
                              {!isCustom ? (
                                <a
                                  href={lp.demoUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="w-full bg-gray-100 hover:bg-gray-200 text-brand-secondary py-2.5 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 text-center"
                                >
                                  <ExternalLink size={15} /> Ver Demonstração Online
                                </a>
                              ) : (
                                <div className="w-full bg-purple-50 text-purple-900 border border-purple-200 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 text-center">
                                  <Sparkles size={15} className="text-purple-600" /> Projeto Customizado / TI
                                </div>
                              )}

                              {/* PRIMARY CTA */}
                              {!isCustom ? (
                                <a
                                  href={`https://api.whatsapp.com/send?phone=${targetPhone}&text=Ol%C3%A1!%20Sou%20assinante%20do%20Plano%20Nacional%20e%20quero%20ativar%20a%20Landing%20Page%20da%20*${encodeURIComponent(lp.name)}*%20por%20R$%2050,00.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-2 text-center shadow-md"
                                >
                                  <MessageCircle size={16} /> Já sou Assinante: Ativar por R$ 50
                                </a>
                              ) : (
                                <a
                                  href={`https://api.whatsapp.com/send?phone=5511982590485&text=Ol%C3%A1!%20Sou%20corretor%20e%20gostaria%20de%20solicitar%20uma%20Landing%20Page%20para%20uma%20operadora%20que%20n%C3%A3o%20est%C3%A1%20na%20lista.%20Gostaria%20de%20falar%20com%20o%20Depto.%20de%20Desenvolvimento%20e%20Suporte.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-3 px-4 rounded-xl font-black text-xs transition-colors flex items-center justify-center gap-2 text-center shadow-md"
                                >
                                  <MessageCircle size={16} /> Falar com Depto. de Desenvolvimento
                                </a>
                              )}

                              {/* CTAs FOR NON-CLIENTS / SUPPORT */}
                              <div className="pt-2 border-t border-dashed border-gray-200 flex flex-col gap-2">
                                <a
                                  href="https://app.simuladoronline.com/contratacao/1"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full bg-brand-secondary hover:bg-brand-primary text-white py-2.5 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 text-center shadow-sm"
                                >
                                  <Zap size={14} className="text-amber-400 fill-amber-400" />
                                  Contratar Plano Nacional
                                </a>

                                {!isCustom ? (
                                  <a
                                    href={`https://api.whatsapp.com/send?phone=${targetPhone}&text=Ol%C3%A1!%20Ainda%20n%C3%A3o%20sou%20cliente%20do%20Simulador%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Plano%20Nacional%20e%20a%20Landing%20Page%20da%20*${encodeURIComponent(lp.name)}*.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 text-center"
                                  >
                                    <MessageCircle size={14} className="text-emerald-600" />
                                    Não é cliente? Chamar no WhatsApp
                                  </a>
                                ) : (
                                  <a
                                    href="https://api.whatsapp.com/send?phone=5511982590485&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20Depto.%20de%20Desenvolvimento%20e%20Suporte%20sobre%20o%20desenvolvimento%20de%20uma%20Landing%20Page%20personalizada."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 py-2 px-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 text-center"
                                  >
                                    <MessageCircle size={14} className="text-purple-600" />
                                    Suporte TI: (11) 98259-0485
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
