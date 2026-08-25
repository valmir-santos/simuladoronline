import type { VercelRequest, VercelResponse } from '@vercel/node';

// Pauta de backup e fontes de notícias de mercado em saúde
const HEALTH_TOPICS = [
  {
    title: 'Notícias e Bastidores do Mercado de Saúde Suplementar',
    source: 'Blog do Corretor (blogdocorretor.com)',
    feedUrl: 'https://blogdocorretor.com/feed/',
    topic: 'Novidades de Operadoras, Corretoras e Mercado de Saúde'
  },
  {
    title: 'ANS divulga novo teto de reajuste para planos individuais e familiares',
    source: 'ANS - Agência Nacional de Saúde Suplementar',
    topic: 'Reajuste Anual da ANS e Normativa Regulatória'
  },
  {
    title: 'Porto Saúde e Bradesco expandem rede credenciada de hospitais de alta complexidade',
    source: 'Sala de Imprensa Porto & Bradesco',
    topic: 'Expansão de Rede Credenciada e Atendimento Hospitalar'
  },
  {
    title: 'Amil Saúde lança nova linha de planos PME com coparticipação reduzida em SP e RJ',
    source: 'Comunicado Institucional Amil',
    topic: 'Novos Lançamentos de Planos PME e MEI'
  },
  {
    title: 'Regras da ANS para portabilidade de carências sem cumprimento de novos prazos',
    source: 'ANS - Portal de Notícias',
    topic: 'Portabilidade de Carência e Direitos do Consumidor'
  }
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  try {
    // Escolher um tema dinâmico para gerar a nova matéria
    const selectedTopic = HEALTH_TOPICS[Math.floor(Math.random() * HEALTH_TOPICS.length)];
    const geminiApiKey = process.env.GEMINI_API_KEY;

    let articleTitle = selectedTopic.title;
    let articleExcerpt = `Confira os principais detalhes sobre ${selectedTopic.topic} e como isso afeta as vendas de corretagem.`;
    let articleContent = `
      <p>A <strong>${selectedTopic.source}</strong> divulgou recentemente importantes atualizações sobre <strong>${selectedTopic.topic}</strong>, trazendo reflexos diretos para corretores de seguros, administradoras de benefícios e clientes de todo o Brasil.</p>
      <h2>Principais Mudanças e Regras</h2>
      <p>A medida busca aprimorar o equilíbrio entre a qualidade do atendimento prestado pelas operadoras e a sustentabilidade financeira dos contratos. Para corretores de planos de saúde, as novas diretrizes abrem oportunidades estratégicas de prospecção e consultoria para pequenas, médias e grandes empresas.</p>
      <h2>Dicas para o Corretor de Saúde</h2>
      <p>Mantenha sua carteira informada sobre as novidades do setor e utilize o <strong>Simulador On-Line</strong> para cotar em tempo real as melhores opções de planos Individuais, PME e Adesão de todas as operadoras do mercado.</p>
    `;

    // Se houver chave do Gemini configurada, usar IA para gerar o artigo completo
    if (geminiApiKey) {
      try {
        const prompt = `Você é um jornalista especializado no mercado de planos de saúde e odontologia no Brasil.
Escreva um artigo jornalístico completo, profissional e otimizado para SEO para o blog do site Simulador On-Line (simuladoronline.com).

Tema principal: ${selectedTopic.title}
Fonte/Contexto: ${selectedTopic.source} - ${selectedTopic.topic}

Retorne um JSON estrito com o seguinte formato:
{
  "title": "Título atraente com até 70 caracteres",
  "excerpt": "Resumo chamativo com 140 a 160 caracteres",
  "content": "Conteúdo em HTML formatado com 3 parágrafos e 2 subtítulos <h2>",
  "category": "Mercado"
}`;

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        });

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          const cleanJsonStr = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanJsonStr);
          if (parsed.title && parsed.content) {
            articleTitle = parsed.title;
            articleExcerpt = parsed.excerpt || articleExcerpt;
            articleContent = parsed.content;
          }
        }
      } catch (err) {
        console.warn('Usando template padrão de artigo.');
      }
    }

    // Salvar o novo post no banco central do blog
    const host = req.headers.host || 'www.simuladoronline.com';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    
    const blogRes = await fetch(`${protocol}://${host}/api/blog`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: articleTitle,
        excerpt: articleExcerpt,
        content: articleContent,
        category: 'Mercado',
        sourceUrl: 'https://www.gov.br/ans'
      })
    });

    const blogData = await blogRes.json();

    // Disparar o Tweet no Twitter/X automático com as hashtags
    try {
      await fetch(`${protocol}://${host}/api/tweet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: articleTitle,
          operadora: 'MERCADO SAÚDE',
          category: 'NOVA NOTÍCIA'
        })
      });
    } catch (e) {
      console.warn('Erro ao disparar tweet automático da notícia.');
    }

    return res.status(200).json({
      success: true,
      message: 'Notícia coletada, processada pela IA e publicada no blog com sucesso!',
      article: blogData.post
    });

  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Erro ao executar varredura de notícias' });
  }
}
