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
}

const MOCK_BLOG_POSTS: WPPost[] = [
  {
    id: 1,
    title: "Como aumentar suas vendas de planos de saúde em 2024",
    slug: "como-aumentar-vendas-planos-saude",
    excerpt: "Descubra as melhores estratégias digitais para corretores de alta performance...",
    content: "<p>O mercado de saúde está mudando rapidament. Corretores que utilizam simuladores online têm fechado 40% mais negócios.</p><h3>Dicas de Ouro:</h3><ul><li>Use automação</li><li>Tenha um site rápido</li><li>Foque no atendimento personalizado</li></ul>",
    date: "2024-03-10T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/broker/800/600",
    category: "Dicas de Vendas"
  },
  {
    id: 2,
    title: "Vantagens do Simulador Nacional vs Estadual",
    slug: "vantagens-simulador-nacional-estadual",
    excerpt: "Qual a melhor opção para o seu modelo de negócio? Analisamos os dados.",
    content: "<p>Dependendo da sua base de clientes, a abrangência nacional pode ser o divisor de águas...</p>",
    date: "2024-03-05T14:30:00Z",
    featuredImage: "https://picsum.photos/seed/map/800/600",
    category: "Mercado de Saúde"
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
    id: 201,
    name: "Nexus Health",
    platform: "WordPress",
    demoUrl: "https://example.com/demo1",
    image: "https://picsum.photos/seed/web1/400/300",
    description: "Design moderno focado em conversão e rapidez."
  },
  {
    id: 202,
    name: "Elite Broker",
    platform: "WordPress",
    demoUrl: "https://example.com/demo2",
    image: "https://picsum.photos/seed/web2/400/300",
    description: "Elegância e autoridade para sua marca digital."
  }
];

export const wpService = {
  getPosts: async (): Promise<WPPost[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(MOCK_BLOG_POSTS), 500));
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
