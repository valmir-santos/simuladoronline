// Dados estruturados que vêm do próprio texto do artigo (FAQ) e do autor.
// Funciona sem DOM, para rodar igual no build (pré-renderização) e no navegador.

export interface Faq {
  question: string;
  answer: string;
}

const SITE_URL = 'https://www.simuladoronline.com';
const SITE_NAME = 'Simulador On-Line';

const decode = (s: string) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const plain = (html: string) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const clip = (s: string, max = 500) => (s.length > max ? `${s.slice(0, max - 1).replace(/\s+\S*$/, '')}…` : s);

// Perguntas do artigo: subtítulo <h2>/<h3> que termina em "?" com o parágrafo logo abaixo,
// e o padrão <p><strong>Pergunta?</strong> Resposta</p> das seções de perguntas frequentes.
export const extractFaqs = (html: string): Faq[] => {
  const faqs: Faq[] = [];
  for (const m of html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>\s*<p[^>]*>([\s\S]*?)<\/p>(\s*<(ul|ol)[^>]*>[\s\S]*?<\/\4>)?/gi)) {
    const question = plain(m[1]);
    let answer = plain(m[2]);
    // Parágrafo que apresenta uma lista ("…:") leva os itens junto, senão a resposta fica pela metade
    if (answer.endsWith(':') && m[3]) {
      const items = [...m[3].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((li) => plain(li[1]).replace(/[.;]$/, ''));
      answer = `${answer} ${items.join('; ')}.`;
    }
    if (question.endsWith('?')) faqs.push({ question, answer: clip(answer) });
  }
  for (const m of html.matchAll(/<p[^>]*>\s*<strong>([\s\S]*?\?["”]?)\s*<\/strong>([\s\S]*?)<\/p>/gi)) {
    const question = plain(m[1]).replace(/^["“]|["”]$/g, '');
    const answer = plain(m[2]);
    if (answer.length > 20) faqs.push({ question, answer: clip(answer) });
  }
  const seen = new Set<string>();
  return faqs.filter((f) => !seen.has(f.question) && seen.add(f.question));
};

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.ico` },
};

// "Nome Sobrenome, Cargo" vira uma pessoa ligada à empresa; assinatura genérica
// ("Equipe…", "Redação…", "IA…") continua como a própria empresa.
export const authorNode = (author?: string) => {
  const raw = (author || '').trim();
  if (!raw || /simulador|equipe|reda[çc][ãa]o|^ia\b/i.test(raw)) return organization;
  const [name, ...role] = raw.split(',');
  return {
    '@type': 'Person',
    name: name.trim(),
    ...(role.length ? { jobTitle: role.join(',').trim() } : {}),
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/sobre`,
  };
};

export { organization };
