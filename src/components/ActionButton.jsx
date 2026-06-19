import { ArrowRight } from 'lucide-react'
import { useQuiz } from '../hooks/useQuiz'
import './ActionButton.css'

export function ActionButton({
  as = 'a',
  href,
  children,
  icon: Icon = ArrowRight,
  variant = 'primary',
  className = '',
  onClick,
  ...props
}) {
  const { openQuiz } = useQuiz()
  const Component = as
  const isQuizLink = href === '#quiz'
  const classes = ['action-button', `action-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')
  const handleClick = (event) => {
    onClick?.(event)

    if (event.defaultPrevented || !isQuizLink) {
      return
    }

    event.preventDefault()
    openQuiz()
  }

  return (
    <Component className={classes} href={href} onClick={handleClick} {...props}>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.2} /> : null}
    </Component>
  )
}
