export default function Hero() {
  const handleBooking = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Barberia de autor · Madrid</p>
        <h1>Tu estilo.<br /><i>Nuestra firma.</i></h1>
        <p className="hero-copy">Cortes precisos, barbas con caracter y una pausa bien merecida en el corazon de la ciudad.</p>
        <button className="button button-primary" type="button" onClick={handleBooking}>Reservar una cita <span aria-hidden="true">↗</span></button>
      </div>
      <div className="hero-note"><span>01</span><span>Est. 2016</span></div>
      <div className="scroll-cue">Desliza para descubrir <span aria-hidden="true">↓</span></div>
    </section>
  )
}
