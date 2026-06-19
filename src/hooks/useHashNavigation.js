import { useEffect } from 'react'

export function useHashNavigation() {
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location

      if (!hash) {
        return
      }

      const target = document.querySelector(hash)

      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    }

    const frame = window.requestAnimationFrame(scrollToHash)
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])
}
