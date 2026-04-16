import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Oliveira",
    role: "Corretor Independente - SP",
    content: "O Simulador On-line mudou a forma como eu vendo. Antes perdia horas montando tabelas, hoje envio um comparativo profissional em 2 minutos via WhatsApp.",
    avatar: "https://picsum.photos/seed/ricardo/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Juliana Mendes",
    role: "Sócia na JM Seguros",
    content: "A integração com o nosso site é perfeita. Os leads chegam prontos e qualificados. É a melhor ferramenta do mercado para quem quer escala.",
    avatar: "https://picsum.photos/seed/juliana/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Marcelo Costa",
    role: "Corretor de Benefícios - RJ",
    content: "O suporte técnico é fantástico e a plataforma é extremamente intuitiva. O sistema mobile me salvou diversas vezes em reuniões presenciais.",
    avatar: "https://picsum.photos/seed/marcelo/100/100",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-sm font-black tracking-[0.2em] uppercase mb-4"
          >
            Depoimentos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-brand-secondary tracking-tight"
          >
            O que dizem os <span className="text-brand-primary">especialistas</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                <Quote size={60} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-gray-600 font-medium leading-relaxed mb-8 relative z-10 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-black text-brand-secondary">{t.name}</h4>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-brand-secondary text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Mais de 35.000 corretores satisfeitos em todo o Brasil
          </div>
        </motion.div>
      </div>
    </section>
  );
}
