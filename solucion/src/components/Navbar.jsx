import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['Servicios', '/servicios'],
  ['Equipo', '/equipo'],
  ['Horario', '/horario'],
  ['Ubicacion', '/ubicacion'],
  ['Contacto', '/contacto'],
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">C</span>
        <span>Casa <em>Brava</em></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
      </button>
      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`} aria-label="Navegacion principal">
        {links.map(([label, path]) => <Link key={path} to={path} onClick={() => setIsOpen(false)}>{label}</Link>)}
        <Link className="nav-book" to="/contacto" onClick={() => setIsOpen(false)}>Reservar <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
