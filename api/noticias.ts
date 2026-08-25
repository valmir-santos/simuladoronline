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

// Armazenamento em memória no escopo da Vercel Edge/Serverless
let CENTRAL_UPDATES: CompactTableUpdate[] = [
  // NOTÍCIAS DO COMERCIAL DA CORPE SAÚDE E BRADESCO SAÚDE
  { id: 253, badge: 'ATUALIZ.', text: 'VIDA TOP+ SAÚDE (CORPe SAÚDE) - SP: Atualização de valores disponível no projeto Adesão', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 252, badge: 'ATUALIZ.', text: 'SÃO FRANCISCO VIDA (CORPe SAÚDE) - SP: Atualização disponível no projeto Adesão', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 251, badge: 'ATUALIZ.', text: 'SEGUROS UNIMED (CORPe SAÚDE): Comercialização do projeto Adesão retomada - 25/08/2026', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  { id: 250, badge: 'ATUALIZ.', text: 'BRADESCO SAÚDE - PME - INTERIOR 1 / SP: Retirada dos produtos Flex e Ideal, e inclusão de novas tabelas', date: '25/08/2026', monthKey: 'agosto', monthLabel: 'Agosto' },
  // NOVAS INCLUSÕES
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

export default function handler(req: ApiReq, res: ApiRes) {
  // Configurar cabeçalhos CORS para permitir acesso por qualquer máquina/iframe
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(CENTRAL_UPDATES);
  }

  if (req.method === 'POST') {
    const { badge, text, date, monthKey, monthLabel } = req.body || {};

    if (!text || !badge || !monthKey) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
    }

    const cleanText = String(text).trim();

    // TRAVA ANTI-DUPLICAÇÃO: verificar se já existe registro idêntico
    const isDuplicate = CENTRAL_UPDATES.some(
      u => u.text.toLowerCase() === cleanText.toLowerCase() && u.monthKey === monthKey
    );

    if (isDuplicate) {
      return res.status(200).json({ 
        success: true, 
        duplicate: true, 
        message: 'Aviso já existe no histórico central.',
        data: CENTRAL_UPDATES[0]
      });
    }

    const newEntry: CompactTableUpdate = {
      id: Date.now(),
      badge,
      text: cleanText,
      date: date || new Date().toLocaleDateString('pt-BR'),
      monthKey,
      monthLabel: monthLabel || 'Agosto'
    };

    // Inserir no topo do array central
    CENTRAL_UPDATES.unshift(newEntry);

    return res.status(201).json({
      success: true,
      data: newEntry,
      totalCount: CENTRAL_UPDATES.length
    });
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
