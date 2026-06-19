import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Mail,
  MessageCircle,
  Phone,
  Send,
  X,
} from 'lucide-react'
import { company } from '../../../data/content'
import { quizContactFields, quizSteps } from '../../../data/quiz'
import { useQuiz } from '../../../hooks/useQuiz'
import { publicAsset } from '../../../utils/assets'
import './QuizModal.css'

const initialAnswers = quizSteps.reduce((acc, step) => {
  acc[step.id] = step.type === 'multiple' ? [] : ''
  return acc
}, {})

const initialContact = quizContactFields.reduce((acc, field) => {
  acc[field.id] = ''
  return acc
}, {})

export function QuizModal() {
  const { isQuizOpen, closeQuiz } = useQuiz()
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState(initialAnswers)
  const [contact, setContact] = useState(initialContact)
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState(false)

  const isContactStep = stepIndex === quizSteps.length
  const currentStep = quizSteps[stepIndex]
  const progress = Math.round(((stepIndex + 1) / (quizSteps.length + 1)) * 100)

  const summary = useMemo(
    () =>
      [
        'Р—Р°СЏРІРєР° СЃ РєРІРёР·Р° BestObivka',
        '',
        `РњРµР±РµР»СЊ: ${formatAnswer(answers.furniture)}`,
        `Р Р°Р±РѕС‚С‹: ${formatAnswer(answers.work)}`,
        `РњР°С‚РµСЂРёР°Р»: ${formatAnswer(answers.material)}`,
        `РЎСЂРѕРєРё: ${formatAnswer(answers.timing)}`,
        files.length ? `Р¤РѕС‚Рѕ: РІС‹Р±СЂР°РЅРѕ ${files.length} С„Р°Р№Р»(Р°), РѕС‚РїСЂР°РІР»СЋ СЃР»РµРґСѓСЋС‰РёРј СЃРѕРѕР±С‰РµРЅРёРµРј` : '',
        '',
        `РРјСЏ: ${contact.name || 'РЅРµ СѓРєР°Р·Р°РЅРѕ'}`,
        `РўРµР»РµС„РѕРЅ: ${contact.phone || 'РЅРµ СѓРєР°Р·Р°РЅ'}`,
        contact.comment ? `РљРѕРјРјРµРЅС‚Р°СЂРёР№: ${contact.comment}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    [answers, contact, files.length],
  )

  const whatsappHref = `${company.whatsappHref}?text=${encodeURIComponent(summary)}`
  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    'Р—Р°СЏРІРєР° СЃ РєРІРёР·Р° BestObivka',
  )}&body=${encodeURIComponent(summary)}`

  const handleClose = useCallback(() => {
    closeQuiz()
    window.setTimeout(() => {
      setStepIndex(0)
      setAnswers(initialAnswers)
      setContact(initialContact)
      setFiles([])
      setSubmitted(false)
      setTouched(false)
    }, 180)
  }, [closeQuiz])

  useEffect(() => {
    if (!isQuizOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [handleClose, isQuizOpen])

  if (!isQuizOpen) {
    return null
  }

  const currentAnswer = currentStep ? answers[currentStep.id] : null
  const canGoNext = isContactStep ? isContactValid(contact) : hasAnswer(currentAnswer)

  const toggleAnswer = (optionId) => {
    setAnswers((current) => {
      if (currentStep.type === 'multiple') {
        const selected = current[currentStep.id]
        const nextValue = selected.includes(optionId)
          ? selected.filter((item) => item !== optionId)
          : [...selected, optionId]

        return { ...current, [currentStep.id]: nextValue }
      }

      return { ...current, [currentStep.id]: optionId }
    })
  }

  const goNext = () => {
    setTouched(true)

    if (!canGoNext) {
      return
    }

    setTouched(false)
    setStepIndex((current) => Math.min(current + 1, quizSteps.length))
  }

  const goBack = () => {
    setTouched(false)
    setStepIndex((current) => Math.max(current - 1, 0))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTouched(true)

    if (!isContactValid(contact)) {
      return
    }

    try {
      await navigator.clipboard.writeText(summary)
    } catch {
      // Clipboard may be unavailable in some browsers; the visible summary remains usable.
    }

    setSubmitted(true)
  }

  return (
    <div
      className="quiz-modal"
      style={{
        '--quiz-side-image': `url("${publicAsset('/images/bestobivka/choise_material.jpg')}")`,
        '--quiz-success-image': `url("${publicAsset('/images/bestobivka/before-after/3-1.jpg')}")`,
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-title"
    >
      <button className="quiz-modal__overlay" type="button" aria-label="Р—Р°РєСЂС‹С‚СЊ РєРІРёР·" onClick={handleClose} />

      <div className="quiz-modal__shell">
        <button className="quiz-modal__close" type="button" aria-label="Р—Р°РєСЂС‹С‚СЊ РєРІРёР·" onClick={handleClose}>
          <X aria-hidden="true" size={20} />
        </button>

        {submitted ? (
          <SuccessView
            mailHref={mailHref}
            summary={summary}
            whatsappHref={whatsappHref}
            onBack={() => setSubmitted(false)}
            onClose={handleClose}
          />
        ) : (
          <form className="quiz-modal__content" onSubmit={handleSubmit}>
            <aside className="quiz-modal__side">
              <div>
                <p className="quiz-modal__kicker">РљРІРёР· РЅР° 1 РјРёРЅСѓС‚Сѓ</p>
                <h2 id="quiz-title">РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅР°СЏ РѕС†РµРЅРєР° РїРµСЂРµС‚СЏР¶РєРё</h2>
                <span>
                  РћС‚РІРµС‚СЊС‚Рµ РЅР° РЅРµСЃРєРѕР»СЊРєРѕ РІРѕРїСЂРѕСЃРѕРІ, Р° РјР°СЃС‚РµСЂ СѓС‚РѕС‡РЅРёС‚ СЃС‚РѕРёРјРѕСЃС‚СЊ, СЃСЂРѕРєРё Рё РјР°С‚РµСЂРёР°Р»С‹.
                </span>
              </div>

              <div className="quiz-summary">
                <p>Р—Р°СЏРІРєР°</p>
                <SummaryLine label="РњРµР±РµР»СЊ" value={answers.furniture} />
                <SummaryLine label="Р Р°Р±РѕС‚С‹" value={answers.work} />
                <SummaryLine label="РњР°С‚РµСЂРёР°Р»" value={answers.material} />
                <SummaryLine label="РЎСЂРѕРєРё" value={answers.timing} />
              </div>
            </aside>

            <div className="quiz-modal__main">
              <div className="quiz-progress" aria-label={`РџСЂРѕРіСЂРµСЃСЃ ${progress}%`}>
                <span style={{ width: `${progress}%` }} />
              </div>

              {isContactStep ? (
                <ContactStep
                  contact={contact}
                  files={files}
                  touched={touched}
                  onChange={setContact}
                  onFilesChange={setFiles}
                />
              ) : (
                <QuestionStep
                  answer={currentAnswer}
                  step={currentStep}
                  touched={touched}
                  onSelect={toggleAnswer}
                />
              )}

              <div className="quiz-modal__footer">
                <button
                  className="quiz-nav-button quiz-nav-button--ghost"
                  type="button"
                  onClick={goBack}
                  disabled={stepIndex === 0}
                >
                  <ArrowLeft aria-hidden="true" size={18} />
                  РќР°Р·Р°Рґ
                </button>

                {isContactStep ? (
                  <button className="quiz-nav-button quiz-nav-button--primary" type="submit">
                    РџРѕР»СѓС‡РёС‚СЊ СЂР°СЃС‡РµС‚
                    <Send aria-hidden="true" size={18} />
                  </button>
                ) : (
                  <button className="quiz-nav-button quiz-nav-button--primary" type="button" onClick={goNext}>
                    Р”Р°Р»РµРµ
                    <ArrowRight aria-hidden="true" size={18} />
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

function QuestionStep({ answer, step, touched, onSelect }) {
  return (
    <div className="quiz-step">
      <p className="quiz-step__eyebrow">{step.eyebrow}</p>
      <h3>{step.title}</h3>
      <span>{step.hint}</span>

      <div className="quiz-options">
        {step.options.map((option) => {
          const isActive = Array.isArray(answer) ? answer.includes(option.id) : answer === option.id

          return (
            <button
              className={isActive ? 'is-active' : ''}
              type="button"
              key={option.id}
              onClick={() => onSelect(option.id)}
            >
              <span className="quiz-options__check">
                {isActive ? <Check aria-hidden="true" size={16} /> : null}
              </span>
              <strong>{option.title}</strong>
              <small>{option.note}</small>
            </button>
          )
        })}
      </div>

      {touched && !hasAnswer(answer) ? <p className="quiz-error">Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚, С‡С‚РѕР±С‹ РїСЂРѕРґРѕР»Р¶РёС‚СЊ.</p> : null}
    </div>
  )
}

function ContactStep({ contact, files, touched, onChange, onFilesChange }) {
  const updateField = (fieldId, value) => {
    onChange((current) => ({ ...current, [fieldId]: value }))
  }

  return (
    <div className="quiz-step">
      <p className="quiz-step__eyebrow">Р¤РёРЅР°Р»</p>
      <h3>РљСѓРґР° РѕС‚РїСЂР°РІРёС‚СЊ СЂР°СЃС‡РµС‚?</h3>
      <span>РћСЃС‚Р°РІСЊС‚Рµ РєРѕРЅС‚Р°РєС‚С‹. Р¤РѕС‚Рѕ РїРѕРјРѕР¶РµС‚ РЅР°Р·РІР°С‚СЊ РІРёР»РєСѓ СЃС‚РѕРёРјРѕСЃС‚Рё С‚РѕС‡РЅРµРµ.</span>

      <div className="quiz-fields">
        {quizContactFields.map((field) => (
          <label key={field.id}>
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea
                value={contact[field.id]}
                placeholder={field.placeholder}
                onChange={(event) => updateField(field.id, event.target.value)}
              />
            ) : (
              <input
                value={contact[field.id]}
                type={field.type}
                placeholder={field.placeholder}
                onChange={(event) => updateField(field.id, event.target.value)}
              />
            )}
          </label>
        ))}

        <label className="quiz-upload">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => onFilesChange(Array.from(event.target.files || []))}
          />
          <Camera aria-hidden="true" size={18} />
          <span>{files.length ? `Р’С‹Р±СЂР°РЅРѕ С„РѕС‚Рѕ: ${files.length}` : 'РџСЂРёР»РѕР¶РёС‚СЊ С„РѕС‚Рѕ РјРµР±РµР»Рё'}</span>
        </label>
      </div>

      {touched && !isContactValid(contact) ? (
        <p className="quiz-error">Р—Р°РїРѕР»РЅРёС‚Рµ РёРјСЏ Рё С‚РµР»РµС„РѕРЅ, С‡С‚РѕР±С‹ РїРѕР»СѓС‡РёС‚СЊ СЂР°СЃС‡РµС‚.</p>
      ) : null}
    </div>
  )
}

function SuccessView({ mailHref, summary, whatsappHref, onBack, onClose }) {
  return (
    <div className="quiz-success">
      <div className="quiz-success__icon">
        <Check aria-hidden="true" size={28} />
      </div>
      <p className="quiz-modal__kicker">Р—Р°СЏРІРєР° СЃРѕР±СЂР°РЅР°</p>
      <h2>РўРµРєСЃС‚ Р·Р°СЏРІРєРё СЃРєРѕРїРёСЂРѕРІР°РЅ</h2>
      <span>
        РћС‚РїСЂР°РІСЊС‚Рµ РµРіРѕ РјР°СЃС‚РµСЂСѓ СѓРґРѕР±РЅС‹Рј СЃРїРѕСЃРѕР±РѕРј. Р•СЃР»Рё С„РѕС‚Рѕ РІС‹Р±СЂР°РЅС‹, РїСЂРёР»РѕР¶РёС‚Рµ РёС… СЃР»РµРґСѓСЋС‰РёРј СЃРѕРѕР±С‰РµРЅРёРµРј.
      </span>

      <pre>{summary}</pre>

      <div className="quiz-success__actions">
        <a className="quiz-nav-button quiz-nav-button--primary" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" size={18} />
          WhatsApp
        </a>
        <a className="quiz-nav-button quiz-nav-button--ghost" href={mailHref}>
          <Mail aria-hidden="true" size={18} />
          РџРѕС‡С‚Р°
        </a>
        <a className="quiz-nav-button quiz-nav-button--ghost" href={company.phoneHref}>
          <Phone aria-hidden="true" size={18} />
          РџРѕР·РІРѕРЅРёС‚СЊ
        </a>
      </div>

      <div className="quiz-success__bottom">
        <button type="button" onClick={onBack}>
          РР·РјРµРЅРёС‚СЊ РѕС‚РІРµС‚С‹
        </button>
        <button type="button" onClick={onClose}>
          Р—Р°РєСЂС‹С‚СЊ
        </button>
      </div>
    </div>
  )
}

function SummaryLine({ label, value }) {
  return (
    <span>
      <strong>{label}</strong>
      {formatAnswer(value)}
    </span>
  )
}

function formatAnswer(value) {
  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : 'РЅРµ РІС‹Р±СЂР°РЅРѕ'
  }

  return value || 'РЅРµ РІС‹Р±СЂР°РЅРѕ'
}

function hasAnswer(value) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value)
}

function isContactValid(contact) {
  return contact.name.trim().length > 1 && contact.phone.trim().length > 5
}

