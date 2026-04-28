import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingItem {
  users: string;
  price: string;
}

const ESTADUAL_PRICES: PricingItem[] = [
  { users: '01 usuário', price: 'R$ 30,00' },
  { users: '08 usuários', price: 'R$ 80,00' },
  { users: '02 usuários', price: 'R$ 40,00' },
  { users: '09 usuários', price: 'R$ 85,00' },
  { users: '03 usuários', price: 'R$ 50,00' },
  { users: '10 usuários', price: 'R$ 90,00' },
  { users: '04 usuários', price: 'R$ 60,00' },
  { users: '20 usuários', price: 'R$ 150,00' },
  { users: '05 usuários', price: 'R$ 65,00' },
  { users: '50 usuários', price: 'R$ 250,00' },
  { users: '06 usuários', price: 'R$ 70,00' },
  { users: '100 usuários', price: 'R$ 350,00' },
  { users: '07 usuários', price: 'R$ 75,00' },
  { users: '200 usuários', price: 'R$ 500,00' },
];

const NACIONAL_PRICES: PricingItem[] = [
  { users: '01 usuário', price: 'R$ 50,00' },
  { users: '08 usuários', price: 'R$ 140,00' },
  { users: '02 usuários', price: 'R$ 70,00' },
  { users: '09 usuários', price: 'R$ 150,00' },
  { users: '03 usuários', price: 'R$ 85,00' },
  { users: '10 usuários', price: 'R$ 160,00' },
  { users: '04 usuários', price: 'R$ 100,00' },
  { users: '20 usuários', price: 'R$ 240,00' },
  { users: '05 usuários', price: 'R$ 110,00' },
  { users: '50 usuários', price: 'R$ 400,00' },
  { users: '06 usuários', price: 'R$ 120,00' },
  { users: '70 usuários', price: 'R$ 500,00' },
  { users: '07 usuários', price: 'R$ 130,00' },
  { users: '100 usuários', price: 'R$ 600,00' },
];

export default function PricingTable() {
  return (
    <div className="space-y-20 py-16">
      {/* TABELA ESTADUAL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-[#F2EDE6] rounded-[4rem] p-10 md:p-20 shadow-xl border border-gray-200"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-secondary mb-2">Relação de Planos por Estado</h2>
          <p className="text-2xl font-bold text-brand-secondary">Assinatura mensal</p>
        </div>

        <div className="flex flex-col space-y-4 max-w-lg mx-auto mb-16">
          {ESTADUAL_PRICES.map((item, idx) => (
            <div key={idx} className="flex items-center py-2 px-4 group">
              <div className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-brand-secondary flex-shrink-0" fill="currentColor" color="white" />
                <span className="text-lg sm:text-xl font-medium text-brand-secondary">
                  {item.users} &ndash; {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <PricingFooter theme="light" />
      </motion.div>

      {/* TABELA NACIONAL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-brand-secondary rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-2">Relação de Planos Nacionais</h2>
          <p className="text-2xl font-bold text-white/80">Assinatura mensal</p>
        </div>

        <div className="flex flex-col space-y-4 max-w-lg mx-auto mb-16 relative z-10">
          {NACIONAL_PRICES.map((item, idx) => (
            <div key={idx} className="flex items-center py-2 px-4 group">
              <div className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-brand-primary flex-shrink-0" fill="currentColor" color="white" />
                <span className="text-lg sm:text-xl font-medium text-white">
                  {item.users} &ndash; {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <PricingFooter theme="dark" />
      </motion.div>
    </div>
  );
}

function PricingFooter({ theme }: { theme: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  
  return (
    <div className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#D1E9F6]/50 p-6 rounded-xl border border-brand-primary/20 relative group">
          <X size={14} className="absolute top-2 right-2 text-brand-secondary/50 cursor-pointer" />
          <p className="text-sm font-bold text-brand-secondary leading-relaxed">
            * A partir do plano de 02 acessos será adicionado uma taxa única de implantação/configuração no valor de R$ 50,00.
          </p>
        </div>
        <div className="bg-[#D1E9F6]/50 p-6 rounded-xl border border-brand-primary/20 relative group">
          <X size={14} className="absolute top-2 right-2 text-brand-secondary/50 cursor-pointer" />
          <p className="text-sm font-bold text-brand-secondary leading-relaxed">
            ** Para fazermos a Integração do seu site com as tabelas e cálculos do Simulador On-Line, cobramos uma taxa única (O valor será informado após avaliação do site).
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className={`${isDark ? 'bg-brand-primary' : 'bg-[#002F5D]'} text-white px-16 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl`}>
          Contratar
        </button>
        <button className={`${isDark ? 'bg-brand-primary' : 'bg-[#002F5D]'} text-white px-16 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-xl`}>
          Senha Teste
        </button>
      </div>
    </div>
  );
}
