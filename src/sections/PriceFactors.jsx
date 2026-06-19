import { Calculator, Ruler, Settings, SwatchBook, Truck } from 'lucide-react'
import { ActionButton } from '../components/ActionButton'
import { company } from '../data/content'
import { priceFactors } from '../data/seoBlocks'
import './PriceFactors.css'

const icons = [Ruler, Settings, SwatchBook, Truck]

export function PriceFactors() {
  return (
    <section className="section price-factors-section" id="price-factors">
      <div className="container price-factors-section__layout">
        <div className="price-factors-section__copy reveal-on-scroll">
          <p className="section-heading__kicker">Стоимость работ</p>
          <h2>От чего зависит цена перетяжки дивана, кресла или кровати</h2>
          <p>
            Точную цену мастер называет после фото или замера, но основные факторы понятны заранее:
            размер мебели, состояние каркаса, выбранная ткань и объем дополнительных работ.
          </p>
          <ActionButton href={company.quizHref} icon={Calculator}>
            Рассчитать в квизе
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
