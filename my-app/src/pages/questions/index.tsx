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
import useQuestionsStore from '@/store/questionsStore';

const QuestionPage = () => {
  const router = useRouter();
  const questions = useQuestionsStore(state => state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (questions.length === 0) {
      // データがない場合はリダイレクトするなどの処理
      router.push('/');
    }
  }, [questions, router]);

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <div>
        <h1>質問</h1>
        <p>{questions[currentQuestionIndex]?.content}</p>
        <button onClick={nextQuestion}>次へ</button>
      </div>
    </div>
  );
};

export default QuestionPage;
