import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Target, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      {/* HEADER SECTION */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-black text-brand-secondary mb-8 tracking-tight">
              Especialistas em <span className="text-brand-primary">Digitalizar</span> a Corretagem.
            </h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Desde 2006, o Simulador On-line nasceu com um propósito claro: eliminar a papelada e a complexidade do dia a dia do corretor de planos de saúde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY / TIMELINE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/history/800/1000" 
                  alt="Escritório Simulador On-line" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-primary text-white p-12 rounded-[2rem] shadow-2xl hidden md:block">
                <span className="block text-6xl font-black mb-2">18+</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Anos de Inovação</span>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl font-black text-brand-secondary tracking-tight">Nossa História</h2>
              <div className="space-y-8">
                {[
                  { 
                    year: "2006", 
                    title: "A Fundação", 
                    desc: "Iniciamos como a primeira plataforma de consulta de tabelas online no Brasil." 
                  },
                  { 
                    year: "2012", 
                    title: "Expansão Nacional", 
                    desc: "Lançamos o Simulador Nacional, mapeando todas as operadoras do país." 
                  },
                  { 
                    year: "2018", 
                    title: "Ecossistema SaaS", 
                    desc: "Integramos CRM e criação de sites especializados para corretores." 
                  },
                  { 
                    year: "Hoje", 
                    title: "Liderança Headless", 
                    desc: "Tecnologia de ponta para oferecer a plataforma mais rápida e confiável do mercado." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-secondary font-black shrink-0 border border-gray-200">
                        {i + 1}
                      </div>
                      {i < 3 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                    </div>
                    <div>
                      <span className="text-brand-primary font-black text-xs uppercase tracking-widest block mb-1">{item.year}</span>
                      <h3 className="text-xl font-bold text-brand-secondary mb-2">{item.title}</h3>
                      <p className="text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Corretores Ativos", val: "+35k" },
              { label: "Cálculos/Dia", val: "800k" },
              { label: "Taxa de Precisão", val: "99.9%" },
              { label: "Colaboradores", val: "120+" }
            ].map((stat, i) => (
              <div key={i}>
                <span className="block text-5xl md:text-6xl font-black text-brand-primary mb-2">{stat.val}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Target className="text-brand-primary" size={32} />, 
                title: "Missão", 
                desc: "Facilitar a vida do corretor através de tecnologia transparente e dados precisos." 
              },
              { 
                icon: <Award className="text-brand-button" size={32} />, 
                title: "Visão", 
                desc: "Ser o ecossistema padrão ouro para o mercado de seguros e benefícios no Brasil." 
              },
              { 
                icon: <Users className="text-green-600" size={32} />, 
                title: "Valores", 
                desc: "Inovação constante, ética com os dados e foco total no sucesso do usuário." 
              }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-gray-100 rounded-[2.5rem] bg-white shadow-sm">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black text-brand-secondary mb-4">{item.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
