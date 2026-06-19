import { company, navItems } from '../../data/content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__layout">
        <a className="site-footer__brand" href="#top" aria-label="BestObivka">
          <img src={company.logoLight} alt="BestObivka" />
        </a>
        <nav aria-label="Навигация в подвале">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-footer__contacts">
          <a href={company.phoneHref}>{company.phone}</a>
          <span>
            {company.city}, {company.address}
          </span>
          <a className="site-footer__policy" href={company.privacyPolicyHref}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
