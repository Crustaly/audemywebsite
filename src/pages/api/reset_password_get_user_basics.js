/*
 * GET api/reset_password_get_user_basics.js
 *
 * - Used during the Reset Password process
 * - Verifies JWT token from Authorization header
 * - If valid: Retrieves and returns the user's basic info (full name & email)
 *
 * JSON Response is used on the frontend to ensure the new password
 * does not contain personal info
 *
 */

import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const baseURL = process.env.BASE_URL;

export default async function handler(req, res) {
  // Log statement for error tracing
  console.log(
    'Request received:',
    req.method,
    req.url,
    '| Authorization:',
    req.headers.authorization || 'No auth header'
  );

  // Handle OPTIONS for CORS preflight
  if (req.method === 'OPTIONS') {
    // Respond to OPTIONS preflight request
    res.setHeader('Access-Control-Allow-Origin', baseURL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    return res.status(200).end();
  }

  // Only handle GET requests from frontend
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Verifying token...');

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ message: 'Authorization token missing or invalid' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) {
      return res
        .status(480)
        .json({ message: 'Invalid token or token expired!' });
    }

    // Find user with valid token
    const user = await prisma.user.findFirst({
      where: {
        user_id: decoded.userId,
      },
      select: {
        name: true,
        email: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Logging user full name and email fetched from DB for error tracing
    console.log(
      `Matching user basic info: 
      Full Name: ${user.name}
      Email: ${user.email}`
    );

    return res.status(200).json({
      full_name: user.name,
      email_address: user.email,
    });
  } catch (error) {
    console.error('Error. Invalid or expired token, or DB error.', error);
    return res
      .status(500)
      .json({ message: 'Error. Invalid or expired token, or DB error.' });
  }
}
