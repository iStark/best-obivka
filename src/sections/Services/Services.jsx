import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { serviceItems } from '../../data/content'
import './Services.css'

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          kicker="РЈСЃР»СѓРіРё Рё С†РµРЅС‹"
          title="РџРµСЂРµС‚СЏР¶РєР° Р±РµР· СЃСЋСЂРїСЂРёР·РѕРІ: РѕС‚ РїСЂРѕСЃС‚С‹С… РєСЂРµСЃРµР» РґРѕ Р±РѕР»СЊС€РёС… РјРѕРґСѓР»РµР№"
          text="РЎРЅР°С‡Р°Р»Р° РѕС†РµРЅРёРІР°РµРј С‚РёРї РјРµР±РµР»Рё Рё СЃРѕСЃС‚РѕСЏРЅРёРµ РєР°СЂРєР°СЃР°, Р·Р°С‚РµРј РїРѕРґР±РёСЂР°РµРј РјР°С‚РµСЂРёР°Р», РЅР°РїРѕР»РЅРёС‚РµР»СЊ Рё СЃРїРёСЃРѕРє СЂР°Р±РѕС‚ РїРѕРґ РІР°С€ Р±СЋРґР¶РµС‚."
        />

        <div className="services-grid">
          {serviceItems.map((service) => (
            <article className="service-card reveal-on-scroll" key={service.id}>
              <img src={service.image} alt={service.fullTitle} />
              <div className="service-card__content">
                <p className="service-card__price">{service.price}</p>
                <h3>{service.fullTitle}</h3>
                <p>{service.description}</p>
                <div className="service-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a href="#estimate" className="service-card__link">
                  <span>Р Р°СЃСЃС‡РёС‚Р°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ</span>
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

