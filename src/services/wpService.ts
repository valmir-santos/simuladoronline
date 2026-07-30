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
    image: "/templates/modelo01-hr.png",
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
    demoUrl: "https://wp-modelo02.simulador.app.br/",
    image: "/templates/modelo02-hr.png",
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
    demoUrl: "https://wp-modelo04.simulador.app.br/",
    image: "/templates/modelo04-hr.png",
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
