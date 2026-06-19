import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company } from '../../data/content'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact-section" id="contacts">
      <div className="container contact-section__layout">
        <div className="contact-card reveal-on-scroll">
          <p className="section-heading__kicker">РљРѕРЅС‚Р°РєС‚С‹</p>
          <h2>РџСЂРёРІРµР·РµРј РѕР±СЂР°Р·С†С‹, Р·Р°Р±РµСЂРµРј РјРµР±РµР»СЊ Рё РІРµСЂРЅРµРј РіРѕС‚РѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚</h2>
          <div className="contact-card__items">
            <a href={company.phoneHref}>
              <Phone aria-hidden="true" size={20} />
              <span>{company.phone}</span>
            </a>
            <span>
              <MapPin aria-hidden="true" size={20} />
              {company.city}, {company.address}
            </span>
            <a href={company.maxHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={20} />
              Р¤РѕС‚Рѕ РјРµР±РµР»Рё РІ Max
            </a>
          </div>
          <div className="contact-card__actions">
            <ActionButton href={company.quizHref} icon={MessageCircle}>
              РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ
            </ActionButton>
            <ActionButton href={company.phoneHref} icon={Phone} variant="secondary">
              РџРѕР·РІРѕРЅРёС‚СЊ
            </ActionButton>
          </div>
        </div>

        <div className="map-frame reveal-on-scroll">
          <iframe
            title="BestObivka РЅР° РєР°СЂС‚Рµ"
            src={company.mapSrc}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

