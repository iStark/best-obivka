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
            Саратов
          </div>
          <div className="service-areas-section__pin service-areas-section__pin--side">Энгельс</div>
          <span className="service-areas-section__route" />
          <span className="service-areas-section__circle" />
        </div>

        <div className="service-areas-section__content">
          <p className="section-heading__kicker">География выезда</p>
          <h2>Перетяжка мебели в Саратове и Энгельсе с замером и доставкой</h2>
          <p>
            Работаем по Саратову, Энгельсу и ближайшим районам. Можно прислать фото мебели,
            получить предварительный расчет, согласовать замер и при необходимости доставку в мастерскую.
          </p>

          <div className="service-areas-tags" aria-label="Районы обслуживания">
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
              Вызвать мастера
            </ActionButton>
            <ActionButton href={company.phoneHref} icon={Phone} variant="secondary">
              Позвонить
            </ActionButton>
          </div>
        </div>
      </div>
    </section>
  )
}

