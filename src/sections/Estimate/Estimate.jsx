import { useMemo, useState } from 'react'
import { Calculator, Check, MessageCircle } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { calculatorExtras, company, materialOptions, serviceItems } from '../../data/content'
import { formatPrice } from '../../utils/format'
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
              Р¤РёРЅР°Р»СЊРЅР°СЏ СЃС‚РѕРёРјРѕСЃС‚СЊ С„РёРєСЃРёСЂСѓРµС‚СЃСЏ РїРѕСЃР»Рµ Р·Р°РјРµСЂР°
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              РњРѕР¶РЅРѕ СЃСЂР°Р·Сѓ РїСЂРёР»РѕР¶РёС‚СЊ С„РѕС‚Рѕ РјРµР±РµР»Рё
            </span>
            <span>
              <Check aria-hidden="true" size={18} />
              РЎРєРёРґРєР° 10% РїРѕСЃР»Рµ РєРІРёР·Р°
            </span>
          </div>
        </div>

        <div className="calculator reveal-on-scroll">
          <div className="calculator__group">
            <p className="calculator__label">Р§С‚Рѕ РїРµСЂРµС‚СЏРіРёРІР°РµРј</p>
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
            <p className="calculator__label">РњР°С‚РµСЂРёР°Р»</p>
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
            <p className="calculator__label">Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ</p>
            <div className="extras-list">
              {calculatorExtras.map((extra) => (
                <label key={extra.id}>
                  <input
                    type="checkbox"
                    checked={extras.includes(extra.id)}
                    onChange={() => toggleExtra(extra.id)}
                  />
                  <span>{extra.label}</span>
                  <strong>{extra.price ? `+ ${formatPrice(extra.price)} в‚Ѕ` : '0 в‚Ѕ'}</strong>
                </label>
              ))}
            </div>
          </div>

          <div className="calculator__result">
            <p>РћСЂРёРµРЅС‚РёСЂ РїРѕ РїСЂРѕРµРєС‚Сѓ</p>
            <strong>РѕС‚ {formatPrice(total)} в‚Ѕ</strong>
            <span>РўРѕС‡РЅСѓСЋ СЃРјРµС‚Сѓ РјР°СЃС‚РµСЂ РЅР°Р·РѕРІРµС‚ РїРѕСЃР»Рµ С„РѕС‚Рѕ РёР»Рё Р·Р°РјРµСЂР°.</span>
            <div className="calculator__actions">
              <ActionButton href={company.quizHref} icon={Calculator}>
                РћС‚РєСЂС‹С‚СЊ РєРІРёР·
              </ActionButton>
              <ActionButton href={company.maxHref} icon={MessageCircle} variant="secondary">
                Р¤РѕС‚Рѕ РІ Max
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
      <p className="section-heading__kicker">РћРЅР»Р°Р№РЅ-СЂР°СЃС‡РµС‚</p>
      <h2>Р‘С‹СЃС‚СЂР°СЏ СЃРјРµС‚Р° РґРѕ Р·РІРѕРЅРєР°: РІС‹Р±РµСЂРёС‚Рµ РјРµР±РµР»СЊ, РјР°С‚РµСЂРёР°Р» Рё СЂР°Р±РѕС‚С‹</h2>
      <p className="section-heading__text">
        РњРёРЅРё-РєР°Р»СЊРєСѓР»СЏС‚РѕСЂ РїРѕРјРѕРіР°РµС‚ РїРѕРЅСЏС‚СЊ РїРѕСЂСЏРґРѕРє Р±СЋРґР¶РµС‚Р°, Р° РѕСЃРЅРѕРІРЅРѕР№ РєРІРёР· СЃРѕР±РёСЂР°РµС‚ РґРµС‚Р°Р»Рё Рё
        РѕС‚РєСЂС‹РІР°РµС‚ СЃРєРёРґРєСѓ.
      </p>
    </div>
  )
}

