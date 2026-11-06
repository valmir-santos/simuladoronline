import { Redis } from '@upstash/redis';
import { isAdmin } from './_auth.js';

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

export function getMonthInfoFromDate(dateStr: string): { key: string; label: string } | null {
  if (!dateStr) return null;
  const dmy = dateStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
  if (!dmy) return null;
  const monthNum = parseInt(dmy[2], 10);
  const MONTH_MAP: Record<number, { key: string; label: string }> = {
    1: { key: 'janeiro', label: 'Janeiro' },
    2: { key: 'fevereiro', label: 'Fevereiro' },
    3: { key: 'marco', label: 'Março' },
    4: { key: 'abril', label: 'Abril' },
    5: { key: 'maio', label: 'Maio' },
    6: { key: 'junho', label: 'Junho' },
    7: { key: 'julho', label: 'Julho' },
    8: { key: 'agosto', label: 'Agosto' },
    9: { key: 'setembro', label: 'Setembro' },
    10: { key: 'outubro', label: 'Outubro' },
    11: { key: 'novembro', label: 'Novembro' },
    12: { key: 'dezembro', label: 'Dezembro' }
  };
  return MONTH_MAP[monthNum] || null;
}

// ─── DADOS INICIAIS (seed) ───────────────────────────────────────────
const SEED_UPDATES: CompactTableUpdate[] = [
  // NOVEMBRO 2026
  { id: 1793972865001, badge: 'ATUALIZ.', text: 'UNIHOSP SAÚDE - SP: Atualização de rede em todos os produtos com novos credenciamentos disponível.', date: '05/11/2026', monthKey: 'novembro', monthLabel: 'Novembro' },
  { id: 1793972865002, badge: 'ATUALIZ.', text: 'AMPLA SAÚDE (TEC GROUP): Regra de Dependentes atualizada (Sobrinhos, netos e irmãos a partir dos 12 anos de idade).', date: '05/11/2026', monthKey: 'novembro', monthLabel: 'Novembro' },
  { id: 1793972865003, badge: 'ATUALIZ.', text: 'UNIMED SERRANA (SUPERMED) - RJ: Atualização de valores disponível no projeto Adesão.', date: '05/11/2026', monthKey: 'novembro', monthLabel: 'Novembro' },
  { id: 1793972865004, badge: 'ATUALIZ.', text: 'AMIL (SUPERMED) SP/RJ: Atualizações disponíveis no projeto Adesão.', date: '05/11/2026', monthKey: 'novembro', monthLabel: 'Novembro' },

  // OUTUBRO 2026
  { id: 1793972865005, badge: 'NOVO', text: 'DENTAL KLIN - SP: Novo projeto PME odontológico disponível.', date: '28/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865006, badge: 'NOVO', text: 'NOTREDAME SAÚDE SP/RJ: Rede credenciada da nova Linha Metais disponível.', date: '28/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865007, badge: 'ATUALIZ.', text: 'HAPVIDA SAÚDE: SP/RJ - Atualização dos valores dos produtos Smart 500 e Smart Prime no PME.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865008, badge: 'SUSPENSO', text: 'HAPVIDA SAÚDE: Comercialização do produto Nosso Médico Apartamento nas filiais de São Paulo, Mogi das Cruzes, São Bernardo do Campo, Guarulhos, Santo André, Santos e Osasco suspensa.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865009, badge: 'NOVO', text: 'NOTREDAME SAÚDE: SP/RJ - Inclusão da nova linha de produtos premium nas tabelas dos canais Super Simples (1 vida e 2 a 29 vidas) e PME.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865010, badge: 'ATUALIZ.', text: 'SÃO FRANCISCO VIDA (CORPe SAÚDE) - SP: Atualização na idade mínima da entidade estudantil UCE disponível.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865011, badge: 'ATUALIZ.', text: 'AMPLA SAÚDE (TEC GROUP): Atualização de faixa etária disponível nos projetos Adesão (SP/RJ/DF/PE) e PME (SP).', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865012, badge: 'SUSPENSO', text: 'ASSIM SAÚDE - RJ: Comercialização do produto médico (individual/familiar) suspensa.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865013, badge: 'NOVO', text: 'ALICE SAÚDE - SP: Tabelas com contratos de 24 meses para PME porte 1 disponíveis na operadora.', date: '23/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },
  { id: 1793972865014, badge: 'ATUALIZ.', text: 'SÃO CAMILO (CORPe SAÚDE) - SP: Campanha promocional de carência zero disponível nos projetos Adesão e PME.', date: '22/10/2026', monthKey: 'outubro', monthLabel: 'Outubro' },

  // SETEMBRO 2026
  { id: 1790121855631, badge: 'ATUALIZ.', text: 'PROASA SAÚDE (TEC GROUP) - SP / DF / BA / AM / PA - Atualização de valores disponível no projeto PME.', date: '22/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789777393466, badge: 'REAJUSTE', text: 'GARANTIA DE SAÚDE (CORPe SAÚDE) - SP - Reajuste de valores Anual disponível no projeto Adesão.', date: '18/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789777324114, badge: 'ATUALIZ.', text: 'NORDESTE SAÚDE (CORPe SAÚDE) - BA - Atualizações disponíveis no projeto Adesão.', date: '18/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789777290383, badge: 'NOVO', text: 'SÃO CAMILO (TEC GROUP) - SP - Novo projeto PME disponível.', date: '18/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789777261649, badge: 'NOVO', text: 'HUMANA SAÚDE (CORPe): Maringá/Londrina-PR - Novo projeto PME disponível.', date: '18/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789598451720, badge: 'ATUALIZ.', text: 'CENTRO CLÍNICO GAÚCHO (CORPe SAÚDE) - RS - Atualizações disponíveis no projeto Adesão.', date: '16/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789506168283, badge: 'ATUALIZ.', text: 'DENTALPAR (HEBROM) - SP - Alteração de valores disponível no projetos Adesão e PME.', date: '15/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789483168732, badge: 'REAJUSTE', text: 'PREVENT SÊNIOR - Reajuste de valores disponível (SP / RJ).', date: '15/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789423310219, badge: 'REAJUSTE', text: 'GARANTIA DE SAÚDE (HEBROM) - SP - Reajuste de valores disponível no projeto Adesão.', date: '14/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789423250571, badge: 'ATUALIZ.', text: 'NOTREDAME SAÚDE - SP - Linha PME Premium atualizada e disponível.', date: '14/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809001, badge: 'REAJUSTE', text: 'BRADESCO SAÚDE - PME - Reajuste de valores disponível no projeto Adesão e PME.', date: '14/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809002, badge: 'ATUALIZ.', text: 'ALICE SAÚDE - SP - Tabela promocional para contratos de 3 a 29 vidas disponível.', date: '11/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809003, badge: 'ATUALIZ.', text: 'UNIHOSP SAÚDE (CORPe SAÚDE) - SP - Regras de comercialização atualizadas no projeto Adesão.', date: '09/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809004, badge: 'ATUALIZ.', text: 'SÃO CAMILO (CORPe SAÚDE) - SP - Atualização na rede de atendimento e inclusão da operadora Cruz Azul como congênere disponível.', date: '09/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809005, badge: 'ATUALIZ.', text: 'NOTREDAME SAÚDE - RJ - Linha PME Premium atualizada e disponível.', date: '09/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809006, badge: 'ATUALIZ.', text: 'PROASA SAÚDE (TEC GROUP) - Atualizações disponíveis nas praças (SP/DF/BA) do projeto Adesão.', date: '08/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809007, badge: 'ATUALIZ.', text: 'SÃO MIGUEL SAÚDE - SP - Tabelas (Individual, Familiar, PME e Sênior) atualizadas e disponíveis.', date: '04/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809008, badge: 'ATUALIZ.', text: 'SULMED (GRUPO CONTÉM) - RS - Atualizações disponíveis no projeto Adesão.', date: '04/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809009, badge: 'ATUALIZ.', text: 'LEVE SAÚDE - RJ - Rede credenciada atualizada e novo produto SMART SÊNIOR disponível.', date: '03/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },
  { id: 1789398809010, badge: 'REAJUSTE', text: 'ODONTOPREV (HEBROM) - SP - Reajuste anual disponível no projeto Odontológico.', date: '01/09/2026', monthKey: 'setembro', monthLabel: 'Setembro' },

  // AGOSTO 2026
  { id: 1789398809011, badge: 'SUSPENSO', text: 'TRASMONTANO SAÚDE - SP - Linha Mix PME descontinuada.', date: '31/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 1789398809012, badge: 'ATUALIZ.', text: 'PORTO SEGURO SAÚDE - Atualização de valores disponível - PME (SP / RJ / DF)', date: '28/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 1787917429070, badge: 'ATUALIZ.', text: 'PROASA (TEC GROUP) - Operadoras HAPVIDA / GNDI não fazem mais parte das congêneres no projeto.', date: '28/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 1787865789513, badge: 'NOVO', text: 'ANGELI - Plano de Saúde do Hospital Angelina Caron (CORPe SAÚDE) - PR - Comercialização do projeto Adesão retomada.', date: '27/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 1787845144073, badge: 'NOVO', text: 'SEGUROS UNIMED(UNISALUS) - Projeto na Cidade de São Paulo', date: '27/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 1787845058124, badge: 'NOVO', text: 'UNIMED(UNISALUS) - Projetos nas Cidades de Jundiaí e Marilia(SP), Maringá(PR) e Nova Iguaçu(RJ)', date: '27/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
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
      if (stored && Array.isArray(stored) && stored.length > 0) {
        // Normalizar monthKey e monthLabel de todos os itens com base na data (corrige itens de outubro/novembro que ficaram salvos como 'setembro')
        let modified = false;
        const normalized = stored.map((item: CompactTableUpdate) => {
          const mInfo = getMonthInfoFromDate(item.date);
          if (mInfo && (item.monthKey !== mInfo.key || item.monthLabel !== mInfo.label)) {
            modified = true;
            return {
              ...item,
              monthKey: mInfo.key,
              monthLabel: mInfo.label
            };
          }
          return item;
        });

        // Garantir que todos os itens do seed estejam presentes sem duplicar
        const existingTexts = new Set(normalized.map((s: CompactTableUpdate) => s.text.toLowerCase().trim()));
        const missingSeeds = SEED_UPDATES.filter(s => !existingTexts.has(s.text.toLowerCase().trim()));
        if (missingSeeds.length > 0 || modified) {
          const merged = [...missingSeeds, ...normalized];
          await redis.set(KV_KEY, merged);
          return merged;
        }
        return normalized;
      }
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
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Pin');

  if (req.method === 'OPTIONS') return res.status(200).end();

  // Carregar dados persistidos do Redis (ou fallback estático)
  const updates = await loadUpdates();

  // ── GET: Listar todas as atualizações ──
  if (req.method === 'GET') {
    return res.status(200).json(updates);
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

  if (req.method === 'POST') {
    const { action, id, badge, text, date, monthKey, monthLabel } = body;

    // Cadastrar, editar e excluir exigem a senha do painel (ADMIN_PIN)
    if (!isAdmin({ headers: req.headers, body })) {
      return res.status(401).json({ error: 'Senha de acesso incorreta' });
    }

    // ── EDITAR ──
    if (action === 'edit') {
      const index = updates.findIndex((u: CompactTableUpdate) => u.id === Number(id) || String(u.id) === String(id));
      if (index === -1) return res.status(404).json({ error: 'Atualização não encontrada' });

      const dateVal = date || updates[index].date;
      const dateMonth = getMonthInfoFromDate(dateVal);

      updates[index] = {
        ...updates[index],
        badge: badge || updates[index].badge,
        text: text ? String(text).trim() : updates[index].text,
        date: dateVal,
        monthKey: dateMonth?.key || monthKey || updates[index].monthKey,
        monthLabel: dateMonth?.label || monthLabel || updates[index].monthLabel
      };
      await saveUpdates(updates);
      return res.status(200).json({ success: true, data: updates[index] });
    }

    // ── EXCLUIR ──
    if (action === 'delete') {
      const index = updates.findIndex((u: CompactTableUpdate) => u.id === Number(id) || String(u.id) === String(id));
      if (index !== -1) updates.splice(index, 1);
      await saveUpdates(updates);
      return res.status(200).json({ success: true, message: 'Notícia removida com sucesso!' });
    }

    // ── NOVO CADASTRO ──
    if (!text || !badge) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const cleanText = String(text).trim();
    const cleanDate = date || new Date().toLocaleDateString('pt-BR');
    const dateMonth = getMonthInfoFromDate(cleanDate);
    const targetMonthKey = dateMonth?.key || monthKey || 'novembro';
    const targetMonthLabel = dateMonth?.label || monthLabel || 'Novembro';

    const isDuplicate = updates.some(
      (u: CompactTableUpdate) => u.text.toLowerCase() === cleanText.toLowerCase() && u.monthKey === targetMonthKey
    );
    if (isDuplicate) {
      return res.status(200).json({ success: true, duplicate: true, message: 'Aviso já existe.', data: updates[0] });
    }

    const newEntry: CompactTableUpdate = {
      id: Date.now(),
      badge,
      text: cleanText,
      date: cleanDate,
      monthKey: targetMonthKey,
      monthLabel: targetMonthLabel
    };

    updates.unshift(newEntry);
    await saveUpdates(updates);

    return res.status(201).json({ success: true, data: newEntry, totalCount: updates.length });
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
