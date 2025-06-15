import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const signupAttempts = {};
const SIGNUP_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const SIGNUP_MAX_ATTEMPTS = 5;

export default async function handler(req, res) {
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const now = Date.now();
    if (!signupAttempts[ip]) {
      signupAttempts[ip] = [];
    }

    // Filter out old attempts
    signupAttempts[ip] = signupAttempts[ip].filter(
      (timestamp) => now - timestamp < SIGNUP_WINDOW_MS
    );

    if (signupAttempts[ip].length >= SIGNUP_MAX_ATTEMPTS) {
      return res.status(429).json({
        error: 'Too many signup attempts. Please try again later.',
      });
    }

    signupAttempts[ip].push(now);

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const {
      first_name,
      last_name,
      school_name,
      email,
      password,
      confirm_password,
    } = req.body.user;

    // Validate required fields
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate password match
    if (password !== confirm_password) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    //! Check Existing User
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //! Create New user in Database
    const newUser = await prisma.user.create({
      data: {
        name: `${first_name} ${last_name}`,
        school: school_name,
        email,
        password: hashedPassword,
      },
    });
    // My Progress setup skipped: waiting for My Progress feature to be ready
    /*
    const defaultProgress = {
      progress: Array.from({ length: 16 }, (_, i) => ({
        game_id: i + 1,
        difficulty_id: 1,
      })),
    };

    await prisma.progress.create({
      data: {
        user_id: newUser.user_id,
        progress_json: defaultProgress,
      },
    });
    */
    return res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Signup Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
