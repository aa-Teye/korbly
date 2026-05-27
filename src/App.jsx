import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import ApproachPage from './pages/ApproachPage'
import InsightsPage from './pages/InsightsPage'
import StrategiesPage from './pages/StrategiesPage'
import ResourcesPage from './pages/ResourcesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
