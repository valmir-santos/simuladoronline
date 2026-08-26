import { Redis } from '@upstash/redis';

type ApiReq = any;
type ApiRes = any;

export interface CompactTableUpdate {
  id: number;
  badge: 'ATUALIZ.' | 'REAJUSTE' | 'NOVO' | 'SUSPENSO';
  text: string;
  date: string;
  monthKey: string;
  monthLabel: string;
}

// ─── DADOS INICIAIS (seed) ───────────────────────────────────────────
const SEED_UPDATES: CompactTableUpdate[] = [
  { id: 255, badge: 'NOVO', text: 'TRASMONTANO SAÚDE - SP: Nova Linha PRIME (PME/Empresarial) disponível', date: '26/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 254, badge: 'ATUALIZ.', text: 'UNIHOSP SAÚDE (CORPe SAÚDE) - SP: Comercialização do projeto Adesão retomada', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 253, badge: 'ATUALIZ.', text: 'VIDA TOP+ SAÚDE (CORPe SAÚDE) - SP: Atualização de valores disponível no projeto Adesão', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 252, badge: 'ATUALIZ.', text: 'SÃO FRANCISCO VIDA (CORPe SAÚDE) - SP: Atualização disponível no projeto Adesão', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 251, badge: 'ATUALIZ.', text: 'SEGUROS UNIMED (CORPe SAÚDE): Comercialização do projeto Adesão retomada - 25/08/2026', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 250, badge: 'ATUALIZ.', text: 'BRADESCO SAÚDE - PME - SP - INTERIOR 1: Saíram os produtos Flex e Ideal(FCER e TNST) entraram no lugar (TNSM e FCQR)', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 200, badge: 'ATUALIZ.', text: 'ÔNIX SAÚDE (GRUPO CONTÉM) - RJ: Atualização de valores disponível no projeto Adesão', date: '24/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 201, badge: 'ATUALIZ.', text: 'OPLAN (GRUPO CONTÉM) - RJ: Atualização de valores disponível no projeto Adesão', date: '24/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 202, badge: 'ATUALIZ.', text: 'MEDSÊNIOR (SUPERMED) - RJ: Atualizações disponíveis no projeto Adesão', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 203, badge: 'NOVO', text: 'UNIMED NOVA IGUAÇU (CORPe SAÚDE) - RJ: Novo portfólio disponível no projeto PME ADMINISTRADO', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 204, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME - FLAMENGO (SOLUTIONS) - RJ: Projeto Adesão atualizado e disponível', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 205, badge: 'ATUALIZ.', text: 'HSMED (CORPe SAÚDE) - RJ: Atualização das regras de comercialização do projeto Adesão disponível', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 206, badge: 'ATUALIZ.', text: 'BLUE MED - SP: Tabelas PF e PME atualizadas e disponíveis', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 207, badge: 'NOVO', text: 'ÚNICA SAÚDE - SP: Novos hospitais credenciados (ZONA SUL - Hospital Dom Alvarenga / ZONA LESTE - Hospital Independência)', date: '21/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 208, badge: 'REAJUSTE', text: 'SULAMÉRICA SAÚDE (QUALICORP) - SP / RJ: Reajuste de valores disponível no projeto Adesão', date: '20/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 209, badge: 'ATUALIZ.', text: 'HAPVIDA NOTREDAME (CORPe SAÚDE) - SP / RJ: Atualizações disponíveis no projeto Adesão', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 210, badge: 'ATUALIZ.', text: 'UNIMED RECIFE - PE: Atualização de valores disponível no PME (1 até 99 vidas)', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 211, badge: 'ATUALIZ.', text: 'KLINI SAÚDE - RJ: Atualização de valores disponível na tabela PME (1 vida)', date: '19/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 212, badge: 'ATUALIZ.', text: 'SÃO LUCAS (CORPe SAÚDE) - MG: Atualização do quadro de Coparticipação disponível no projeto Adesão', date: '18/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 213, badge: 'NOVO', text: 'AMIL SAÚDE - PME: Plano (Amil Bronze SP Mais) disponível na acomodação Apartamento (Quarto privativo)', date: '17/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' }
];

const KV_KEY = 'simulador:noticias';

// ─── HELPERS REDIS ───────────────────────────────────────────────────
function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

async function loadUpdates(): Promise<CompactTableUpdate[]> {
  const redis = getRedis();
  if (redis) {
    try {
      const stored = await redis.get<CompactTableUpdate[]>(KV_KEY);
      if (stored && Array.isArray(stored) && stored.length > 0) return stored;
      // Seed: primeira vez — gravar dados iniciais no Redis
      await redis.set(KV_KEY, SEED_UPDATES);
      return SEED_UPDATES;
    } catch (e) {
      console.warn('Redis indisponível, usando dados estáticos:', e);
    }
  }
  return SEED_UPDATES;
}

async function saveUpdates(updates: CompactTableUpdate[]): Promise<void> {
  const redis = getRedis();
  if (redis) {
    try { await redis.set(KV_KEY, updates); } catch (e) { console.warn('Erro ao gravar no Redis:', e); }
  }
}

// ─── HANDLER ─────────────────────────────────────────────────────────
export default async function handler(req: ApiReq, res: ApiRes) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Carregar dados persistidos do Redis (ou fallback estático)
  const updates = await loadUpdates();

  // ── GET: Listar todas as atualizações ──
  if (req.method === 'GET') {
    return res.status(200).json(updates);
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const masterPin = '(}-!#$%*V@1miR$632!.';

  if (req.method === 'POST') {
    const { action, id, badge, text, date, monthKey, monthLabel, pin } = body;

    // ── EDITAR ──
    if (action === 'edit') {
      if (pin !== masterPin && pin !== '2026' && pin !== 'simulador') {
        return res.status(401).json({ error: 'Senha de acesso incorreta' });
      }
      const index = updates.findIndex((u: CompactTableUpdate) => u.id === Number(id) || String(u.id) === String(id));
      if (index === -1) return res.status(404).json({ error: 'Atualização não encontrada' });

      updates[index] = {
        ...updates[index],
        badge: badge || updates[index].badge,
        text: text ? String(text).trim() : updates[index].text,
        date: date || updates[index].date,
        monthKey: monthKey || updates[index].monthKey,
        monthLabel: monthLabel || updates[index].monthLabel
      };
      await saveUpdates(updates);
      return res.status(200).json({ success: true, data: updates[index] });
    }

    // ── EXCLUIR ──
    if (action === 'delete') {
      if (pin !== masterPin && pin !== '2026' && pin !== 'simulador') {
        return res.status(401).json({ error: 'Senha de acesso incorreta' });
      }
      const index = updates.findIndex((u: CompactTableUpdate) => u.id === Number(id) || String(u.id) === String(id));
      if (index !== -1) updates.splice(index, 1);
      await saveUpdates(updates);
      return res.status(200).json({ success: true, message: 'Notícia removida com sucesso!' });
    }

    // ── NOVO CADASTRO ──
    if (!text || !badge || !monthKey) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const cleanText = String(text).trim();
    const isDuplicate = updates.some(
      (u: CompactTableUpdate) => u.text.toLowerCase() === cleanText.toLowerCase() && u.monthKey === monthKey
    );
    if (isDuplicate) {
      return res.status(200).json({ success: true, duplicate: true, message: 'Aviso já existe.', data: updates[0] });
    }

    const newEntry: CompactTableUpdate = {
      id: Date.now(),
      badge,
      text: cleanText,
      date: date || new Date().toLocaleDateString('pt-BR'),
      monthKey,
      monthLabel: monthLabel || 'Agosto'
    };

    updates.unshift(newEntry);
    await saveUpdates(updates);

    return res.status(201).json({ success: true, data: newEntry, totalCount: updates.length });
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
