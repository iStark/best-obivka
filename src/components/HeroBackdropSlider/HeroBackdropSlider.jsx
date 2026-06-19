import { useEffect, useMemo, useState } from 'react'
import './HeroBackdropSlider.css'

export function HeroBackdropSlider({ slides, intervalMs = 5600 }) {
  const cleanSlides = useMemo(
    () =>
      Array.from(
        new Map(
          slides
            .filter((slide) => slide.image)
            .map((slide) => [slide.image, { ...slide, alt: slide.alt ?? '' }]),
        ).values(),
      ),
    [slides],
  )
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = cleanSlides.length ? activeSlide % cleanSlides.length : 0

  useEffect(() => {
    if (cleanSlides.length < 2) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % cleanSlides.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [cleanSlides.length, intervalMs])

  if (!cleanSlides.length) {
    return null
  }

  return (
    <div className="hero-backdrop" aria-label="Фоновые изображения проектов">
      {cleanSlides.map((slide, index) => (
        <div
          className={`hero-backdrop__slide ${currentSlide === index ? 'is-active' : ''}`}
          key={slide.image}
          aria-hidden={currentSlide !== index}
        >
          <img
            src={slide.image}
            alt={currentSlide === index ? slide.alt : ''}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={{ objectPosition: slide.position ?? 'center center' }}
          />
        </div>
      ))}

      <div className="hero-backdrop__light" aria-hidden="true" />
      <div className="hero-backdrop__rings" aria-hidden="true">
        <span />
        <span />
      </div>

      {cleanSlides.length > 1 ? (
        <div className="hero-backdrop__controls">
          <div className="hero-backdrop__dots" aria-label="Выбор слайда">
            {cleanSlides.map((slide, index) => (
              <button
                type="button"
                className={currentSlide === index ? 'is-active' : ''}
                key={`${slide.image}-dot`}
                aria-label={`Слайд ${index + 1}: ${slide.title ?? slide.alt}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
