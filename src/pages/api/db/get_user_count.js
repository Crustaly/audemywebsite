import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Respond to preflight request
  }

  if (req.method !== 'GET') { 
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const count = await prisma.user.count(); 
    return res.status(200).json({ totalUsers: count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
