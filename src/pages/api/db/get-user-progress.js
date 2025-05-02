import { PrismaClient } from '@prisma/client';
import { getUserProgress } from '@prisma/client/sql';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    // Set CORS headers (you can either use "*" for all origins or a specific one like below)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );

    // Handle preflight requests (OPTIONS)
    if (req.method === "OPTIONS") {
        return res.status(200).end(); // Respond to preflight request
    }

    // Only handle GET requests
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.query;

    if (!email) return res.status(400).json({ error: 'Missing name parameter' });

    try {
        console.log('Getting result for userEmail:', email);
        const result = await prisma.user.findUnique({
            where: { email },
            select: {
                name: true,
                email: true,
                Progress: true
            }
        });
        res.status(200).json(result);
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).json({ error: 'Server error' });
    } finally {
        await prisma.$disconnect();
    }
}