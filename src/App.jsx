import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import SocialSidebar from './components/SocialSidebar'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
