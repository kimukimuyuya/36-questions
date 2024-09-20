import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  questions: Array<{ id: number; question: string; level: number }>;
};

type Distribution = {
  level1: number;
  level2: number;
  level3: number;
};

const QUESTIONS_DISTRIBUTION: { [key: string]: Distribution } = {
  "30min": { level1: 1, level2: 2, level3: 2 },
  "1hour": { level1: 3, level2: 3, level3: 4 },
  "2hours": { level1: 6, level2: 6, level3: 6 },
  "4hours": { level1: 12, level2: 12, level3: 12 }
};


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const course = req.query.course as string;

  if (!course || !["30min", "1hour", "2hours", "4hours"].includes(course)) {
    res.status(400).json({ questions: [] });
    return;
  }

  const distribution = QUESTIONS_DISTRIBUTION[course];

  try {
    const level1Questions = await prisma.questions.findMany({
      where: { level: 1 },
      take: distribution.level1
    });

    const level2Questions = await prisma.questions.findMany({
      where: { level: 2 },
      take: distribution.level2
    });

    const level3Questions = await prisma.questions.findMany({
      where: { level: 3 },
      take: distribution.level3
    });

    // 返ってくるデータの形式を整形
    const questions = [...level1Questions, ...level2Questions, ...level3Questions].map(question => ({
      id: Number(question.id),
      question: question.content || '',
      level: Number(question.level)
    }));

    res.status(200).json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ questions: [] });
  }
}