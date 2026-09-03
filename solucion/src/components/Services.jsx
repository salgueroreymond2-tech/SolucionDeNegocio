const services = [
  { number: '01', name: 'Corte Casa Brava', description: 'Consulta de estilo, lavado, corte a tijera o maquina y acabado.', time: '45 min', price: '28 €' },
  { number: '02', name: 'Ritual de Barba', description: 'Perfilado, toalla caliente, navaja y tratamiento hidratante.', time: '30 min', price: '22 €' },
  { number: '03', name: 'Corte + Barba', description: 'La experiencia completa para salir renovado de pies a cabeza.', time: '70 min', price: '44 €' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading"><p className="eyebrow">Lo que hacemos</p><h2>El ritual<br /><i>bien hecho.</i></h2></div>
      <div className="service-list">
        {services.map((service) => <article className="service-card" key={service.number}>
          <span className="service-number">{service.number}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-meta"><span>{service.time}</span><strong>{service.price}</strong></div>
        </article>)}
      </div>
    </section>
  )
}
