import { Gift } from 'lucide-react'
import { ActionButton } from '../components/ActionButton'
import { company } from '../data/content'
import { publicAsset } from '../utils/assets'
import './Promo.css'

export function Promo() {
  return (
    <section className="promo-section" id="promo">
      <img className="promo-section__image image-parallax" src={publicAsset('/images/bestobivka/promo.jpg')} alt="" />
      <div className="promo-section__overlay" aria-hidden="true" />
      <div className="container promo-section__content reveal-on-scroll">
        <p>Акция</p>
        <h2>Скидка 10% на перетяжку после расчета</h2>
        <span>Пройдите квиз, приложите фото мебели и получите предварительную оценку за несколько минут.</span>
        <ActionButton href={company.quizHref} icon={Gift} className="promo-section__button">
          Получить скидку
        </ActionButton>
      </div>
    </section>
  )
}
