import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const newTest = await prisma.test.create({
      data: { name: 'Hello Database' },
    });
    return res.json(newTest);
  }

  if (req.method === 'GET') {
    const allTests = await prisma.test.findMany();
    return res.json(allTests);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
