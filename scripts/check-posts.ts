// Checagem dos artigos novos do blog (src/data/artigos.ts): `npm run check:posts`.
// Artigo com ERRO não vai para a main. As regras vêm de conteudo/regras-editoriais.md.
// Os artigos antigos (banco do painel e os de reserva) não são checados aqui.
import fs from 'node:fs';
import path from 'node:path';
import { ARTIGOS } from '../src/data/artigos';
import { STATIC_ROUTES } from '../src/lib/routes';

type Level = 'ERRO' | 'AVISO';
const problems: { slug: string; level: Level; msg: string }[] = [];
const root = path.resolve(import.meta.dirname, '..');
const read = (f: string) => fs.readFileSync(path.join(root, f), 'utf-8');
const add = (slug: string, level: Level, msg: string) => problems.push({ slug, level, msg });

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const words = (t: string) => t.split(/\s+/).filter(Boolean).length;

// Artigos já publicados (banco + reserva), para não repetir endereço nem tema
const pautas = read('conteudo/pautas.md');
const publishedSlugs = new Set([...pautas.matchAll(/\|\s*`([a-z0-9-]+)`\s*\|/g)].map((m) => m[1]));
const wpSource = read('src/services/wpService.ts');
for (const m of wpSource.matchAll(/"slug":\s*"([a-z0-9-]+)"/g)) publishedSlugs.add(m[1]);
try {
  const res = await fetch('https://www.simuladoronline.com/api/blog', { signal: AbortSignal.timeout(8000) });
  for (const p of (await res.json()) as { slug: string }[]) publishedSlugs.add(p.slug);
} catch {
  add('(geral)', 'AVISO', 'não consegui ler a API do blog; endereços repetidos com o banco não foram conferidos');
}

// Números e preços permitidos: os de conteudo/fatos.md, fora da seção NÃO USAR
const fatosAll = read('conteudo/fatos.md');
const fatos = fatosAll.replace(/## Números de mercado da empresa — NÃO USAR[\s\S]*?(?=\n## )/, '');
const allowedNumbers = new Set([...fatos.matchAll(/\d+(?:[.,]\d+)?/g)].map((m) => m[0].replace(',', '.')));

const FORBIDDEN: { re: RegExp; msg: string; level: Level }[] = [
  { re: /35\s?(mil|k|\.000)\s*corretores|800\s?(mil|k)\s*c[áa]lculos|99[.,]9\s*%|120\+?\s*colaboradores/i, msg: 'usa número marcado NÃO USAR em fatos.md (regra 1)', level: 'ERRO' },
  { re: /\bn[ºo°]\s?1\b|número 1 do|a (principal|melhor) (ferramenta|plataforma) do mercado|mais r[áa]pid[ao] e confi[áa]vel/i, msg: 'afirmação de liderança sem prova (regra 1)', level: 'ERRO' },
  { re: /\b(um|uma) (corretor|corretora|cliente) (que|nosso|nossa) (atendemos|acompanhamos)|nossos clientes relatam|depoimento|case de sucesso/i, msg: 'parece experiência ou caso inventado (regra 4)', level: 'ERRO' },
  { re: /\d+\s?% d[oa]s (corretores|clientes|consumidores|brasileiros|empresas)|a maioria d[oa]s (corretores|clientes)|segundo (a|o|uma|um) (pesquisa|estudo|levantamento|relat[óo]rio)/i, msg: 'estatística ou pesquisa sem fonte (regra 3)', level: 'AVISO' },
  { re: /dobr[ae] (suas|as) vendas|garantid[ao]s?\b|o mais barato|sem (nenhum )?risco/i, msg: 'promete resultado (regra 6)', level: 'ERRO' },
  { re: /\b(RN|Resolu[çc][ãa]o Normativa)\s*(n[ºo°.]?\s*)?\d+|\bLei\s+(n[ºo°.]?\s*)?\d/i, msg: 'cita norma: precisa de link para o texto oficial (regra 5)', level: 'AVISO' },
  { re: /<h1[\s>]/i, msg: 'não use <h1> no conteúdo: o título já é o h1', level: 'ERRO' },
  { re: /style\s*=/i, msg: 'sem estilo inline no conteúdo', level: 'AVISO' },
];

const slugs = new Map<string, number>();
const titles = new Map<string, string>();
const now = new Date();

for (const p of ARTIGOS) {
  const s = p.slug || String(p.id) || '(sem slug)';
  for (const f of ['id', 'slug', 'title', 'excerpt', 'content', 'date', 'featuredImage', 'category'] as const) {
    if (!String(p[f] ?? '').trim()) add(s, 'ERRO', `campo "${f}" vazio`);
  }
  if (p.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) add(s, 'ERRO', 'slug fora do padrão (minúsculas, números e hífen, sem acento)');
  slugs.set(p.slug, (slugs.get(p.slug) || 0) + 1);
  if (publishedSlugs.has(p.slug)) add(s, 'ERRO', 'já existe artigo publicado com este endereço');

  const d = new Date(p.date);
  if (isNaN(d.getTime()) || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(p.date)) add(s, 'ERRO', `data inválida "${p.date}" (use 2026-11-03T06:00:00-03:00)`);
  else if (d <= now) add(s, 'AVISO', `data já passou (${p.date}): o artigo entra no ar no próximo deploy`);

  if (p.title.length > 90) add(s, 'ERRO', `título com ${p.title.length} caracteres (máximo 90)`);
  if (/^tudo sobre|vale a pena\?$|para iniciantes/i.test(p.title)) add(s, 'AVISO', 'título com cara de permutação (regra 8)');
  const prev = titles.get(p.title.toLowerCase());
  if (prev) add(s, 'ERRO', `título igual ao de "${prev}"`);
  titles.set(p.title.toLowerCase(), s);
  if (p.excerpt.length < 120 || p.excerpt.length > 170) add(s, 'ERRO', `resumo com ${p.excerpt.length} caracteres (de 120 a 170)`);
  if (!/^https:\/\//.test(p.featuredImage || '')) add(s, 'ERRO', 'imagem precisa ser um endereço https');

  const html = p.content || '';
  const text = stripHtml(html);
  const n = words(`${p.title} ${p.excerpt} ${text}`);
  if (n < 700 || n > 1600) add(s, 'ERRO', `${n} palavras (de 700 a 1.600)`);

  const h2 = (html.match(/<h2[\s>]/gi) || []).length;
  if (h2 < 3 || h2 > 6) add(s, 'ERRO', `${h2} subtítulos <h2> (de 3 a 6)`);
  if (!/<table[\s>]|<ol[\s>]|<ul[\s>]/i.test(html)) add(s, 'ERRO', 'falta bloco prático (tabela, checklist ou passo a passo)');

  // Links internos: precisa de pelo menos um, e todos precisam existir
  const internal = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1].replace(/\/$/, '') || '/');
  if (!internal.length) add(s, 'ERRO', 'nenhum link interno (regra: pelo menos 1)');
  if (!internal.some((h) => h === '/produtos' || h === '/testar-gratis' || h === '/contratar')) add(s, 'AVISO', 'sem link para /produtos, /testar-gratis ou /contratar');
  const known = new Set([...STATIC_ROUTES, ...[...publishedSlugs].map((x) => `/blog/${x}`), ...ARTIGOS.map((a) => `/blog/${a.slug}`)]);
  for (const h of internal) if (!known.has(h)) add(s, 'ERRO', `link interno para página que não existe: ${h}`);
  for (const h of internal) {
    const target = ARTIGOS.find((a) => `/blog/${a.slug}` === h);
    if (target && new Date(target.date) > d) add(s, 'ERRO', `link para artigo que só sai depois (${target.date.slice(0, 10)}): ${h}`);
  }

  // Link externo sobre operadora/ANS: precisa de fonte
  if (/\b(lança|lançou|anuncia|anunciou|reajuste de \d|cancela(rá|mento de) \d)/i.test(text) && !/href="https?:\/\//i.test(html)) {
    add(s, 'ERRO', 'parece notícia de operadora sem link para a fonte (regra 2)');
  }

  for (const f of FORBIDDEN) {
    const m = text.match(f.re) || html.match(f.re);
    if (m) add(s, f.level, `${f.msg}: "…${m[0]}…"`);
  }

  // Preços e números com unidade que não estão em fatos.md
  const unknown = new Set<string>();
  for (const m of text.matchAll(/R\$\s?(\d[\d.]*)(?:,\d{2})?/g)) {
    if (!allowedNumbers.has(m[1].replace(/\./g, ''))) unknown.add(m[0]);
  }
  for (const m of text.matchAll(/(\d+(?:[.,]\d+)?)\s*(%|dias?|meses|horas?|anos?|usuários?|corretores|vidas|operadoras)\b/gi)) {
    if (!allowedNumbers.has(m[1].replace(',', '.'))) unknown.add(m[0]);
  }
  if (unknown.size) add(s, 'AVISO', `número(s) fora de fatos.md — confira a fonte ou tire (regra 1): ${[...unknown].slice(0, 8).join(', ')}`);
}
for (const [slug, count] of slugs) if (count > 1) add(slug, 'ERRO', `slug repetido em ${count} artigos`);

// A publicação diária acha o artigo do dia lendo a linha de `date` logo abaixo de `slug`
const source = read('src/data/artigos.ts').split('\n');
source.forEach((line, i) => {
  const m = line.match(/^\s*slug:\s*'([^']+)'/);
  if (m && !/^\s*date:\s*'\d{4}-\d{2}-\d{2}T/.test(source[i + 1] || '')) {
    add(m[1], 'ERRO', 'em src/data/artigos.ts a linha `date:` precisa vir logo abaixo de `slug:` (a publicação diária depende disso)');
  }
});

const bySlug = new Map<string, typeof problems>();
for (const p of problems) bySlug.set(p.slug, [...(bySlug.get(p.slug) || []), p]);
const errors = problems.filter((p) => p.level === 'ERRO').length;
console.log(`\nChecagem do blog — ${ARTIGOS.length} artigo(s) em src/data/artigos.ts\n`);
for (const [slug, list] of bySlug) {
  const a = ARTIGOS.find((x) => x.slug === slug);
  console.log(`${slug}${a ? `  (${a.date.slice(0, 10)})` : ''}`);
  for (const p of list) console.log(`  ${p.level === 'ERRO' ? 'ERRO ' : 'AVISO'}  ${p.msg}`);
  console.log('');
}
console.log(`${errors} erro(s), ${problems.length - errors} aviso(s).`);
if (errors) {
  console.log('Corrija os ERROS antes de enviar. Avisos precisam de uma linha de justificativa no resumo.');
  process.exitCode = 1;
}
