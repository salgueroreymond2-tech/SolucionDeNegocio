import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ServicesPage from '../pages/ServicesPage'

export default function AppRouter() {
  return <BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/servicios" element={<ServicesPage />} /></Routes></BrowserRouter>
}
