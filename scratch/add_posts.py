import re

file_path = "c:\\simuladoronline\\simuladoronline\\src\\services\\wpService.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_posts = """  ,{
    id: 5,
    title: "Sistema de cotação de plano de saúde: A evolução do corretor",
    slug: "sistema-cotacao-plano-saude",
    excerpt: "Veja como um sistema de cotação de plano de saúde profissional pode economizar horas do seu dia e aumentar sua conversão.",
    content: "<h2>O Tempo é o Maior Ativo do Corretor</h2><p>Trabalhar com seguros e planos de saúde exige agilidade. Um <strong>sistema de cotação de plano de saúde</strong> elimina a necessidade de fazer buscas manuais em diversas tabelas em PDF ou sites de operadoras. Com apenas alguns cliques, você tem acesso a todos os planos disponíveis para o perfil do cliente, já formatados em uma proposta bonita e profissional.</p><h3>Vantagens Imediatas</h3><ul><li><strong>Redução de Erros:</strong> O sistema calcula com precisão, evitando que você passe um valor errado para o cliente.</li><li><strong>Mais Tempo para Vender:</strong> O tempo que você gastaria montando uma planilha, você usa para fazer follow-up ou captar novos leads.</li><li><strong>Profissionalismo:</strong> O cliente percebe o valor de uma proposta gerada por sistema, com logotipo da sua corretora e formatação impecável.</li></ul><p>Investir na digitalização do seu processo de cotação não é um luxo, é uma necessidade para quem deseja crescer no mercado.</p>",
    date: "2026-08-06T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/cotacao/800/600",
    category: "Ferramentas",
    tags: ["Cotação", "Vendas", "Tecnologia"]
  },
  {
    id: 6,
    title: "Simulador de planos de saúde para corretores: Como escolher?",
    slug: "simulador-planos-saude-corretores",
    excerpt: "Um bom simulador de planos de saúde para corretores faz toda a diferença. Entenda o que avaliar antes de contratar um.",
    content: "<h2>A Escolha Certa Faz a Diferença</h2><p>Nem todo <strong>simulador de planos de saúde para corretores</strong> é igual. Alguns oferecem apenas o básico, enquanto outros são verdadeiras plataformas de gestão. Ao buscar uma ferramenta para sua corretora, preste atenção nestes detalhes cruciais:</p><h3>O que avaliar?</h3><ul><li><strong>Atualização de Tabelas:</strong> As operadoras mudam regras e preços constantemente. O simulador precisa garantir 100% de precisão.</li><li><strong>Integração com CRM:</strong> Um simulador isolado ajuda, mas um simulador integrado ao seu Gestor de Clientes (CRM) transforma a sua operação.</li><li><strong>Visual das Propostas:</strong> A proposta que o cliente recebe deve ser limpa, clara e fácil de ler no celular.</li></ul><p>Nossa plataforma oferece a solução definitiva, pensada por corretores e para corretores, reunindo todas essas características em um único lugar.</p>",
    date: "2026-08-09T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/simulador/800/600",
    category: "Tecnologia",
    tags: ["Simulador", "Corretores", "Software"]
  },
  {
    id: 7,
    title: "Multicálculo saúde e odonto: Venda cruzada (Cross-selling)",
    slug: "multicalculo-saude-odonto",
    excerpt: "Use o multicálculo saúde e odonto para oferecer combos aos seus clientes e dobrar sua comissão em cada fechamento.",
    content: "<h2>O Poder do Cross-Selling (Venda Cruzada)</h2><p>Você sabia que é muito mais fácil vender um plano odontológico para quem já está comprando um plano de saúde do que para um novo cliente? Utilizar um <strong>multicálculo saúde e odonto</strong> facilita enormemente essa estratégia.</p><h3>Vantagens do Combo</h3><ul><li><strong>Aumento do Ticket Médio:</strong> Você ganha mais sem precisar prospectar um novo cliente.</li><li><strong>Fidelização:</strong> O cliente concentra as necessidades da família na sua corretora.</li><li><strong>Praticidade:</strong> Com o nosso sistema, você gera a cotação de saúde e já inclui as opções de odonto na mesma proposta.</li></ul><p>Não deixe dinheiro na mesa. Sempre ofereça o plano odontológico como um 'upgrade' natural do plano de saúde.</p>",
    date: "2026-08-12T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/odonto/800/600",
    category: "Estratégia",
    tags: ["Multicálculo", "Odonto", "CrossSelling"]
  },
  {
    id: 8,
    title: "CRM para corretor de seguros: Não perca mais nenhuma venda",
    slug: "crm-corretor-seguros",
    excerpt: "Descubra como um CRM para corretor de seguros organiza seus contatos, agenda retornos e aumenta sua taxa de fechamento.",
    content: "<h2>O Fim da Agenda de Papel</h2><p>Você lembra para quem prometeu ligar hoje às 14h? E sobre o que era o assunto? Se você depende da memória ou de anotações no caderno, você está perdendo vendas. O <strong>CRM para corretor de seguros</strong> é o cérebro digital da sua operação.</p><h3>Por que você precisa de um CRM?</h3><ul><li><strong>Histórico Completo:</strong> Saiba exatamente o que foi conversado na última ligação, quais cotações foram enviadas e quais as objeções do cliente.</li><li><strong>Follow-up (Acompanhamento) Automático:</strong> O sistema te lembra quem você precisa contatar hoje.</li><li><strong>Funil de Vendas:</strong> Tenha uma visão clara de quantos leads estão em negociação, quantos estão aguardando proposta e quantos fecharam no mês.</li></ul><p>Corretores que implementam um CRM profissional conseguem aumentar suas vendas em até 40% apenas organizando o acompanhamento dos clientes que antes seriam esquecidos.</p>",
    date: "2026-08-15T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/crm/800/600",
    category: "Marketing Digital",
    tags: ["CRM", "Leads", "Vendas"]
  },
  {
    id: 9,
    title: "Site para corretor de plano de saúde: O vendedor 24 horas",
    slug: "site-vendedor-24-horas",
    excerpt: "Como transformar o seu site para corretor de plano de saúde em uma verdadeira máquina de captação de clientes na internet.",
    content: "<h2>Sua Presença Digital</h2><p>Ter um <strong>site para corretor de plano de saúde</strong> deixou de ser um luxo para se tornar uma ferramenta básica de trabalho. Quando o cliente pesquisa no Google 'plano de saúde para minha empresa', ele precisa encontrar a sua página.</p><h3>Elementos que Convertem</h3><ul><li><strong>Formulários Curtos:</strong> Peça apenas o essencial (Nome, WhatsApp, E-mail e Tipo de Plano) para não espantar o visitante.</li><li><strong>Botão de WhatsApp:</strong> O ícone do WhatsApp no canto da tela é obrigatório para um atendimento ágil.</li><li><strong>Integração:</strong> O site ideal já vem integrado com o seu simulador, permitindo que o cliente faça simulações parciais que caem direto no seu CRM como leads quentes.</li></ul><p>O Simulador On-line oferece templates profissionais já prontos, otimizados para captura e com alto nível de segurança, para você começar a captar na internet imediatamente.</p>",
    date: "2026-08-18T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/website/800/600",
    category: "Marketing Digital",
    tags: ["Site", "Captação", "Google"]
  },
  {
    id: 10,
    title: "A importância do atendimento ágil na corretagem",
    slug: "importancia-atendimento-agil-corretagem",
    excerpt: "O cliente digital não espera. Aprenda técnicas e ferramentas para acelerar o seu tempo de resposta e garantir o fechamento.",
    content: "<h2>O Novo Padrão de Consumo</h2><p>Se você demora 3 horas para enviar uma cotação, seu concorrente já enviou, explicou e possivelmente fechou o contrato. O uso de um <strong>sistema de cotação de plano de saúde</strong> e de automações de WhatsApp são indispensáveis.</p><h3>Dicas de Agilidade</h3><ul><li><strong>Respostas Rápidas no WhatsApp:</strong> Tenha mensagens pré-configuradas para o primeiro contato.</li><li><strong>Uso de Ferramentas:</strong> Ferramentas como o <strong>multicálculo saúde e odonto</strong> cortam o tempo de produção da proposta.</li></ul><p>Seja rápido, seja preciso e mostre que você domina a tecnologia a favor do seu cliente.</p>",
    date: "2026-08-21T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/speed/800/600",
    category: "Dicas de Vendas",
    tags: ["Atendimento", "Velocidade", "Vendas"]
  },
  {
    id: 11,
    title: "Métricas que todo corretor de seguros deve acompanhar",
    slug: "metricas-corretor-seguros",
    excerpt: "Você sabe qual a sua taxa de conversão? O custo por lead? Aprenda a olhar para os números e gerenciar sua corretora como um negócio.",
    content: "<h2>Gestão Baseada em Dados</h2><p>Muitos corretores vendem por intuição. Mas para crescer, é preciso medir. Usando um <strong>CRM para corretor de seguros</strong>, você passa a ter acesso a dados valiosos.</p><h3>Principais Métricas</h3><ul><li><strong>Custo de Aquisição de Cliente (CAC):</strong> Quanto você gasta em anúncios para fechar 1 contrato?</li><li><strong>Taxa de Conversão:</strong> De cada 10 contatos, quantos viram vendas?</li></ul><p>Acompanhar esses números mensalmente ajudará você a investir seu dinheiro e tempo de forma mais inteligente.</p>",
    date: "2026-08-24T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/metrics/800/600",
    category: "Gestão",
    tags: ["Métricas", "Gestão", "Resultados"]
  },
  {
    id: 12,
    title: "Como criar Landing Pages de alta conversão",
    slug: "landing-pages-alta-conversao",
    excerpt: "Sua campanha de marketing precisa de uma Landing Page focada. Veja como criar páginas que transformam cliques em orçamentos reais.",
    content: "<h2>O Destino Perfeito para os seus Anúncios</h2><p>Quando você faz um anúncio no Facebook ou no Google, você não deve direcionar o cliente para a página inicial do seu <strong>site para corretor de plano de saúde</strong>. O ideal é enviá-lo para uma Landing Page (página de captura) específica do plano anunciado.</p><h3>Estrutura Vencedora</h3><ul><li><strong>Título Promessa:</strong> Claro e direto.</li><li><strong>Benefícios e Prova Social:</strong> Depoimentos de clientes satisfeitos.</li><li><strong>Call to Action (Chamada para Ação):</strong> Botões contrastantes e formulários simples.</li></ul><p>O Simulador On-line disponibiliza modelos testados de Landing Pages para seus assinantes. Aproveite!</p>",
    date: "2026-08-27T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/landingpage/800/600",
    category: "Marketing Digital",
    tags: ["LandingPage", "Conversão", "Anúncios"]
  },
  {
    id: 13,
    title: "O futuro da corretagem de planos de saúde",
    slug: "futuro-corretagem-planos-saude",
    excerpt: "A Inteligência Artificial e a automação estão mudando a profissão. O que esperar dos próximos anos e como se preparar?",
    content: "<h2>Tecnologia como Aliada, não como Ameaça</h2><p>A automação já é realidade. O <strong>simulador de planos de saúde para corretores</strong> evoluiu de simples tabelas para sistemas inteligentes que recomendam o melhor plano baseado no perfil de uso do cliente.</p><p>O corretor do futuro será muito mais um analista de riscos e consultor do que um 'tirador de pedidos'. Use o tempo ganho com ferramentas para se especializar em produtos de alta complexidade e gestão de grandes contas empresariais (PME e Adesão).</p>",
    date: "2026-08-30T10:00:00Z",
    featuredImage: "https://picsum.photos/seed/future/800/600",
    category: "Mercado de Saúde",
    tags: ["Futuro", "IA", "Tendências"]
  }"""

content = re.sub(r'(\s+)\];\s+const MOCK_PRODUCTS', new_posts + r'\1];\n\nconst MOCK_PRODUCTS', content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Mock posts updated successfully.")
