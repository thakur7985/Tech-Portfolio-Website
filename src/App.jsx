import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ScrollManager from './components/ScrollManager'
import TextAnimations from './components/TextAnimations'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import AIFaqWidget from './components/AIFaqWidget'

export default function App() {
  return (
    <>
      <ScrollManager />
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
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <TextAnimations />
      <Footer />
      <AIFaqWidget />
    </>
  )
}
