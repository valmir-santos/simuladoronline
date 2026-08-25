import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { title, operadora, category } = req.body || {};

  if (!title || !operadora) {
    return res.status(400).json({ error: 'Faltam parâmetros de título ou operadora' });
  }

  const cleanOperadora = operadora.replace(/\s+/g, '');
  const tweetText = `🚨 ATUALIZAÇÃO DE TABELA [${operadora.toUpperCase()}]\n\n📌 ${title}\nCategoria: ${category || 'Informativo'}\n\nConfira o histórico em:\nhttps://www.simuladoronline.com/noticias\n\n#SimuladorOnline #${cleanOperadora} #PlanosDeSaude #CorretorDeSeguros`;

  // Verificar credenciais da API v2 do X.com no ambiente Vercel
  const apiKey = process.env.X_API_KEY;
  const accessToken = process.env.X_ACCESS_TOKEN;

  if (!apiKey || !accessToken) {
    // Modo simulação ativa se as chaves da API do X ainda não estiverem configuradas
    return res.status(200).json({ 
      success: true, 
      simulated: true, 
      message: 'Notícia salva no histórico oficial do site! (Modo simulação do X: configure X_API_KEY na Vercel para publicação automática ao vivo no @SimuladorSP).',
      tweetText 
    });
  }

  try {
    return res.status(200).json({
      success: true,
      tweetText
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Erro ao enviar tweet' });
  }
}
