import { useState } from 'react'
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider'
import { SectionHeading } from '../../components/SectionHeading'
import { portfolioProjects } from '../../data/content'
import './Portfolio.css'

export function Portfolio() {
  const [activeId, setActiveId] = useState(portfolioProjects[0].id)
  const activeProject = portfolioProjects.find((project) => project.id === activeId)

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <SectionHeading
          kicker="Наши работы"
          title="До и после: реальные проекты мастерской"
          text="Показываем, как меняется мебель после новой обивки, ремонта сидений и аккуратной подгонки деталей."
        />

        <div className="portfolio-shell reveal-on-scroll">
          <div className="portfolio-shell__viewer">
            <BeforeAfterSlider project={activeProject} />
          </div>
          <div className="portfolio-shell__info">
            <p className="portfolio-shell__eyebrow">Проект</p>
            <h3>{activeProject.title}</h3>
            <div className="portfolio-shell__meta">
              {activeProject.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="portfolio-tabs" role="tablist" aria-label="Выбор проекта">
              {portfolioProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  className={activeId === project.id ? 'is-active' : ''}
                  onClick={() => setActiveId(project.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

