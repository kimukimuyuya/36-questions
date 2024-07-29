import React, { useState, useEffect } from 'react';
import { questionsLevel1, questionsLevel2, questionsLevel3 } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';
import QuestionChangeButton from '../../components/QuestionChangeButton';
import QuestionNextButton from '../../components/QuestionNextButton';
import ProgressBar from '@/components/ProgressBar';
import Header from '../../components/Header';
import { useRouter } from 'next/router';


const getRandomQuestion = (questions: string[]) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const QuestionPage = () => {
  const router = useRouter();
  const questionLevel: string = router.query.question_level as string;
  const nextQuestionLevel = Number(questionLevel) + 1;

  const getQuestions = (id: string) => {
    switch (id) {
      case '1':
        return questionsLevel1;
      case '2':
        return questionsLevel2;
      case '3':
        return questionsLevel3;
      default:
        return questionsLevel1;
    }
  };

  const questions = getQuestions(questionLevel as string);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [usedQuestions, setUsedQuestions] = useState<string[]>([]);

  useEffect(() => {
    setCurrentQuestion(getRandomQuestion(questions));
  }, [questionLevel, questions]);

  const handleChangeQuestion = () => {
    setCurrentQuestion(getRandomQuestion(questions));
    setUsedQuestions([...usedQuestions, currentQuestion]);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-bgColor">
        <ProgressBar QuestionLevel={questionLevel} />
        <QuestionCard question={currentQuestion} />
        <div className='flex items-center justify-around w-full mt-4'>
          <QuestionChangeButton onClick={handleChangeQuestion} />
          <QuestionNextButton nextQuestionLevel={nextQuestionLevel} />
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;
