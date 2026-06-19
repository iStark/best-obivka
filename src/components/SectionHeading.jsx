import './SectionHeading.css'

export function SectionHeading({ kicker, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {kicker ? <p className="section-heading__kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-heading__text">{text}</p> : null}
    </div>
  )
}
