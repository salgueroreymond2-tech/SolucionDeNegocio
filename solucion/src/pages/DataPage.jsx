import { Link } from 'react-router-dom'

const steps = [
  { number: '1', label: 'Servicio', complete: true },
  { number: '2', label: 'Fecha y hora', complete: true },
  { number: '3', label: 'Tus datos', current: true },
  { number: '4', label: 'Confirmacion' },
]

export default function DataPage() {
  return (
    <div className="booking-page">
      <header className="booking-header">
        <Link className="brand" to="/">Casa Brava</Link>
        <nav aria-label="Navegacion principal">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/barbero">Barbero</Link>
          <Link to="/datos" aria-current="page">Datos</Link>
        </nav>
      </header>

      <main className="booking-content">
        <ol className="booking-steps" aria-label="Progreso de la reserva">
          {steps.map((step) => (
            <li className={step.current ? 'is-current' : ''} key={step.number}>
              <span className="step-number" aria-hidden="true">{step.complete ? '+' : step.number}</span>
              <span>{step.label}</span>
            </li>
          ))}
        </ol>

        <section aria-labelledby="contact-title">
          <h1 id="contact-title">Como te contactamos?</h1>
          <p>Ingresa tu email o telefono para continuar</p>

          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="contact">Email o telefono</label>
              <input id="contact" name="contact" type="text" placeholder="ej: juan@email.com o 8888-8888" required />
            </div>

            <div className="form-field">
              <label htmlFor="full-name">Nombre completo</label>
              <input id="full-name" name="fullName" type="text" placeholder="Juan Perez" required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email <span>(opcional)</span></label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" />
            </div>

            <div className="form-field">
              <label htmlFor="note">Nota <span>(opcional)</span></label>
              <textarea id="note" name="note" placeholder="Agrega una nota" rows="3" />
            </div>

            <div className="form-actions">
              <Link to="/servicios">Atras</Link>
              <button type="submit">Continuar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
