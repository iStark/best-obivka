import { Armchair, Bed, Sofa } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { repairDirections } from '../../data/seoBlocks'
import './RepairDirections.css'

const icons = [Sofa, Armchair, Bed]

export function RepairDirections() {
  return (
    <section className="section repair-directions-section" id="repair-directions">
      <div className="container">
        <SectionHeading
          kicker="Р§С‚Рѕ СЂРµРјРѕРЅС‚РёСЂСѓРµРј"
          title="РџРµСЂРµС‚СЏР¶РєР° Рё СЂРµРјРѕРЅС‚ РјСЏРіРєРѕР№ РјРµР±РµР»Рё РїРѕРґ СЂР°Р·РЅС‹Рµ Р·Р°РґР°С‡Рё"
          text="BestObivka СЂР°Р±РѕС‚Р°РµС‚ СЃ РґРёРІР°РЅР°РјРё, РєСЂРµСЃР»Р°РјРё, СЃС‚СѓР»СЊСЏРјРё, РєСЂРѕРІР°С‚СЏРјРё Рё РјСЏРіРєРёРјРё РїР°РЅРµР»СЏРјРё. Р”Р»СЏ РїРѕРёСЃРєРѕРІС‹С… Р·Р°РїСЂРѕСЃРѕРІ СЌС‚Рѕ РІР°Р¶РЅС‹Р№ Р±Р»РѕРє, Р° РґР»СЏ РєР»РёРµРЅС‚Р° - Р±С‹СЃС‚СЂС‹Р№ СЃРїРѕСЃРѕР± РїРѕРЅСЏС‚СЊ, РїРѕРґС…РѕРґРёС‚ Р»Рё РјР°СЃС‚РµСЂСЃРєР°СЏ РїРѕРґ РµРіРѕ РјРµР±РµР»СЊ."
        />

        <div className="repair-directions-grid">
          {repairDirections.map((direction, index) => {
            const Icon = icons[index]

            return (
              <article className="repair-direction-card reveal-on-scroll" key={direction.title}>
                <Icon aria-hidden="true" size={30} />
                <h3>{direction.title}</h3>
                <p>{direction.text}</p>
                <div className="repair-direction-card__tags">
                  {direction.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

