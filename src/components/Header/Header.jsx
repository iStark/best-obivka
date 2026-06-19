import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { ActionButton } from '../ActionButton'
import { company, navItems } from '../../data/content'
import './Header.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })

    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <header className={`site-header ${isScrolled || isOpen ? 'is-scrolled' : 'is-top'} ${isOpen ? 'is-menu-open' : ''}`}>
      <a className="site-header__brand" href="#top" aria-label="BestObivka">
        <img className="site-header__logo site-header__logo--dark" src={company.logo} alt="BestObivka" />
        <img className="site-header__logo site-header__logo--light" src={company.logoLight} alt="" aria-hidden="true" />
      </a>

      <nav className={`site-header__nav ${isOpen ? 'is-open' : ''}`} aria-label="РќР°РІРёРіР°С†РёСЏ">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <div className="site-header__mobile-panel">
          <a className="site-header__mobile-phone" href={company.phoneHref} onClick={closeMenu}>
            <Phone aria-hidden="true" size={18} />
            {company.phone}
          </a>
          <ActionButton href={company.quizHref} icon={Phone} className="site-header__mobile-cta" onClick={closeMenu}>
            Р Р°СЃС‡РµС‚
          </ActionButton>
        </div>
      </nav>

      <div className="site-header__actions">
        <a className="site-header__phone" href={company.phoneHref}>
          {company.phone}
        </a>
        <ActionButton href={company.quizHref} icon={Phone} variant="primary">
          Р Р°СЃС‡РµС‚
        </ActionButton>
        <button
          className="site-header__menu"
          type="button"
          aria-label={isOpen ? 'Р—Р°РєСЂС‹С‚СЊ РјРµРЅСЋ' : 'РћС‚РєСЂС‹С‚СЊ РјРµРЅСЋ'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="site-header__menu-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  )
}

