import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const envKeys = Object.keys(process.env);
  const redisKeys = envKeys.filter(k => k.toLowerCase().includes('redis') || k.toLowerCase().includes('kv'));
  return res.status(200).json({
    keys: redisKeys,
    hasUrl: !!process.env.UPSTASH_REDIS_REST_URL,
    hasToken: !!process.env.UPSTASH_REDIS_REST_TOKEN,
    hasKvUrl: !!process.env.KV_REST_API_URL,
    hasKvToken: !!process.env.KV_REST_API_TOKEN
  });
}
