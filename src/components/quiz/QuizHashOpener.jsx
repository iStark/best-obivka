import { useEffect } from 'react'
import { useQuiz } from '../../hooks/useQuiz'

export function QuizHashOpener() {
  const { openQuiz } = useQuiz()

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === '#quiz') {
        openQuiz()
      }
    }

    openFromHash()
    window.addEventListener('hashchange', openFromHash)

    return () => window.removeEventListener('hashchange', openFromHash)
  }, [openQuiz])

  return null
}
