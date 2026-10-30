# Regras editoriais — Blog do Simulador On-Line

Leia este arquivo inteiro antes de escrever ou editar qualquer artigo. Ele vale para pessoas e
para agentes (Antigravity, Claude, Gemini). Se um pedido contrariar estas regras, siga as
regras e avise no resumo final.

## Para quem escrevemos

- O leitor é **o corretor de planos de saúde** — autônomo ou dono de pequena corretora — que
  quer vender mais e perder menos tempo com cotação, proposta e lead esquecido.
- O blog não fala com o consumidor final. Um artigo sobre carência, por exemplo, é sobre
  **como o corretor explica e evita problema na venda**, não sobre os direitos do beneficiário.
- Tom: de colega experiente para colega. Concreto, sem jargão de marketing ("revolucionário",
  "alavancar", "potencializar") e sem promessa.

## Proibido

1. **Número, preço ou afirmação sobre a empresa ou o produto que não esteja em
   `conteudo/fatos.md`.** Itens marcados `NÃO USAR` não entram (35 mil corretores, 800 mil
   cálculos, nº1 etc.). Precisou de um dado que não está lá? Pare e peça ao dono.
2. **Notícia sobre operadora** (lançamento, reajuste, rede, cancelamento) **sem link para a
   fonte oficial** e sem a data da fonte no texto. Sem fonte, não é notícia: não escreva.
3. **Estatística de mercado sem fonte** ("70% dos corretores…", "a maioria dos clientes…").
4. **Inventar experiência ou caso**: "um corretor que atendemos…", depoimentos, nomes de
   clientes, prints de resultado.
5. **Citar norma da ANS, lei ou resolução sem link para o texto oficial** e sem dizer quando
   foi conferida. Regra muda; na dúvida, escreva como funciona na prática e remeta à operadora.
6. **Prometer resultado**: "dobre suas vendas", "garantido", "o mais barato", "nº1".
7. **Repetir tema já publicado.** Confira a lista em `conteudo/pautas.md` antes de escrever.
   O blog já tem 3 artigos de landing page, 2 de site, 2 de WhatsApp, 2 de portabilidade, 2 de
   coparticipação e 2 de PME.
8. **Título de permutação** ("Tudo sobre X", "X vale a pena?", "X para iniciantes") e texto
   que só troca o nome da operadora ou da cidade.

## Obrigatório em todo artigo

- **Uma dúvida real do corretor** como tema.
- **Resposta no primeiro parágrafo.** Quem só ler o começo já leva a resposta.
- **De 3 a 6 subtítulos `<h2>`**, de preferência em forma de pergunta.
- **Um bloco prático**: tabela (`<table>`), checklist ou passo a passo numerado (`<ol>`).
- **De 700 a 1.600 palavras.**
- **Título até 90 caracteres** e **resumo (`excerpt`) de 120 a 170 caracteres**.
- **Ligação com o produto sem forçar**: no máximo um parágrafo dizendo onde o Simulador ajuda,
  com link para `/produtos` ou `/testar-gratis`. O artigo tem que ser útil mesmo para quem
  não usa o Simulador.
- **Pelo menos 1 link interno** para outro artigo do blog ou página do site que exista.
- **Imagem** (`featuredImage`) em `https://`, de banco de imagens livre (Unsplash), sem marca
  de operadora.
- **Data no futuro, às 6h** (`date`, ex.: `2026-11-03T06:00:00-03:00`), **na linha logo abaixo de `slug`**: é ela que agenda o artigo.

## Formato

Os artigos novos ficam em `src/data/artigos.ts`, no formato `WPPost` (veja o arquivo).
`content` é HTML simples: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`,
`<table>`, `<a href>`. Sem estilos inline, sem `<h1>` (o título já é o h1).

## Antes de entregar

1. Rode `npm run check:posts` e corrija até não haver **ERRO**. Avisos precisam de uma linha de
   justificativa no resumo.
2. Marque o tema como `escrito — <slug>` em `conteudo/pautas.md`.
3. Trabalhe numa branch `pauta-AAAA-MM-DD`. **Nunca faça merge na `main`**: quem aprova é o
   dono, lendo a prévia da Vercel.
