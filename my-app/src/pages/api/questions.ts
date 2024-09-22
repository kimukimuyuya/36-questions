import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  questions: Array<{ id: number; content: string; level: number }>;
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

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const course = req.query.course as string;

  if (!course || !["30min", "1hour", "2hours", "4hours"].includes(course)) {
    res.status(400).json({ questions: [] });
    return;
  }

  const distribution = QUESTIONS_DISTRIBUTION[course];

  // リクエスト回数が1回になるが、応答速度が遅いversion
  try {
    const allQuestions = await prisma.questions.findMany();
    const formattedQuestions = allQuestions.map(question => ({
      id: Number(question.id),
      content: question.content || '',
      level: Number(question.level)
    }));

    shuffleArray(formattedQuestions);

    // allQuestionsからそれぞれのレベルの問題を適切な数だけ取得
    const level1Questions = formattedQuestions.filter(question => question.level === 1).slice(0, distribution.level1);
    const level2Questions = formattedQuestions.filter(question => question.level === 2).slice(0, distribution.level2);
    const level3Questions = formattedQuestions.filter(question => question.level === 3).slice(0, distribution.level3);

    const questions = [...level1Questions, ...level2Questions, ...level3Questions]

    res.status(200).json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ questions: [] });
  }

  // リクエスト回数が3回になるが、応答速度が速いversion

  // try {
  //   const level1Questions = await prisma.questions.findMany({
  //     where: { level: 1 },
  //     take: distribution.level1
  //   });

  //   const level2Questions = await prisma.questions.findMany({
  //     where: { level: 2 },
  //     take: distribution.level2
  //   });

  //   const level3Questions = await prisma.questions.findMany({
  //     where: { level: 3 },
  //     take: distribution.level3
  //   });

  //   // 返ってくるデータの形式を整形
  //   const questions = [...level1Questions, ...level2Questions, ...level3Questions].map(question => ({
  //     id: Number(question.id),
  //     question: question.content || '',
  //     level: Number(question.level)
  //   }));

  //   res.status(200).json({ questions });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ questions: [] });
  // }
}