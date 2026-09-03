import { useState } from 'react'

const links = [
  ['Equipo', 'team-info'],
  ['Horario', 'schedule'],
  ['Ubicacion', 'location-info'],
  ['Contacto', 'contact-info'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeInfo, setActiveInfo] = useState(null)

  const handleNavigation = (id) => {
    if (id.endsWith('-info')) {
      setActiveInfo(activeInfo === id ? null : id)
    } else {
      scrollToSection(id)
      setActiveInfo(null)
    }
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => scrollToSection('top')}>
        <span className="brand-mark">C</span>
        <span>Casa <em>Brava</em></span>
      </a>
      <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
      </button>
      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegacion principal">
        {links.map(([label, id]) => (
          <button className={activeInfo === id ? 'is-active' : ''} key={id} type="button" onClick={() => handleNavigation(id)}>{label}{id.endsWith('-info') && <span className="nav-chevron" aria-hidden="true">⌄</span>}</button>
        ))}
        <button className="nav-book" type="button" onClick={() => handleNavigation('contact-info')}>Reservar <span aria-hidden="true">↗</span></button>
      </nav>
      {activeInfo === 'team-info' && <div className="info-panel"><p className="eyebrow">Manos expertas</p><h2>El equipo detras del espejo.</h2><p>Mateo Ruiz · Lola Vega · Dani Costa</p><span>Una buena conversacion antes de cada corte.</span></div>}
      {activeInfo === 'location-info' && <div className="info-panel"><p className="eyebrow">Encuentranos</p><h2>Casa Brava, en el barrio.</h2><p>Calle de Santa Barbara, 14<br />28004 · Madrid</p><a className="panel-link" href="https://maps.google.com/?q=Calle+de+Santa+Barbara+14+Madrid" target="_blank" rel="noreferrer">Abrir en Google Maps ↗</a></div>}
      {activeInfo === 'contact-info' && <div className="info-panel"><p className="eyebrow">Hablamos?</p><h2>Reserva tu momento.</h2><a className="panel-phone" href="tel:+34915550142">+34 915 550 142</a><a className="panel-link" href="mailto:hola@casabrava.es">hola@casabrava.es</a><a className="panel-link" href="https://wa.me/34915550142" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>}
    </header>
  )
}
