import type { VercelRequest, VercelResponse } from '@vercel/node';

const MOCK_BLOG_POSTS = [
  { slug: 'como-aumentar-vendas-planos-saude', date: '2026-07-20T10:00:00Z' },
  { slug: 'vantagens-simulador-nacional-estadual', date: '2026-07-15T14:30:00Z' },
  { slug: 'tudo-sobre-multicalculo-plano-de-saude', date: '2026-07-30T10:00:00Z' },
  { slug: 'site-para-corretor-de-plano-de-saude', date: '2026-08-03T10:00:00Z' },
  { slug: 'sistema-cotacao-plano-saude', date: '2026-08-06T10:00:00Z' },
  { slug: 'simulador-planos-saude-corretores', date: '2026-08-09T10:00:00Z' },
  { slug: 'multicalculo-saude-odonto', date: '2026-08-12T10:00:00Z' },
  { slug: 'crm-corretor-seguros', date: '2026-08-15T10:00:00Z' },
  { slug: 'site-vendedor-24-horas', date: '2026-08-18T10:00:00Z' },
  { slug: 'importancia-atendimento-agil-corretagem', date: '2026-08-21T10:00:00Z' },
  { slug: 'metricas-corretor-seguros', date: '2026-08-24T10:00:00Z' },
  { slug: 'landing-pages-alta-conversao', date: '2026-08-27T10:00:00Z' },
  { slug: 'futuro-corretagem-planos-saude', date: '2026-08-30T10:00:00Z' },
  { slug: 'hapvida-confirma-reajuste-cancelamento-947-mil-contratos', date: '2026-08-25T09:00:00Z' }
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl = 'https://www.simuladoronline.com';
  const now = new Date();

  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/produtos', changefreq: 'weekly', priority: '0.9' },
    { url: '/testar-gratis', changefreq: 'monthly', priority: '0.8' },
    { url: '/sobre', changefreq: 'monthly', priority: '0.8' },
    { url: '/parceiros', changefreq: 'monthly', priority: '0.8' },
    { url: '/noticias', changefreq: 'daily', priority: '0.8' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
    { url: '/contato', changefreq: 'monthly', priority: '0.7' },
    { url: '/politica-de-privacidade', changefreq: 'yearly', priority: '0.3' },
    { url: '/politica-de-cookies', changefreq: 'yearly', priority: '0.3' },
    { url: '/termos-de-uso', changefreq: 'yearly', priority: '0.3' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const page of staticPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${now.toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  for (const post of MOCK_BLOG_POSTS) {
    const postDate = new Date(post.date);
    if (postDate <= now) {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
      xml += `    <lastmod>${postDate.toISOString().split('T')[0]}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
}
