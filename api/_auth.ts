// Autenticação das rotas administrativas. Arquivos de /api que começam com "_"
// não viram função na Vercel, então este módulo só é importado pelas outras rotas.
//
// Variáveis de ambiente (painel da Vercel > Settings > Environment Variables):
//   ADMIN_PIN   senha dos painéis /admin-blog e /noticias
//   CRON_SECRET segredo que a Vercel envia nos crons e que as rotas usam entre si
// Sem elas, toda ação administrativa é recusada.
import crypto from 'crypto';

type Req = { headers?: Record<string, string | string[] | undefined>; body?: any };

const safeEqual = (a: string, b: string) => {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  return A.length === B.length && crypto.timingSafeEqual(A, B);
};

const header = (req: Req, name: string) => {
  const value = req.headers?.[name];
  return Array.isArray(value) ? value[0] : value;
};

// Senha digitada no painel: vem no corpo (pin) ou no cabeçalho x-admin-pin.
export const isAdmin = (req: Req) => {
  const expected = process.env.ADMIN_PIN;
  const pin = header(req, 'x-admin-pin') ?? req.body?.pin;
  return !!expected && typeof pin === 'string' && safeEqual(pin.trim(), expected);
};

// Chamada do cron da Vercel ou de uma rota interna (Authorization: Bearer CRON_SECRET).
export const isInternal = (req: Req) => {
  const secret = process.env.CRON_SECRET;
  const auth = header(req, 'authorization');
  return !!secret && typeof auth === 'string' && safeEqual(auth, `Bearer ${secret}`);
};

export const internalHeaders = () => ({ Authorization: `Bearer ${process.env.CRON_SECRET || ''}` });
