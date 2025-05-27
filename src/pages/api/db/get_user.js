import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const baseURL = process.env.BASE_URL;

export default async function handler(req, res) {
  // Set CORS headers (you can either use "*" for all origins or a specific one like below)
  res.setHeader('Access-Control-Allow-Origin', baseURL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Respond to preflight request
  }

  // Only handle GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.query; // Get email from query params
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Fetch user from database using Prisma
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(200).json({ error: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
