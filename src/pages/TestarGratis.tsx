import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function TestarGratis() {
  return (
    <div className="bg-[#F2EDE6] min-h-[calc(100vh-80px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#002F5D] tracking-tight mb-4"
          >
            Seja Bem Vindo(a) ao Cadastro para Teste
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-bold text-[#002F5D] mb-8"
          >
            Teste A Nossa Ferramenta Durante 05(Cinco) Dias Sem Nenhum Custo.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-[#002F5D]"
          >
            Escolha o seu tipo de acesso abaixo:
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Estadual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#002F5D] text-white p-8 text-center flex flex-col justify-center min-h-[160px]">
              <h3 className="text-3xl font-black mb-2 uppercase">Acesso ESTADUAL</h3>
              <p className="text-sm font-medium">Após periodo de teste, custo partir de:</p>
            </div>
            
            {/* Body */}
            <div className="bg-white flex-grow p-8 md:p-12 text-center flex flex-col items-center">
              <div className="flex items-start justify-center text-[#3DABE3] font-black mb-8">
                <span className="text-2xl mt-3 mr-1">R$</span>
                <span className="text-7xl md:text-[5.5rem] leading-none">30</span>
                <div className="flex flex-col justify-end h-full mt-2 ml-1 text-left">
                  <span className="text-xl leading-none">,00</span>
                  <span className="text-base text-gray-500 font-medium">Mês</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-12 max-w-sm mx-auto">
                Através do Plano Simulador On-Line - ESTADUAL é possível fazer simulações de planos Individuais, Familiares, Adesões e PME's dentro do seu Estado/Cidade, oferecendo informações das operadoras e os valores já calculados por cada padrão/categoria e separados por faixa etária conforme digitado.
              </p>

              <div className="mt-auto w-full">
                <a 
                  href="https://app.simuladoronline.com/contratacao/5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3DABE3] text-white px-12 py-4 rounded font-medium text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full max-w-[250px]"
                >
                  Contratar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card Nacional */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-white text-[#002F5D] font-black text-xs py-1 px-12 transform rotate-45 shadow-md z-10 tracking-widest uppercase">
              POPULAR
            </div>

            {/* Header */}
            <div className="bg-[#002F5D] text-white p-8 text-center flex flex-col justify-center min-h-[160px] relative">
              <h3 className="text-3xl font-black mb-2 uppercase">Acesso NACIONAL</h3>
              <p className="text-sm font-medium">Após periodo de teste, custo partir de:</p>
            </div>
            
            {/* Body */}
            <div className="bg-white flex-grow p-8 md:p-12 text-center flex flex-col items-center">
              <div className="flex items-start justify-center text-[#3DABE3] font-black mb-8">
                <span className="text-2xl mt-3 mr-1">R$</span>
                <span className="text-7xl md:text-[5.5rem] leading-none">50</span>
                <div className="flex flex-col justify-end h-full mt-2 ml-1 text-left">
                  <span className="text-xl leading-none">,00</span>
                  <span className="text-base text-gray-500 font-medium">Mês</span>
                </div>
              </div>

              <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed mb-12 max-w-sm mx-auto">
                Através do Plano Simulador On-Line - NACIONAL é possível fazer simulações de planos Individuais, Familiares, Adesões e PME's dentro do seu Estado/Cidade e também em todos os Estados/Cidade do Brasil, oferecendo informações das operadoras e os valores já calculados por cada padrão/categoria e separados por faixa etária conforme digitado.
              </p>

              <div className="mt-auto w-full">
                <a 
                  href="https://app.simuladoronline.com/contratacao/6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3DABE3] text-white px-12 py-4 rounded font-medium text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full max-w-[250px]"
                >
                  Contratar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
