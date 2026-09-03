const services = [
  { number: '01', name: 'Corte + Barba', description: 'Corte y arreglo completo a navaja con toalla vaporizada y tónico botánico.', time: '45 min', price: '₡18.000' },
  { number: '02', name: 'Arreglo de Barba', description: 'Perfilado milimétrico y tratamiento hidratante con aceites de sándalo.', time: '30 min', price: '₡10.000' },
  { number: '03', name: 'Corte Clásico', description: 'Corte atemporal adaptado a tus facciones, lavado exfoliante y peinado final.', time: '30 min', price: '₡12.000' },
  { number: '04', name: 'Depilación con Cera', description: 'Detalle y despeje limpio en entrecejo, contornos de orejas y nariz.', time: '15 min', price: '₡5.000' },
  { number: '05', name: 'Tinte de Barba', description: 'Cobertura natural y matizado discreto sin efecto artificial.', time: '25 min', price: '₡10.000' },
  { number: '06', name: 'Corte de Niño', description: 'Paciencia, delicadeza y técnica para los más jóvenes.', time: '30 min', price: '₡10.000' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading"><p className="eyebrow">Lo que hacemos</p><h2>El ritual<br /><i>bien hecho.</i></h2></div>
      <div className="service-list">
        {services.map((service) => <article className="service-card" key={service.number}>
          <span className="service-number">{service.number}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><div className="service-meta"><strong>{service.price}</strong><span>{service.time}</span></div>
        </article>)}
      </div>
    </section>
  )
}
