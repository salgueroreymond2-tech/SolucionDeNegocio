const hours = [['Lunes', '10:00 AM — 7:00 PM'], ['Martes', '10:00 AM — 7:00 PM'], ['Miércoles', '10:00 AM — 7:00 PM'], ['Jueves · hoy', '10:00 AM — 7:00 PM'], ['Viernes', '10:00 AM — 7:00 PM'], ['Sábado', '9:00 AM — 5:00 PM'], ['Domingo', '10:00 AM — 5:00 PM']]

export default function Schedule() {
  return <section className="schedule-band" id="schedule"><div><p className="eyebrow">Cuando quieras</p><h2>Horarios<br /><i>de atención.</i></h2></div><div className="hours-list">{hours.map(([day, time]) => <div className={`hours-row ${day.includes('hoy') ? 'is-today' : ''}`} key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></section>
}
