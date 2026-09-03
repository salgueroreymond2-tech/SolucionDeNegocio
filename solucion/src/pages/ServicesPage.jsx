import { Link } from 'react-router-dom'

const services = [
  { name: 'Corte + barba', duration: '45 min' },
  { name: 'Arreglo de barba', duration: '30 min' },
  { name: 'Corte clasico', duration: '30 min' },
  { name: 'Depilacion con cera', duration: '15 min' },
  { name: 'Tinte de barba', duration: null },
  { name: 'Corte de nino', duration: null },
]

export default function ServicesPage() {
  return (
    <div>
      <header>
        <Link to="/">Casa Brava</Link>
        <nav aria-label="Navegacion principal">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/barbero">Barbero</Link>
          <Link to="/datos">Datos</Link>
        </nav>
      </header>

      <main>
        <h1>Servicios</h1>
        <section aria-labelledby="services-title">
          <h2 id="services-title">Nuestros servicios</h2>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <h3>{service.name}</h3>
                {service.duration && <p>Duracion: {service.duration}</p>}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
