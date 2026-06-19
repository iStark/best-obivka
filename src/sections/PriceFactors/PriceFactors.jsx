import { Calculator, Ruler, Settings, SwatchBook, Truck } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company } from '../../data/content'
import { priceFactors } from '../../data/seoBlocks'
import './PriceFactors.css'

const icons = [Ruler, Settings, SwatchBook, Truck]

export function PriceFactors() {
  return (
    <section className="section price-factors-section" id="price-factors">
      <div className="container price-factors-section__layout">
        <div className="price-factors-section__copy reveal-on-scroll">
          <p className="section-heading__kicker">РЎС‚РѕРёРјРѕСЃС‚СЊ СЂР°Р±РѕС‚</p>
          <h2>РћС‚ С‡РµРіРѕ Р·Р°РІРёСЃРёС‚ С†РµРЅР° РїРµСЂРµС‚СЏР¶РєРё РґРёРІР°РЅР°, РєСЂРµСЃР»Р° РёР»Рё РєСЂРѕРІР°С‚Рё</h2>
          <p>
            РўРѕС‡РЅСѓСЋ С†РµРЅСѓ РјР°СЃС‚РµСЂ РЅР°Р·С‹РІР°РµС‚ РїРѕСЃР»Рµ С„РѕС‚Рѕ РёР»Рё Р·Р°РјРµСЂР°, РЅРѕ РѕСЃРЅРѕРІРЅС‹Рµ С„Р°РєС‚РѕСЂС‹ РїРѕРЅСЏС‚РЅС‹ Р·Р°СЂР°РЅРµРµ:
            СЂР°Р·РјРµСЂ РјРµР±РµР»Рё, СЃРѕСЃС‚РѕСЏРЅРёРµ РєР°СЂРєР°СЃР°, РІС‹Р±СЂР°РЅРЅР°СЏ С‚РєР°РЅСЊ Рё РѕР±СЉРµРј РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹С… СЂР°Р±РѕС‚.
          </p>
          <ActionButton href={company.quizHref} icon={Calculator}>
            Р Р°СЃСЃС‡РёС‚Р°С‚СЊ РІ РєРІРёР·Рµ
          </ActionButton>
        </div>

        <div className="price-factors-list">
          {priceFactors.map((factor, index) => {
            const Icon = icons[index]

            return (
              <article className="price-factor-card reveal-on-scroll" key={factor.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon aria-hidden="true" size={24} />
                <div>
                  <h3>{factor.title}</h3>
                  <p>{factor.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

