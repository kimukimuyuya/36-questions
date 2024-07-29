import React, { useState, useEffect } from 'react';
import { questionsPattern1, questionsPattern2, questionsPattern3 } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';
import QuestionChangeButton from '../../components/QuestionChangeButton';
import QuestionNextButton from '../../components/QuestionNextButton';
import ProgressBar from '@/components/ProgressBar';
import Header from '../../components/Header';
import { useRouter } from 'next/router';


const getRandomQuestion = (questions: string[]) => {
  return questions[Math.floor(Math.random() * questions.length)];
};

const PatternPage = () => {
  const router = useRouter();
  const pattern_id: string = router.query.pattern_id as string;
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
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-bgColor">
        <ProgressBar level={pattern_id} />
        <QuestionCard question={currentQuestion} />
        <div className='flex items-center justify-around w-full mt-4'>
          <QuestionChangeButton onClick={handleChangeQuestion} />
          <QuestionNextButton nextPatternId={nextPatternId} />
        </div>
      </main>
    </div>
  );
};

export default PatternPage;
