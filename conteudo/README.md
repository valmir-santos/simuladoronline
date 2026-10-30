# Fluxo de artigos do blog

Como um artigo sai da ideia e chega ao ar, sem depender de ninguém lembrar de publicar.

```
pautas.md ──► agente escreve ──► npm run check:posts ──► branch pauta-AAAA-MM-DD
                                                              │
                     prévia da Vercel ◄───────────────────────┘
                            │  o dono lê e aprova
                            ▼
                     merge na main  ──►  artigo fica AGENDADO (data futura)
                                                │
       todo dia 06h15: GitHub Actions ◄───────────┘
       se há artigo com a data de hoje: deploy na Vercel + aviso ao IndexNow
```

## Arquivos desta pasta

| Arquivo | Para quê | Quem mexe |
|---|---|---|
| `regras-editoriais.md` | O que pode e o que não pode ser escrito | o dono decide; o agente obedece |
| `fatos.md` | Os únicos números e afirmações permitidos | o dono confirma cada linha |
| `pautas.md` | Temas em ordem de prioridade, com status | o agente marca `escrito`; o dono marca `publicado` |

## Rodar o fluxo no Antigravity

Salve o texto abaixo como fluxo (workflow) ou tarefa agendada no Antigravity — por exemplo,
toda segunda às 8h. O agente trabalha nesta pasta do projeto
(`C:\simuladoronline\simuladoronline`).

> Leia `AGENTS.md`, `conteudo/regras-editoriais.md`, `conteudo/fatos.md` e `conteudo/pautas.md`.
> Pegue os 2 primeiros temas com Status `pendente`, na data prevista em `pautas.md`. Para cada
> um, escreva o artigo em `src/data/artigos.ts`, no formato descrito no arquivo, com a linha
> `date` (ex.: `2026-11-03T06:00:00-03:00`) logo abaixo de `slug`. Escreva para o corretor de
> planos de saúde. Use apenas números, preços e afirmações sobre a empresa que estejam em
> `fatos.md` (nada marcado NÃO USAR). Notícia ou norma só com link para a fonte oficial. Não
> invente casos, depoimentos ou estatísticas. Rode `npm run check:posts` e corrija até não
> haver ERRO. Em `pautas.md`, mude o Status para `escrito — <slug>`. Crie a branch
> `pauta-<data de hoje>`, faça o commit e envie para o GitHub. **Não faça merge na main.** No
> fim, liste os avisos que sobraram e por que cada um é aceitável.

## Revisar e aprovar (o dono)

1. Abra a prévia da branch na Vercel: projeto **simuladoronline** (é o que tem o
   domínio do site) → aba Deployments → deploy da branch → Visit. Endereços longos a Vercel
   encurta com um código, então copie o link de lá em vez de montar na mão.
2. Na **prévia**, os artigos agendados aparecem no blog como se já estivessem publicados (só
   na prévia; o site no ar continua escondendo até a data). Abra `/blog` e leia o artigo novo.
3. Leia como cliente: a resposta está na primeira frase? Algum número parece estranho? Tem algo
   que você não diria ao telefone?
4. Aprovado: faça o merge da branch na `main` (pelo GitHub ou pelo Antigravity). O artigo fica
   agendado e entra no ar sozinho na data.

## O que acontece no dia

O GitHub Actions (`.github/workflows/publicacao-diaria.yml`) roda às 06h15 de Brasília:

- Sem artigo com a data de hoje: não faz nada.
- Com artigo: dispara um deploy na Vercel, espera o artigo responder no site e avisa os
  buscadores pelo IndexNow. Dá para rodar na mão pela aba **Actions** do GitHub.

O Google não usa IndexNow: ele encontra o artigo pelo `sitemap.xml`, que o build atualiza.

## Checagem

`npm run check:posts` lê todos os artigos. Artigo **agendado** (data de hoje em diante) com
problema recebe **ERRO** e não deve ir para a main; artigo **já publicado** recebe só **AVISO**.
A mesma checagem roda no GitHub em todo envio (`.github/workflows/checagem-artigos.yml`).
