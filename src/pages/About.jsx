import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import hologramImg from '../assets/futuristic-hologram.jpg'
import '../pages/InnerPage.css'
import './About.css'

export default function About() {
  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Who we are</div>
            <h1>About Us</h1>
            <p>The digital partner behind the websites, dashboards and automation projects across every industry we serve.</p>
          </Reveal>
        </div>
      </section>

      <section className="section about-section">
        <div className="wrap about-grid">
          <Reveal>
            <div className="eyebrow">About Us </div>
            <h2>Empowering Businesses with AI, Software &amp; Digital Innovation</h2>
            <p className="about-copy">
              Is your business ready for what's next, or is an outdated setup quietly slowing you down?
              We combine practical automation with modern design to build websites, dashboards and
              AI-assisted tools that personalize the experience, accelerate growth and support your
              business long-term.
            </p>
            <Link to="/#contact" className="btn btn-primary">Get a free quote</Link>
          </Reveal>

          <Reveal className="about-visual">
            <div className="about-visual-bg" style={{ backgroundImage: `url(${hologramImg})` }} />
            <div className="about-visual-overlay" />
            <div className="about-badge about-badge-dark">
              <div className="about-badge-title">We are ✦ TechAbhi</div>
              <p>A web development and design studio helping businesses build digital products that scale.</p>
            </div>
            <div className="about-badge about-badge-light">
              <div className="about-badge-icon">◎</div>
              <div>
                <div className="about-badge-strong">Built for Scale</div>
                <div className="about-badge-sub">Engineered for Growth</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="inner-cta">
            <h2>Have a project in mind?</h2>
            <p>Tell me what you want to build and I'll get back to you with a plan and a free quote.</p>
            <Link to="/#contact" className="btn btn-primary">Start a project</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
