import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { serviceItems } from '../data/content'
import './Services.css'

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          kicker="Услуги и цены"
          title="Перетяжка без сюрпризов: от простых кресел до больших модулей"
          text="Сначала оцениваем тип мебели и состояние каркаса, затем подбираем материал, наполнитель и список работ под ваш бюджет."
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
                  <span>Рассчитать стоимость</span>
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
