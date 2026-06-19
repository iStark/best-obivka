import { Gift } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { company } from '../../data/content'
import { publicAsset } from '../../utils/assets'
import './Promo.css'

export function Promo() {
  return (
    <section className="promo-section" id="promo">
      <img className="promo-section__image image-parallax" src={publicAsset('/images/bestobivka/promo.jpg')} alt="" />
      <div className="promo-section__overlay" aria-hidden="true" />
      <div className="container promo-section__content reveal-on-scroll">
        <p>РђРєС†РёСЏ</p>
        <h2>РЎРєРёРґРєР° 10% РЅР° РїРµСЂРµС‚СЏР¶РєСѓ РїРѕСЃР»Рµ СЂР°СЃС‡РµС‚Р°</h2>
        <span>РџСЂРѕР№РґРёС‚Рµ РєРІРёР·, РїСЂРёР»РѕР¶РёС‚Рµ С„РѕС‚Рѕ РјРµР±РµР»Рё Рё РїРѕР»СѓС‡РёС‚Рµ РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅСѓСЋ РѕС†РµРЅРєСѓ Р·Р° РЅРµСЃРєРѕР»СЊРєРѕ РјРёРЅСѓС‚.</span>
        <ActionButton href={company.quizHref} icon={Gift} className="promo-section__button">
          РџРѕР»СѓС‡РёС‚СЊ СЃРєРёРґРєСѓ
        </ActionButton>
      </div>
    </section>
  )
}

