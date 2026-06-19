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
            kicker="РћС‚Р·С‹РІС‹ РєР»РёРµРЅС‚РѕРІ"
            title="РћС‚Р·С‹РІС‹ РїРѕСЃР»Рµ РїРµСЂРµС‚СЏР¶РєРё Рё СЂРµРјРѕРЅС‚Р° РјРµР±РµР»Рё"
            text="РљР»РёРµРЅС‚С‹ РїСЂРёСЃС‹Р»Р°СЋС‚ С„РѕС‚Рѕ РіРѕС‚РѕРІРѕР№ РјРµР±РµР»Рё, РґРµР»СЏС‚СЃСЏ РІРїРµС‡Р°С‚Р»РµРЅРёСЏРјРё Рё СЂРµРєРѕРјРµРЅРґСѓСЋС‚ РјР°СЃС‚РµСЂСЃРєСѓСЋ РґСЂСѓР·СЊСЏРј."
          />
          <a className="reviews-section__chat" href={company.telegramHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            РќР°РїРёСЃР°С‚СЊ РІ Telegram
          </a>
        </div>

        <div className="reviews-slider reveal-on-scroll" aria-label="РћС‚Р·С‹РІС‹ РєР»РёРµРЅС‚РѕРІ">
          <div className="reviews-slider__viewport">
            {reviews.map((review, index) => (
              <article
                className={`review-slide ${activeReview === index ? 'is-active' : ''}`}
                key={review}
                aria-hidden={activeReview !== index}
              >
                <img src={review} alt={`РћС‚Р·С‹РІ РєР»РёРµРЅС‚Р° ${index + 1}`} loading="lazy" />
              </article>
            ))}
          </div>

          <div className="reviews-slider__panel">
            <p>
              {String(activeReview + 1).padStart(2, '0')} /{' '}
              {String(reviews.length).padStart(2, '0')}
            </p>
            <h3>Р–РёРІС‹Рµ РѕС‚Р·С‹РІС‹ РёР· РїРµСЂРµРїРёСЃРѕРє</h3>
            <span>
              РџРµСЂРµРєР»СЋС‡Р°Р№С‚Рµ СЃРєСЂРёРЅС€РѕС‚С‹, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ, РєР°Рє РєР»РёРµРЅС‚С‹ РѕС†РµРЅРёРІР°СЋС‚ СЂРµР·СѓР»СЊС‚Р°С‚,
              СЃСЂРѕРєРё Рё РѕР±С‰РµРЅРёРµ СЃ РјР°СЃС‚РµСЂРѕРј.
            </span>

            <div className="reviews-slider__controls">
              <button type="button" aria-label="РџСЂРµРґС‹РґСѓС‰РёР№ РѕС‚Р·С‹РІ" onClick={() => moveReview(-1)}>
                <ChevronLeft aria-hidden="true" size={20} />
              </button>
              <button type="button" aria-label="РЎР»РµРґСѓСЋС‰РёР№ РѕС‚Р·С‹РІ" onClick={() => moveReview(1)}>
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </div>

            <div className="reviews-slider__dots" aria-label="Р’С‹Р±РѕСЂ РѕС‚Р·С‹РІР°">
              {reviews.map((review, index) => (
                <button
                  type="button"
                  key={`${review}-dot`}
                  className={activeReview === index ? 'is-active' : ''}
                  aria-label={`РџРѕРєР°Р·Р°С‚СЊ РѕС‚Р·С‹РІ ${index + 1}`}
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

