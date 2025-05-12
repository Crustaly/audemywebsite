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

  const { email } = req.query;

  if (!email) return res.status(400).json({ error: 'Missing Email parameter' });

  try {
    console.log('Getting result for userEmail:', email);
    const result = await prisma.user.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
        Progress: true,
      },
    });
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  } finally {
    try {
      // Close the Prisma client connection
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.error('Error disconnecting Prisma client:', disconnectError);
    }
  }
}
