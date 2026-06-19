import { useMemo, useState } from 'react'
import { Calculator, Check, MessageCircle } from 'lucide-react'
import { ActionButton } from '../components/ActionButton'
import { calculatorExtras, company, materialOptions, serviceItems } from '../data/content'
import { formatPrice } from '../utils/format'
import './Estimate.css'

export function Estimate() {
  const [serviceId, setServiceId] = useState(serviceItems[0].id)
  const [materialId, setMaterialId] = useState(materialOptions[0].id)
  const [extras, setExtras] = useState(['delivery'])

  const selectedService = serviceItems.find((service) => service.id === serviceId)
  const selectedMaterial = materialOptions.find((material) => material.id === materialId)

  const total = useMemo(() => {
    const extrasTotal = calculatorExtras
      .filter((extra) => extras.includes(extra.id))
      .reduce((sum, extra) => sum + extra.price, 0)

    return selectedService.basePrice + selectedMaterial.add + extrasTotal
  }, [extras, selectedMaterial.add, selectedService.basePrice])

  const toggleExtra = (id) => {
    setExtras((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )
  }

  return (
    <section className="section estimate-section" id="estimate">
      <div className="container estimate-section__layout">
        <div className="estimate-section__copy reveal-on-scroll">
          <SectionTitle />
          <div className="estimate-section__bullets">
            <span>
              <Check aria-hidden="true" size={18} />
              Финальная стоимость фиксируется после замера
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              Можно сразу приложить фото мебели
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              Скидка 10% после квиза
            </span>
          </div>
        </div>

        <div className="calculator reveal-on-scroll">
          <div className="calculator__group">
            <p className="calculator__label">Что перетягиваем</p>
            <div className="segmented segmented--services">
              {serviceItems.map((service) => (
                <button
                  type="button"
                  key={service.id}
                  className={serviceId === service.id ? 'is-active' : ''}
                  onClick={() => setServiceId(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="calculator__group">
            <p className="calculator__label">Материал</p>
            <div className="material-choice">
              {materialOptions.map((material) => (
                <button
                  type="button"
                  key={material.id}
                  className={materialId === material.id ? 'is-active' : ''}
                  onClick={() => setMaterialId(material.id)}
                >
                  <span>{material.label}</span>
                  <small>{material.note}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="calculator__group">
            <p className="calculator__label">Дополнительно</p>
            <div className="extras-list">
              {calculatorExtras.map((extra) => (
                <label key={extra.id}>
                  <input
                    type="checkbox"
                    checked={extras.includes(extra.id)}
                    onChange={() => toggleExtra(extra.id)}
                  />
                  <span>{extra.label}</span>
                  <strong>{extra.price ? `+ ${formatPrice(extra.price)} ₽` : '0 ₽'}</strong>
                </label>
              ))}
            </div>
          </div>

          <div className="calculator__result">
            <p>Ориентир по проекту</p>
            <strong>от {formatPrice(total)} ₽</strong>
            <span>Точную смету мастер назовет после фото или замера.</span>
            <div className="calculator__actions">
              <ActionButton href={company.quizHref} icon={Calculator}>
                Открыть квиз
              </ActionButton>
              <ActionButton href={company.maxHref} icon={MessageCircle} variant="secondary">
                Фото в Max
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle() {
  return (
    <div className="section-heading">
      <p className="section-heading__kicker">Онлайн-расчет</p>
      <h2>Быстрая смета до звонка: выберите мебель, материал и работы</h2>
      <p className="section-heading__text">
        Мини-калькулятор помогает понять порядок бюджета, а основной квиз собирает детали и
        открывает скидку.
      </p>
    </div>
  )
}
