import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'
import AIFaqWidget from './components/AIFaqWidget'

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
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
        </Routes>
      </main>
      <Footer />
      <AIFaqWidget />
    </>
  )
}