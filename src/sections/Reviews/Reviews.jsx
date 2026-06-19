import { useState } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { company, reviews } from '../../data/content'
import './Reviews.css'

export function Reviews() {
  const [activeReview, setActiveReview] = useState(0)

  const moveReview = (direction) => {
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length)
  }

  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-section__header">
          <SectionHeading
            kicker="Отзывы клиентов"
            title="Отзывы после перетяжки и ремонта мебели"
            text="Клиенты присылают фото готовой мебели, делятся впечатлениями и рекомендуют мастерскую друзьям."
          />
          <a className="reviews-section__chat" href={company.telegramHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            Написать в Telegram
          </a>
        </div>

        <div className="reviews-slider reveal-on-scroll" aria-label="Отзывы клиентов">
          <div className="reviews-slider__viewport">
            {reviews.map((review, index) => (
              <article
                className={`review-slide ${activeReview === index ? 'is-active' : ''}`}
                key={review}
                aria-hidden={activeReview !== index}
              >
                <img src={review} alt={`Отзыв клиента ${index + 1}`} loading="lazy" />
              </article>
            ))}
          </div>

          <div className="reviews-slider__panel">
            <p>
              {String(activeReview + 1).padStart(2, '0')} /{' '}
              {String(reviews.length).padStart(2, '0')}
            </p>
            <h3>Живые отзывы из переписок</h3>
            <span>
              Переключайте скриншоты, чтобы посмотреть, как клиенты оценивают результат,
              сроки и общение с мастером.
            </span>

            <div className="reviews-slider__controls">
              <button type="button" aria-label="Предыдущий отзыв" onClick={() => moveReview(-1)}>
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <button type="button" aria-label="Следующий отзыв" onClick={() => moveReview(1)}>
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="reviews-slider__dots" aria-label="Выбор отзыва">
              {reviews.map((review, index) => (
                <button
                  type="button"
                  key={`${review}-dot`}
                  className={activeReview === index ? 'is-active' : ''}
                  aria-label={`Показать отзыв ${index + 1}`}
                  onClick={() => setActiveReview(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

