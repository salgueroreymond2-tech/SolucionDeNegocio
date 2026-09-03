const barbers = [
  { name: 'Mateo Ruiz', role: 'Fundador · Corte clasico', initials: 'MR' },
  { name: 'Lola Vega', role: 'Especialista en textura', initials: 'LV' },
  { name: 'Dani Costa', role: 'Barba · Navaja', initials: 'DC' },
]

export default function Team() {
  return <section className="section team" id="team">
    <div className="section-heading team-heading"><p className="eyebrow">Manos expertas</p><h2>El equipo<br /><i>detras del espejo.</i></h2><p>Gente que escucha antes de cortar. Porque el mejor resultado empieza con una buena conversacion.</p></div>
    <div className="team-grid">{barbers.map((barber, index) => <article className="barber" key={barber.name}><div className={`portrait portrait-${index + 1}`}><span>{barber.initials}</span></div><h3>{barber.name}</h3><p>{barber.role}</p></article>)}</div>
  </section>
}
