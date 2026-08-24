import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Printer, 
  Phone, 
  ExternalLink, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Handshake
} from 'lucide-react';
import { wpService, Partner } from '../services/wpService';
import SEO from '../components/SEO';

export default function Parceiros() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wpService.getPartners().then((data) => {
      setPartners(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO 
        title="Parceiros e Soluções Recomendadas" 
        description="Conheça as empresas parceiras recomendadas pelo Simulador On-Line. Serviços de informática, suprimentos para impressoras, manutenção e tecnologia para sua corretora." 
        canonical="https://www.simuladoronline.com/parceiros" 
      />

      {/* HERO HEADER */}
      <section className="bg-brand-secondary text-white py-20 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-brand-primary/30">
              <Handshake size={16} /> Rede de Confiança
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Parceiros & Soluções Recomendadas
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              Selecionamos empresas sérias e especializadas para oferecer produtos e serviços com condições diferenciadas e atendimento prioritário para sua corretora.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS LIST SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center font-bold text-brand-secondary">
            Carregando parceiros...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {partners.map((partner) => {
              const defaultMessage = `Olá ${partner.contactName}, vim através da indicação do Simulador On-Line e gostaria de informações sobre ${partner.name}.`;
              const whatsappUrl = `https://api.whatsapp.com/send?phone=${partner.whatsapp}&text=${encodeURIComponent(defaultMessage)}`;

              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[3rem] border border-gray-200 shadow-xl overflow-hidden flex flex-col justify-between hover:border-brand-primary/40 transition-all duration-300"
                >
                  <div>
                    {/* Header Image / Badge Banner */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      {partner.image ? (
                        <img 
                          src={partner.image} 
                          alt={partner.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-secondary flex items-center justify-center text-white">
                          <Building2 size={48} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {partner.badge && (
                        <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <ShieldCheck size={14} />
                          {partner.badge}
                        </div>
                      )}

                      <div className="absolute bottom-4 left-6 right-6 text-white">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-1">
                          {partner.category}
                        </span>
                        <h2 className="text-2xl font-black leading-snug drop-shadow-md">
                          {partner.name}
                        </h2>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-8 md:p-10 space-y-6">
                      <p className="text-gray-600 font-medium leading-relaxed">
                        {partner.description}
                      </p>

                      {/* Services List */}
                      <div>
                        <h3 className="text-sm font-black text-brand-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Wrench size={16} className="text-brand-primary" /> Serviços e Suprimentos Oferecidos:
                        </h3>
                        <ul className="space-y-3">
                          {partner.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                              <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Info Box */}
                      <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 font-bold">Contato Responsável:</span>
                          <span className="font-black text-brand-secondary">{partner.contactName}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 font-bold">Telefone / WhatsApp:</span>
                          <span className="font-black text-brand-secondary">{partner.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      <MessageCircle size={18} /> Falar no WhatsApp
                    </a>

                    {partner.websiteUrl && (
                      <a
                        href={partner.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-brand-primary text-white font-bold py-4 px-6 rounded-2xl text-sm transition-all shadow-sm"
                      >
                        <ExternalLink size={18} /> Visitar Site
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* INDIQUE UM PARCEIRO CTA */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-gray-50 p-10 md:p-14 rounded-[3rem] border border-gray-100 text-center space-y-4">
          <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-black text-brand-secondary">Quer fazer parte da nossa Rede de Parceiros?</h3>
          <p className="text-gray-500 font-medium max-w-xl mx-auto text-sm">
            Se sua empresa oferece serviços de excelência para corretores e empresas de tecnologia, entre em contato para avaliarmos uma parceria.
          </p>
          <div className="pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=551132190409&text=Olá,+gostaria+de+informações+sobre+como+ser+um+parceiro+do+Simulador+On-Line."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-secondary hover:bg-brand-primary text-white font-bold px-8 py-4 rounded-2xl text-sm transition-all"
            >
              Falar com Comercial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
