import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { ActionButton } from '../../components/ActionButton'
import { HeroBackdropSlider } from '../../components/HeroBackdropSlider'
import { company, heroSlides, heroStats } from '../../data/content'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <HeroBackdropSlider slides={heroSlides} />
      <div className="hero-section__shade" aria-hidden="true" />

      <div className="container hero-section__content">
        <p className="hero-section__eyebrow reveal">{company.region}</p>
        <h1 className="reveal">РџРµСЂРµС‚СЏР¶РєР° РјРµР±РµР»Рё РІ РЎР°СЂР°С‚РѕРІРµ</h1>
        <p className="hero-section__lead reveal">
          РћР±РЅРѕРІР»СЏРµРј РґРёРІР°РЅС‹, РєСЂРµСЃР»Р° Рё РєСЂРѕРІР°С‚Рё РІ РјР°СЃС‚РµСЂСЃРєРѕР№: РїРѕРґР±РёСЂР°РµРј С‚РєР°РЅСЊ, С„РёРєСЃРёСЂСѓРµРј СЃРјРµС‚Сѓ,
          Р·Р°Р±РёСЂР°РµРј РјРµР±РµР»СЊ Рё РІРѕР·РІСЂР°С‰Р°РµРј РіРѕС‚РѕРІС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ СЃ РіР°СЂР°РЅС‚РёРµР№.
        </p>

        <div className="hero-section__actions reveal">
          <ActionButton href={company.quizHref} icon={ArrowRight}>
            Р Р°СЃСЃС‡РёС‚Р°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ
          </ActionButton>
          <ActionButton href={company.phoneHref} icon={Phone} variant="light">
            РџРѕР·РІРѕРЅРёС‚СЊ РјР°СЃС‚РµСЂСѓ
          </ActionButton>
          <a className="hero-section__max" href={company.maxHref} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={18} />
            <span>РћС‚РїСЂР°РІРёС‚СЊ С„РѕС‚Рѕ РІ Max</span>
          </a>
        </div>
      </div>

      <div className="hero-section__stats reveal">
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

