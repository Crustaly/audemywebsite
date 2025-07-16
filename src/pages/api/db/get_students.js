import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const baseURL = process.env.BASE_URL;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', baseURL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Fetch all students from the database
  try {
    const students = await prisma.user.findMany({
      select: {
        user_id: true,
        name: true,
        email: true,
        school: true,
      },
    });
    
    return res.status(200).json(students);

  } catch (error) {
    console.error('Error fetching students:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
