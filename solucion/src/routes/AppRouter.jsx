import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ServicesPage from '../pages/ServicesPage'
import TeamPage from '../pages/TeamPage'
import SchedulePage from '../pages/SchedulePage'
import LocationPage from '../pages/LocationPage'
import ContactPage from '../pages/ContactPage'

export default function AppRouter() {
  return <BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/servicios" element={<ServicesPage />} /><Route path="/equipo" element={<TeamPage />} /><Route path="/horario" element={<SchedulePage />} /><Route path="/ubicacion" element={<LocationPage />} /><Route path="/contacto" element={<ContactPage />} /></Routes></BrowserRouter>
}
