import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  ['Servicios', 'services-info'],
  ['Equipo', 'team-info'],
  ['Horario', 'schedule-info'],
  ['Ubicacion', 'location-info'],
  ['Contacto', 'contact-info'],
]

const serviceOptions = [
  ['🔨', 'Corte + Barba', '45 min'],
  ['🔨', 'Arreglo de Barba', '30 min'],
  ['✂️', 'Corte Clasico', '30 min'],
  ['🪮', 'Depilacion con Cera', '15 min'],
  ['💈', 'Tinte de Barba', '30 min'],
  ['🧒', 'Corte de Niño', '30 min'],
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
<<<<<<< HEAD
        <Link to="/servicios" onClick={() => setIsOpen(false)}>Servicios</Link>
        {links.slice(1).map(([label, id]) => (
          <button key={id} type="button" onClick={() => handleNavigation(id)}>{label}</button>
=======
        {links.map(([label, id]) => (
          <button className={activeInfo === id ? 'is-active' : ''} key={id} type="button" onClick={() => handleNavigation(id)}>{label}{id.endsWith('-info') && <span className="nav-chevron" aria-hidden="true">⌄</span>}</button>
>>>>>>> c94f1e7db522843e3438a2355c2e5b4ee565b53a
        ))}
        <button className="nav-book" type="button" onClick={() => handleNavigation('contact-info')}>Reservar <span aria-hidden="true">↗</span></button>
      </nav>
      {activeInfo === 'team-info' && <div className="info-panel"><p className="eyebrow">Nuestro equipo</p><h2>Manos expertas.</h2><div className="team-members"><div><strong>Richard Salguero</strong><span>Dueño · Lun — Sáb</span></div><div><strong>Antony Buttowski</strong><span>Barbero · Lun — Dom</span></div></div></div>}
      {activeInfo === 'services-info' && <div className="info-panel services-panel"><p className="eyebrow">Lo que hacemos</p><h2>Servicios<br /><i>a tu medida.</i></h2><div className="panel-services">{serviceOptions.map(([icon, name, duration]) => <div key={name}><strong><span className="service-icon" aria-hidden="true">{icon}</span>{name}</strong><span>{duration}<br />Consultar precio</span></div>)}</div></div>}
      {activeInfo === 'schedule-info' && <div className="info-panel schedule-panel"><p className="eyebrow">Cuando quieras</p><h2>Horarios<br /><i>de atención.</i></h2><div className="panel-hours">{[['Lunes', '10:00 AM — 7:00 PM'], ['Martes', '10:00 AM — 7:00 PM'], ['Miércoles', '10:00 AM — 7:00 PM'], ['Jueves · hoy', '10:00 AM — 7:00 PM'], ['Viernes', '10:00 AM — 7:00 PM'], ['Sábado', '9:00 AM — 5:00 PM'], ['Domingo', '10:00 AM — 5:00 PM']].map(([day, time]) => <div className={day.includes('hoy') ? 'is-today' : ''} key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></div>}
      {activeInfo === 'location-info' && <div className="info-panel"><p className="eyebrow">Ubicación</p><h2>Encuéntranos.</h2><p>Centro comercial PANDORA CENTER,<br />GUACHIPELIN, San José</p><div className="map-links"><a className="panel-link" href="https://maps.google.com/?q=PANDORA+CENTER+GUACHIPELIN+San+Jose" target="_blank" rel="noreferrer">Google Maps ↗</a><a className="panel-link" href="https://www.waze.com/live-map/directions" target="_blank" rel="noreferrer">Waze ↗</a></div></div>}
      {activeInfo === 'contact-info' && <div className="info-panel"><p className="eyebrow">Hablamos?</p><h2>Reserva tu momento.</h2><a className="panel-phone" href="tel:+34915550142">+34 915 550 142</a><a className="panel-link" href="mailto:hola@casabrava.es">hola@casabrava.es</a><a className="panel-link" href="https://wa.me/34915550142" target="_blank" rel="noreferrer">WhatsApp ↗</a></div>}
    </header>
  )
}
