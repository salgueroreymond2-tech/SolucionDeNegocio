import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Schedule from '../components/Schedule'
import Location from '../components/Location'
import Contact from '../components/Contact'

export default function Home() {
  return <div className="site-shell"><Navbar /><main><Hero /><Services /><Team /><Schedule /><Location /><Contact /></main><footer><span>Casa Brava © 2024</span><span>Hecho para los que cuidan los detalles.</span></footer></div>
}
