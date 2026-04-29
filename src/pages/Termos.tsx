import React from 'react';
import { motion } from 'motion/react';

export default function Termos() {
  return (
    <div className="bg-[#F2EDE6] min-h-[calc(100vh-80px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#002F5D] mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-6">
            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">1. Termos</h2>
            <p>
              Ao acessar ao site <strong>Simulador On-Line</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações das Operadoras) no site Simulador On-Line, apenas para fins informativos e não de fechamentos aos seus clientes. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>modificar ou copiar os materiais;</li>
              <li>usar os materiais para qualquer finalidade informativa e não de fechamento aos seus clientes;</li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Simulador On-Line;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou "espelhe" os materiais em qualquer outro servidor.</li>
            </ol>
            <p>
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Simulador On-Line, a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">3. Isenção de responsabilidade</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Os materiais no site da Simulador On-Line são fornecidos 'como estão'. Simulador On-Line não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
              <li>Além disso, o Simulador On-Line não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">4. Limitações</h2>
            <p>
              Em nenhum caso o Simulador On-Line, ou seus parceiros comerciais serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Simulador On-Line, mesmo que Simulador On-Line ou um representante autorizado da Simulador On-Line tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">5. Precisão dos materiais</h2>
            <p>
              Os materiais exibidos no site do Simulador On-Line podem incluir erros técnicos, tipográficos ou fotográficos. Simulador On-Line não garante que qualquer material em seu site seja preciso, completo ou atual. Simulador On-Line pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Simulador On-Line não se compromete a atualizar os materiais.
            </p>
            <p>
              O Simulador On-Line não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Simulador On-Line do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Modificações</h3>
            <p>
              O Simulador On-Line pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Lei aplicável</h3>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Simulador On-Line e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
