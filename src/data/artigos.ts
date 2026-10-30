// Artigos do blog escritos pelo fluxo com revisão (conteudo/README.md).
// Cada artigo entra no ar sozinho na data de `date`; antes disso só aparece nas prévias da Vercel.
// Regras: conteudo/regras-editoriais.md · Fatos permitidos: conteudo/fatos.md · Checagem: npm run check:posts
//
// Formato: a linha `date` fica logo abaixo de `slug` (a publicação diária procura por ela).
import type { WPPost } from '../services/wpService';

// Quem assina os artigos (nome e cargo de uma pessoa da equipe).
const AUTOR = 'Equipe Simulador On-Line';

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=1200`;

export const ARTIGOS: WPPost[] = [
  {
    id: 'quanto-custa-multicalculo-por-corretor-estadual-nacional',
    slug: 'quanto-custa-multicalculo-por-corretor-estadual-nacional',
    date: '2026-11-03T06:00:00-03:00',
    title: 'Estadual ou Nacional: quanto custa o multicálculo por corretor quando a equipe cresce',
    excerpt: 'Veja como a mensalidade do multicálculo muda conforme a equipe cresce, quanto sai por corretor em cada faixa e quando o plano Nacional compensa o Estadual.',
    category: 'Ferramentas',
    author: AUTOR,
    readTime: '5 min de leitura',
    featuredImage: img('photo-1554224155-6726b3ff858f'),
    tags: ['Multicálculo', 'Preços', 'Gestão de Equipe'],
    content: `<p>Quanto maior a equipe, menor o custo do multicálculo por corretor. No Simulador On-Line, um acesso no plano Estadual custa R$ 30 por mês; com 10 acessos, a mensalidade vai para R$ 90, o que dá R$ 9 por corretor. No Nacional, o mesmo salto vai de R$ 50 para R$ 160, ou R$ 16 por corretor. A escolha entre os dois não depende do tamanho da equipe, e sim de onde estão os clientes que vocês atendem.</p>

<h2>Como a cobrança funciona?</h2>
<p>A mensalidade é definida pela quantidade de usuários, ou seja, de corretores com acesso próprio. Cada faixa tem um valor fixo por mês, e a partir do plano de 2 acessos há uma taxa única de implantação de R$ 50, cobrada uma vez só, para configurar a conta da corretora.</p>
<p>Na prática, isso significa que o custo não cresce na mesma proporção que a equipe. Dobrar o número de corretores não dobra a fatura, e é por isso que vale olhar o valor por pessoa, e não só o total.</p>

<h2>Quanto sai por corretor em cada faixa?</h2>
<p>A tabela abaixo usa os preços mensais em vigor e divide o total pela quantidade de usuários. É a conta que ajuda a decidir se compensa dar acesso a mais um corretor ou a um assistente comercial.</p>
<table>
<thead><tr><th>Usuários</th><th>Estadual (mês)</th><th>Por corretor</th><th>Nacional (mês)</th><th>Por corretor</th></tr></thead>
<tbody>
<tr><td>1</td><td>R$ 30</td><td>R$ 30</td><td>R$ 50</td><td>R$ 50</td></tr>
<tr><td>5</td><td>R$ 65</td><td>R$ 13</td><td>R$ 110</td><td>R$ 22</td></tr>
<tr><td>10</td><td>R$ 90</td><td>R$ 9</td><td>R$ 160</td><td>R$ 16</td></tr>
<tr><td>20</td><td>R$ 150</td><td>R$ 7,50</td><td>R$ 240</td><td>R$ 12</td></tr>
<tr><td>50</td><td>R$ 250</td><td>R$ 5</td><td>R$ 400</td><td>R$ 8</td></tr>
<tr><td>100</td><td>R$ 350</td><td>R$ 3,50</td><td>R$ 600</td><td>R$ 6</td></tr>
</tbody>
</table>
<p>As faixas intermediárias, de 2 a 9 usuários, estão na <a href="/contratar">página de planos</a>. O Estadual também tem a faixa de 200 usuários, por R$ 500, e o Nacional a de 70 usuários, por R$ 500.</p>

<h2>Estadual ou Nacional: o que decide a escolha?</h2>
<p>Os dois planos cotam as mesmas modalidades: Individual, Familiar, Adesão e PME, com valores por padrão de acomodação, categoria e faixa etária. A diferença está na cobertura geográfica das tabelas.</p>
<ul>
<li><strong>Estadual</strong> atende quem vende no próprio estado ou na própria cidade. É o caso da maioria das corretoras de bairro e das que trabalham com operadoras regionais.</li>
<li><strong>Nacional</strong> faz sentido quando a corretora recebe pedidos de clientes em outros estados, atende empresas com funcionários espalhados pelo país ou vende pela internet sem limitar a região.</li>
</ul>
<p>Uma forma simples de decidir: olhe as últimas cotações que a equipe fez fora do sistema, na planilha ou na mão. Se várias foram para clientes de outros estados, o Nacional se paga pelo tempo que deixa de ser gasto procurando tabela. Se quase todas são da sua região, o Estadual resolve. Vale ler também o artigo sobre <a href="/blog/vantagens-simulador-nacional-estadual">as diferenças entre o simulador Nacional e o Estadual</a>.</p>

<h2>Vale dar um acesso para cada corretor?</h2>
<p>Do ponto de vista do custo, sim: na faixa de 10 usuários, cada acesso sai por R$ 9 no Estadual. Mas o motivo principal é outro. Com um acesso por pessoa, cada cotação fica registrada no nome de quem fez, e o gestor consegue saber quem atendeu cada cliente.</p>
<p>Isso importa quando a corretora usa o CRM para <a href="/blog/crm-corretor-seguros">acompanhar os leads</a>: dá para ver a origem de cada lead, distribuir entre os corretores e cobrar retorno de quem ficou com a cotação parada.</p>

<h2>Como calcular o seu caso em 3 passos</h2>
<ol>
<li><strong>Conte quem cota de verdade.</strong> Inclua corretores e assistentes que montam proposta. Quem só atende o telefone e repassa o pedido pode ficar de fora.</li>
<li><strong>Defina a região.</strong> Se mais de um estado aparece com frequência nas suas cotações, considere o Nacional.</li>
<li><strong>Compare com o tempo gasto hoje.</strong> Some quanto tempo a equipe leva para montar um comparativo sem sistema. Esse é o custo real que a mensalidade substitui.</li>
</ol>
<p>Para testar antes de decidir, o Simulador tem <a href="/testar-gratis">teste grátis de 5 dias</a>, sem pedir cartão. Dá tempo de a equipe fazer as cotações da semana dentro do sistema e comparar com o jeito atual.</p>`,
  },
  {
    id: 'como-distribuir-leads-entre-corretores-da-equipe',
    slug: 'como-distribuir-leads-entre-corretores-da-equipe',
    date: '2026-11-05T06:00:00-03:00',
    title: 'Como distribuir os leads entre os corretores da equipe sem perder nenhum',
    excerpt: 'Rodízio, região, especialidade ou desempenho: compare as formas de distribuir leads entre corretores e monte uma regra que não deixa contato sem resposta.',
    category: 'Gestão',
    author: AUTOR,
    readTime: '6 min de leitura',
    featuredImage: img('photo-1552664730-d307ca884978'),
    tags: ['CRM', 'Leads', 'Gestão de Equipe'],
    content: `<p>A melhor forma de distribuir leads é a que a equipe entende e que ninguém consegue contornar: uma regra escrita, aplicada no momento em que o lead chega, com prazo para o primeiro contato e com redistribuição do que ficar parado. Sem isso, o lead bom vai para quem viu primeiro, e o lead difícil fica esquecido na caixa de entrada.</p>

<h2>Por que lead se perde dentro da própria corretora?</h2>
<p>Quase nunca é falta de interesse do cliente. Os motivos mais comuns são internos:</p>
<ul>
<li>o contato chega por vários canais (site, Instagram, WhatsApp, indicação) e cada um cai num lugar diferente;</li>
<li>ninguém sabe quem ficou responsável, então todos acham que outro respondeu;</li>
<li>o corretor responde, faz a cotação e não registra, e o lead some quando ele sai de férias ou deixa a equipe;</li>
<li>não existe um prazo combinado para o primeiro contato.</li>
</ul>
<p>Antes de escolher o método de distribuição, junte os canais num lugar só. Um <a href="/blog/crm-corretor-seguros">CRM para corretor</a> serve exatamente para isso: todo lead entra no mesmo funil, com a origem registrada.</p>

<h2>Quais são as formas de distribuir?</h2>
<table>
<thead><tr><th>Método</th><th>Como funciona</th><th>Funciona bem quando</th><th>Cuidado</th></tr></thead>
<tbody>
<tr><td>Rodízio</td><td>Cada lead novo vai para o próximo corretor da fila</td><td>A equipe tem nível parecido e os leads são parecidos</td><td>Corretor ausente trava a fila; tire-o do rodízio nas folgas</td></tr>
<tr><td>Por região</td><td>O lead vai para quem atende a cidade ou o bairro do cliente</td><td>A corretora trabalha com operadoras regionais ou faz visita presencial</td><td>Regiões com volumes muito diferentes geram carga desigual</td></tr>
<tr><td>Por produto</td><td>Empresa para um grupo, pessoa física para outro</td><td>Há corretores especializados em plano empresarial</td><td>Definir antes quem recebe o lead que não informou o tipo</td></tr>
<tr><td>Por desempenho</td><td>Quem converte mais recebe mais leads</td><td>A corretora mede a conversão de cada corretor</td><td>Corretor novo nunca recebe lead suficiente para aprender</td></tr>
</tbody>
</table>
<p>Muitas corretoras combinam dois métodos: por produto primeiro e, dentro de cada grupo, rodízio.</p>

<h2>Como montar a regra da sua equipe?</h2>
<ol>
<li><strong>Escreva a regra em uma frase.</strong> Por exemplo: "lead de empresa vai para o time de PME; lead de pessoa física entra no rodízio".</li>
<li><strong>Defina o prazo do primeiro contato.</strong> Combine com a equipe um prazo curto, dentro do mesmo dia útil, e deixe claro o que acontece se ele passar.</li>
<li><strong>Combine a redistribuição.</strong> Lead sem contato no prazo volta para a fila e vai para o próximo corretor. Sem essa regra, o prazo vira só uma sugestão.</li>
<li><strong>Registre o motivo de cada perda.</strong> "Achou caro", "já fechou com outro", "não atendeu". Depois de alguns meses, isso mostra onde a equipe precisa melhorar.</li>
<li><strong>Revise a regra no fim do mês.</strong> Veja se algum corretor ficou sobrecarregado e se algum canal manda leads que nunca fecham.</li>
</ol>

<h2>O que o gestor precisa acompanhar?</h2>
<p>Com a distribuição rodando, três perguntas mostram se ela funciona:</p>
<ul>
<li><strong>Quantos leads ficaram sem primeiro contato no prazo?</strong> Esse número deve ficar perto de zero.</li>
<li><strong>Qual canal traz os leads que mais fecham?</strong> É para onde vale levar mais esforço e investimento.</li>
<li><strong>Quanto tempo uma cotação leva até virar proposta?</strong> Prazo longo costuma indicar cliente comparando com outro corretor.</li>
</ul>
<p>Para ir além, o artigo sobre <a href="/blog/metricas-corretor-seguros">métricas que todo corretor deve acompanhar</a> mostra como montar esses números.</p>

<h2>Quais erros mais atrapalham a distribuição?</h2>
<ul>
<li><strong>Regra que só existe na cabeça do gestor.</strong> Se a equipe não sabe por que um lead foi para outro corretor, a discussão começa no primeiro lead bom. Deixe a regra escrita e à vista.</li>
<li><strong>Lead que chega pelo WhatsApp pessoal do corretor.</strong> Indicação que vai direto para o celular de alguém não entra na distribuição e some das métricas. Combine que todo contato, venha de onde vier, é registrado no mesmo lugar.</li>
<li><strong>Distribuir sem olhar a carga.</strong> Um corretor com muitas cotações abertas atende pior o próximo lead. Antes de mandar mais um, veja quantos ele ainda não respondeu.</li>
<li><strong>Não avisar o cliente quem vai atender.</strong> Uma mensagem curta dizendo o nome do corretor responsável evita que o cliente fale com duas pessoas da mesma corretora sem saber.</li>
</ul>
<p>Nenhum desses erros exige sistema caro para ser resolvido. A maior parte se resolve com combinado claro e com um lugar único para registrar cada contato.</p>

<h2>Onde o Simulador entra</h2>
<p>O Gestor de Clientes do Simulador On-Line permite cadastrar leads um a um ou importar em massa, distribuir entre os corretores, registrar a origem de cada lead, criar formulários personalizados e tirar relatórios. A cotação feita no multicálculo fica ligada ao cliente e pode ser enviada por WhatsApp ou e-mail. Veja os detalhes na <a href="/produtos">página de produtos</a>.</p>`,
  },
  {
    id: 'landing-page-marca-operadora-autorizacao-uso',
    slug: 'landing-page-marca-operadora-autorizacao-uso',
    date: '2026-11-10T06:00:00-03:00',
    title: 'Landing page com a marca da operadora: como pedir a autorização de uso',
    excerpt: 'Usar o nome e o logo da operadora numa landing page exige autorização. Veja a quem pedir, o que enviar e o que conferir antes de colocar a página no ar.',
    category: 'Marketing Digital',
    author: AUTOR,
    readTime: '5 min de leitura',
    featuredImage: img('photo-1586473219010-2ffc57b0d282'),
    tags: ['Landing Page', 'Marketing', 'Operadoras'],
    content: `<p>Para colocar o nome ou o logo de uma operadora numa landing page, o corretor precisa da autorização da própria operadora, de preferência por escrito. O pedido costuma ser feito ao contato comercial com quem a corretora já trabalha, enviando o modelo da página, o endereço onde ela vai ficar e os dados da corretora. Com a resposta em mãos, a página pode ir para o ar com tranquilidade, sem medo de ter de ser tirada às pressas.</p>

<h2>Por que a autorização é necessária?</h2>
<p>O nome e o logo pertencem à operadora. Quando aparecem numa página de captação, o visitante pode entender que está falando com a própria operadora, e não com uma corretora. É por isso que as operadoras costumam controlar quem usa a marca e de que forma.</p>
<p>Na prática, página sem autorização corre o risco de receber pedido de remoção, de perder campanha de anúncio no meio do caminho e de desgastar a relação comercial com a operadora. A autorização evita os três problemas.</p>

<h2>A quem pedir?</h2>
<p>O caminho mais curto é o contato comercial que a corretora já tem com a operadora: o gerente, o supervisor de vendas ou o executivo que acompanha a produção. Se a corretora vende por meio de uma plataforma de vendas ou administradora, pergunte a ela também, porque às vezes o material de divulgação passa por lá.</p>
<p>Peça a resposta por e-mail. Uma conversa por telefone resolve a dúvida, mas não serve de registro se alguém questionar a página depois.</p>

<h2>O que enviar no pedido?</h2>
<ol>
<li><strong>O modelo da página</strong>, com o texto e as imagens que vão aparecer. Pode ser um print ou o link de uma versão de teste.</li>
<li><strong>O endereço</strong> onde a página vai ficar (domínio e caminho).</li>
<li><strong>Os dados da corretora</strong>: razão social, CNPJ, registro SUSEP e o contato responsável.</li>
<li><strong>Onde a página será divulgada</strong>: anúncios no Google, no Instagram, no TikTok ou só em links próprios.</li>
<li><strong>O pedido do material oficial</strong>: logo em boa resolução e as regras de uso da marca, se a operadora tiver um manual.</li>
</ol>

<h2>O que conferir antes de publicar?</h2>
<table>
<thead><tr><th>Item</th><th>Por que conferir</th></tr></thead>
<tbody>
<tr><td>A página diz que é de uma corretora</td><td>O visitante precisa saber que está falando com um corretor, e não com a operadora</td></tr>
<tr><td>Nome e logo seguem o material oficial</td><td>Logo esticado, cor errada ou nome abreviado costumam ser motivo de pedido de ajuste</td></tr>
<tr><td>Dados da corretora no rodapé</td><td>Razão social, CNPJ e registro SUSEP dão segurança ao visitante</td></tr>
<tr><td>Nenhum preço ou promessa sem fonte</td><td>Tabela muda; preço desatualizado numa página com a marca da operadora vira reclamação</td></tr>
<tr><td>Autorização guardada</td><td>Salve o e-mail de resposta junto com os arquivos da campanha</td></tr>
</tbody>
</table>

<h3>E se a operadora não autorizar?</h3>
<p>Dá para fazer uma página sem a marca, falando da necessidade do cliente: "plano de saúde para família na Zona Leste", "plano para pequena empresa". Ela costuma funcionar bem em anúncio, porque o visitante procura a solução, não necessariamente a operadora. O artigo sobre <a href="/blog/landing-pages-alta-conversao">landing pages de alta conversão</a> mostra o que não pode faltar nesse tipo de página.</p>

<h2>Perguntas que costumam aparecer</h2>
<p><strong>A autorização de uma operadora vale para todas as páginas?</strong> Não necessariamente. Ela costuma ser dada para o modelo e o endereço que você enviou. Se mudar bastante o texto, o visual ou o domínio, vale avisar o contato e pedir uma nova confirmação.</p>
<p><strong>Posso usar só o nome da operadora, sem o logo?</strong> O nome também identifica a marca. Em anúncio e em página de captação, trate o nome com o mesmo cuidado do logo e peça a autorização da mesma forma.</p>
<p><strong>E nas redes sociais?</strong> O mesmo raciocínio vale para post e anúncio no Instagram, no Facebook e no TikTok: se a peça usa a marca da operadora para atrair cliente, inclua essa peça no pedido de autorização.</p>
<p><strong>A autorização tem validade?</strong> Depende da operadora. Guarde o e-mail com a data e, se a campanha durar muitos meses, confirme de tempos em tempos se o uso continua liberado.</p>

<h2>Onde o Simulador entra</h2>
<p>O Simulador On-Line tem landing pages prontas com o visual de várias operadoras e faz outras sob demanda, entregues em até 5 dias úteis, com o pixel do Meta, do Google Ads e do TikTok configurado. Nas páginas com marca de operadora, a autorização de uso é providenciada pelo corretor, e o roteiro acima ajuda a conseguir essa autorização antes de contratar. Veja os modelos na <a href="/produtos">página de produtos</a>.</p>`,
  },
  {
    id: 'cotacao-plano-saude-familia-faixa-etaria',
    slug: 'cotacao-plano-saude-familia-faixa-etaria',
    date: '2026-11-12T06:00:00-03:00',
    title: 'Família com idades diferentes: como montar a cotação por faixa etária sem erro',
    excerpt: 'Na cotação familiar, cada pessoa entra na faixa da própria idade. Veja o que pedir ao cliente e os erros que mudam o preço entre a cotação e a proposta.',
    category: 'Vendas',
    author: AUTOR,
    readTime: '5 min de leitura',
    featuredImage: img('photo-1521791136064-7986c2920216'),
    tags: ['Cotação', 'Plano Familiar', 'Faixa Etária'],
    content: `<p>Numa cotação familiar, o preço do plano é a soma do valor de cada pessoa, e cada uma entra na faixa etária da própria idade. Por isso, o dado mais importante que o corretor precisa pedir não é a idade aproximada, e sim a data de nascimento de cada integrante. É ela que evita a diferença de preço entre a cotação enviada e a proposta emitida pela operadora.</p>

<h2>Como o preço da família é calculado?</h2>
<p>Cada operadora organiza a tabela em faixas de idade, com um valor para cada faixa. A família não tem um preço único: o titular paga o valor da faixa dele, o cônjuge o da faixa dele, e cada filho o da sua. O total é a soma.</p>
<p>As faixas de idade dos planos seguem regras da ANS, que você pode consultar no <a href="https://www.gov.br/ans/pt-br">portal oficial da agência</a>. Para a venda, o que importa é a tabela da operadora que você está cotando, porque é nela que estão os valores de cada faixa.</p>

<h2>O que pedir ao cliente antes de cotar?</h2>
<ol>
<li><strong>Data de nascimento de cada pessoa</strong>, não a idade. Quem faz aniversário perto da data de início do plano pode mudar de faixa logo no começo do contrato.</li>
<li><strong>Quem será o titular.</strong> Em alguns produtos isso muda as regras de inclusão de dependentes.</li>
<li><strong>O parentesco de cada dependente</strong>: cônjuge, filho, enteado. A operadora pede documento que comprove o vínculo.</li>
<li><strong>A cidade onde a família usa o plano</strong>, para conferir a rede e a tabela certa.</li>
<li><strong>Se alguém já tem plano</strong> e há quanto tempo, porque isso pode mudar carências e condições.</li>
</ol>

<h2>Quais erros mudam o preço entre a cotação e a proposta?</h2>
<table>
<thead><tr><th>Erro</th><th>O que acontece</th><th>Como evitar</th></tr></thead>
<tbody>
<tr><td>Cotar pela idade informada de cabeça</td><td>Alguém cai numa faixa diferente e o valor sobe na proposta</td><td>Peça a data de nascimento de todos</td></tr>
<tr><td>Ignorar aniversário próximo</td><td>A pessoa muda de faixa logo depois de contratar e o cliente se sente enganado</td><td>Avise na cotação quem vai mudar de faixa em breve</td></tr>
<tr><td>Usar a tabela de outra cidade ou região</td><td>O valor e a rede não batem com a proposta</td><td>Confirme a cidade de uso antes de cotar</td></tr>
<tr><td>Esquecer um dependente</td><td>O total aumenta depois que a família já aprovou</td><td>Liste todos os integrantes antes de enviar o comparativo</td></tr>
</tbody>
</table>

<h2>Como apresentar o valor para a família?</h2>
<p>Mostre o total e, logo abaixo, o valor de cada pessoa. Isso evita a pergunta "por que ficou tão caro?", porque o cliente vê na hora quem pesa mais no preço, quase sempre os integrantes mais velhos.</p>
<p>Com o valor por pessoa à mostra, fica mais fácil discutir alternativas: outro padrão de acomodação, coparticipação ou outro produto da mesma operadora. Para explicar a coparticipação sem perder a venda, vale ler <a href="/blog/coparticipacao-em-planos-de-saude-como-explicar">este artigo</a>.</p>

<h2>E quando a família muda depois da contratação?</h2>
<p>A cotação certa no começo não encerra o assunto. Ao longo do contrato, a família muda, e cada mudança mexe no valor:</p>
<ul>
<li><strong>Nascimento de um filho.</strong> A inclusão do bebê tem prazo e documentação próprios em cada operadora. Avise o cliente sobre isso já na venda, para ele saber a quem procurar quando o bebê nascer.</li>
<li><strong>Casamento ou união estável.</strong> A inclusão do cônjuge depende de comprovar o vínculo. Explique quais documentos a operadora pede.</li>
<li><strong>Mudança de faixa etária.</strong> Quando alguém da família muda de faixa, o valor dessa pessoa muda. Combine com o cliente que você vai avisar antes, para a cobrança não ser uma surpresa.</li>
<li><strong>Filho que deixa de poder ser dependente.</strong> As regras de dependência variam por produto. Conferir isso na venda evita frustração anos depois.</li>
</ul>
<p>Registrar a data de nascimento de cada integrante no cadastro do cliente ajuda a antecipar essas conversas, e cada uma delas é uma chance de mostrar cuidado e manter o cliente na carteira.</p>

<h2>Onde o Simulador entra</h2>
<p>No multicálculo do Simulador On-Line, a cotação é feita por faixa etária, com os valores por padrão de acomodação e categoria, e o comparativo sai em PDF para enviar ao cliente. Com as datas de nascimento em mãos, o corretor monta a cotação da família inteira de uma vez. Conheça os planos na <a href="/produtos">página de produtos</a>.</p>`,
  },
  {
    id: 'comparar-rede-credenciada-operadoras-antes-de-indicar',
    slug: 'comparar-rede-credenciada-operadoras-antes-de-indicar',
    date: '2026-11-17T06:00:00-03:00',
    title: 'Rede credenciada: como comparar hospitais entre operadoras antes de indicar',
    excerpt: 'O cliente escolhe plano pelo hospital que usa. Veja como comparar a rede credenciada entre operadoras e produtos antes de indicar, sem surpresa depois.',
    category: 'Vendas',
    author: AUTOR,
    readTime: '5 min de leitura',
    featuredImage: img('photo-1576091160550-2173dba999ef'),
    tags: ['Rede Credenciada', 'Cotação', 'Operadoras'],
    content: `<p>Para comparar a rede credenciada entre operadoras, comece pelo que o cliente usa, e não pela lista da operadora: o hospital que ele quer, o pronto-socorro mais perto de casa e o laboratório de costume. Depois, confira esses lugares no produto exato que está sendo cotado, porque a rede muda de um produto para outro dentro da mesma operadora.</p>

<h2>Por que a rede decide a venda?</h2>
<p>Para muitos clientes, plano de saúde é o hospital que ele conhece. Duas propostas com preço parecido se resolvem pela rede: quem tem o hospital de referência da família costuma ganhar.</p>
<p>O contrário também vale. O cliente que contrata e descobre, na primeira emergência, que o hospital do bairro não atende o produto dele perde a confiança no corretor e costuma cancelar quando aparece a primeira oportunidade.</p>

<h2>O que perguntar ao cliente?</h2>
<ul>
<li>Qual hospital a família prefere e qual usou da última vez.</li>
<li>Onde fica o pronto-socorro mais perto de casa e do trabalho.</li>
<li>Se há criança na família: qual pronto-socorro infantil usam.</li>
<li>Se há gestação nos planos: qual maternidade.</li>
<li>Qual laboratório usam para exames de rotina.</li>
<li>Se algum integrante faz acompanhamento com médico específico.</li>
</ul>
<p>Anote as respostas no cadastro do cliente, e não só na conversa do WhatsApp. Elas servem para esta venda e para as próximas: quando chegar a época de reajuste ou de trocar de plano, você já sabe quais hospitais precisam continuar na rede, e a nova cotação começa pelo que importa para aquela família.</p>

<h2>Como comparar, passo a passo</h2>
<ol>
<li><strong>Monte a lista de referência</strong> com as respostas acima: hospital, pronto-socorro, maternidade e laboratório.</li>
<li><strong>Confira produto por produto.</strong> Na mesma operadora, o produto de entrada e o produto superior costumam ter redes diferentes.</li>
<li><strong>Confira o tipo de atendimento.</strong> Um hospital pode atender internação no produto e não ter pronto-socorro para ele, ou atender adulto e não criança.</li>
<li><strong>Confira a acomodação.</strong> Enfermaria e apartamento podem ter redes diferentes no mesmo produto.</li>
<li><strong>Registre o que conferiu.</strong> Anote no comparativo enviado ao cliente quais lugares da lista de referência estão em cada opção.</li>
<li><strong>Reconfirme perto da assinatura.</strong> A rede muda ao longo do tempo; se a cotação ficou parada, confira de novo antes de enviar a proposta.</li>
</ol>

<h2>Como mostrar a comparação para o cliente?</h2>
<table>
<thead><tr><th>Referência do cliente</th><th>Opção A</th><th>Opção B</th><th>Opção C</th></tr></thead>
<tbody>
<tr><td>Hospital preferido</td><td>Atende internação e pronto-socorro</td><td>Só internação</td><td>Não atende</td></tr>
<tr><td>Pronto-socorro infantil</td><td>Atende</td><td>Atende</td><td>Atende</td></tr>
<tr><td>Maternidade</td><td>Atende</td><td>Não atende</td><td>Atende</td></tr>
<tr><td>Laboratório de costume</td><td>Atende</td><td>Atende</td><td>Não atende</td></tr>
</tbody>
</table>
<p>A tabela acima é um modelo: troque pelas referências do seu cliente. Com ela ao lado do preço, a conversa sai de "qual custa menos" para "qual atende a minha família", que é onde o corretor faz diferença. O artigo sobre <a href="/blog/proposta-plano-de-saude-em-pdf-impacto-visual">proposta em PDF</a> mostra como deixar esse comparativo apresentável.</p>

<h2>Quais erros são mais comuns na conferência da rede?</h2>
<ul>
<li><strong>Conferir a operadora, e não o produto.</strong> O hospital pode estar na rede da operadora e não estar no produto que o cliente vai contratar.</li>
<li><strong>Confiar na lista antiga.</strong> Rede muda. A lista que valia na venda do mês passado pode não valer hoje.</li>
<li><strong>Não perguntar pela criança.</strong> Muitos hospitais atendem adulto e não têm pronto-socorro infantil. Em família com filho pequeno, essa pergunta decide a venda.</li>
<li><strong>Prometer o que não está no papel.</strong> Se o atendimento num hospital depende de condição específica, diga isso ao cliente e registre no comparativo.</li>
</ul>

<h3>E se o hospital sair da rede depois?</h3>
<p>Acontece, e o cliente costuma procurar o corretor primeiro. Oriente-o a conferir no canal oficial da operadora qual é a substituição indicada e quais são os direitos dele naquele caso. Responder rápido, mesmo sem ter culpa da mudança, mostra que o cliente tem alguém olhando por ele.</p>

<h2>Onde o Simulador entra</h2>
<p>No Simulador On-Line, as tabelas trazem a rede credenciada e as carências junto dos valores, no Estadual e no Nacional, e o comparativo pode ser enviado em PDF. Isso ajuda a fazer a conferência sem abrir o site de cada operadora. Veja como funciona na <a href="/produtos">página de produtos</a> ou faça o <a href="/testar-gratis">teste grátis</a>.</p>`,
  },
  {
    id: 'proposta-plano-saude-devolvida-o-que-conferir',
    slug: 'proposta-plano-saude-devolvida-o-que-conferir',
    date: '2026-11-19T06:00:00-03:00',
    title: 'Proposta devolvida pela operadora: o que conferir antes de enviar',
    excerpt: 'Proposta devolvida atrasa a vigência e desgasta o cliente. Use este checklist de documentos, declaração de saúde e dados antes de enviar para a operadora.',
    category: 'Vendas',
    author: AUTOR,
    readTime: '6 min de leitura',
    featuredImage: img('photo-1450101499163-c8848c66ca85'),
    tags: ['Proposta', 'Documentação', 'Checklist'],
    content: `<p>Muitas propostas voltam por motivos simples: documento faltando, assinatura em lugar errado, declaração de saúde incompleta ou dado que não bate entre a proposta e os documentos. Uma conferência rápida antes do envio evita dias de atraso na vigência e a ligação desconfortável para o cliente pedindo tudo de novo.</p>

<h2>Por que a devolução custa caro?</h2>
<p>Cada devolução empurra a data de início do plano. Para o cliente, isso significa ficar mais tempo sem cobertura ou pagando o plano antigo. Para o corretor, significa refazer trabalho e correr o risco de o cliente desistir ou ser procurado por outro corretor nesse intervalo.</p>
<p>Além disso, devoluções repetidas chamam a atenção da operadora para a produção da corretora. Proposta bem montada também é reputação.</p>
<p>E há o lado do cliente. A proposta é o primeiro contato dele com a operadora depois da venda. Se ela volta pedindo documento que ele já tinha mandado, a impressão é de desorganização, e quem leva a culpa é o corretor, não a operadora. Uma proposta que passa de primeira mostra ao cliente que ele escolheu bem quem cuida do plano dele.</p>

<h2>Checklist de documentos</h2>
<ul>
<li>Documento de identificação com foto e CPF do titular e de cada dependente.</li>
<li>Comprovante de residência atualizado, no padrão que a operadora aceita.</li>
<li>Comprovante de vínculo dos dependentes: certidão de casamento ou de união estável, certidão de nascimento dos filhos.</li>
<li>Se houver aproveitamento de carência: carta de permanência do plano anterior e os comprovantes de pagamento pedidos pela operadora.</li>
<li>No plano por adesão: comprovante de vínculo com a entidade (sindicato, conselho, associação).</li>
<li>No plano empresarial: cartão do CNPJ, contrato social ou documento equivalente e a comprovação do vínculo de quem vai entrar no plano.</li>
</ul>

<h2>Checklist da proposta</h2>
<ol>
<li><strong>Nomes iguais aos documentos</strong>, sem abreviação, para titular e dependentes.</li>
<li><strong>Datas de nascimento conferidas</strong> com o documento de cada pessoa, para não mudar a faixa de preço.</li>
<li><strong>Produto, acomodação e coparticipação</strong> iguais aos da cotação aprovada pelo cliente.</li>
<li><strong>Declaração de saúde completa</strong>, respondida e assinada por quem a operadora exige. Nenhuma pergunta em branco.</li>
<li><strong>Todas as assinaturas e vistos</strong> nos campos indicados, inclusive nas páginas do meio.</li>
<li><strong>Forma de pagamento e data de vencimento</strong> preenchidas e conferidas com o cliente.</li>
</ol>

<h3>A declaração de saúde merece um cuidado à parte</h3>
<p>É o documento em que o cliente informa doenças e condições que já tem. Duas orientações valem para qualquer operadora:</p>
<ul>
<li><strong>Quem responde é o cliente.</strong> O corretor explica as perguntas, mas não sugere resposta. Declaração preenchida pelo corretor é problema para os dois.</li>
<li><strong>Omitir não compensa.</strong> Condição omitida e descoberta depois pode levar a discussão de cobertura ou até ao cancelamento. Explique isso ao cliente com calma, antes de ele responder.</li>
</ul>
<p>Para entender como carência e tempo de plano anterior entram nessa conversa, veja o <a href="/blog/guia-portabilidade-carencias-ans-corretor">guia de portabilidade de carências</a>.</p>

<h2>Como organizar a conferência na rotina?</h2>
<table>
<thead><tr><th>Momento</th><th>O que fazer</th></tr></thead>
<tbody>
<tr><td>Ao fechar a cotação</td><td>Envie ao cliente a lista de documentos do produto escolhido</td></tr>
<tr><td>Ao receber os documentos</td><td>Confira nomes e datas com a cotação antes de preencher a proposta</td></tr>
<tr><td>Antes de enviar</td><td>Passe o checklist acima; se possível, peça a outro corretor para revisar</td></tr>
<tr><td>Se a proposta voltar</td><td>Anote o motivo da devolução para evitar o mesmo erro na próxima</td></tr>
</tbody>
</table>

<h2>O que fazer quando a proposta volta mesmo assim?</h2>
<ol>
<li><strong>Leia o motivo com atenção</strong> e confirme exatamente o que a operadora pede. Às vezes é um documento; às vezes, só uma assinatura.</li>
<li><strong>Avise o cliente no mesmo dia</strong>, dizendo o que falta e por quê. Cliente informado espera com paciência; cliente que descobre sozinho perde a confiança.</li>
<li><strong>Peça só o que falta.</strong> Não peça de novo documentos que já foram aceitos, para não passar a impressão de desorganização.</li>
<li><strong>Reenvie conferindo tudo de novo</strong>, não só o item que voltou. Uma segunda devolução pesa mais que a primeira.</li>
<li><strong>Registre o motivo</strong> numa lista da corretora. Depois de alguns meses, essa lista mostra quais erros se repetem e onde a equipe precisa de atenção.</li>
</ol>

<h2>Onde o Simulador entra</h2>
<p>A conferência fica mais fácil quando a cotação aprovada está registrada com produto, acomodação e valores de cada pessoa. No Simulador On-Line, o comparativo sai em PDF e fica ligado ao cliente no CRM, para comparar com a proposta antes de enviar. Veja os recursos na <a href="/produtos">página de produtos</a>.</p>`,
  },
  {
    id: 'follow-up-cotacao-plano-saude-leads-antigos',
    slug: 'follow-up-cotacao-plano-saude-leads-antigos',
    date: '2026-11-24T06:00:00-03:00',
    title: 'Cotação que esfriou: roteiro de retomada para leads antigos',
    excerpt: 'Quem pediu cotação e sumiu nem sempre desistiu. Veja como separar os leads antigos pelo motivo da parada e o que dizer a cada grupo para retomar a conversa.',
    category: 'Vendas',
    author: AUTOR,
    readTime: '6 min de leitura',
    featuredImage: img('photo-1600880292203-757bb62b4baf'),
    tags: ['Follow-up', 'Leads', 'WhatsApp'],
    content: `<p>Cotação parada não é venda perdida. Muita gente pede cotação, compara, adia a decisão e esquece. Para retomar, separe os leads antigos pelo motivo de terem parado e mande para cada grupo uma mensagem com um motivo novo para conversar, e não só um "e aí, pensou na proposta?".</p>

<h2>Por que o lead esfria?</h2>
<p>Os motivos se repetem em quase toda corretora:</p>
<ul>
<li><strong>Preço:</strong> achou caro e foi pensar.</li>
<li><strong>Momento:</strong> queria contratar "mais para frente", depois das férias, depois de mudar de emprego.</li>
<li><strong>Comparação:</strong> estava cotando com mais de um corretor e não respondeu nenhum.</li>
<li><strong>Silêncio:</strong> pediu a cotação e nunca mais respondeu, sem motivo conhecido.</li>
</ul>
<p>Se o motivo foi registrado na hora, a retomada é simples. Se não foi, comece a registrar agora: é o que vai deixar a próxima rodada de retomada muito mais fácil.</p>

<h2>Roteiro de retomada por grupo</h2>
<table>
<thead><tr><th>Grupo</th><th>Motivo novo para falar</th><th>Exemplo de mensagem</th></tr></thead>
<tbody>
<tr><td>Preço</td><td>Uma opção mais em conta que não estava na primeira cotação</td><td>"Oi, Ana! Lembrei da sua cotação: montei uma opção com coparticipação que deixa a mensalidade menor. Quer que eu envie?"</td></tr>
<tr><td>Momento</td><td>A data que o próprio cliente citou</td><td>"Oi, Carlos! Você comentou que ia ver o plano depois das férias. Quer que eu atualize a cotação com os valores de agora?"</td></tr>
<tr><td>Comparação</td><td>Ajuda para comparar, não pressão</td><td>"Oi, Paula! Se você ainda está comparando propostas, posso montar uma tabela lado a lado com a rede de cada uma."</td></tr>
<tr><td>Silêncio</td><td>Pergunta curta e fácil de responder</td><td>"Oi, Marcos! Você ainda procura plano de saúde ou já resolveu? Se já resolveu, me avisa que eu tiro você da minha lista."</td></tr>
</tbody>
</table>
<p>Os nomes acima são só exemplos de como escrever: troque pelo nome do seu cliente e pelo detalhe que ele contou na primeira conversa.</p>

<h2>Quando e quantas vezes tentar?</h2>
<ol>
<li><strong>Primeira retomada:</strong> uma mensagem com o motivo novo, como na tabela.</li>
<li><strong>Segunda tentativa:</strong> se não houver resposta, mais uma mensagem alguns dias depois, mais curta.</li>
<li><strong>Encerramento:</strong> sem resposta, registre como perdido e marque um lembrete para um momento natural, como a época de reajuste do plano atual do cliente.</li>
</ol>
<p>Insistir além disso costuma queimar o contato. Uma retomada bem feita no momento certo rende mais que várias mensagens seguidas.</p>
<p>Use o canal em que o cliente respondeu da primeira vez. Se a conversa começou pelo WhatsApp, retome pelo WhatsApp; se veio por e-mail, comece por lá. E mantenha o tom de quem está ajudando: mensagem curta, com o nome do cliente e uma informação útil. Mensagem que parece cobrança costuma ficar sem resposta. Se o cliente responder que já resolveu, agradeça, pergunte se pode manter o contato para a época de reajuste e registre a resposta.</p>

<h2>Quais momentos naturais servem de gatilho?</h2>
<ul>
<li>O mês de aniversário do plano atual do cliente, quando costuma vir o reajuste.</li>
<li>Uma mudança de faixa etária na família.</li>
<li>Uma tabela nova ou atualizada de uma operadora que estava na cotação. Os avisos de atualização ficam na página de <a href="/noticias">notícias do Simulador</a>.</li>
<li>Mudança de emprego, quando o cliente perde ou ganha plano empresarial.</li>
</ul>
<p>Depois que o cliente fecha, o trabalho continua. O artigo sobre <a href="/blog/gestao-pos-venda-corretagem-reduzir-cancelamentos">gestão de pós-venda</a> mostra como manter o contato e gerar indicações.</p>

<h2>O que registrar para não depender da memória?</h2>
<p>A retomada só funciona se as informações da primeira conversa estiverem anotadas. Para cada cotação, registre:</p>
<ul>
<li>o motivo da parada, mesmo que seja "não respondeu";</li>
<li>o detalhe pessoal que o cliente contou (férias, mudança de emprego, bebê a caminho);</li>
<li>as opções enviadas e o valor de cada uma;</li>
<li>a operadora e o mês de aniversário do plano atual, se ele já tiver um;</li>
<li>a data da última tentativa de contato.</li>
</ul>
<p>Com isso, qualquer corretor da equipe consegue retomar a conversa com contexto, mesmo que o atendimento tenha começado com outra pessoa.</p>

<h2>Onde o Simulador entra</h2>
<p>No Gestor de Clientes do Simulador On-Line, cada lead fica com a origem e as cotações feitas, e a cotação pode ser reenviada por WhatsApp ou e-mail. Com os relatórios, dá para separar quem parou em cada etapa e montar a lista de retomada. Veja os recursos na <a href="/produtos">página de produtos</a>.</p>`,
  },
  {
    id: 'mei-plano-saude-empresarial-o-que-corretor-confere',
    slug: 'mei-plano-saude-empresarial-o-que-corretor-confere',
    date: '2026-11-26T06:00:00-03:00',
    title: 'MEI pedindo plano empresarial: o que o corretor precisa conferir antes',
    excerpt: 'Plano empresarial para MEI pode sair mais barato, mas as regras mudam de operadora para operadora. Veja o que conferir antes de oferecer e quando não indicar.',
    category: 'Planos de Saúde',
    author: AUTOR,
    readTime: '6 min de leitura',
    featuredImage: img('photo-1556761175-5973dc0f32e7'),
    tags: ['MEI', 'PME', 'Planos Empresariais'],
    content: `<p>Antes de oferecer plano empresarial para um MEI, o corretor precisa conferir três coisas na operadora que vai cotar: se ela aceita MEI naquele produto, quais condições exige do CNPJ e quem pode entrar no plano. As regras mudam de uma operadora para outra e mudam com o tempo, por isso a conferência tem que ser feita a cada venda, e não de memória.</p>

<h2>Por que o MEI procura plano empresarial?</h2>
<p>Porque, para muitos perfis, o plano empresarial sai mais em conta que o plano para pessoa física, e há mais opções de operadoras e produtos. Para o cliente que tem uma atividade de verdade como MEI, é uma alternativa legítima e vale ser apresentada.</p>
<p>O problema aparece quando o CNPJ é aberto só para contratar o plano, sem atividade real. Nesse caso, a economia vem acompanhada de um risco que o cliente precisa conhecer antes de decidir.</p>

<h2>O que conferir na operadora?</h2>
<table>
<thead><tr><th>O que conferir</th><th>Por que importa</th></tr></thead>
<tbody>
<tr><td>Se o produto aceita MEI</td><td>Nem todo produto empresarial aceita esse tipo de empresa</td></tr>
<tr><td>Tempo mínimo de abertura do CNPJ</td><td>Algumas operadoras exigem um tempo de CNPJ ativo antes da contratação; o prazo varia</td></tr>
<tr><td>Situação cadastral do CNPJ</td><td>CNPJ inapto ou com pendência costuma barrar a proposta</td></tr>
<tr><td>Quem pode entrar no plano</td><td>Titular, sócio, funcionário e dependentes têm regras próprias em cada operadora</td></tr>
<tr><td>Número mínimo de pessoas</td><td>Alguns produtos exigem mais de uma pessoa no contrato</td></tr>
<tr><td>Documentos pedidos</td><td>Certificado do MEI, cartão do CNPJ e comprovação de vínculo de quem vai entrar</td></tr>
</tbody>
</table>
<p>Confirme essas regras no material da operadora ou com o contato comercial, e anote a fonte e a data. Regra de aceitação muda, e o que valia na última venda pode não valer na próxima.</p>

<h2>Quando não indicar o plano empresarial?</h2>
<ul>
<li>Quando o CNPJ seria aberto só para contratar o plano, sem atividade real.</li>
<li>Quando o cliente não consegue manter o CNPJ regular, com as obrigações em dia.</li>
<li>Quando a família depende do plano para um tratamento em andamento e não pode correr o risco de mudança no contrato.</li>
</ul>
<p>Nesses casos, explique as alternativas: o plano por adesão, se o cliente tiver vínculo com alguma entidade, ou o plano para pessoa física. O artigo sobre <a href="/blog/planos-saude-pme-vs-adesao-estrategias-corretores">PME e adesão</a> ajuda a comparar os caminhos.</p>

<h2>Como explicar a escolha ao cliente?</h2>
<ol>
<li><strong>Mostre as opções lado a lado</strong>: empresarial, adesão (se houver vínculo) e pessoa física, com o valor de cada uma.</li>
<li><strong>Explique a condição de cada opção</strong>: o empresarial depende do CNPJ regular; o de adesão depende do vínculo com a entidade.</li>
<li><strong>Deixe a decisão com o cliente</strong>, por escrito: registre no atendimento que as opções e as condições foram apresentadas.</li>
</ol>
<p>Esse cuidado protege o cliente e a corretora. Venda feita com informação completa não volta como reclamação.</p>

<h2>Perguntas que o cliente MEI costuma fazer</h2>
<p><strong>"Um conhecido abriu MEI só para o plano e deu certo. Por que comigo seria diferente?"</strong> Pode ter dado certo até agora, mas a regra é da operadora, e ela pode conferir a situação do CNPJ e a atividade a qualquer momento. Explique o risco sem alarde e deixe a decisão com o cliente.</p>
<p><strong>"Posso colocar minha família no plano do MEI?"</strong> Depende da operadora e do produto. Confira quem pode entrar como dependente antes de prometer.</p>
<p><strong>"E se eu fechar o MEI depois?"</strong> O plano empresarial está ligado ao CNPJ. Se a empresa deixar de existir ou ficar irregular, o contrato pode ser afetado. O cliente precisa saber disso antes de assinar.</p>
<p><strong>"Não sai mais em conta de qualquer jeito?"</strong> Em muitos casos sai, mas compare com as outras opções no mesmo comparativo. Às vezes a diferença é pequena e não compensa o risco.</p>

<h2>Onde o Simulador entra</h2>
<p>No multicálculo do Simulador On-Line, os planos PME, de adesão e para pessoa física estão no mesmo sistema, no Estadual e no Nacional. Isso permite montar o comparativo das três opções para o mesmo cliente e enviar em PDF. Veja os planos na <a href="/produtos">página de produtos</a> ou faça o <a href="/testar-gratis">teste grátis de 5 dias</a>.</p>`,
  },
];
