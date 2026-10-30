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
