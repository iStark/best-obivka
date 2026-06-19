import { MapPin, Navigation, Phone } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company } from '../../data/content'
import { areaHighlights, serviceAreas } from '../../data/seoBlocks'
import { publicAsset } from '../../utils/assets'
import './ServiceAreas.css'

export function ServiceAreas() {
  return (
    <section className="section service-areas-section" id="service-areas">
      <div className="container service-areas-section__layout">
        <div
          className="service-areas-section__map"
          style={{ '--service-areas-map-image': `url("${publicAsset('/images/bestobivka/before-after/1-1.jpg')}")` }}
          aria-hidden="true"
        >
          <div className="service-areas-section__pin service-areas-section__pin--main">
            <MapPin size={22} />
            РЎР°СЂР°С‚РѕРІ
          </div>
          <div className="service-areas-section__pin service-areas-section__pin--side">Р­РЅРіРµР»СЊСЃ</div>
          <span className="service-areas-section__route" />
          <span className="service-areas-section__circle" />
        </div>

        <div className="service-areas-section__content">
          <p className="section-heading__kicker">Р“РµРѕРіСЂР°С„РёСЏ РІС‹РµР·РґР°</p>
          <h2>РџРµСЂРµС‚СЏР¶РєР° РјРµР±РµР»Рё РІ РЎР°СЂР°С‚РѕРІРµ Рё Р­РЅРіРµР»СЊСЃРµ СЃ Р·Р°РјРµСЂРѕРј Рё РґРѕСЃС‚Р°РІРєРѕР№</h2>
          <p>
            Р Р°Р±РѕС‚Р°РµРј РїРѕ РЎР°СЂР°С‚РѕРІСѓ, Р­РЅРіРµР»СЊСЃСѓ Рё Р±Р»РёР¶Р°Р№С€РёРј СЂР°Р№РѕРЅР°Рј. РњРѕР¶РЅРѕ РїСЂРёСЃР»Р°С‚СЊ С„РѕС‚Рѕ РјРµР±РµР»Рё,
            РїРѕР»СѓС‡РёС‚СЊ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ СЂР°СЃС‡РµС‚, СЃРѕРіР»Р°СЃРѕРІР°С‚СЊ Р·Р°РјРµСЂ Рё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РґРѕСЃС‚Р°РІРєСѓ РІ РјР°СЃС‚РµСЂСЃРєСѓСЋ.
          </p>

          <div className="service-areas-tags" aria-label="Р Р°Р№РѕРЅС‹ РѕР±СЃР»СѓР¶РёРІР°РЅРёСЏ">
            {serviceAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>

          <div className="service-areas-highlights">
            {areaHighlights.map((item) => (
              <article key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="service-areas-actions">
            <ActionButton href={company.quizHref} icon={Navigation}>
              Р’С‹Р·РІР°С‚СЊ РјР°СЃС‚РµСЂР°
            </ActionButton>
            <ActionButton href={company.phoneHref} icon={Phone} variant="secondary">
              РџРѕР·РІРѕРЅРёС‚СЊ
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  )
}

