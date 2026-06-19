import { ArrowRight, BadgeCheck } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company, processSteps, reasons } from '../../data/content'
import './Process.css'

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div className="process-section__header reveal-on-scroll">
          <div className="section-heading">
            <p className="section-heading__kicker">РљР°Рє СЂР°Р±РѕС‚Р°РµРј</p>
            <h2>РџРѕРЅСЏС‚РЅС‹Р№ РјР°СЂС€СЂСѓС‚ РѕС‚ РїРµСЂРІРѕРіРѕ С„РѕС‚Рѕ РґРѕ РіРѕС‚РѕРІРѕР№ РјРµР±РµР»Рё</h2>
          </div>
          <ActionButton href={company.quizHref} icon={ArrowRight} variant="secondary">
            РќР°С‡Р°С‚СЊ СЂР°СЃС‡РµС‚
          </ActionButton>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <article className="process-step reveal-on-scroll" key={step.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card reveal-on-scroll" key={reason.title}>
              <BadgeCheck aria-hidden="true" size={22} />
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

