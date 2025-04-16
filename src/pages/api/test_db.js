import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const newTest = await prisma.test.create({
        data: { name: "Hello Database" },
      });
      return res.json(newTest);
    }
    
    if (req.method === "GET") {
      const allTests = await prisma.test.findMany();
      return res.json(allTests);
    }
    
    return res.status(405).json({ 
      error: "Method Not Allowed",
      message: "This endpoint only supports GET and POST requests."
    });
  } catch (error) {
    console.error("Database error:", error);
    
    // Handle common Prisma/database errors
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: "Bad Request",
        message: "A record with this unique constraint already exists."
      });
    } else if (error.code === 'P2025') {
      return res.status(404).json({
        error: "Not Found",
        message: "The requested record was not found."
      });
    } else if (error.message.includes('Authentication')) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "Database authentication failed. Please check your credentials."
      });
    } else if (error.message.includes('rate limit') || error.message.includes('too many')) {
      return res.status(429).json({
        error: "Too Many Requests",
        message: "Database rate limit exceeded. Please try again later."
      });
    }
    
    // Default server error
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected database error occurred."
    });
  } finally {
    // Optional: Disconnect from Prisma client
    // await prisma.$disconnect();
  }
}