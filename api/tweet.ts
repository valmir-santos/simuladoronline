import crypto from 'crypto';

type ApiReq = any;
type ApiRes = any;

function percentEncode(str: string): string {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

function generateOAuthHeader(
  method: string,
  url: string,
  apiKey: string,
  apiSecret: string,
  accessToken: string,
  accessSecret: string
): string {
  const oauthParams: Record<string, string> = {
    oauth_consumer_key: apiKey,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: '1.0'
  };

  const sortedParamKeys = Object.keys(oauthParams).sort();
  const parameterString = sortedParamKeys
    .map((key) => `${percentEncode(key)}=${percentEncode(oauthParams[key])}`)
    .join('&');

  const signatureBaseString = `${method.toUpperCase()}&${percentEncode(url)}&${percentEncode(parameterString)}`;
  const signingKey = `${percentEncode(apiSecret)}&${percentEncode(accessSecret)}`;

  const signature = crypto.createHmac('sha1', signingKey).update(signatureBaseString).digest('base64');
  oauthParams['oauth_signature'] = signature;

  const headerParts = Object.keys(oauthParams).map((key) => `${percentEncode(key)}="${percentEncode(oauthParams[key])}"`);
  return `OAuth ${headerParts.join(', ')}`;
}

export default async function handler(req: ApiReq, res: ApiRes) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { title, operadora, category, linkUrl } = req.body || {};

  if (!title) {
    return res.status(400).json({ error: 'Título do aviso ausente' });
  }

  const targetUrl = linkUrl || 'https://www.simuladoronline.com/noticias';

  // Montar tweet otimizado para o perfil @SimuladorSP
  const tweetText = `📢 ATUALIZAÇÃO SIMULADOR ON-LINE\n\n${title}\n\nHistorico completo:\n${targetUrl}\n\n#SimuladorOnline #PlanosDeSaude #CorretorDeSeguros #Multicalculos #MulticalculosPlanosDeSaude`;

  const apiKey = process.env.X_API_KEY;
  const apiSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    return res.status(200).json({
      success: true,
      simulated: true,
      message: 'Notícia registrada no site central! (Configure as 4 chaves na Vercel para postar ao vivo no Twitter)',
      tweetText
    });
  }

  try {
    const url = 'https://api.twitter.com/2/tweets';
    const authHeader = generateOAuthHeader('POST', url, apiKey, apiSecret, accessToken, accessSecret);

    const twitterRes = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: tweetText })
    });

    const responseData = await twitterRes.json();

    if (!twitterRes.ok) {
      console.error('Erro na API do Twitter:', responseData);
      return res.status(twitterRes.status).json({
        error: 'Falha ao postar no Twitter',
        details: responseData
      });
    }

    return res.status(200).json({
      success: true,
      live: true,
      message: 'Postado com sucesso no @SimuladorSP!',
      data: responseData
    });
  } catch (error: any) {
    console.error('Erro de envio ao Twitter:', error);
    return res.status(500).json({ error: error.message || 'Erro de conexão com o Twitter' });
  }
}
