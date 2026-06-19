import { ChevronDown } from 'lucide-react'
import './FaqItem.css'

export function FaqItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <article className={`faq-item${isOpen ? ' is-open' : ''}`}>
      <button
        className="faq-item__button"
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown aria-hidden="true" size={20} />
      </button>
      <div className="faq-item__panel" id={id}>
        <div className="faq-item__panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </article>
  )
}
