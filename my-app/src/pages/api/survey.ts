import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  try {
    const { content } = req.body;

    // データベース接続の確認
    await prisma.$connect();
    console.log("Database connected");

    await prisma.survey_results.create({
      data: {
        content,
      },
    });
    
    res.status(201).json({ message: 'Survey result created' });
  } catch (error) {
    console.error("Error creating survey result:", error);
    res.status(500).json({ message: 'Error creating survey result', error: String(error) });
  } finally {
    await prisma.$disconnect();
  }
}