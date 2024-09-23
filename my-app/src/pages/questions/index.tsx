import React, { useState, useEffect } from 'react';
import QuestionCard from '../../components/QuestionCard';
import StepBar from '../../components/StepBar';
import Header from '../../components/Header';
import router from 'next/router';
import useQuestionsStore from '@/store/questionsStore';
import { Button } from '@/components/ui/button';
import 'animate.css'
import { SeoHead } from '@/components/SeoHead';

type Question = {
  id: number;
  content: string;
  level: number;
};

const useCurrentQuestion = (questions: Question[]) => {
  const [currentQuestionContent, setCurrentQuestionContent] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionLevel, setCurrentQuestionLevel] = useState<number>(1);
  const [isLevelChange, setIsLevelChange] = useState<boolean>(true); // レベルの変更を検知するためのstate
  const [showEndAnimation, setShowEndAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (questions.length > 0) {
      setTimeout(() => setIsLevelChange(false), 2000);
    }
  }, [questions]);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestionContent(questions[currentQuestionIndex].content);
    }
  }, [questions, currentQuestionIndex]);

  const nextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      if (questions[nextIndex].level !== currentQuestionLevel) {
        // レベルが変わったときの処理
        setCurrentQuestionLevel(questions[nextIndex].level);
        setIsLevelChange(true);
        setTimeout(() => setIsLevelChange(false), 2000);
      }
      setCurrentQuestionIndex(nextIndex);
    } else {
      // 最後の質問に到達し、次へボタンをクリックしたときの処理
      setShowEndAnimation(true);
      setTimeout(() => {
        router.push('/survey');
      }, 2000);
    }
  };

  return { currentQuestionContent, currentQuestionLevel, currentQuestionIndex, isLevelChange, showEndAnimation, nextQuestion };
};

const QuestionPage = () => {
  const questions = useQuestionsStore(state => state.questions);
  const { currentQuestionContent, currentQuestionLevel, currentQuestionIndex, isLevelChange, showEndAnimation, nextQuestion } = useCurrentQuestion(questions);

  const renderEndAnimation = () => (
    <div className="flex flex-col items-center justify-center animate__animated animate__fadeIn">
      <div className='text-center mx-8 text-baseColor mt-40 text-md'>
        <p className="mb-8">質問は以上となります。</p>
        <p className='mb-3'>最後にアンケートに回答いただけますと</p>
        <p>幸いです。</p>
      </div>
    </div>
  );
  
  const renderQuestionContent = () => (
    <>
      <div className='mb-20 sm:mb-24'>
        <StepBar QuestionLevel={currentQuestionLevel} />
      </div>
      <main className="flex flex-col items-center p-4">
        {isLevelChange ? (
          <div className={`text-3xl font-bold my-10 animate__animated animate__fadeIn 
          ${currentQuestionLevel === 1 ? 'text-secondaryColor' : currentQuestionLevel === 2 ? 'text-subColor' : 'text-baseColor'}`}>
            レベル{currentQuestionLevel}
          </div>
        ) : (
          <div className='relative md:w-4/6 w-full flex justify-center'>
            {/* <div className='animate__animated animate__fadeInRight w-full h-full'> */}
              <QuestionCard question={currentQuestionContent} aria-label={`質問内容: ${currentQuestionContent}`}/> 
            {/* </div> */}
            <div className='absolute top-40 flex items-center justify-around w-full mt-12'>
              <Button
                onClick={nextQuestion}
                className='bg-baseColor hover:bg-baseColor'
                aria-label="次の質問に進む"
              >
                次の質問
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
  
  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <SeoHead
        title={`36の質問`}
        titleTemplate={`質問レベル${currentQuestionLevel}`}
        description={`${currentQuestionIndex}問目の質問は、${currentQuestionContent}です`}
        keyWords={"質問, 関係性, コミュニケーション, パートナー, 友人, 恋人, カップル, 対話, 話題, 提供"}
        ogType={"article"}
        imgUrl={'/next.svg'} // 適切な画像を設定
      />
      {showEndAnimation ? renderEndAnimation() : renderQuestionContent()}
    </div>
  );
  
};

export default QuestionPage;