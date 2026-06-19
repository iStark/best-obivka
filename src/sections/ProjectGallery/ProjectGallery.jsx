import { useState } from 'react'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { projectGalleryItems } from '../../data/content'
import './ProjectGallery.css'

export function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = projectGalleryItems[activeIndex]

  const moveSlide = (direction) => {
    setActiveIndex((current) => (current + direction + projectGalleryItems.length) % projectGalleryItems.length)
  }

  return (
    <section className="section project-gallery-section" id="project-gallery">
      <div className="container">
        <SectionHeading
          kicker="Галерея проектов"
          title="Готовые работы крупным планом"
          text="Собрали отдельный слайдер с результатами перетяжки, чтобы быстро показать фактуру ткани, форму и общий вид мебели после ремонта."
        />

        <div className="project-gallery reveal-on-scroll">
          <div className="project-gallery__stage">
            <img src={activeItem.image} alt={activeItem.title} />
            <div className="project-gallery__caption">
              <span>{activeItem.category}</span>
              <h3>{activeItem.title}</h3>
            </div>
          </div>

          <div className="project-gallery__controls" aria-label="Управление галереей">
            <button type="button" aria-label="Предыдущий проект" onClick={() => moveSlide(-1)}>
              <ChevronLeft aria-hidden="true" size={22} />
            </button>
            <div>
              <Images aria-hidden="true" size={18} />
              <span>
                {String(activeIndex + 1).padStart(2, '0')} / {String(projectGalleryItems.length).padStart(2, '0')}
              </span>
            </div>
            <button type="button" aria-label="Следующий проект" onClick={() => moveSlide(1)}>
              <ChevronRight aria-hidden="true" size={22} />
            </button>
          </div>

          <div className="project-gallery__thumbs" aria-label="Выбор проекта">
            {projectGalleryItems.map((item, index) => (
              <button
                type="button"
                key={item.image}
                className={activeIndex === index ? 'is-active' : ''}
                aria-label={`Показать проект: ${item.title}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.image} alt="" loading="lazy" aria-hidden="true" />
                <span>{item.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
