// Usado só no build (scripts/prerender.mjs): gera o HTML de cada rota.
import {StrictMode} from 'react';
import {prerenderToNodeStream} from 'react-dom/static';
import {StaticRouter} from 'react-router-dom';
import App from './App.tsx';
import {SeoCollectorContext, SEOProps, renderHeadTags} from './components/SEO';
import {SsrData, SsrDataContext} from './lib/ssr';
import {wpService} from './services/wpService';

export {SITE_URL} from './lib/ssr';
export {wpService};

// Páginas fixas indexáveis, na ordem do sitemap. Os artigos do blog entram
// depois, lidos do banco no momento do build.
export const STATIC_ROUTES = [
  '/',
  '/produtos',
  '/testar-gratis',
  '/contratar',
  '/sobre',
  '/parceiros',
  '/noticias',
  '/blog',
  '/contato',
  '/termos',
  '/politica-de-privacidade',
  '/politica-de-cookies',
];

// Rotas que existem mas não devem ser indexadas.
export const NOINDEX_ROUTES = ['/obrigado-newsletter'];

export async function render(url: string, data: SsrData): Promise<{html: string; head: string; seo?: SEOProps & {url: string}}> {
  const collector: {data?: SEOProps & {url: string}} = {};
  const {prelude} = await prerenderToNodeStream(
    <StrictMode>
      <SeoCollectorContext.Provider value={collector}>
        <SsrDataContext.Provider value={{...data, path: url}}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </SsrDataContext.Provider>
      </SeoCollectorContext.Provider>
    </StrictMode>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  const seo = collector.data;
  return {html, head: seo ? renderHeadTags(seo, seo.url) : '', seo};
}

