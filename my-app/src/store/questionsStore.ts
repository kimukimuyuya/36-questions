import { create } from 'zustand';

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

const useQuestionsStore = create<State>((set) => ({
  questions: [],
  setQuestions: (questions: Question[]) => set({ questions }),
}));

export default useQuestionsStore;