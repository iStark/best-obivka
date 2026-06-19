import { useState } from 'react'
import { FaqItem } from '../../components/FaqItem'
import { SectionHeading } from '../../components/SectionHeading'
import { faqs } from '../../data/content'
import { publicAsset } from '../../utils/assets'
import './Faq.css'

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-section__layout">
        <div className="faq-section__media reveal-on-scroll">
          <img src={publicAsset('/images/bestobivka/faq.png')} alt="РњР°СЃС‚РµСЂСЃРєР°СЏ BestObivka" />
        </div>
        <div className="faq-section__content reveal-on-scroll">
          <SectionHeading
            kicker="Р’РѕРїСЂРѕСЃС‹ Рё РѕС‚РІРµС‚С‹"
            title="Р—Р°РєСЂС‹РІР°РµРј С‡Р°СЃС‚С‹Рµ СЃРѕРјРЅРµРЅРёСЏ РґРѕ Р·Р°СЏРІРєРё"
            text="РЎРѕР±СЂР°Р»Рё РіР»Р°РІРЅРѕРµ Рѕ СЃСЂРѕРєР°С…, Р·Р°РјРµСЂРµ, РјР°С‚РµСЂРёР°Р»Р°С…, РїСЂРµРґРѕРїР»Р°С‚Рµ Рё СЂР°Р±РѕС‚Рµ РІ РјР°СЃС‚РµСЂСЃРєРѕР№."
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

