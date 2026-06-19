import { Armchair, Bed, Sofa } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { repairDirections } from '../data/seoBlocks'
import './RepairDirections.css'

const icons = [Sofa, Armchair, Bed]

export function RepairDirections() {
  return (
    <section className="section repair-directions-section" id="repair-directions">
      <div className="container">
        <SectionHeading
          kicker="Что ремонтируем"
          title="Перетяжка и ремонт мягкой мебели под разные задачи"
          text="BestObivka работает с диванами, креслами, стульями, кроватями и мягкими панелями. Для поисковых запросов это важный блок, а для клиента - быстрый способ понять, подходит ли мастерская под его мебель."
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
