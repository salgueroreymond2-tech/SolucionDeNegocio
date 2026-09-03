import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['Servicios', 'services'],
  ['Equipo', 'team'],
  ['Horario', 'schedule'],
  ['Ubicacion', 'location'],
  ['Contacto', 'contact'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (id) => {
    scrollToSection(id)
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
        <Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
        {links.slice(1).map(([label, id]) => (
          <button key={id} type="button" onClick={() => handleNavigation(id)}>{label}</button>
        ))}
        <button className="nav-book" type="button" onClick={() => handleNavigation('contact')}>Reservar <span aria-hidden="true">↗</span></button>
      </nav>
    </header>
  )
}
