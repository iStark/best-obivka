import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { ActionButton } from '../components/ActionButton'
import { HeroBackdropSlider } from '../components/HeroBackdropSlider'
import { company, heroSlides, heroStats } from '../data/content'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <HeroBackdropSlider slides={heroSlides} />
      <div className="hero-section__shade" aria-hidden="true" />

      <div className="container hero-section__content">
        <p className="hero-section__eyebrow reveal">{company.region}</p>
        <h1 className="reveal">Перетяжка мебели в Саратове</h1>
        <p className="hero-section__lead reveal">
          Обновляем диваны, кресла и кровати в мастерской: подбираем ткань, фиксируем смету,
          забираем мебель и возвращаем готовый результат с гарантией.
        </p>

        <div className="hero-section__actions reveal">
          <ActionButton href={company.quizHref} icon={ArrowRight}>
            Рассчитать стоимость
          </ActionButton>
          <ActionButton href={company.phoneHref} icon={Phone} variant="light">
            Позвонить мастеру
          </ActionButton>
          <a className="hero-section__max" href={company.maxHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            <span>Отправить фото в Max</span>
          </a>
        </div>
      </div>

      <div className="hero-section__stats reveal">
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
