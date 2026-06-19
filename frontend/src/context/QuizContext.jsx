import { useMemo, useState } from 'react'
import { QuizContext } from './quiz-context'

export function QuizProvider({ children }) {
  const [isQuizOpen, setIsQuizOpen] = useState(false)

  const value = useMemo(
    () => ({
      isQuizOpen,
      openQuiz: () => setIsQuizOpen(true),
      closeQuiz: () => setIsQuizOpen(false),
    }),
    [isQuizOpen],
  )

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
