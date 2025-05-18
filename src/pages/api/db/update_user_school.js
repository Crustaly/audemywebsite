import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, name, school } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Email and name and password' });
    }

    // Check if user exists
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      // If user exists but has no school, update the record
      if (!user.school) {
        user = await prisma.user.update({
          where: { email },
          data: { school },
        });
      }
    } else {
      // Generate a random password
      const randomPassword = Math.random().toString(36).slice(-12);

      // Hash the password
      const hashedPassword = await bcrypt.hash(randomPassword, 10);

      // Create a new user with the hashed password
      user = await prisma.user.create({
        data: {
          email,
          name,
          school: school || 'Unknown School',
          password: hashedPassword,
        },
      });
    }

    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error updating/creating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
