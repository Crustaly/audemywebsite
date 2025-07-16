import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const baseURL = process.env.BASE_URL;

export default async function handler(req, res) {
  // Set CORS headers (you can either use "*" for all origins or a specific one like below)
  res.setHeader('Access-Control-Allow-Origin', baseURL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // log statement for records and error tracing
  console.log('Request received:', req.method, req.url, req.query, req.body);

  // variable to get token and newpassword from request body
  const { token, newPassword } = req.body;

  try {
    console.log('Verifying token...');
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res
        .status(480)
        .json({ message: 'Invalid token or token expired!' });
    }

    // Find user with valid token
    const user = await prisma.user.findFirst({
      where: {
        user_id: decoded.userId,
      },
    });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Logging user fetched from db found with email for error tracing
    console.log('User found:', user);

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password for the user in the db
    await prisma.user.update({
      where: { user_id: user.user_id },
      data: {
        password: hashedPassword,
      },
    });

    console.log('Password updated successfully for user:', user.name);
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error resetting password. Invalid or epired link.' });
  }
}
