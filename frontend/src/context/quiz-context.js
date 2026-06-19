import { createContext } from 'react'

export const QuizContext = createContext({
  isQuizOpen: false,
  openQuiz: () => {},
  closeQuiz: () => {},
})
