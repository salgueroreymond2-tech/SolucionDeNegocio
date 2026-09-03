const hours = [['Lunes — Viernes', '10:00 — 20:00'], ['Sabado', '10:00 — 18:00'], ['Domingo', 'Cerrado']]

export default function Schedule() {
  return <section className="schedule-band" id="schedule"><div><p className="eyebrow">Cuando quieras</p><h2>Tu momento<br /><i>empieza aqui.</i></h2></div><div className="hours-list">{hours.map(([day, time]) => <div className="hours-row" key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></section>
}
