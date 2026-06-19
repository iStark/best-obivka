import { Sparkles } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { materialGroups } from '../../data/content'
import { publicAsset } from '../../utils/assets'
import './Materials.css'

export function Materials() {
  return (
    <section className="section materials-section" id="materials">
      <div className="container materials-section__layout">
        <div className="materials-section__image reveal-on-scroll">
          <img
            className="image-parallax"
            src={publicAsset('/images/bestobivka/choise_material.jpg')}
            alt="РљР°С‚Р°Р»РѕРіРё РѕР±РёРІРѕС‡РЅС‹С… РјР°С‚РµСЂРёР°Р»РѕРІ"
          />
        </div>
        <div className="materials-section__content reveal-on-scroll">
          <SectionHeading
            kicker="РџРѕРґР±РѕСЂ С‚РєР°РЅРё"
            title="РњР°СЃС‚РµСЂ РїСЂРёРµР·Р¶Р°РµС‚ СЃ РѕР±СЂР°Р·С†Р°РјРё Рё РїРѕРјРѕРіР°РµС‚ РІС‹Р±СЂР°С‚СЊ РјР°С‚РµСЂРёР°Р» РїРѕРґ Р¶РёР·РЅСЊ, Р° РЅРµ С‚РѕР»СЊРєРѕ РїРѕРґ С†РІРµС‚"
            text="Р’Р°Р¶РЅС‹ РЅРµ С‚РѕР»СЊРєРѕ РѕС‚С‚РµРЅРѕРє Рё С„Р°РєС‚СѓСЂР°: СѓС‡РёС‚С‹РІР°РµРј РґРµС‚РµР№, РґРѕРјР°С€РЅРёС… РїРёС‚РѕРјС†РµРІ, СЃРѕР»РЅРµС‡РЅСѓСЋ СЃС‚РѕСЂРѕРЅСѓ, С‡Р°СЃС‚РѕС‚Сѓ С‡РёСЃС‚РєРё Рё СЃС‚РёР»СЊ РёРЅС‚РµСЂСЊРµСЂР°."
          />
          <div className="materials-list">
            {materialGroups.map((group) => (
              <article key={group.title}>
                <Sparkles aria-hidden="true" size={18} />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

