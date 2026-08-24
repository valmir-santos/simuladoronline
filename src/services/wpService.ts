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
  }
};
