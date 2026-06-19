import { useContext } from 'react'
import { QuizContext } from '../context/quiz-context'

export function useQuiz() {
  return useContext(QuizContext)
}
