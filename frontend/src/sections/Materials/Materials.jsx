import { Sparkles } from 'lucide-react'
import { SectionHeading } from '../../components/SectionHeading'
import { materialGroups } from '../../data/content'
import { publicAsset } from '../../utils/assets'
import './Materials.css'

export function Materials() {
  return (
    <section className="section materials-section" id="materials">
      <div className="container materials-section__layout">
        <div className="materials-section__image reveal-on-scroll">
          <img
            className="image-parallax"
            src={publicAsset('/images/bestobivka/choise_material.jpg')}
            alt="Каталоги обивочных материалов"
          />
        </div>
        <div className="materials-section__content reveal-on-scroll">
          <SectionHeading
            kicker="Подбор ткани"
            title="Мастер приезжает с образцами и помогает выбрать материал под жизнь, а не только под цвет"
            text="Важны не только оттенок и фактура: учитываем детей, домашних питомцев, солнечную сторону, частоту чистки и стиль интерьера."
          />
          <div className="materials-list">
            {materialGroups.map((group) => (
              <article key={group.title}>
                <Sparkles aria-hidden="true" size={18} />
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

