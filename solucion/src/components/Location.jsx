export default function Location() {
  const address = 'Centro comercial PANDORA CENTER, GUACHIPELIN, San José'
  const encodedAddress = encodeURIComponent(address)

  return <section className="section location location-page-section" id="location"><div className="location-copy"><p className="eyebrow">Encuéntranos</p><h2>Tu barbería<br /><i>de siempre.</i></h2><address>{address}</address><div className="location-actions"><a className="location-button" href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`} target="_blank" rel="noreferrer"><span aria-hidden="true">●</span> Google Maps</a><a className="location-button" href={`https://www.waze.com/ul?q=${encodedAddress}&navigate=yes`} target="_blank" rel="noreferrer"><span aria-hidden="true">●</span> Waze</a></div></div></section>
}
