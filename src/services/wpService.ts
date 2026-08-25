/**
 * Mock Service for WordPress Headless / WooCommerce
 * Simulates API responses for the "Simulador On-Line" platform.
 */

export interface WPPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage: string;
  category: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  type: 'subscription' | 'one-time';
  description: string;
  features: string[];
  image: string;
}

export interface Template {
  id: number;
  name: string;
  platform: 'WordPress' | 'Joomla';
  demoUrl: string;
  image: string;
  description: string;
  features?: string[];
  tags?: string[];
}

const MOCK_BLOG_POSTS: WPPost[] = [
  {
    id: 1,
    title: "Como aumentar suas vendas de planos de saúde",
    slug: "como-aumentar-vendas-planos-saude",
    excerpt: "Descubra as melhores estratégias digitais para corretores de alta performance turbinarem sua captação de clientes.",
    content: "<h2>A Transformação Digital na Corretagem</h2><p>O mercado de saúde suplementar passou por uma revolução nos últimos anos. O corretor que ainda depende exclusivamente do boca a boca ou de panfletagem está ficando para trás. Hoje, o cliente pesquisa online, compara preços em segundos e exige respostas quase imediatas. Para se destacar e aumentar suas vendas de planos de saúde, é preciso adotar ferramentas e estratégias que coloquem você à frente da concorrência.</p><h3>1. Tenha uma presença online profissional (Sites e Landing Pages)</h3><p>O seu cartão de visitas agora é o seu site. Ter uma <strong>Landing Page otimizada</strong> para captura de leads (potenciais clientes) passa credibilidade e segurança. Certifique-se de que sua página carregue rápido, funcione perfeitamente no celular e tenha botões claros de contato (WhatsApp).</p><h3>2. Agilidade é tudo: Use um Sistema Multicálculo</h3><p>O cliente de hoje não quer esperar horas por uma cotação em PDF. Corretores que utilizam um <strong>Simulador On-line</strong> conseguem gerar comparativos precisos entre diversas operadoras em menos de um minuto. Essa agilidade impressiona o cliente e evita que ele busque outro profissional enquanto aguarda a sua resposta.</p><h3>3. Organize seus contatos com um CRM</h3><p>Você sabe quantos clientes ficaram de 'pensar' no mês passado? Sem um <strong>Gestor de Clientes (CRM)</strong>, você perde oportunidades de ouro. O follow-up (acompanhamento) é responsável por mais de 50% dos fechamentos. Use a tecnologia para lembrar você de retornar ligações e manter o histórico das negociações.</p><h3>4. Atendimento Consultivo</h3><p>A tecnologia atrai e organiza, mas é o seu conhecimento que fecha o negócio. Use o tempo que você economizou gerando cotações no sistema para realmente entender a necessidade da família ou da empresa do cliente. O corretor moderno não é um 'tirador de pedidos', é um consultor especializado.</p><blockquote><p>\"A tecnologia não substitui o corretor, mas o corretor que usa a tecnologia substituirá o que não usa.\"</p></blockquote><p>Comece a aplicar essas dicas hoje mesmo. Se você precisa de ajuda para digitalizar sua operação com sites profissionais, CRM e simuladores de preços, <strong>o Simulador On-line tem a solução completa para o seu negócio!</strong></p>",
    date: "2026-07-20T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/broker/800/600",
    category: "Dicas de Vendas",
    tags: ["Vendas", "Gestão", "Digital"]
  },
  {
    id: 2,
    title: "Vantagens do Simulador Nacional vs Estadual",
    slug: "vantagens-simulador-nacional-estadual",
    excerpt: "Qual a melhor opção para o seu modelo de negócio? Descubra as vantagens e decida como escalar as suas vendas de forma inteligente.",
    content: "<h2>Qual a melhor opção para o seu negócio?</h2><p>Na hora de digitalizar as vendas e utilizar uma plataforma multicálculo, uma dúvida muito comum entre corretores e corretoras de planos de saúde é: devo optar por um <strong>Simulador Estadual</strong> ou investir em um <strong>Simulador Nacional</strong>? A resposta depende do seu momento de negócio e de como você estrutura sua captação de clientes (leads).</p><h3>Simulador Estadual: Foco e Especialização</h3><p>O Simulador Estadual é desenhado para o corretor que atua forte regionalmente. Se as suas estratégias de marketing digital estão voltadas para uma cidade ou estado específico, essa é a ferramenta ideal.</p><ul><li><strong>Menor custo de investimento inicial:</strong> Ideal para quem está começando ou foca em um mercado local.</li><li><strong>Tabelas atualizadas regionalmente:</strong> Acesso rápido aos preços, carências e rede credenciada exata do seu estado.</li><li><strong>Especialização:</strong> Ajuda a consolidar sua autoridade como 'o especialista' em planos de saúde na sua região.</li></ul><h3>Simulador Nacional: Escalabilidade Sem Fronteiras</h3><p>Já o Simulador Nacional é a chave para quem deseja expandir a operação. Com o crescimento da venda 100% digital e assinaturas eletrônicas, não há motivos para se limitar à sua própria cidade.</p><ul><li><strong>Acesso total às operadoras do país:</strong> Calcule planos da SulAmérica, Bradesco, Amil e diversas operadoras regionais de qualquer estado.</li><li><strong>Aumento do volume de vendas:</strong> Ao gerar leads no Brasil todo, você aumenta absurdamente o seu funil de vendas.</li><li><strong>Gestão de equipes remotas:</strong> Se você possui corretores parceiros em outras regiões, o Simulador Nacional através do nosso CRM permite centralizar a gestão de todos de maneira unificada.</li></ul><h3>Como escolher?</h3><p>Se você atende localmente e o boca-a-boca ou campanhas locais são seu forte, comece com o <strong>Estadual</strong>. Porém, se o seu objetivo é montar uma operação digital robusta, comprar leads de abrangência nacional ou gerenciar uma grande equipe, o <strong>Simulador Nacional</strong> é um investimento indispensável que vai acelerar os seus resultados. Fale com nossos consultores e descubra a solução ideal para você!</p>",
    date: "2026-07-15T14:30:00Z",
    featuredImage: "https://picsum.photos/seed/map/800/600",
    category: "Mercado de Saúde",
    tags: ["Estratégia", "Multicálculo", "Nacional"]
  },
  {
    id: 3,
    title: "Tudo o que você precisa saber sobre Multicálculo de Plano de Saúde",
    slug: "tudo-sobre-multicalculo-plano-de-saude",
    excerpt: "Entenda o que é um sistema de multicálculo de plano de saúde, como ele funciona e por que é a ferramenta nº 1 para acelerar as vendas da sua corretora.",
    content: "<h2>O Fim das Cotações Manuais</h2><p>Tempo é dinheiro, especialmente no mercado de corretagem. Passar horas cruzando planilhas, PDFs e tabelas de preços de diferentes operadoras não é apenas cansativo, mas aumenta a chance de erros que podem custar o fechamento de um contrato. É exatamente para resolver esse problema que o <strong>multicálculo de plano de saúde</strong> se tornou a ferramenta indispensável para corretores de alta performance.</p><h3>O que é um Multicálculo de Plano de Saúde?</h3><p>Trata-se de um sistema inteligente e integrado que permite comparar os valores, carências e coberturas de diversas operadoras e seguradoras (como SulAmérica, Amil, Bradesco Saúde, entre outras) em um único ambiente. Basta inserir os dados do cliente (idade, CNPJ ou CPF, região) e o sistema faz o cruzamento instantâneo de dados.</p><h3>Vantagens para o Corretor</h3><ul><li><strong>Velocidade no Atendimento:</strong> O cliente moderno exige respostas rápidas. Um sistema de cotação de plano de saúde reduz o tempo de resposta de horas para poucos minutos.</li><li><strong>Profissionalismo:</strong> Ao invés de mandar mensagens confusas de texto no WhatsApp, o sistema gera propostas em PDF personalizadas com o seu logotipo e contatos.</li><li><strong>Tabelas sempre atualizadas:</strong> Esqueça o risco de passar um valor defasado para o cliente. As plataformas SaaS mantêm as tabelas de preços e regras de aceitação atualizadas em tempo real.</li></ul><h3>Como o Simulador On-Line ajuda?</h3><p>Oferecemos a plataforma mais completa do mercado. Com nosso <strong>multicálculo de plano de saúde</strong>, você pode operar tanto com planos estaduais quanto nacionais, além de integrar o resultado das cotações diretamente com nosso CRM. Comece a transformar a sua operação hoje mesmo e feche mais negócios com menos esforço!</p>",
    date: "2026-07-30T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/multicalculo/800/600",
    category: "Ferramentas",
    tags: ["Cotação", "Agilidade", "Ferramenta"]
  },
  {
    id: 4,
    title: "Como criar um Site para Corretor de Plano de Saúde que converte",
    slug: "site-para-corretor-de-plano-de-saude",
    excerpt: "Descubra os elementos obrigatórios que um site para corretor de plano de saúde precisa ter para captar leads e vender no piloto automático.",
    content: "<h2>Sua Vitrine na Internet</h2><p>Muitos profissionais acham que ter um perfil no Instagram é suficiente para atrair clientes. Porém, quando o assunto é saúde e proteção familiar, a confiança é o fator decisivo. Ter um <strong>site para corretor de plano de saúde</strong> profissional transmite autoridade, credibilidade e, o mais importante, funciona como um gerador de clientes (leads) 24 horas por dia.</p><h3>O que não pode faltar no seu site?</h3><p>Criar um site não é apenas colocar seus dados de contato na internet. Uma verdadeira máquina de vendas precisa ser estratégica. Aqui estão os 3 elementos fundamentais:</p><ul><li><strong>Foco em Captura (Landing Pages):</strong> Seu site precisa de formulários estratégicos para que o visitante deixe o nome, telefone e o tipo de plano que procura. Esses dados devem cair direto no seu funil de vendas.</li><li><strong>Simulador Integrado:</strong> Permitir que o cliente faça uma pré-simulação online aumenta drasticamente o tempo que ele passa no seu site e o engajamento dele com a sua marca.</li><li><strong>Velocidade e Design Responsivo:</strong> Mais de 80% dos acessos hoje vêm pelo celular. Se o seu site for lento ou difícil de ler no smartphone, o cliente vai procurar o concorrente em 3 segundos.</li></ul><h3>A Solução do Simulador On-line</h3><p>Sabemos que desenvolver e manter um site custa caro e dá trabalho. Por isso, oferecemos a criação de <strong>site para corretor de plano de saúde</strong> já totalmente integrado com nossas ferramentas de multicálculo e CRM. Você não precisa se preocupar com programação, hospedagem ou atualizações. Nós cuidamos da tecnologia para que você foque apenas em vender. Conheça nossos modelos de landing pages prontas!</p>",
    date: "2026-08-03T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/sitecorretor/800/600",
    category: "Marketing Digital",
    tags: ["SEO", "Sites", "Leads"]
  }  ,{
    id: 5,
    title: "Sistema de cotação de plano de saúde: A evolução do corretor",
    slug: "sistema-cotacao-plano-saude",
    excerpt: "Veja como um sistema de cotação de plano de saúde profissional pode economizar horas do seu dia e aumentar sua conversão.",
    content: "<h2>O Tempo é o Maior Ativo do Corretor</h2><p>Trabalhar com seguros e planos de saúde exige agilidade. Um <strong>sistema de cotação de plano de saúde</strong> elimina a necessidade de fazer buscas manuais em diversas tabelas em PDF ou sites de operadoras. Com apenas alguns cliques, você tem acesso a todos os planos disponíveis para o perfil do cliente, já formatados em uma proposta bonita e profissional.</p><h3>Vantagens Imediatas</h3><ul><li><strong>Redução de Erros:</strong> O sistema calcula com precisão, evitando que você passe um valor errado para o cliente.</li><li><strong>Mais Tempo para Vender:</strong> O tempo que você gastaria montando uma planilha, você usa para fazer follow-up ou captar novos leads.</li><li><strong>Profissionalismo:</strong> O cliente percebe o valor de uma proposta gerada por sistema, com logotipo da sua corretora e formatação impecável.</li></ul><p>Investir na digitalização do seu processo de cotação não é um luxo, é uma necessidade para quem deseja crescer no mercado.</p>",
    date: "2026-08-06T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/cotacao/800/600",
    category: "Ferramentas",
    tags: ["Cotação", "Vendas", "Tecnologia"]
  },
  {
    id: 6,
    title: "Simulador de planos de saúde para corretores: Como escolher?",
    slug: "simulador-planos-saude-corretores",
    excerpt: "Um bom simulador de planos de saúde para corretores faz toda a diferença. Entenda o que avaliar antes de contratar um.",
    content: "<h2>A Escolha Certa Faz a Diferença</h2><p>Nem todo <strong>simulador de planos de saúde para corretores</strong> é igual. Alguns oferecem apenas o básico, enquanto outros são verdadeiras plataformas de gestão. Ao buscar uma ferramenta para sua corretora, preste atenção nestes detalhes cruciais:</p><h3>O que avaliar?</h3><ul><li><strong>Atualização de Tabelas:</strong> As operadoras mudam regras e preços constantemente. O simulador precisa garantir 100% de precisão.</li><li><strong>Integração com CRM:</strong> Um simulador isolado ajuda, mas um simulador integrado ao seu Gestor de Clientes (CRM) transforma a sua operação.</li><li><strong>Visual das Propostas:</strong> A proposta que o cliente recebe deve ser limpa, clara e fácil de ler no celular.</li></ul><p>Nossa plataforma oferece a solução definitiva, pensada por corretores e para corretores, reunindo todas essas características em um único lugar.</p>",
    date: "2026-08-09T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/simulador/800/600",
    category: "Tecnologia",
    tags: ["Simulador", "Corretores", "Software"]
  },
  {
    id: 7,
    title: "Multicálculo saúde e odonto: Venda cruzada (Cross-selling)",
    slug: "multicalculo-saude-odonto",
    excerpt: "Use o multicálculo saúde e odonto para oferecer combos aos seus clientes e dobrar sua comissão em cada fechamento.",
    content: "<h2>O Poder do Cross-Selling (Venda Cruzada)</h2><p>Você sabia que é muito mais fácil vender um plano odontológico para quem já está comprando um plano de saúde do que para um novo cliente? Utilizar um <strong>multicálculo saúde e odonto</strong> facilita enormemente essa estratégia.</p><h3>Vantagens do Combo</h3><ul><li><strong>Aumento do Ticket Médio:</strong> Você ganha mais sem precisar prospectar um novo cliente.</li><li><strong>Fidelização:</strong> O cliente concentra as necessidades da família na sua corretora.</li><li><strong>Praticidade:</strong> Com o nosso sistema, você gera a cotação de saúde e já inclui as opções de odonto na mesma proposta.</li></ul><p>Não deixe dinheiro na mesa. Sempre ofereça o plano odontológico como um 'upgrade' natural do plano de saúde.</p>",
    date: "2026-08-12T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/odonto/800/600",
    category: "Estratégia",
    tags: ["Multicálculo", "Odonto", "CrossSelling"]
  },
  {
    id: 8,
    title: "CRM para corretor de seguros: Não perca mais nenhuma venda",
    slug: "crm-corretor-seguros",
    excerpt: "Descubra como um CRM para corretor de seguros organiza seus contatos, agenda retornos e aumenta sua taxa de fechamento.",
    content: "<h2>O Fim da Agenda de Papel</h2><p>Você lembra para quem prometeu ligar hoje às 14h? E sobre o que era o assunto? Se você depende da memória ou de anotações no caderno, você está perdendo vendas. O <strong>CRM para corretor de seguros</strong> é o cérebro digital da sua operação.</p><h3>Por que você precisa de um CRM?</h3><ul><li><strong>Histórico Completo:</strong> Saiba exatamente o que foi conversado na última ligação, quais cotações foram enviadas e quais as objeções do cliente.</li><li><strong>Follow-up (Acompanhamento) Automático:</strong> O sistema te lembra quem você precisa contatar hoje.</li><li><strong>Funil de Vendas:</strong> Tenha uma visão clara de quantos leads estão em negociação, quantos estão aguardando proposta e quantos fecharam no mês.</li></ul><p>Corretores que implementam um CRM profissional conseguem aumentar suas vendas em até 40% apenas organizando o acompanhamento dos clientes que antes seriam esquecidos.</p>",
    date: "2026-08-15T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/crm/800/600",
    category: "Marketing Digital",
    tags: ["CRM", "Leads", "Vendas"]
  },
  {
    id: 9,
    title: "Site para corretor de plano de saúde: O vendedor 24 horas",
    slug: "site-vendedor-24-horas",
    excerpt: "Como transformar o seu site para corretor de plano de saúde em uma verdadeira máquina de captação de clientes na internet.",
    content: "<h2>Sua Presença Digital</h2><p>Ter um <strong>site para corretor de plano de saúde</strong> deixou de ser um luxo para se tornar uma ferramenta básica de trabalho. Quando o cliente pesquisa no Google 'plano de saúde para minha empresa', ele precisa encontrar a sua página.</p><h3>Elementos que Convertem</h3><ul><li><strong>Formulários Curtos:</strong> Peça apenas o essencial (Nome, WhatsApp, E-mail e Tipo de Plano) para não espantar o visitante.</li><li><strong>Botão de WhatsApp:</strong> O ícone do WhatsApp no canto da tela é obrigatório para um atendimento ágil.</li><li><strong>Integração:</strong> O site ideal já vem integrado com o seu simulador, permitindo que o cliente faça simulações parciais que caem direto no seu CRM como leads quentes.</li></ul><p>O Simulador On-line oferece templates profissionais já prontos, otimizados para captura e com alto nível de segurança, para você começar a captar na internet imediatamente.</p>",
    date: "2026-08-18T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/website/800/600",
    category: "Marketing Digital",
    tags: ["Site", "Captação", "Google"]
  },
  {
    id: 10,
    title: "A importância do atendimento ágil na corretagem",
    slug: "importancia-atendimento-agil-corretagem",
    excerpt: "O cliente digital não espera. Aprenda técnicas e ferramentas para acelerar o seu tempo de resposta e garantir o fechamento.",
    content: "<h2>O Novo Padrão de Consumo</h2><p>Se você demora 3 horas para enviar uma cotação, seu concorrente já enviou, explicou e possivelmente fechou o contrato. O uso de um <strong>sistema de cotação de plano de saúde</strong> e de automações de WhatsApp são indispensáveis.</p><h3>Dicas de Agilidade</h3><ul><li><strong>Respostas Rápidas no WhatsApp:</strong> Tenha mensagens pré-configuradas para o primeiro contato.</li><li><strong>Uso de Ferramentas:</strong> Ferramentas como o <strong>multicálculo saúde e odonto</strong> cortam o tempo de produção da proposta.</li></ul><p>Seja rápido, seja preciso e mostre que você domina a tecnologia a favor do seu cliente.</p>",
    date: "2026-08-21T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/speed/800/600",
    category: "Dicas de Vendas",
    tags: ["Atendimento", "Velocidade", "Vendas"]
  },
  {
    id: 11,
    title: "Métricas que todo corretor de seguros deve acompanhar",
    slug: "metricas-corretor-seguros",
    excerpt: "Você sabe qual a sua taxa de conversão? O custo por lead? Aprenda a olhar para os números e gerenciar sua corretora como um negócio.",
    content: "<h2>Gestão Baseada em Dados</h2><p>Muitos corretores vendem por intuição. Mas para crescer, é preciso medir. Usando um <strong>CRM para corretor de seguros</strong>, você passa a ter acesso a dados valiosos.</p><h3>Principais Métricas</h3><ul><li><strong>Custo de Aquisição de Cliente (CAC):</strong> Quanto você gasta em anúncios para fechar 1 contrato?</li><li><strong>Taxa de Conversão:</strong> De cada 10 contatos, quantos viram vendas?</li></ul><p>Acompanhar esses números mensalmente ajudará você a investir seu dinheiro e tempo de forma mais inteligente.</p>",
    date: "2026-08-24T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/metrics/800/600",
    category: "Gestão",
    tags: ["Métricas", "Gestão", "Resultados"]
  },
  {
    id: 12,
    title: "Como criar Landing Pages de alta conversão",
    slug: "landing-pages-alta-conversao",
    excerpt: "Sua campanha de marketing precisa de uma Landing Page focada. Veja como criar páginas que transformam cliques em orçamentos reais.",
    content: "<h2>O Destino Perfeito para os seus Anúncios</h2><p>Quando você faz um anúncio no Facebook ou no Google, você não deve direcionar o cliente para a página inicial do seu <strong>site para corretor de plano de saúde</strong>. O ideal é enviá-lo para uma Landing Page (página de captura) específica do plano anunciado.</p><h3>Estrutura Vencedora</h3><ul><li><strong>Título Promessa:</strong> Claro e direto.</li><li><strong>Benefícios e Prova Social:</strong> Depoimentos de clientes satisfeitos.</li><li><strong>Call to Action (Chamada para Ação):</strong> Botões contrastantes e formulários simples.</li></ul><p>O Simulador On-line disponibiliza modelos testados de Landing Pages para seus assinantes. Aproveite!</p>",
    date: "2026-08-27T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/landingpage/800/600",
    category: "Marketing Digital",
    tags: ["LandingPage", "Conversão", "Anúncios"]
  },
  {
    id: 13,
    title: "O futuro da corretagem de planos de saúde",
    slug: "futuro-corretagem-planos-saude",
    excerpt: "A Inteligência Artificial e a automação estão mudando a profissão. O que esperar dos próximos anos e como se preparar?",
    content: "<h2>Tecnologia como Aliada, não como Ameaça</h2><p>A automação já é realidade. O <strong>simulador de planos de saúde para corretores</strong> evoluiu de simples tabelas para sistemas inteligentes que recomendam o melhor plano baseado no perfil de uso do cliente.</p><p>O corretor do futuro será muito mais um analista de riscos e consultor do que um 'tirador de pedidos'. Use o tempo ganho com ferramentas para se especializar em produtos de alta complexidade e gestão de grandes contas empresariais (PME e Adesão).</p>",
    date: "2026-08-30T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/future/800/600",
    category: "Mercado de Saúde",
    tags: ["Futuro", "IA", "Tendências"]
  },
  {
    id: 14,
    title: "Hapvida confirma reajuste ou cancelamento de 947 mil contratos",
    slug: "hapvida-confirma-reajuste-cancelamento-947-mil-contratos",
    excerpt: "Em comunicado enviado ao mercado, operadora confirma revisão de 11% da sua carteira de saúde, enquanto aguarda notificação da ANS sobre medida cautelar.",
    content: "<h2>Revisão da Carteira de Planos de Saúde</h2><p>A <strong>Hapvida</strong> divulgou um comunicado oficial ao mercado no qual confirma a revisão de contratos — que inclui reajustes ou cancelamentos — de <strong>947 mil beneficiários</strong>. O volume representa cerca de 11% de toda a carteira de saúde da operadora no país.</p><p>Contudo, no mesmo comunicado, a empresa afirmou que ainda não foi oficialmente comunicada sobre a medida cautelar anunciada pela <strong>Agência Nacional de Saúde Suplementar (ANS)</strong> para suspender as alterações e reajustes dos planos de saúde.</p><h3>Revisão Contrato a Contrato</h3><p>De acordo com a nota emitida pela Hapvida, a 'revisão comercial dos contratos com rentabilidade inadequada ou histórico de inadimplência é atividade ordinária da operação'. O procedimento será realizado contrato a contrato, na data de aniversário de cada um deles, ao longo dos próximos 12 meses.</p><p>A operadora ressaltou que nesses casos 'propõe as condições necessárias ao reequilíbrio do contrato, mas a decisão de aceitá-las é do cliente', reiterando que atua em conformidade com as regras do mercado.</p><h3>Contexto Financeiro</h3><p>A medida ocorre em um momento de ajuste para a operadora. No segundo trimestre deste ano, a Hapvida reportou lucro líquido ajustado de R$ 12,5 milhões, o que representou uma forte queda em relação ao mesmo período do ano anterior, levando a diretoria a adotar medidas de readequação operacional.</p><hr /><p className=\"text-xs text-gray-500 italic mt-6\"><strong>Fonte Original:</strong> Notícia extraída do portal <a href=\"https://www.metropoles.com/brasil/economia-br/hapvida-confirma-reajuste-ou-cancelamento-de-947-mil-contratos\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-brand-primary font-bold hover:underline\">Metrópoles</a> (Por Carlos Rydlewski).</p>",
    date: "2026-08-25T09:00:00Z",
    featuredImage: "https://images.metroimg.com/2026/01/valentina-moreira-33.jpg",
    category: "Notícias do Mercado",
    tags: ["Hapvida", "ANS", "Planos de Saúde", "Notícias"]
  }
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: 101,
    name: "Simulador Estadual",
    slug: "simulador-estadual",
    price: "R$ 49,90/mês",
    type: 'subscription',
    description: "Ideal para corretores focados em uma única região com tabelas completas.",
    features: ["Tabelas de 1 Estado", "Sem limite de cálculos", "CRM Integrado", "Relatórios de Vendas"],
    image: "https://picsum.photos/seed/setup/300/200"
  },
  {
    id: 102,
    name: "Simulador Nacional",
    slug: "simulador-nacional",
    price: "R$ 89,90/mês",
    type: 'subscription',
    description: "Abrangência total para corretores que atuam em todo o Brasil.",
    features: ["Todos os Estados", "Rede Credenciada Completa", "CRM Premium", "Suporte VIP"],
    image: "https://picsum.photos/seed/tech/300/200"
  }
];

const MOCK_TEMPLATES: Template[] = [
  {
    id: 1,
    name: "Site Premium Modelo 01",
    platform: "WordPress",
    demoUrl: "https://wp-modelo01.simulador.app.br/",
    image: "/templates/modelo01-hr.jpg",
    description: "Saúde + Odonto",
    features: [
      "Ativação R$ 300,00 + manutenção R$ 70,00/mês",
      "Responsivo com Chat WhatsApp e Blog(opcional)",
      "01 Licença Regional Simulador On-Line",
      "Hospedagem inclusa",
      "03 contas de E-mail de 10GB/cada",
      "Certificado de Segurança (SSL)"
    ]
  },
  {
    id: 2,
    name: "Site Premium Modelo 02",
    platform: "WordPress",
    demoUrl: "https://sitepremium-modelo02.assistenciamedica.emp.br/",
    image: "/templates/modelo02-hr.jpg",
    description: "Saúde + Odonto",
    features: [
      "Ativação R$ 300,00 + manutenção R$ 70,00/mês",
      "Responsivo com Chat WhatsApp e Blog(opcional)",
      "01 Licença Regional Simulador On-Line",
      "Hospedagem inclusa",
      "03 contas de E-mail de 10GB/cada",
      "Certificado de Segurança (SSL)"
    ]
  },
  {
    id: 4,
    name: "Site Premium Modelo 04",
    platform: "WordPress",
    demoUrl: "https://sitepremium-modelo04.assistenciamedica.emp.br/",
    image: "/templates/modelo04-hr.jpg",
    description: "Saúde + Odonto + Seguros",
    features: [
      "Ativação R$ 300,00 + manutenção R$ 70,00/mês",
      "Responsivo com Chat WhatsApp e Blog(opcional)",
      "01 Licença Regional Simulador On-Line",
      "Hospedagem inclusa",
      "03 contas de E-mail de 10GB/cada",
      "Certificado de Segurança (SSL)"
    ]
  }
];

export interface Partner {
  id: number;
  name: string;
  category: string;
  description: string;
  services: string[];
  contactName: string;
  phone: string;
  whatsapp: string;
  websiteUrl: string;
  badge?: string;
  image?: string;
}

const MOCK_PARTNERS: Partner[] = [
  {
    id: 1,
    name: "Completta Soluções em Informática",
    category: "TI & Suprimentos para Impressoras",
    description: "Especialista no fornecimento de suprimentos de informática e manutenção especializada de impressoras para empresas e corretoras.",
    services: [
      "Manutenção Corretiva e Preventiva para Impressoras de todas as Marcas",
      "Fornecimento de Suprimentos (Tintas, Cartuchos e Toners)",
      "Atendimento Especializado para Empresas e Corretoras",
      "Suporte Técnico com Garantia de Qualidade"
    ],
    contactName: "Waldemir",
    phone: "(11) 99263-2502",
    whatsapp: "5511992632502",
    websiteUrl: "https://www.suprimentosparaimpressoras.net.br/",
    badge: "Parceiro Recomendado",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop"
  }
];

export interface CompactTableUpdate {
  id: number;
  badge: 'ATUALIZ.' | 'REAJUSTE' | 'NOVO' | 'SUSPENSO';
  text: string; // ex: "HSMED SAÚDE - RJ: Atualização de rede credenciada disponível (Individual, Familiar, PME e Adesão)"
  date: string; // ex: "17/08/2026"
  monthKey: string; // "agosto" | "julho" | "junho" | "maio" | "abril" | "marco" | "fevereiro" | "janeiro"
  monthLabel: string;
}

const MOCK_COMPACT_UPDATES: CompactTableUpdate[] = [
  // AGOSTO 2026 (Novas inclusões comerciais)
  { id: 200, badge: 'ATUALIZ.', text: 'ÔNIX SAÚDE (GRUPO CONTÉM) - RJ: Atualização de valores disponível no projeto Adesão', date: '24/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 201, badge: 'ATUALIZ.', text: 'OPLAN (GRUPO CONTÉM) - RJ: Atualização de valores disponível no projeto Adesão', date: '24/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 202, badge: 'ATUALIZ.', text: 'MEDSÊNIOR (SUPERMED) - RJ: Atualizações disponíveis no projeto Adesão', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 203, badge: 'NOVO', text: 'UNIMED NOVA IGUAÇU (CORPe SAÚDE) - RJ: Novo portfólio disponível no projeto PME ADMINISTRADO', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 204, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME - FLAMENGO (SOLUTIONS) - RJ: Projeto Adesão atualizado e disponível', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 205, badge: 'ATUALIZ.', text: 'HSMED (CORPe SAÚDE) - RJ: Atualização das regras de comercialização do projeto Adesão disponível', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 206, badge: 'ATUALIZ.', text: 'BLUE MED - SP: Tabelas PF e PME atualizadas e disponíveis', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 207, badge: 'NOVO', text: 'ÚNICA SAÚDE - SP: Novos hospitais credenciados (ZONA SUL - Hospital Dom Alvarenga / ZONA LESTE - Hospital Independência)', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 208, badge: 'REAJUSTE', text: 'SULAMÉRICA SAÚDE (QUALICORP) - SP / RJ: Reajuste de valores disponível no projeto Adesão', date: '20/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 209, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME (CORPe SAÚDE) - SP / RJ: Atualizações disponíveis no projeto Adesão', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 210, badge: 'ATUALIZ.', text: 'UNIMED RECIFE - PE: Atualização de valores disponível no PME (1 até 99 vidas)', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 211, badge: 'ATUALIZ.', text: 'KLINI SAÚDE - RJ: Atualização de valores disponível na tabela PME (1 vida)', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 212, badge: 'ATUALIZ.', text: 'SÃO LUCAS (CORPe SAÚDE) - MG: Atualização do quadro de Coparticipação disponível no projeto Adesão', date: '18/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 213, badge: 'NOVO', text: 'AMIL SAÚDE - PME: Plano (Amil Bronze SP Mais) disponível na acomodação Apartamento (Quarto privativo)', date: '17/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },

  // AGOSTO 2026 (Anteriores)
  { id: 1, badge: 'ATUALIZ.', text: 'HSMED SAÚDE - RJ: Atualização de rede credenciada disponível (Individual, Familiar, PME e Adesão)', date: '17/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 2, badge: 'REAJUSTE', text: 'DENTALPAR (CORPe SAÚDE) - SP: Reajuste disponível no projeto Adesão Odontológico', date: '16/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 3, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE: Reajuste de valores disponível - PME (SP / RJ / DF)', date: '14/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 4, badge: 'NOVO', text: 'HUMANA SAÚDE (CORPe SAÚDE) - Maringá/PR e Londrina/PR: Novo portfólio 2026 disponível no projeto Adesão', date: '14/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 5, badge: 'REAJUSTE', text: 'UNIMED TRÊS RIOS (G2C ADMINISTRADORA) - RJ: Reajuste de valores disponível no projeto Adesão', date: '13/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 6, badge: 'REAJUSTE', text: 'ASSIM SAÚDE (G2C ADMINISTRADORA) - RJ: Reajuste de valores disponível na entidade CRMV (Veterinário)', date: '13/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 7, badge: 'REAJUSTE', text: 'HAPVIDA CLINIPAM SUL (CORPe SAÚDE) - Curitiba-PR / Londrina-PR / Balneário Camboriú-SC: Projeto Adesão com reajuste disponível', date: '13/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 8, badge: 'REAJUSTE', text: 'PLAMED (ALLCARE) - SE: Projeto Adesão com reajuste disponível', date: '12/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 9, badge: 'SUSPENSO', text: 'AMPLA SAÚDE (TEC GROUP) - SP: Produto JOY 250 AD SP (Enfermaria e Apartamento) retirado do projeto Adesão', date: '12/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 10, badge: 'ATUALIZ.', text: 'SÃO CAMILO (ALLCARE): Tabela de carência atualizada e disponível no projeto Adesão (SP / AP / PA / CE)', date: '12/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 11, badge: 'REAJUSTE', text: 'UNIMED JUNDIAÍ (CORPe SAÚDE) - SP: Reajuste de valores disponível para os projetos PME e MEI (Boletado)', date: '11/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 12, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME (CORPe SAÚDE) - SP: Reajuste disponível no projeto Adesão', date: '11/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 13, badge: 'REAJUSTE', text: 'BENEVIDA (ALLCARE) - SP: Reajuste de valores disponível no projeto Adesão', date: '11/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 14, badge: 'NOVO', text: 'VERA CRUZ (ALLCARE) - SP: Novo projeto Adesão disponível', date: '11/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 15, badge: 'REAJUSTE', text: 'ANA COSTA SAÚDE (SUPERMED) - SP: Projeto Adesão atualizado e disponível', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 16, badge: 'REAJUSTE', text: 'ANA COSTA SAÚDE - SP: Projeto PME atualizado e disponível', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 17, badge: 'REAJUSTE', text: 'BLUE MED (CORPe SAÚDE) - SP: Atualização disponível na carência promocional do projeto Adesão', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 18, badge: 'REAJUSTE', text: 'AMEPLAN SAÚDE (CORPe SAÚDE) - SP: Carência promocional prorrogada no projeto Adesão', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 19, badge: 'REAJUSTE', text: 'UNIMED LESTE FLUMINENSE (ALLCARE) - RJ: Inclusão da Profissão Autônomo na entidade ANCEPLA', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 20, badge: 'SUSPENSO', text: 'HUMANA SAÚDE (ALLCARE) - MA: Suspensão das tabelas Adesão e PME', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 21, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME - FLAMENGO (QV BENEFÍCIOS) - RJ: Atualização de valores disponível no projeto Adesão', date: '10/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 22, badge: 'REAJUSTE', text: 'HUMANA SAÚDE (ALLCARE) - MA (São Luís e Imperatriz): Atualizações disponíveis no projeto Adesão', date: '07/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 23, badge: 'REAJUSTE', text: 'HAPVIDA SAÚDE - PE: Atualização de valores disponível na tabela Individual', date: '07/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 24, badge: 'REAJUSTE', text: 'SÃO LUCAS (CORPe SAÚDE) - MG: Reajuste de valores disponível no projeto Adesão', date: '07/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 25, badge: 'REAJUSTE', text: 'SÃO FRANCISCO VIDA (CORPe SAÚDE) - SP: Campanha promocional com desconto de 10% prorrogada', date: '07/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 26, badge: 'REAJUSTE', text: 'UNIMED LESTE FLUMINENSE - RJ: Projeto PME atualizado e disponível', date: '06/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 27, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME (ALLCARE) - RJ: Projeto Adesão atualizado e disponível', date: '06/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 28, badge: 'NOVO', text: 'SAMI (TEC GROUP) - SP: Novo projeto Adesão disponível', date: '06/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 29, badge: 'REAJUSTE', text: 'UNIMED RECIFE (ALLCARE) - PE: Atualização de valores disponível no projeto Adesão', date: '05/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 30, badge: 'REAJUSTE', text: 'HUMANA SAÚDE - SEMPRE VIDA (CORPe SAÚDE) - PR: Projeto Adesão atualizado e disponível', date: '05/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 31, badge: 'REAJUSTE', text: 'PROASA SAÚDE (TEC GROUP) - AM: Atualizações disponíveis no projeto Adesão', date: '05/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 32, badge: 'REAJUSTE', text: 'SF SAÚDE (CORPe SAÚDE) - PE: Atualização na rede de atendimento disponível no projeto Adesão', date: '05/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 33, badge: 'REAJUSTE', text: 'OESTE SAÚDE (CORPe SAÚDE) - SP: Atualizações disponíveis no projeto Adesão', date: '05/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 34, badge: 'REAJUSTE', text: 'AMPLA SAÚDE (TEC GROUP): Atualizações disponíveis no projeto Adesão - SP / RJ / DF / PE', date: '04/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 35, badge: 'REAJUSTE', text: 'ALICE SAÚDE - SP: Atualização de valores disponível no PME Porte 1 (1 a 29 vidas)', date: '04/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 36, badge: 'REAJUSTE', text: 'UNIMED FORTALEZA (ALLCARE) - CE: Atualizações disponíveis no projeto Adesão', date: '03/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 37, badge: 'REAJUSTE', text: 'UNIMED SÃO JOSÉ DO RIO PRETO (ALLCARE) - SP: Projeto Adesão atualizado e disponível', date: '03/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 38, badge: 'NOVO', text: 'UNIMED JUNDIAÍ (ALLCARE) - SP: Inclusão de novos planos (Clássicos) disponível no projeto Adesão', date: '03/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 39, badge: 'NOVO', text: 'BLUE MED (CORPe SAÚDE) - SP: Carências promocionais disponíveis no projeto Adesão', date: '03/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 40, badge: 'SUSPENSO', text: 'SELECT SAÚDE (CORPe SAÚDE) - RJ: Comercialização do projeto Adesão suspensa', date: '03/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 41, badge: 'REAJUSTE', text: 'LEVE SAÚDE - RJ: Atualização de valores disponível nas tabelas (Individual, Familiar, PME e Sênior)', date: '01/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },

  // JULHO 2026
  { id: 42, badge: 'SUSPENSO', text: 'BEMSTAR SAÚDE (CORPe SAÚDE) - BA: Comercialização do projeto suspensa por tempo indeterminado', date: '13/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 43, badge: 'REAJUSTE', text: 'ASSIM SAÚDE (G2C ADMINISTRADORA) - RJ: Atualizações disponíveis no projeto Adesão', date: '10/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 44, badge: 'REAJUSTE', text: 'BLUE MED (ALLCARE) - SP: Atualização de portfólio disponível no projeto Adesão', date: '08/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 45, badge: 'REAJUSTE', text: 'BLUE MED (TEC SAÚDE) - SP: Projeto Adesão atualizado e disponível', date: '08/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 46, badge: 'REAJUSTE', text: 'SÃO CRISTÓVÃO (TEC SAÚDE) - SP: Projeto Adesão atualizado e disponível', date: '08/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 47, badge: 'REAJUSTE', text: 'NORDESTE SAÚDE (CORPe SAÚDE) - BA: Reajuste de valores disponível nos projetos Adesão e PME', date: '08/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 48, badge: 'REAJUSTE', text: 'ÔNIX SAÚDE (QV BENEFÍCIOS) - RJ: Reajuste de valores disponível no projeto Adesão', date: '07/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 49, badge: 'REAJUSTE', text: 'NOVA SAÚDE (QV BENEFÍCIOS) - RJ: Atualizações disponíveis no projeto Adesão', date: '07/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 50, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME (QV BENEFÍCIOS) - RJ: Atualização de valores e portfólio disponível no projeto Adesão', date: '07/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 51, badge: 'REAJUSTE', text: 'PROASA SAÚDE (TEC SAÚDE): Projetos Adesão e PME atualizados e disponíveis (SP, BA, DF, AM e PA)', date: '02/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 52, badge: 'REAJUSTE', text: 'UNIMED SANTOS (TEC SAÚDE) - SP: Projeto Adesão atualizado e disponível', date: '02/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 53, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME - SP / RJ: Atualizações disponíveis nos canais (Individual, Super Simples e PME)', date: '01/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 54, badge: 'NOVO', text: 'AMEPLAN SAÚDE - SP: PME a partir de 1 vida disponível', date: '01/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 55, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE - PME: Atualizações disponíveis e nova praça (Jundiaí - Linha Tradicional, Linha P e Pro) disponível', date: '01/07/2026', monthKey: 'julho', monthLabel: 'Julho' },
  { id: 56, badge: 'NOVO', text: 'KLINI SAÚDE - RJ: Produtos da Linha Klini 200, 400 e 600 disponíveis na modalidade PME a partir de 1 vida (com idade mínima de 18 anos)', date: '01/07/2026', monthKey: 'julho', monthLabel: 'Julho' },

  // JUNHO 2026
  { id: 57, badge: 'NOVO', text: 'MEDSÊNIOR (QUALICORP): Projeto de Adesão disponível na praça do Rio de Janeiro', date: '25/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 58, badge: 'SUSPENSO', text: 'SEGUROS UNIMED (CORPe SAÚDE) - SP: Comercialização do projeto suspensa por tempo indeterminado', date: '20/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 59, badge: 'REAJUSTE', text: 'PORTO SEGURO ODONTO - SP/ RJ: Atualizações disponíveis no projeto PME Odontológico', date: '12/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 60, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE - SP/ RJ/ DF: Atualizações de valores disponíveis nas tabelas PME', date: '12/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 61, badge: 'NOVO', text: 'HAPVIDA NOTREDAME (QUALICORP) - SP / RJ: Novo portfólio disponível no projeto de Adesão', date: '11/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 62, badge: 'NOVO', text: 'MEDSÊNIOR (QUALICORP) - SP: Novo plano (INFINITE ADESÃO) disponível no projeto de Adesão', date: '11/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 63, badge: 'REAJUSTE', text: 'UNIMED SERRANA (SUPERMED) - RJ: Atualização de valores disponível no projeto de Adesão', date: '11/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 64, badge: 'REAJUSTE', text: 'ASSIM SAÚDE - RJ: Atualização disponível nas tabelas PME', date: '10/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 65, badge: 'NOVO', text: 'AMIL SAÚDE - SP - PME: Novo produto AMIL PRATA II disponível na Linha Amil', date: '10/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 66, badge: 'NOVO', text: 'DENTALPAR (ADC BENEFÍCIOS) - SP: Novo projeto Odontológico disponível', date: '05/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 67, badge: 'NOVO', text: 'HAPVIDA NOTREDAME - FLAMENGO (ALLCARE) - SP: Novo projeto de Adesão disponível', date: '05/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 68, badge: 'REAJUSTE', text: 'HAPVIDA NOTREDAME - PME - SP: Alteração do produto Smart 200 UP para Smart UP/Retirada do produto Smart 200 Capital e atualizações', date: '01/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 69, badge: 'NOVO', text: 'HAPVIDA NOTREDAME - PME - RJ: Retirada Smart 150/400 e Criação Tabelas MEI, Adesão e Compulsório PME', date: '01/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 70, badge: 'REAJUSTE', text: 'UNIMED NATAL (ALLCARE) - RN: Atualizações disponíveis no projeto de Adesão', date: '02/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 71, badge: 'NOVO', text: 'UNIMED (SUPERMED) - RJ: Novo projeto de Adesão com atendimentos pela Unimed do Brasil disponível', date: '01/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 72, badge: 'REAJUSTE', text: 'SEGUROS UNIMED (QUALICORP) - BA / DF: Atualizações disponíveis no projeto de Adesão', date: '01/06/2026', monthKey: 'junho', monthLabel: 'Junho' },
  { id: 73, badge: 'REAJUSTE', text: 'UNIMED GUARULHOS - SP: Valores atualizados disponíveis na tabela PME', date: '01/06/2026', monthKey: 'junho', monthLabel: 'Junho' },

  // MAIO 2026
  { id: 74, badge: 'SUSPENSO', text: 'KLINI SAÚDE (QUALICORP) - RJ: Comercialização do produto 350 suspensa para certas cidades', date: '27/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 75, badge: 'REAJUSTE', text: 'SEGUROS UNIMED (QUALICORP) - SP: Valores atualizados no projeto de Adesão em diversas entidades', date: '29/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 76, badge: 'REAJUSTE', text: 'SF SAÚDE (CORPe SAÚDE) - PE: Atualizações disponíveis no projeto de Adesão', date: '29/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 77, badge: 'REAJUSTE', text: 'HAPVIDA (AFFIX) - SP: Atualização disponível no projeto de Adesão (S. José dos Campos)', date: '26/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 78, badge: 'NOVO', text: 'HAPVIDA NOTREDAME (ALLCARE) - SP / RJ: Novo portfólio disponível no projeto de Adesão', date: '26/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 79, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE - SP: Nova precificação PME para as praças S. J. Rio Preto e Bragança', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 80, badge: 'NOVO', text: 'HAPVIDA (GRUPO CONTÉM) - DF: Novo projeto de Adesão disponível', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 81, badge: 'NOVO', text: 'HAPVIDA CLINIPAM (CONTÉM) - PR / SC: Novo projeto de Adesão disponível', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 82, badge: 'NOVO', text: 'HAPVIDA CCG (CONTÉM) - RS: Novo projeto de Adesão disponível', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 83, badge: 'NOVO', text: 'UNIMED COSTA VERDE (CONTÉM) - RJ: Novo projeto de Adesão disponível', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 84, badge: 'NOVO', text: 'PLENUM SAÚDE (GRUPO CONTÉM) - DF: Novo projeto de Adesão disponível', date: '19/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 85, badge: 'REAJUSTE', text: 'CEMERU (PLURAL SAÚDE) - RJ: Atualização de valores disponível nos projetos Adesão e PME', date: '18/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 86, badge: 'NOVO', text: 'UNIMED RECIFE - PE: Tabela com desconto a partir de 2 vidas disponível no projeto PME', date: '18/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 87, badge: 'NOVO', text: 'UNIMED NOVA IGUAÇU (SOLUTIONS) - RJ: Novas tabelas disponíveis nos projetos Adesão e PME', date: '15/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 88, badge: 'REAJUSTE', text: 'BLUE MED (QUALISAUDE) - SP: Atualizações disponíveis no projeto de Adesão', date: '15/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 89, badge: 'REAJUSTE', text: 'UNIHOSP SAÚDE (QUALISAUDE) - SP: Atualizações disponíveis no projeto de Adesão', date: '15/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 90, badge: 'REAJUSTE', text: 'KLINI SAÚDE - RJ: Atualização de valores disponível no projeto PME', date: '14/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 91, badge: 'NOVO', text: 'SF SAÚDE (CORPe SAÚDE) - PE: Novo projeto de Adesão disponível', date: '12/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 92, badge: 'NOVO', text: 'HSMED SAÚDE (SOLUTIONS) - RJ: Novo produto ROYAL disponível no projeto de Adesão', date: '07/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 93, badge: 'NOVO', text: 'AMIL SAÚDE - PME: Novo produto AMIL OURO II disponível para região metropolitana de SP', date: '06/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 94, badge: 'REAJUSTE', text: 'HUMANA SAÚDE (CORPe SAÚDE): Atualizações disponíveis no projeto de Adesão (PI, MA, RN)', date: '06/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 95, badge: 'NOVO', text: 'HSMED SAÚDE - RJ: Novo produto ROYAL disponível na tabela PME', date: '04/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 96, badge: 'REAJUSTE', text: 'SAGRADA FAMÍLIA SAÚDE (CORPe) - SP: Atualização disponível no projeto de Adesão', date: '01/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 97, badge: 'REAJUSTE', text: 'ASSIM SAÚDE - RJ: Atualizações disponíveis nas tabelas PF e PME (MEI)', date: '01/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 98, badge: 'REAJUSTE', text: 'SAMOC SAÚDE - RJ: Atualizações disponíveis (PME e PF)', date: '01/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 99, badge: 'REAJUSTE', text: 'SAGRADA FAMÍLIA (HEBROM) - SP: Atualização disponível no projeto de Adesão', date: '01/05/2026', monthKey: 'maio', monthLabel: 'Maio' },
  { id: 100, badge: 'REAJUSTE', text: 'SAGRADA FAMÍLIA SAÚDE - SP: Atualizações disponíveis (PME e Sênior PF)', date: '01/05/2026', monthKey: 'maio', monthLabel: 'Maio' },

  // ABRIL 2026
  { id: 101, badge: 'REAJUSTE', text: 'UNIMED FERJ (SUPERMED) - RJ: Reajuste de valores no projeto de Adesão', date: '28/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 102, badge: 'REAJUSTE', text: 'OPLAN (QV BENEFÍCIOS) - RJ: Reajuste de valores no projeto de Adesão', date: '28/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 103, badge: 'REAJUSTE', text: 'SAMEL (PLURAL SAÚDE) - AM: Atualização de valores no projeto de Adesão', date: '28/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 104, badge: 'NOVO', text: 'PORTO SEGURO SAÚDE - SP: Nova precificação SOROCABA e RIBEIRÃO PRETO (PME)', date: '28/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 105, badge: 'REAJUSTE', text: 'UNIMED JUNDIAÍ (CORPe) - SP: Reajuste no projeto PME Administrado', date: '24/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 106, badge: 'NOVO', text: 'BRADESCO SAÚDE - PR: Lançamento Efetivo Plus / Suspensão Flex (PME)', date: '23/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 107, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME (AFFIX) - SP: Atualização no projeto PME disponível', date: '22/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 108, badge: 'ATUALIZ.', text: 'UNIHOSP SAÚDE - SP: Novas regras comerciais (Familiar / PME)', date: '22/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 109, badge: 'ATUALIZ.', text: 'MEDSÊNIOR (ALLCARE) - DF: Atualização disponível no projeto de Adesão', date: '22/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 110, badge: 'NOVO', text: 'PORTO SEGURO SAÚDE - SP: Novo produto PIRACICABA (PME Tradicional, P e Pro)', date: '15/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 111, badge: 'SUSPENSO', text: 'ATIVIA SAÚDE (ALLCARE) - SP: Projeto de Adesão suspenso', date: '13/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 112, badge: 'NOVO', text: 'KLINI SAÚDE (QUALICORP) - RJ: Novo plano KLINI 350 AD COPART (Estudantil)', date: '11/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 113, badge: 'REAJUSTE', text: 'SÃO CAMILO (CORPe) - SP: Reajuste anual de valores no projeto PME', date: '09/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 114, badge: 'NOVO', text: 'PORTO SEGURO SAÚDE - SP: Nova linha SOROCABA PRO disponível (PME)', date: '08/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 115, badge: 'NOVO', text: 'SAMOC SAÚDE (ALLCARE) - RJ: Novo projeto de Adesão disponível', date: '07/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 116, badge: 'REAJUSTE', text: 'AMIL SAÚDE - PME: Valores RN / CE / GO / MA / PB / SC / RS', date: '06/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 117, badge: 'REAJUSTE', text: 'AMIL SAÚDE - PME: Valores BA / MG / DF / PE / PR', date: '06/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 118, badge: 'REAJUSTE', text: 'AMIL SAÚDE - PME: Valores SP / RJ (Demais praças em breve)', date: '06/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 119, badge: 'SUSPENSO', text: 'ATIVIA SAÚDE (CORPe) - SP: Projeto de Adesão suspenso', date: '06/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 120, badge: 'ATUALIZ.', text: 'PORTO SEGURO SAÚDE - PME: Atualização de valores - SP / RJ / DF', date: '02/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 121, badge: 'REAJUSTE', text: 'LEVE SAÚDE - RJ: Reajuste tabela de vendas e rede hospitalar (PF/PME)', date: '01/04/2026', monthKey: 'abril', monthLabel: 'Abril' },
  { id: 122, badge: 'ATUALIZ.', text: 'ASSIM SAÚDE (QUALICORP) - RJ: Novas entidades no projeto de Adesão', date: '01/04/2026', monthKey: 'abril', monthLabel: 'Abril' },

  // MARÇO 2026
  { id: 123, badge: 'SUSPENSO', text: 'AMPLA SAÚDE (QUALICORP): Projetos Adesão e PME suspensos', date: '27/03/2026', monthKey: 'marco', monthLabel: 'Março' },
  { id: 124, badge: 'ATUALIZ.', text: 'PREVENT SÊNIOR: Entrevista Qualificada e Carência DLP Reduzida', date: '25/03/2026', monthKey: 'marco', monthLabel: 'Março' },
  { id: 125, badge: 'SUSPENSO', text: 'NOVA SAÚDE (QUALICORP) - RJ: Projeto de Adesão suspenso', date: '23/03/2026', monthKey: 'marco', monthLabel: 'Março' },
  { id: 126, badge: 'ATUALIZ.', text: 'UNIMED COSTA VERDE - RJ: Atualizações no projeto de Adesão', date: '20/03/2026', monthKey: 'marco', monthLabel: 'Março' },
  { id: 127, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME - SP/RJ: Atualizações no canal INDIVIDUAL', date: '12/03/2026', monthKey: 'marco', monthLabel: 'Março' },

  // FEVEREIRO 2026
  { id: 128, badge: 'REAJUSTE', text: 'HEALTH MED (QV BENEFÍCIOS) - RJ: Atualização de valores em Adesão', date: '20/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 129, badge: 'NOVO', text: 'SAMOC SAÚDE (SOLUTIONS) - RJ: Novo projetos (Adesão e PME)', date: '14/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 130, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE - PME: Valores Novo Tradicional, P e Pro (SP/RJ/DF)', date: '13/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 131, badge: 'NOVO', text: 'NOVA SAÚDE (QUALICORP) - RJ: Novo portfólio no projeto de Adesão', date: '12/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 132, badge: 'REAJUSTE', text: 'BRADESCO DENTAL - PF/PME: Atualização de valores SP e RJ', date: '10/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 133, badge: 'NOVO', text: 'AMIL DENTAL - PF/PME: Nova Linha de produtos em SP e RJ', date: '10/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 134, badge: 'ATUALIZ.', text: 'NOVA SAÚDE (CORPe) - RJ: Regras estudantis no antigo portfólio', date: '10/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 135, badge: 'NOVO', text: 'MEDSÊNIOR (SUPERMED) - RJ: Projeto de Adesão disponível', date: '06/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 136, badge: 'NOVO', text: 'HAPVIDA NOTREDAME (DIXMED) - SP: Projeto de Adesão disponível', date: '05/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 137, badge: 'ATUALIZ.', text: 'VERTE SAÚDE (CONTÉM) - RS: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 138, badge: 'ATUALIZ.', text: 'UNITY SAÚDE (CONTÉM) - DF: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 139, badge: 'ATUALIZ.', text: 'UNIMED VALE DO AÇO - MG: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 140, badge: 'ATUALIZ.', text: 'UNIMED ODONTO: Atualização no projeto Odontológico', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 141, badge: 'ATUALIZ.', text: 'UNIMED NORTE FLUMINENSE - RJ: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 142, badge: 'ATUALIZ.', text: 'SULMED (CONTÉM) - RS: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 143, badge: 'ATUALIZ.', text: 'ÔNIX SAÚDE (CONTÉM) - RJ: Atualizações no projeto de adesão', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 144, badge: 'ATUALIZ.', text: 'ODONTO EMPRESAS: Atualização no projeto Odontológico', date: '03/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },
  { id: 145, badge: 'REAJUSTE', text: 'AMIL SAÚDE (SUPERMED) - SP/RJ: Atualização de valores em Adesão', date: '02/02/2026', monthKey: 'fevereiro', monthLabel: 'Fevereiro' },

  // JANEIRO 2026
  { id: 146, badge: 'NOVO', text: 'ONMED SAÚDE (QUALICORP): Adesão e PME em Pernambuco', date: '30/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 147, badge: 'SUSPENSO', text: 'HEALTH MED (CORPe) - RJ: Comercialização suspensa', date: '30/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 148, badge: 'NOVO', text: 'ÚNICA SAÚDE (ADC) - SP: Novo projeto PF e PME disponível', date: '28/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 149, badge: 'NOVO', text: 'NOVA SAÚDE (CORPe) - RJ: Novo portfólio em Adesão', date: '26/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 150, badge: 'REAJUSTE', text: 'PORTO SEGURO SAÚDE: Valores Linhas Pro e Porto Bairro', date: '24/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 151, badge: 'NOVO', text: 'HAPVIDA NOTREDAME - PME: Novas modalidades Canais Super Simples e PME', date: '23/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 152, badge: 'REAJUSTE', text: 'ÚNICA SAÚDE - SP: Reajuste de valores (PF / PME / Sênior)', date: '23/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 153, badge: 'REAJUSTE', text: 'BRADESCO SAÚDE - PME: Reajuste de valores nacional', date: '19/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 154, badge: 'ATUALIZ.', text: 'SÃO CAMILO (CORPe): Projeto Adesão atualizado (PR)', date: '16/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 155, badge: 'ATUALIZ.', text: 'DONA SAÚDE (HEBROM) - SP: Projeto de Adesão atualizado', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 156, badge: 'ATUALIZ.', text: 'UNIMED COSTA VERDE - RJ: Projeto de Adesão atualizado', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 157, badge: 'ATUALIZ.', text: 'ONMED SAÚDE (QUALICORP): Entidade ACRESP disponível em Adesão', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 158, badge: 'REAJUSTE', text: 'AMIL SAÚDE - PME: Valores Linhas Amil e Selecionada (SP/RJ)', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 159, badge: 'SUSPENSO', text: 'ASSIM SAÚDE (ALLCARE) - RJ: Comercialização suspensa', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 160, badge: 'SUSPENSO', text: 'ASSIM SAÚDE (SUPERMED) - RJ: Comercialização suspensa', date: '15/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 161, badge: 'NOVO', text: 'ASSIM SAÚDE (QUALICORP): Novo portfólio em Adesão', date: '14/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 162, badge: 'NOVO', text: 'ÔNIX SAÚDE (CORPe) - RJ: Novo portfólio de Adesão', date: '14/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 163, badge: 'NOVO', text: 'NOVA SAÚDE (SOLUTIONS): Novo portfólio em Adesão', date: '13/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 164, badge: 'NOVO', text: 'NOVA SAÚDE (EASYPLAN): Novo portfólio em Adesão', date: '12/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 165, badge: 'NOVO', text: 'NOVA SAÚDE (DIXMED): Novo portfólio em Adesão', date: '12/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 166, badge: 'REAJUSTE', text: 'PESSOAL SAÚDE (HEBROM): Reajuste de valores em Adesão', date: '09/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 167, badge: 'NOVO', text: 'NOVA SAÚDE - RJ: Novo portfólio PME disponível', date: '09/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 168, badge: 'NOVO', text: 'NOVA SAÚDE (QV): Novo portfólio em Adesão', date: '09/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 169, badge: 'ATUALIZ.', text: 'PORTO SEGURO (SP/RJ/DF): Linhas Tradicional, P, Pro e Bairro', date: '07/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 170, badge: 'REAJUSTE', text: 'ASSIM SAÚDE - RJ: Reajuste Individual / Grupo / Familiar', date: '06/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 171, badge: 'REAJUSTE', text: 'AMEPLAN SAÚDE - SP: Reajuste de valores no PME', date: '05/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 172, badge: 'NOVO', text: 'UNIMED GUARULHOS - PME: Nova tabela disponível', date: '01/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' },
  { id: 173, badge: 'REAJUSTE', text: 'SANTA CASA DE MAUÁ: Valores Individual, Familiar, PME e Sênior', date: '01/01/2026', monthKey: 'janeiro', monthLabel: 'Janeiro' }
];

export const wpService = {
  getPosts: async (): Promise<WPPost[]> => {
    return new Promise((resolve) => setTimeout(() => {
      const now = new Date();
      const published = MOCK_BLOG_POSTS.filter(post => new Date(post.date) <= now);
      const sorted = published.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      resolve(sorted);
    }, 500));
  },
  getPostBySlug: async (slug: string): Promise<WPPost | undefined> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_BLOG_POSTS.find(p => p.slug === slug)), 300));
  },
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_PRODUCTS), 400));
  },
  getTemplates: async (): Promise<Template[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_TEMPLATES), 400));
  },
  getPartners: async (): Promise<Partner[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_PARTNERS), 300));
  },
  getCompactUpdates: async (): Promise<CompactTableUpdate[]> => {
    try {
      const res = await fetch('/api/noticias');
      if (res.ok) {
        const remoteData = await res.json();
        if (Array.isArray(remoteData) && remoteData.length > 0) {
          // Combinar remotas com locais sem duplicar
          const remoteTexts = new Set(remoteData.map((r: CompactTableUpdate) => r.text.toLowerCase()));
          const extraLocal = MOCK_COMPACT_UPDATES.filter(l => !remoteTexts.has(l.text.toLowerCase()));
          return [...remoteData, ...extraLocal];
        }
      }
    } catch (e) {
      console.warn('Usando dados estáticos de reserva.');
    }
    return MOCK_COMPACT_UPDATES;
  },
  addCompactUpdate: async (newUpdate: Omit<CompactTableUpdate, 'id'>): Promise<CompactTableUpdate> => {
    try {
      const res = await fetch('/api/noticias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUpdate)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          return json.data;
        }
      }
    } catch (e) {
      console.warn('Erro ao salvar no servidor central, mantendo localmente.');
    }

    const created: CompactTableUpdate = {
      ...newUpdate,
      id: Date.now()
    };
    MOCK_COMPACT_UPDATES.unshift(created);
    return created;
  }
};
