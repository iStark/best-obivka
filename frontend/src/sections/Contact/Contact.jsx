import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company } from '../../data/content'
import './Contact.css'

export function Contact() {
  return (
    <section className="section contact-section" id="contacts">
      <div className="container contact-section__layout">
        <div className="contact-card reveal-on-scroll">
          <p className="section-heading__kicker">Контакты</p>
          <h2>Привезем образцы, заберем мебель и вернем готовый результат</h2>
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
              Фото мебели в Max
            </a>
          </div>
          <div className="contact-card__actions">
            <ActionButton href={company.quizHref} icon={MessageCircle}>
              Оставить заявку
            </ActionButton>
            <ActionButton href={company.phoneHref} icon={Phone} variant="secondary">
              Позвонить
            </ActionButton>
          </div>
        </div>

        <div className="map-frame reveal-on-scroll">
          <iframe
            title="BestObivka на карте"
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

