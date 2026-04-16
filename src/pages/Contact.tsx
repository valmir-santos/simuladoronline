import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageCircle, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* HEADER */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl font-black text-brand-secondary mb-8 tracking-tight">Vamos Conversar?</h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl">
              Nossa equipe comercial e de suporte está pronta para ajudar você a levar sua corretora para o próximo nível.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* CONTACT FORM */}
          <div className="bg-brand-secondary p-10 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
             
             <h2 className="text-3xl font-black mb-8 relative z-10">Solicitar Contato</h2>
             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Seu Nome</label>
                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="Ex: João Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">WhatsApp</label>
                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="exemplo@corretora.com.br" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Assunto</label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary outline-none font-medium appearance-none">
                     <option className="text-black">Dúvida sobre Simulador</option>
                     <option className="text-black">Criação de Site</option>
                     <option className="text-black">Suporte Técnico</option>
                     <option className="text-black">Parcerias</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary outline-none font-medium" placeholder="Como podemos te ajudar?"></textarea>
                </div>
                
                <button className="w-full bg-brand-button hover:opacity-90 text-white py-6 rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3">
                  ENVIAR MENSAGEM
                  <Send size={20} />
                </button>
             </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-16 py-8">
             <div>
               <h3 className="text-sm font-black text-brand-primary uppercase tracking-[0.3em] mb-12">Nossos Canais</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-secondary border border-gray-100 mb-6 font-bold">
                      <Phone size={24} />
                    </div>
                    <h4 className="text-xl font-black text-brand-secondary">São Paulo</h4>
                    <p className="text-gray-500 font-bold">(11) 3219-0409</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-secondary border border-gray-100 mb-6 font-bold">
                      <Phone size={24} />
                    </div>
                    <h4 className="text-xl font-black text-brand-secondary">Rio de Janeiro</h4>
                    <p className="text-gray-500 font-bold">(21) 3527-0540</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-green-600 border border-gray-100 mb-6">
                      <MessageSquare size={24} />
                    </div>
                    <h4 className="text-xl font-black text-brand-secondary">WhatsApp Vendas</h4>
                    <p className="text-gray-500 font-bold">(11) 3219-0409</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-button border border-gray-100 mb-6 font-bold">
                      <Mail size={24} />
                    </div>
                    <h4 className="text-xl font-black text-brand-secondary">E-mail</h4>
                    <p className="text-gray-500 font-bold break-all">comercial@simuladoronline.com.br</p>
                  </div>
               </div>
             </div>

             <div className="p-10 bg-brand-primary/5 rounded-[3rem] border border-brand-primary/10">
                <div className="flex items-center gap-4 mb-6">
                   <MapPin size={24} className="text-brand-primary" />
                   <h3 className="text-2xl font-black text-brand-secondary">Sede Central</h3>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Rua do Rosário, 133, Centro Comercial<br />
                  Rio de Janeiro - RJ, 20041-001<br />
                  Brasil
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
