import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { wpService } from '../src/services/wpService';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const posts = await wpService.getPosts();
  
  const baseUrl = 'https://www.simuladoronline.com';
  
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/produtos', changefreq: 'weekly', priority: '0.9' },
    { url: '/testar-gratis', changefreq: 'monthly', priority: '0.8' },
    { url: '/sobre', changefreq: 'monthly', priority: '0.8' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
    { url: '/contato', changefreq: 'monthly', priority: '0.7' },
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static pages
  for (const page of staticPages) {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  }

  // Blog posts
  for (const post of posts) {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
    sitemap += `    <lastmod>${new Date(post.date).toISOString()}</lastmod>\n`;
    sitemap += `    <changefreq>monthly</changefreq>\n`;
    sitemap += `    <priority>0.6</priority>\n`;
    sitemap += `  </url>\n`;
  }

  sitemap += `</urlset>\n`;

  const publicDir = path.resolve(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap gerado com sucesso em public/sitemap.xml');
}

generateSitemap().catch(console.error);
