import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Schedule from '../components/Schedule'

export default function Home() {
  return <div className="site-shell"><Navbar /><main><Hero /><Schedule /></main><footer><span>Casa Brava © 2024</span><span>Hecho para los que cuidan los detalles.</span></footer></div>
}
