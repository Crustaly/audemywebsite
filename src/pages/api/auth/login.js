import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const rateLimit = {};
const MAX_ATTEMPTS = 5;
const WINDOW_TIME = 60 * 1000; // 60 seconds

export default async function handler(req, res) {
  console.log('Received request for login...');
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body.user;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const clientIP = ip === '::1' || ip === '127.0.0.1' ? 'localhost' : ip;
  console.log('Client IP Address:', clientIP);
  if (!rateLimit[ip]) {
    rateLimit[ip] = { count: 0, startTime: Date.now() };
  }

  if (Date.now() - rateLimit[ip].startTime > WINDOW_TIME) {
    rateLimit[ip] = { count: 0, startTime: Date.now() };
  }

  if (rateLimit[ip].count >= MAX_ATTEMPTS) {
    return res
      .status(429)
      .json({ error: 'Too many login attempts. Try again later.' });
  }

  rateLimit[ip].count++;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Email not signed up' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Wrong password' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d',
      }
    );

    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).json({
      message: 'Login successful',
      user,
      token,
      clientIP,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
