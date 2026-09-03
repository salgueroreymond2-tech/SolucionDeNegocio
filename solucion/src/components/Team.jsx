const barbers = [
  { name: 'Richard Salguero', role: 'Dueño', availability: 'Lun – Sáb', initials: 'RS' },
  { name: 'Antony Buttowski', role: 'Barbero', availability: 'Lun – Dom', initials: 'AB' },
]

export default function Team() {
  return <section className="section team team-page-section" id="team">
    <div className="section-heading team-heading"><p className="eyebrow">Nuestro equipo</p><h2>Barberos<br /><i>de confianza.</i></h2></div>
    <div className="team-grid">{barbers.map((barber) => <article className="barber barber-card" key={barber.name}><div className="portrait"><span>{barber.initials}</span></div><h3>{barber.name}</h3><p className="barber-role">{barber.role}</p><p className="barber-availability">{barber.availability}</p></article>)}</div>
  </section>
}
