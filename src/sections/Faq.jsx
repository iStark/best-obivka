import { useState } from 'react'
import { FaqItem } from '../components/FaqItem'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/content'
import './Faq.css'

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-section__layout">
        <div className="faq-section__media reveal-on-scroll">
          <img src="/images/bestobivka/faq.png" alt="Мастерская BestObivka" />
        </div>
        <div className="faq-section__content reveal-on-scroll">
          <SectionHeading
            kicker="Вопросы и ответы"
            title="Закрываем частые сомнения до заявки"
            text="Собрали главное о сроках, замере, материалах, предоплате и работе в мастерской."
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                {...faq}
                id={`faq-${index}`}
                isOpen={activeIndex === index}
                onToggle={() => setActiveIndex((current) => (current === index ? null : index))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
