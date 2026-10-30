# Instruções para agentes (Antigravity, Claude, Gemini)

Site do **Simulador On-Line** (cotação de planos de saúde, sites e CRM para corretores) —
React 19 + Vite, publicado na Vercel a partir da branch `main`. As páginas são pré-renderizadas no build (`scripts/prerender.mjs`).

## Antes de escrever ou editar artigo do blog

Leia, nesta ordem, e siga:

1. `conteudo/regras-editoriais.md` — o que pode e o que não pode ser escrito
2. `conteudo/fatos.md` — os únicos números e afirmações permitidos
3. `conteudo/pautas.md` — temas, prioridade e status
4. `conteudo/README.md` — o fluxo completo

Os artigos novos ficam em `src/data/artigos.ts`; a data `date` agenda a publicação. Os antigos
estão no banco (editados pelo painel `/admin-blog`) e não devem ser recriados aqui.

## Regras de trabalho

- Rode `npm run check:posts` antes de qualquer commit que mexa em artigo. Não envie com ERRO.
- Trabalhe numa branch (`pauta-AAAA-MM-DD` para artigos). **Nunca faça merge na `main`**: quem
  aprova é o dono, pela prévia da Vercel.
- Não altere `scripts/prerender.mjs`, `vercel.json` nem `.github/workflows/` sem pedido explícito.
- Página nova precisa do componente `<SEO>` e de entrada em `src/entry-server.tsx` (lista STATIC_ROUTES em src/lib/routes.ts).
