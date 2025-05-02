import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ message: 'Missing user_id' });
  }

  try {
    const existing = await prisma.progress.findUnique({ where: { user_id } });
    console.log(existing);

    if (!existing) {
      const defaultProgress = {
        progress: Array.from({ length: 16 }, (_, i) => ({
          game_id: i + 1,
          difficulty_id: 1,
        })),
      };

      await prisma.progress.create({
        data: {
          user_id,
          progress_json: defaultProgress,
        },
      });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}
