import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Barberia de autor · Madrid</p>
        <h1>Tu estilo.<br /><i>Nuestra firma.</i></h1>
        <p className="hero-copy">Cortes precisos, barbas con caracter y una pausa bien merecida en el corazon de la ciudad.</p>
        <Link className="button button-primary" to="/reservar">Reservar una cita <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="hero-note"><span>01</span><span>Est. 2016</span></div>
      <div className="scroll-cue">Desliza para descubrir <span aria-hidden="true">↓</span></div>
    </section>
  )
}
