# Base de fatos — Simulador On-Line

Só o que está aqui pode virar número, preço ou afirmação sobre a empresa e o produto num
artigo. **Confirmado** = `sim` (revisado pelo dono) ou `a confirmar` (está no site hoje, mas
ainda não foi revisado). `NÃO USAR` = não entra em artigo até ser comprovado.

Levantado do código do site em 30/10/2026. O script `npm run check:posts` compara os números
dos artigos novos com os desta página.

## Empresa

| Fato | Valor | Fonte | Confirmado |
|---|---|---|---|
| Nome | Simulador On-Line | `index.html` | sim |
| Autor dos artigos do blog | Valmir J Santos, Gerente de Marketing | decisão do dono em 30/10/2026 | sim |
| Endereço | Rua Gonçalves Crespo, 324 — Tatuapé — São Paulo/SP — CEP 03067-030 | `index.html`, `Contact.tsx` | a confirmar |
| Telefone / WhatsApp de vendas (SP) | (11) 3219-0409 | `Contact.tsx` | a confirmar |
| Telefone (RJ) | (21) 3527-0540 | `Contact.tsx` | a confirmar |
| E-mail comercial | comercial@simuladoronline.com.br | `Contact.tsx` | a confirmar |
| Fundação | 2006 | `About.tsx` | a confirmar |
| Linha do tempo | 2006 fundação · 2012 Simulador Nacional · 2018 CRM e sites | `About.tsx` | a confirmar |
| Instagram, Facebook, YouTube | @simuladoronline | `Navigation.tsx` | a confirmar |
| Perfil no X | **conflito:** @simuladorsp (rodapé) × @simuladoronline (JSON-LD) | `Navigation.tsx`, `index.html` | a confirmar |
| CNPJ | não aparece no site | — | a confirmar |
| Horário de atendimento | não aparece no site | — | a confirmar |

## Números de mercado da empresa — NÃO USAR até comprovar

Estão na página Sobre, mas sem fonte. Número inflado ou desatualizado em artigo é risco de
credibilidade com o próprio corretor, que é o público.

| Afirmação | Onde está | Situação |
|---|---|---|
| +35 mil corretores ativos | `About.tsx`, `Home.tsx` | NÃO USAR |
| 800 mil cálculos por dia | `About.tsx` | NÃO USAR |
| 99,9% de taxa de precisão | `About.tsx` | NÃO USAR |
| 120+ colaboradores | `About.tsx` | NÃO USAR |
| "18+ anos" (desatualizado: 2006 → 20 anos em 2026) | `About.tsx` | NÃO USAR |
| "ferramenta nº1", "a principal do mercado", "mais rápida e confiável" | `index.html`, `HeroCarousel.tsx`, `About.tsx` | NÃO USAR |

## Planos do multicálculo (preço mensal por quantidade de usuários)

Fonte: `src/components/PricingTable.tsx` (tabela em vigor no site). Os valores antigos
R$ 49,90 e R$ 89,90 que aparecem em `wpService.ts` estão **desatualizados** e não valem.

| Usuários | Estadual | Nacional |
|---|---|---|
| 1 | R$ 30 | R$ 50 |
| 2 | R$ 40 | R$ 70 |
| 3 | R$ 50 | R$ 85 |
| 4 | R$ 60 | R$ 100 |
| 5 | R$ 65 | R$ 110 |
| 6 | R$ 70 | R$ 120 |
| 7 | R$ 75 | R$ 130 |
| 8 | R$ 80 | R$ 140 |
| 9 | R$ 85 | R$ 150 |
| 10 | R$ 90 | R$ 160 |
| 20 | R$ 150 | R$ 240 |
| 50 | R$ 250 | R$ 400 |
| 70 | — | R$ 500 |
| 100 | R$ 350 | R$ 600 |
| 200 | R$ 500 | — |

| Fato | Valor | Fonte | Confirmado |
|---|---|---|---|
| Taxa de implantação | R$ 50, uma vez, a partir de 2 acessos | `PricingTable.tsx` | a confirmar |
| Estadual cobre | planos Individual, Familiar, Adesão e PME do estado/cidade; valores por padrão e categoria; faixa etária | `Contratar.tsx` | a confirmar |
| Nacional cobre | o mesmo, com cobertura nacional | `Contratar.tsx` | a confirmar |
| Landing page inclusa no Nacional | 1 por CPF/plano ativo, taxa única de R$ 50 | `PricingTable.tsx`, `Products.tsx` | a confirmar |
| Teste grátis | 5 dias | `TestarGratis.tsx` (decisão do dono em 30/10/2026) | sim |
| Teste grátis: condições | não pede cartão; cancela sozinho se não houver pagamento | `TestarGratis.tsx` | a confirmar |
| Fidelidade / multa | não aparece no site | — | a confirmar |

## Sites e landing pages

| Fato | Valor | Fonte | Confirmado |
|---|---|---|---|
| Site Premium: ativação | R$ 300, em até 2x | `Contratar.tsx` | a confirmar |
| Site Premium: manutenção | R$ 70/mês com Estadual · R$ 90/mês com Nacional · R$ 50/mês sem simulador | `Contratar.tsx` | a confirmar |
| Site Premium: inclui | 3 e-mails de 10 GB, SSL e hospedagem | `Contratar.tsx` | a confirmar |
| Site Premium: propriedade | o site passa a ser do cliente após 12 meses | `Contratar.tsx` | a confirmar |
| Landing page sob demanda | entregue em até 5 dias úteis | `Products.tsx` | a confirmar |
| Landing page: rastreamento | pixel do Meta, Google Ads e TikTok | `Products.tsx` | a confirmar |
| Uso de marca de operadora | o corretor providencia a autorização da operadora | `Products.tsx` | a confirmar |
| Landing pages prontas por operadora | Bradesco Saúde, SulAmérica, Porto Seguro Saúde, Porto Saúde Bairros, Alice, Amil, Amil Dental, MedSênior, Prevent Senior, Hapvida/NotreDame, Leve Saúde (RJ); mais Seguro Auto e Consórcio | `wpService.ts` (MOCK_LANDING_PAGES) | a confirmar |

## Multicálculo e CRM — funcionalidades

| Fato | Fonte | Confirmado |
|---|---|---|
| Cotação de saúde e odonto, com comparativo e envio em PDF | `Home.tsx` | a confirmar |
| Tabelas com rede credenciada e carências, nacional e estadual | `Home.tsx` | a confirmar |
| Avisos de atualização de tabelas publicados em `/noticias` | página Notícias | a confirmar |
| CRM ("Gestor de Clientes"): cadastro manual ou importação em massa; distribuição de leads entre corretores; origem do lead; formulários personalizados; relatórios; cotações; envio por WhatsApp e e-mail | `Products.tsx` | a confirmar |
| Quantidade de operadoras e de tabelas | **não informada no site** — não escreva número | — | — |

## O que não entra em artigo

- Depoimentos da home (Ricardo Oliveira, Juliana Mendes, Marcelo Costa): não há como comprovar.
- Logos de operadoras na home ("confiada pelas maiores operadoras"): estão marcados como exemplo no código.
- Notícia sobre operadora (lançamento, reajuste, rede) **sem link para a fonte oficial** e data.

## Como acrescentar um fato

Inclua a linha na tabela certa com a fonte e `Confirmado: sim` só depois que o dono conferir.
