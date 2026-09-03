import { useState } from 'react'
import Navbar from '../components/Navbar'

const steps = [
  { number: '1', label: 'Servicio' },
  { number: '2', label: 'Fecha y hora' },
  { number: '3', label: 'Tus datos' },
  { number: '4', label: 'Confirmacion' },
]

const services = ['Corte + Barba', 'Arreglo de Barba', 'Corte Clasico', 'Depilacion con Cera', 'Tinte de Barba', 'Corte de Niño']
const barbers = [{ name: 'Sin preferencia', initials: '★', detail: 'El sistema asigna el mas disponible' }, { name: 'Richard Salguero', initials: 'RS', detail: 'Dueño' }, { name: 'Antony Buttowski', initials: 'AB', detail: 'Barbero' }]
const dates = ['Jueves 3 Sep', 'Viernes 4 Sep', 'Sabado 5 Sep', 'Lunes 7 Sep']
const times = ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM']

export default function DataPage() {
  const [step, setStep] = useState(1)
  const [booking, setBooking] = useState({ service: '', barber: '', date: '', time: '', contact: '', fullName: '', email: '', note: '' })

  const updateBooking = (field, value) => setBooking((current) => ({ ...current, [field]: value }))
  const handleDetails = (event) => {
    event.preventDefault()
    setStep(4)
  }

  const canContinue = step === 1 ? booking.service : step === 2 ? booking.barber && booking.date && booking.time : true

  return (
    <div className="site-shell booking-page">
      <Navbar />
      <main className="booking-content">
        <ol className="booking-steps" aria-label="Progreso de la reserva">
          {steps.map((item) => (
            <li className={Number(item.number) === step ? 'is-current' : ''} key={item.number}>
              <span className="step-number" aria-hidden="true">{Number(item.number) < step ? '+' : item.number}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ol>

        {step === 1 && <section className="booking-step-content" aria-labelledby="service-title"><h1 id="service-title">Que servicio necesitas?</h1><p>Elige el servicio para tu proxima visita</p><div className="booking-options service-options">{services.map((service) => <button className={booking.service === service ? 'is-selected' : ''} key={service} type="button" onClick={() => updateBooking('service', service)}>{service}<span>Consultar precio</span></button>)}</div><div className="form-actions"><button className="form-submit" type="button" disabled={!canContinue} onClick={() => setStep(2)}>Continuar</button></div></section>}

        {step === 2 && <section className="booking-step-content" aria-labelledby="date-title"><h1 id="date-title">Cuando queres venir?</h1><p>Eligi empleado, fecha y hora</p><h2 className="booking-subtitle">Con quien?</h2><div className="booking-options barber-options">{barbers.map((barber) => <button className={booking.barber === barber.name ? 'is-selected' : ''} key={barber.name} type="button" onClick={() => updateBooking('barber', barber.name)}><b>{barber.initials}</b><span><strong>{barber.name}</strong><small>{barber.detail}</small></span></button>)}</div><h2 className="booking-subtitle">Fecha</h2><div className="booking-options date-options">{dates.map((date) => <button className={booking.date === date ? 'is-selected' : ''} key={date} type="button" onClick={() => updateBooking('date', date)}>{date}</button>)}</div><h2 className="booking-subtitle">Hora</h2><div className="booking-options time-options">{times.map((time) => <button className={booking.time === time ? 'is-selected' : ''} key={time} type="button" onClick={() => updateBooking('time', time)}>{time}</button>)}</div><div className="form-actions"><button type="button" onClick={() => setStep(1)}>Atras</button><button className="form-submit" type="button" disabled={!canContinue} onClick={() => setStep(3)}>Continuar</button></div></section>}

        {step === 3 && <section className="booking-step-content" aria-labelledby="contact-title"><h1 id="contact-title">Como te contactamos?</h1><p>Ingresa tu email o telefono para continuar</p><form className="contact-form" onSubmit={handleDetails}>
            <div className="form-field">
              <label htmlFor="contact">Email o telefono</label>
              <input id="contact" name="contact" type="text" placeholder="ej: juan@email.com o 8888-8888" value={booking.contact} onChange={(event) => updateBooking('contact', event.target.value)} required />
            </div>

            <div className="form-field">
              <label htmlFor="full-name">Nombre completo</label>
              <input id="full-name" name="fullName" type="text" placeholder="Juan Perez" value={booking.fullName} onChange={(event) => updateBooking('fullName', event.target.value)} required />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email <span>(opcional)</span></label>
              <input id="email" name="email" type="email" placeholder="tu@email.com" value={booking.email} onChange={(event) => updateBooking('email', event.target.value)} />
            </div>

            <div className="form-field">
              <label htmlFor="note">Nota <span>(opcional)</span></label>
              <textarea id="note" name="note" placeholder="Agrega una nota" rows="3" value={booking.note} onChange={(event) => updateBooking('note', event.target.value)} />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => setStep(2)}>Atras</button><button className="form-submit" type="submit">Revisar reserva</button>
            </div>
          </form></section>}

        {step === 4 && <section className="booking-step-content" aria-labelledby="confirmation-title"><div className="booking-success"><strong id="confirmation-title">Confirma tu reserva</strong><p>Revisa los datos antes de finalizar.</p><dl className="booking-summary"><div><dt>Servicio</dt><dd>{booking.service}</dd></div><div><dt>Barbero</dt><dd>{booking.barber}</dd></div><div><dt>Fecha y hora</dt><dd>{booking.date} · {booking.time}</dd></div><div><dt>Cliente</dt><dd>{booking.fullName}</dd></div><div><dt>Contacto</dt><dd>{booking.contact}</dd></div></dl><div className="form-actions"><button type="button" onClick={() => setStep(3)}>Editar datos</button><button className="form-submit" type="button" onClick={() => setStep(5)}>Confirmar reserva</button></div></div></section>}
        {step === 5 && <section className="booking-step-content"><div className="booking-success"><strong>Reserva confirmada.</strong><p>Te esperamos el {booking.date} a las {booking.time}. Enviaremos los detalles a {booking.contact}.</p></div></section>}
      </main>
    </div>
  )
}
