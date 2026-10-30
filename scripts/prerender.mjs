// Roda depois do build: gera um HTML completo para cada rota (texto, título,
// canonical, og:tags e JSON-LD já no código-fonte), mais 404.html, a casca
// _shell.html e o sitemap.xml. Os artigos do blog e as notícias são lidos da
// API de produção no momento do build, então cada deploy publica o que está no banco.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const API_BASE = process.env.PRERENDER_API_BASE || 'https://www.simuladoronline.com';

// O wpService usa caminhos relativos (/api/blog); no build eles vão para a API de produção.
const nativeFetch = globalThis.fetch;
globalThis.fetch = (input, init) =>
  nativeFetch(typeof input === 'string' && input.startsWith('/') ? API_BASE + input : input, init);

const { render, wpService, STATIC_ROUTES, NOINDEX_ROUTES, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const HEAD_RE = /<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/;
if (!HEAD_RE.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('index.html sem os marcadores <!--seo-head-start/end--> ou <!--app-html-->');
}

// Na prévia da Vercel (branch de revisão) os artigos agendados aparecem, para o dono ler antes do merge.
const SHOW_SCHEDULED = process.env.VERCEL_ENV === 'preview';
if (SHOW_SCHEDULED) console.log('Prévia: artigos agendados incluídos para revisão.');
const previewScript = SHOW_SCHEDULED ? '<script>window.__SHOW_SCHEDULED__=true</script>' : '';

const [posts, recentPosts, products, templates, landingPages, partners, compactUpdates] = await Promise.all([
  wpService.getBlogPosts({ incluirAgendados: SHOW_SCHEDULED }),
  wpService.getPosts({ incluirAgendados: SHOW_SCHEDULED }).then((list) => list.slice(0, 4)),
  wpService.getProducts(),
  wpService.getTemplates(),
  wpService.getLandingPages(),
  wpService.getPartners(),
  wpService.getCompactUpdates(),
]);
console.log(`Dados do build: ${posts.length} artigos, ${compactUpdates.length} notícias (API: ${API_BASE}).`);

// A listagem do blog não usa o texto completo; sem ele o HTML fica bem menor.
const postSummaries = posts.map(({ content, ...rest }) => rest);

const dataFor = (route) => {
  if (route === '/') return { products, recentPosts };
  if (route === '/produtos') return { products, templates, landingPages };
  if (route === '/parceiros') return { partners };
  if (route === '/blog') return { posts: postSummaries };
  if (route === '/noticias') return { compactUpdates };
  if (route.startsWith('/blog/')) return { post: posts.find((p) => `/blog/${p.slug}` === route) ?? null };
  return {};
};

const toFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

const writeFile = (file, contents) => {
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
};

const writePage = async (route, file) => {
  const data = dataFor(route);
  const { html, head, seo } = await render(route, data);
  if (!seo) throw new Error(`A rota ${route} não tem o componente <SEO>`);
  const dataScript = Object.keys(data).length
    ? `<script id="__SSR_DATA__" type="application/json">${JSON.stringify({ ...data, path: route }).replace(/</g, '\\u003c')}</script>`
    : '';
  writeFile(
    file,
    template
      .replace(HEAD_RE, `<!--seo-head-start-->\n  ${head}\n  <!--seo-head-end-->`)
      .replace('<!--app-html-->', html)
      .replace('</body>', `${dataScript}${previewScript}\n</body>`),
  );
  return seo;
};

const postRoutes = posts.map((p) => `/blog/${p.slug}`);
const indexable = [...STATIC_ROUTES, ...postRoutes];

for (const route of [...indexable, ...NOINDEX_ROUTES]) {
  await writePage(route, toFile(route));
}
await writePage('/pagina-inexistente-404', '404.html');

// Casca sem conteúdo: atende artigos publicados depois do build (o navegador
// busca o texto) e o painel /admin-blog, que não deve ser indexado.
writeFile('_shell.html', template.replace('<!--app-html-->', ''));
writeFile(
  'admin-blog.html',
  template
    .replace(HEAD_RE, '<title>Painel de Administração do Blog | Simulador On-Line</title>\n  <meta name="robots" content="noindex, nofollow" />')
    .replace('<!--app-html-->', ''),
);

const postDates = new Map(posts.map((p) => [`/blog/${p.slug}`, p.date]));
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...indexable.map((route) => {
    const date = postDates.get(route);
    // lastmod só onde há data real (artigos); a data do build em tudo faria o Google ignorar o campo
    const lastmod = date && !isNaN(new Date(date).getTime()) ? `\n    <lastmod>${new Date(date).toISOString().slice(0, 10)}</lastmod>` : '';
    return `  <url>\n    <loc>${route === '/' ? `${SITE_URL}/` : SITE_URL + route}</loc>${lastmod}\n  </url>`;
  }),
  '</urlset>',
  '',
].join('\n');
writeFile('sitemap.xml', sitemap);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Pré-renderizadas ${indexable.length} páginas indexáveis + 404.html; sitemap.xml com ${indexable.length} URLs.`);
