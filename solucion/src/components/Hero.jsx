import { Link } from 'react-router-dom'
import interior from '../assets/the-barber-club-interior.png'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">The Barber Club CR · Guachipelín</p>
        <h1>El ritual<br /><i>bien hecho.</i></h1>
        <p className="hero-copy">Tu barbería de siempre en Pandora Center. Un refugio artesanal para el cuidado masculino contemporáneo.</p>
        <Link className="button button-primary" to="/reservar">Reservar cita <span aria-hidden="true">↗</span></Link>
        <div className="hero-status"><span>◷</span> Hoy: Abierto hasta 7:00 PM <strong>Turnos disponibles</strong></div>
      </div>
      <div className="hero-image"><img src={interior} alt="Interior de The Barber Club CR" /><span>Sillón &amp; Navaja · Pandora Center</span></div>
      <div className="hero-note"><span>01</span><span>Est. 2016</span></div>
    </section>
  )
}
