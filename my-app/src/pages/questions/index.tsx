import React, { useState, useEffect } from 'react';
import { questionsLevel1, questionsLevel2, questionsLevel3 } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';
import QuestionChangeButton from '../../components/QuestionChangeButton';
import QuestionNextButton from '../../components/QuestionNextButton';
import QuestionBeforeButton from '../../components/QuestionBeforeButton';
import Envelope from '@/components/Envelope';
import StepBar from '../../components/StepBar';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import router from 'next/router';
import useQuestionsStore from '@/store/questionsStore';
import { Button } from '@/components/ui/button';
import { routeModule } from 'next/dist/build/templates/app-page';

type Question = {
  id: number;
  content: string;
  level: number;
};

const QuestionPage = () => {
  const questions: Question[] = useQuestionsStore(state => state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionLevel, setCurrentQuestionLevel] = useState<number>(questions[0].level);

  const nextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      // 次の問題が現在のレベルと異なる場合に更新する
      if (questions[nextIndex].level !== currentQuestionLevel) {
        setCurrentQuestionLevel(questions[nextIndex].level);
      }
    } else {
      router.push('/survey');
    }
  };

  const handleEnvelopeClick = () => {
    console.log('handleEnvelopeClick');
  }

  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <main className="flex flex-col items-center p-4">
        <div className='mb-20 sm:mb-24'>
          <StepBar QuestionLevel={currentQuestionLevel} />
        </div>
        <div className='relative md:w-4/6 w-full flex justify-center'>
          {/* <Envelope onClick={handleEnvelopeClick} /> */}
          <QuestionCard question={questions[currentQuestionIndex].content} />
          <div className='absolute top-40 flex items-center justify-around w-full mt-12'>
            <Button onClick={nextQuestion} className='bg-baseColor hover:bg-baseColor'>次の問題</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuestionPage;