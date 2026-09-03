const services = [
  { number: '01', name: 'Corte + Barba', description: 'Corte y arreglo completo para un acabado impecable.', time: '45 min' },
  { number: '02', name: 'Arreglo de Barba', description: 'Perfilado y cuidado de barba con acabado profesional.', time: '30 min' },
  { number: '03', name: 'Corte Clasico', description: 'Un corte atemporal adaptado a tu estilo.', time: '30 min' },
  { number: '04', name: 'Depilacion con Cera', description: 'Definicion y limpieza de zonas faciales.', time: '15 min' },
  { number: '05', name: 'Tinte de Barba', description: 'Color y cobertura natural para tu barba.', time: '30 min' },
  { number: '06', name: 'Corte de Niño', description: 'Un corte comodo y especial para los mas pequenos.', time: '30 min' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading"><p className="eyebrow">Lo que hacemos</p><h2>El ritual<br /><i>bien hecho.</i></h2></div>
      <div className="service-list">
        {services.map((service) => <article className="service-card" key={service.number}>
          <span className="service-number">{service.number}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-meta"><span>{service.time}</span><strong>Consultar precio</strong></div>
        </article>)}
      </div>
    </section>
  )
}
