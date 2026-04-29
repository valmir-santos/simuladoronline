import React from 'react';
import { motion } from 'motion/react';

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-[#F2EDE6] min-h-[calc(100vh-80px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#002F5D] mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-600 space-y-6">
            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Quem somos</h2>
            <p>O endereço do nosso site é: <strong>https://www.simuladoronline.com</strong></p>
            <p>
              Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD).
            </p>
            <p>
              Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Quem deve utilizar nosso site;</li>
              <li>Quais dados coletamos e o que fazemos com eles;</li>
              <li>Seus direitos em relação aos seus dados pessoais;</li>
              <li>Como entrar em contato conosco.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Dados que coletamos e motivos da coleta</h2>
            <p>
              Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo com o disposto nesta seção. Dados pessoais fornecidos expressamente pelo usuário.
            </p>
            <p>Nós coletamos os seguintes dados pessoais que nossos usuários nos fornecem expressamente ao utilizar nosso site:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nome;</li>
              <li>Endereço;</li>
              <li>Telefone;</li>
              <li>E-mail;</li>
              <li>CPF;</li>
              <li>CNPJ.</li>
            </ul>
            <p>A coleta destes dados ocorre nos seguintes momentos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Quando um usuário utiliza um formulário de contato;</li>
              <li>Quando um usuário preenche nosso cadastro;</li>
              <li>Quando um usuário compra um produto.</li>
            </ul>
            <p>Os dados fornecidos por nossos usuários são coletados com as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Para que o usuário possa ser contactado e nos contactar;</li>
              <li>Para ofertar produtos e atualizações aos usuários;</li>
              <li>Para responder solicitações e orçamentos.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Dados sensíveis</h3>
            <p>
              Não serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles definidos nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, não haverá coleta de dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Cookies</h2>
            <p>
              Cookies são pequenos arquivos de texto baixados automaticamente em seu dispositivo quando você acessa e navega por um site. Eles servem, basicamente, para seja possível identificar dispositivos, atividades e preferências de usuários.
            </p>
            <p>
              Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do site.
            </p>

            <h4 className="font-bold mt-4">a. Cookies do site</h4>
            <p>
              Os cookies do site são aqueles enviados ao computador ou dispositivo do usuário e administrador exclusivamente pelo site. As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado.
            </p>

            <h4 className="font-bold mt-4">b. Cookies de terceiros</h4>
            <p>
              Alguns de nossos parceiros podem configurar cookies nos dispositivos dos usuários que acessam nosso site. Estes cookies, em geral, visam possibilitar que nossos parceiros possam oferecer seu conteúdo e seus serviços ao usuário que acessa nosso site de forma personalizada, por meio da obtenção de dados de navegação extraídos a partir de sua interação com o site.
            </p>
            <p>
              O usuário poderá obter mais informações sobre os cookies de terceiro e sobre a forma como os dados obtidos a partir dele são tratados, além de ter acesso à descrição dos cookies utilizados e de suas características, pesquisando os seguintes serviços: Google Analytics; Facebook e Instagram Ads.
            </p>
            <p>As entidades encarregadas da coleta dos cookies poderão ceder as informações obtidas a terceiros.</p>

            <h4 className="font-bold mt-4">c. Gestão de cookies</h4>
            <p>
              O usuário poderá se opor ao registro de cookies pelo site, bastando que desative esta opção no seu próprio navegador. A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e funcionalidades do site, comprometendo seu correto e esperado funcionamento. Outra consequência possível é remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Coleta de dados não previstos expressamente</h2>
            <p>
              Eventualmente, outros tipos de dados não previstos expressamente nesta Política de Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que a coleta seja permitida com fundamento em outra base legal prevista em lei. Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes serão informadas aos usuários do site.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Compartilhamento de dados pessoais com terceiros</h2>
            <p>
              Nós compartilhamos alguns dos dados pessoais mencionados nesta seção com terceiros. Estes dados são compartilhados com nossos parceiros pelas seguintes razões e para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Quando um usuário navega em nosso site ou no site de um de nossos parceiros, estando ele interessado em um serviço ou produto, cookies são compartilhados automaticamente entre sistemas para que nosso site e de nossos parceiros possam apresentar serviços e produtos com base no interesse do usuário;</li>
              <li>Os dados pessoais coletados por intermédio de um formulário ou cadastro, são compartilhados com o parceiro responsável pelo produto ou serviço indicado no site ao qual o usuário navegava para que este parceiro possa contactar o cliente e fazer sua negociação, apresentar detalhes do produto, ou fazer uma venda.</li>
            </ul>
            <p>
              Além das situações aqui informadas, é possível que compartilhemos dados com terceiros para cumprir alguma determinação legal ou regulatória, ou, ainda, para cumprir alguma ordem expedida por autoridade pública.
            </p>
            <p>
              Em qualquer caso, o compartilhamento de dados pessoais observará todas as leis e regras aplicáveis, buscando sempre garantir a segurança dos dados de nosso usuários, observados os padrões técnicos empregados no mercado.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Por quanto tempo seus dados pessoais serão armazenados</h2>
            <p>
              Os dados pessoais coletados pelo site são armazenados e utilizados por período de tempo que corresponda ao necessário para atingir as finalidades elencadas neste documento e que considere os direitos de seus titulares, os direitos do controlador do site e as disposições legais ou regulatórias aplicáveis.
            </p>
            <p>
              Uma vez expirados os períodos de armazenamento dos dados pessoais, eles são removidos de nossas bases de dados ou anonimizados, salvo nos casos em que houver a possibilidade ou a necessidade de armazenamento em virtude de disposição legal ou regulatória.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Bases legais para o tratamento de dados pessoais</h2>
            <p>
              Uma base legal para o tratamento de dados pessoais nada mais é que um fundamento jurídico, previsto em lei, que justifica o justifica. Assim, cada operação de tratamento de dados pessoais precisa ter uma base legal a ela correspondente.
            </p>
            <p>
              Nós tratamos os dados pessoais de nossos usuários nas seguintes hipóteses: Para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados pessoais ou quando necessário para atender aos interesses legítimos do controlador ou de terceiro.
            </p>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Execução de contrato</h3>
            <p>
              Para a execução de contrato de compra e venda ou de prestação de serviços eventualmente firmado entre o site e o usuário, poderão ser coletados e armazenados outros dados relacionados ou necessários a sua execução, incluindo o teor de eventuais comunicações tidas com o usuário.
            </p>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Legítimo interesse</h3>
            <p>
              Para determinadas operações de tratamento de dados pessoais, nos baseamos exclusivamente em nosso interesse legítimo. Para saber mais sobre em quais casos, especificamente, nos valemos desta base legal, ou para obter mais informações sobre os testes que fazemos para termos certeza de que podemos utilizá-la, entre em contato com nosso Encarregado de Proteção de Dados Pessoais por algum dos canais informados nesta Política de Privacidade.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Direitos do usuário</h2>
            <p>O usuário do site possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na lei;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</li>
              <li>Eliminação dos dados pessoais tratados com o consentimento do titular, exceto nos casos previstos em lei;</li>
              <li>Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p>
              É importante destacar que, nos termos da LGPD, não existe um direito de eliminação de dados tratados com fundamento em bases legais distintas do consentimento, a menos que os dados sejam desnecessários, excessivos ou tratados em desconformidade com o previsto na lei.
            </p>

            <h3 className="text-xl font-bold text-[#002F5D] mt-6 mb-3">Como o titular pode exercer seus direitos</h3>
            <p>
              Para garantir que o usuário que pretende exercer seus direitos é, de fato, o titular dos dados pessoais objeto da requisição, poderemos solicitar documentos ou outras informações que possam auxiliar em sua correta identificação, a fim de resguardar nossos direitos e os direitos de terceiros. Isto somente será feito, porém, se for absolutamente necessário, e o requerente receberá todas as informações relacionadas.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Medidas de segurança no tratamento de dados pessoais</h2>
            <p>
              Empregamos medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, extravio ou alteração desses dados.
            </p>
            <p>
              Entre as medidas de segurança adotadas por nós, destacamos as seguintes: Não armazenamos senhas, nem dados sensíveis, nem dados financeiros, nossos sistemas são operados por vias criptografadas, monitorados 24 horas contra acesso não autorizado, bancos de dados não possuem acesso externo.
            </p>
            <p>
              Ainda que adote tudo o que está ao seu alcance para evitar incidentes de segurança, é possível que ocorra algum problema motivado exclusivamente por um terceiro – como em caso de ataques de hackers ou crackers ou, ainda, em caso de culpa exclusiva do usuário, que ocorre, por exemplo, quando ele mesmo transfere seus dados a terceiro.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Reclamação a uma autoridade de controle</h2>
            <p>
              Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, os titulares de dados pessoais que se sentirem, de qualquer forma, lesados, podem apresentar reclamação à Autoridade Nacional de Proteção de Dados.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Alterações nesta política</h2>
            <p>A presente versão desta Política de Privacidade foi atualizada pela última vez em: 20/01/2021.</p>
            <p>
              Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adaptá-las às eventuais alterações feitas em nosso site, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes. Sempre que houver uma alteração, nossos usuários serão notificados acerca da mudança.
            </p>

            <h2 className="text-2xl font-bold text-[#002F5D] mt-8 mb-4">Como entrar em contato conosco</h2>
            <p>
              Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, entre em contato com nosso Encarregado de Proteção de Dados Pessoais, por algum dos canais mencionados abaixo:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4">
              <ul className="space-y-2">
                <li><strong>Nome:</strong> Valmir Jesus dos Santos</li>
                <li><strong>E-mail:</strong> valmir@simuladoronline.com / suporte@simuladoronline.com</li>
                <li><strong>Telefone/WhatsApp:</strong> (11) 3219-0904</li>
                <li><strong>Endereço:</strong> Rua Serra de Bragança, 1055 – CJ 203 — CEP: 03318-000 – São Paulo – SP</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
