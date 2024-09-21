import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Question = {
  id: number;
  content: string;
  level: number;
  created_at: string;
};

type State = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};

const useQuestionsStore = create<State>()(
  devtools(
    (set) => ({
      questions: [],
      setQuestions: (questions) => set({ questions }),
    })
  )
);

export default useQuestionsStore;