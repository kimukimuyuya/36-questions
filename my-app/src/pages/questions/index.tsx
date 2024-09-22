import React, { useState, useEffect } from 'react';
import { questionsLevel1, questionsLevel2, questionsLevel3 } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';
import StepBar from '../../components/StepBar';
import Header from '../../components/Header';
import router from 'next/router';
import useQuestionsStore from '@/store/questionsStore';
import { Button } from '@/components/ui/button';
import 'animate.css'

type Question = {
  id: number;
  content: string;
  level: number;
};

const useCurrentQuestion = (questions: Question[]) => {
  const [currentQuestionContent, setCurrentQuestionContent] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionLevel, setCurrentQuestionLevel] = useState<number>(1);
  const [showLevelMessage, setShowLevelMessage] = useState<boolean>(false);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestionContent(questions[currentQuestionIndex].content);
    }
  }, [questions, currentQuestionIndex]);

  const nextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      if (questions[nextIndex].level !== currentQuestionLevel) {
        setCurrentQuestionLevel(questions[nextIndex].level);
        setShowLevelMessage(true);
        setTimeout(() => setShowLevelMessage(false), 2000);
      }
      setCurrentQuestionIndex(nextIndex);
    } else {
      router.push('/survey');
    }
  };

  return { currentQuestionContent, currentQuestionLevel, showLevelMessage, nextQuestion };
};

const QuestionPage = () => {
  const questions = useQuestionsStore(state => state.questions);
  const { currentQuestionContent, currentQuestionLevel, showLevelMessage, nextQuestion } = useCurrentQuestion(questions);

  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <div className='mb-20 sm:mb-24'>
        <StepBar QuestionLevel={currentQuestionLevel} />
      </div>
      <main className="flex flex-col items-center p-4">
        {showLevelMessage ? (
          <div className={`text-3xl font-bold my-10 animate__animated animate__fadeIn ${currentQuestionLevel === 2 ? 'text-subColor' : 'text-baseColor'}`}>
            レベル{currentQuestionLevel}
          </div>
        ) : (
          <div className='relative md:w-4/6 w-full flex justify-center'>
            <QuestionCard question={currentQuestionContent} />
            <div className='absolute top-40 flex items-center justify-around w-full mt-12'>
            <Button
              onClick={nextQuestion}
              className={`${
                currentQuestionLevel === 1 
                  ? 'bg-secondaryColor hover:bg-subColor' 
                  : currentQuestionLevel === 2 
                    ? 'bg-subColor hover:bg-baseColor' 
                    : 'bg-baseColor hover:bg-baseColor'
              }`}
            >
              次の問題
            </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuestionPage;