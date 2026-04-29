import React from 'react';
import { motion } from 'motion/react';
import { Cookie } from 'lucide-react';

export default function PoliticaCookies() {
  return (
    <div className="bg-[#F2EDE6] min-h-[calc(100vh-80px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#D1E9F6] p-4 rounded-2xl">
              <Cookie className="text-[#002F5D]" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#002F5D]">Política de Cookies</h1>
          </div>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-6">
            <p>
              O <strong>Simulador On-Line</strong> utiliza cookies e outras tecnologias de rastreamento para melhorar 
              a sua experiência de navegação em nosso site, analisar o tráfego e personalizar o conteúdo que oferecemos, 
              sempre em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</strong>.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que um site, quando visitado, coloca no computador do usuário ou no seu 
              dispositivo móvel, através do navegador de internet (browser). O cookie ajuda o site a reconhecer o seu dispositivo 
              na próxima visita, retendo apenas informações relacionadas às suas preferências, e não os seus dados pessoais diretos.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Como utilizamos os Cookies?</h2>
            <p>Os cookies que utilizamos podem ser divididos nas seguintes categorias:</p>
            
            <div className="space-y-4 mt-6">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#002F5D] mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  Cookies Estritamente Necessários (Essenciais)
                </h3>
                <p className="text-sm">
                  Estes cookies são necessários para que o site funcione de maneira segura e adequada. Eles não podem ser 
                  desativados em nossos sistemas. Sem estes cookies, funcionalidades vitais, como o login no sistema ou a 
                  comunicação de rede, não funcionariam. Eles não armazenam qualquer informação pessoal identificável.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#002F5D] mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Cookies de Desempenho e Estatísticas (Analytics)
                </h3>
                <p className="text-sm">
                  Estes cookies nos permitem contar as visitas e fontes de tráfego, para que possamos medir e melhorar o 
                  desempenho do nosso site (ex: Google Analytics). Eles nos ajudam a saber quais são as páginas mais ou menos 
                  populares e a ver como os visitantes se movem pelo site. <strong>Todas as informações recolhidas por estes cookies 
                  são agregadas e, por conseguinte, anônimas.</strong>
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-[#002F5D] mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  Cookies de Marketing e Publicidade
                </h3>
                <p className="text-sm">
                  Estes cookies podem ser estabelecidos através do nosso site pelos nossos parceiros de publicidade (ex: Meta/Facebook Pixel). 
                  Eles podem ser usados por essas empresas para construir um perfil sobre os seus interesses e mostrar-lhe anúncios 
                  relevantes em outros sites. Eles não armazenam informações pessoais diretamente, mas são baseados na identificação 
                  exclusiva do seu navegador e dispositivo de internet.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Sua Escolha (Consentimento)</h2>
            <p>
              Quando você acessou o nosso site pela primeira vez, um aviso sobre cookies foi exibido. 
              Ao clicar em <strong>"Aceitar Todos"</strong>, você concordou com a utilização de todas as categorias de cookies acima. 
              Caso tenha clicado em <strong>"Apenas Essenciais"</strong>, o nosso sistema bloqueou imediatamente a injeção de 
              cookies de Estatísticas e Marketing, priorizando sua privacidade.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Como gerenciar cookies via Navegador</h2>
            <p>
              A qualquer momento, você pode desativar parte ou todos os nossos cookies, utilizando as configurações do seu navegador. 
              Consulte a documentação do seu navegador para saber como bloquear ou limpar os cookies:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/pt-BR/kb/desative-cookies-terceiros-impedir-rastreamento" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="text-sm text-gray-500 mt-4 italic">
              Aviso: A desativação completa dos cookies no navegador pode afetar a disponibilidade de algumas ferramentas essenciais do site.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
