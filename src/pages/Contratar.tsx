import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Contratar() {
  return (
    <div className="bg-[#F2EDE6] min-h-[calc(100vh-80px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#002F5D] tracking-tight mb-4"
          >
            Escolha um produto abaixo
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card Estadual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#002F5D] text-white p-6 text-center flex flex-col justify-center min-h-[160px]">
              <h3 className="text-2xl font-bold mb-1">Simulador On-Line</h3>
              <h4 className="text-2xl font-black mb-2 uppercase">Acesso ESTADUAL</h4>
              <p className="text-xs font-medium">A partir de:</p>
            </div>
            
            {/* Body */}
            <div className="bg-white flex-grow p-6 md:p-8 text-center flex flex-col items-center">
              <div className="flex items-start justify-center text-[#3DABE3] font-black mb-6">
                <span className="text-2xl mt-3 mr-1">R$</span>
                <span className="text-7xl md:text-[5.5rem] leading-none">30</span>
                <div className="flex flex-col justify-start mt-2 ml-1 text-left">
                  <span className="text-xl leading-none">,00</span>
                  <span className="text-sm text-gray-500 font-medium">Mês</span>
                </div>
              </div>

              <ul className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed mb-8 text-left space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Simulações de planos Individuais, Familiares, Adesões e PME's</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Cobertura dentro do seu Estado/Cidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Informações detalhadas das operadoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Valores calculados por padrão/categoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Separação por faixa etária conforme digitado</span>
                </li>
              </ul>

              <div className="mt-auto w-full">
                <a 
                  href="https://app.simuladoronline.com/contratacao/2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3DABE3] text-white px-8 py-3 rounded font-medium text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full max-w-[200px]"
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
            transition={{ delay: 0.2 }}
            className="flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-white text-[#002F5D] font-black text-xs py-1 px-12 transform rotate-45 shadow-md z-10 tracking-widest uppercase">
              POPULAR
            </div>

            {/* Header */}
            <div className="bg-[#002F5D] text-white p-6 text-center flex flex-col justify-center min-h-[160px] relative">
              <h3 className="text-2xl font-bold mb-1">Simulador On-Line</h3>
              <h4 className="text-2xl font-black mb-2 uppercase">Acesso NACIONAL</h4>
              <p className="text-xs font-medium">A partir de:</p>
            </div>
            
            {/* Body */}
            <div className="bg-white flex-grow p-6 md:p-8 text-center flex flex-col items-center">
              <div className="flex items-start justify-center text-[#3DABE3] font-black mb-6">
                <span className="text-2xl mt-3 mr-1">R$</span>
                <span className="text-7xl md:text-[5.5rem] leading-none">50</span>
                <div className="flex flex-col justify-start mt-2 ml-1 text-left">
                  <span className="text-xl leading-none">,00</span>
                  <span className="text-sm text-gray-500 font-medium">Mês</span>
                </div>
              </div>

              <ul className="text-gray-500 font-medium text-xs md:text-sm leading-relaxed mb-8 text-left space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Simulações de planos Individuais, Familiares, Adesões e PME's</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Cobertura Nacional (todos os Estados/Cidades do Brasil)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Informações detalhadas das operadoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Valores calculados por padrão/categoria</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#3DABE3] shrink-0 mt-0.5" />
                  <span>Separação por faixa etária conforme digitado</span>
                </li>
              </ul>

              <div className="mt-auto w-full">
                <a 
                  href="https://app.simuladoronline.com/contratacao/1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3DABE3] text-white px-8 py-3 rounded font-medium text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full max-w-[200px]"
                >
                  Contratar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card Site PREMIUM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#002F5D] text-white p-6 text-center flex flex-col justify-center min-h-[160px]">
              <h3 className="text-2xl font-bold mb-1">Site</h3>
              <h4 className="text-2xl font-black mb-2 uppercase">PREMIUM</h4>
              <p className="text-xs font-medium">Parcele em até 2x</p>
            </div>
            
            {/* Body */}
            <div className="bg-white flex-grow p-6 md:p-8 text-center flex flex-col items-center">
              <div className="flex items-start justify-center text-[#3DABE3] font-black mb-6">
                <span className="text-2xl mt-3 mr-1">R$</span>
                <span className="text-7xl md:text-[5.5rem] leading-none">300</span>
                <div className="flex flex-col justify-start mt-2 ml-1 text-left">
                  <span className="text-xl leading-none">,00</span>
                  <span className="text-sm text-gray-500 font-medium">Ativação</span>
                </div>
              </div>

              <div className="text-gray-500 font-medium text-[11px] md:text-xs leading-relaxed mb-8 text-left flex flex-col gap-1">
                <p className="mb-2 font-bold">O SITE PREMIUM é um pacote completo para quem deseja vender e captar clientes pela internet.</p>
                <p className="font-bold mb-1">Inclusos neste pacote:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Hospedagem Básica com 3 contas de E-mail com 10GB/Cada(Contas adicionais podem ser contratadas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Possibilidade de disponibilizar Cálculos e Tabelas para seus clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Certificado de Segurança incluso sem custo, este recurso é indispensável caso queira fazer anúncios patrocinados.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Acesso Estadual do Simulador On-Line para *01 Usuário, R$ 70,00/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Acesso Nacional do Simulador On-Line para *01 Usuário, R$ 90,00/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Usuários Adicionais(Consultar Valores).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#3DABE3] shrink-0 mt-0.5" />
                    <span>Sem acesso ao Simulador On-Line, manutenção de R$ 50,00/mês.</span>
                  </li>
                </ul>
                <p className="font-bold">Basta ter registrado um endereço de site/domínio e utilizar um de nossos modelos.</p>
                <p>Após 12 meses de assinatura o site(arquivos) passa a ser seu definitivamente;</p>
                <p className="mt-2 text-[10px]">*Após o preenchimento do formulário de contratação e pagamento, você será contatado por nossa equipe.</p>
              </div>

              <div className="mt-auto w-full">
                <a 
                  href="https://app.simuladoronline.com/contratacao/3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#3DABE3] text-white px-8 py-3 rounded font-medium text-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full max-w-[200px]"
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
