import { useState } from 'react'
import './BeforeAfterSlider.css'

export function BeforeAfterSlider({ project }) {
  const [split, setSplit] = useState(52)

  return (
    <div className="before-after" style={{ '--split': `${split}%` }}>
      <img className="before-after__image" src={project.after} alt={`${project.title} после`} />
      <div className="before-after__before">
        <img src={project.before} alt={`${project.title} до`} />
      </div>
      <span className="before-after__label before-after__label--before">До</span>
      <span className="before-after__label before-after__label--after">После</span>
      <span className="before-after__handle" aria-hidden="true" />
      <input
        className="before-after__range"
        type="range"
        min="8"
        max="92"
        value={split}
        aria-label="Сравнить состояние мебели до и после"
        onChange={(event) => setSplit(event.target.value)}
      />
    </div>
  )
}
