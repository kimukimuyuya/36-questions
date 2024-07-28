import React, { useState, useEffect } from 'react';
import { questionsPattern1, questionsPattern2, questionsPattern3 } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';
import QuestionChangeButton from '../../components/QuestionChangeButton';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import Link from 'next/link';

const getRandomQuestion = (questions: string[]) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const PatternPage = () => {
  const router = useRouter();
  const { pattern_id } = router.query;

  const getQuestions = (id: string) => {
    switch (id) {
      case '1':
        return questionsPattern1;
      case '2':
        return questionsPattern2;
      case '3':
        return questionsPattern3;
      default:
        return questionsPattern1;
    }
  };

  const questions = getQuestions(pattern_id as string);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion(questions));
  }, [pattern_id, questions]);

  const handleChangeQuestion = () => {
    setCurrentQuestion(getRandomQuestion(questions));
    setUsedQuestions([...usedQuestions, currentQuestion]);
    console.log(usedQuestions);
  };

  const nextPatternId = Number(pattern_id) + 1;

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <QuestionCard question={currentQuestion} />
        <QuestionChangeButton onClick={handleChangeQuestion} />
        <div className="mt-4">
          <Link href={`/questions/${nextPatternId}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            次へ
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PatternPage;