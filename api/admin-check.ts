import { isAdmin, adminPinConfigured } from './_auth.js';

type ApiReq = any;
type ApiRes = any;

// Confere a senha digitada no login dos painéis, sem expor a senha no navegador.
export default async function handler(req: ApiReq, res: ApiRes) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });
  if (!adminPinConfigured()) {
    return res.status(503).json({ error: 'A senha do painel (ADMIN_PIN) não está configurada neste deploy da Vercel.' });
  }
  if (!isAdmin(req)) {
    // Pequena espera em cada erro para dificultar tentativa e erro em massa
    await new Promise((r) => setTimeout(r, 800));
    return res.status(401).json({ error: 'Senha incorreta' });
  }
  return res.status(200).json({ success: true });
}
