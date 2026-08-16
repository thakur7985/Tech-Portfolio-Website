import { useState } from 'react'
import { Link } from 'react-router-dom'
import GlobeMock from '../components/GlobeMock'
import Reveal from '../components/Reveal'
import ParticleField from '../components/ParticleField'
import ProjectsShowcase from '../components/ProjectsShowcase'
import { PROJECTS } from '../data/projects'
import hologramImg from '../assets/futuristic-hologram.jpg'
import './Home.css'
import '../pages/About.css'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaMobileAlt, FaChartLine, FaBolt, FaShieldAlt, FaPaintBrush, FaHeadset } from "react-icons/fa";

/* ---------------- TESTIMONIALS ---------------- */
const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years in Industry' },
  { value: '98%', label: 'Customer Retention' },
  { value: '20+', label: 'Happy Clients' },
]

const FEATURES = [
  { icon: <FaMobileAlt />, title: 'Mobile Responsive' },
  { icon: <FaChartLine />, title: 'SEO Friendly' },
  { icon: <FaBolt />, title: 'Fast Loading' },
  { icon: <FaShieldAlt />, title: 'Secure & Reliable' },
  { icon: <FaPaintBrush />, title: 'Modern Design' },
  { icon: <FaHeadset />, title: 'Free Support' },
]

const TESTIMONIALS = [
  {
    quote: 'He understood exactly what our business needed and delivered a fast, clean website ahead of schedule. Communication was excellent throughout.',
    name: 'Rahul Sharma',
    role: 'Founder, Retail Startup',
  },
  {
    quote: 'The custom dashboard he built saved our team hours every week. Reliable, responsive and genuinely good at solving problems.',
    name: 'Priya Verma',
    role: 'Operations Manager',
  },
  {
    quote: 'Professional from start to finish. Our ecommerce store looks great and works flawlessly on mobile. Highly recommended.',
    name: 'Amit Gupta',
    role: 'Owner, Online Store',
  },
]

/* Change this to your Web3Forms access key (free at https://web3forms.com) */
const WEB3FORMS_KEY = '455dfd47-73c3-4d6b-a646-bd325129faee'

/* ---------------- SERVICES (image cards like the reference video) ---------------- */
const SERVICES = [
  { title: 'CRM', desc: 'Modern, responsive websites that build trust and bring in leads.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  { title: 'School & College Websites', desc: 'Admissions, notices and fee portals for institutions.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80' },
  { title: 'POS', desc: 'Appointment booking, departments and doctor profiles.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80' },
  { title: 'Real Estate Website', desc: 'Property listings with map search and enquiry routing.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
  { title: 'Ecommerce Website', desc: 'Storefronts with cart, payments and order management.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
  { title: 'ERP Dashboard & Admin Panel', desc: 'One dashboard connecting sales, stock, staff and finance.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
 
]

/* ---------------- TECHNOLOGIES (slow marquee) ---------------- */
const TECHS = [
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'NestJS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-inner wrap">
          <div>
            <div className="eyebrow">Web development &amp; brand design studio</div>
            <h1>
              Dynamic Websites &amp; <span className="hl">Custom Software</span> Solutions.
            </h1>
            <p className="lead">
              We design and develop high-performing websites and custom software that automate your workflows and accelerate business growth.
            </p>
            <div className="hero-ctas">
              <Link to="/#contact" className="btn btn-primary">Get a free quote</Link>
              <Link to="/portfolio" className="btn btn-ghost">See recent work</Link>
            </div>
          </div>
          <GlobeMock />
        </div>
      </section>

      {/* ===== FEATURE BAR — bridges Home (dark) & About (white): sits half over each ===== */}
      <div className="stat-bridge">
        <div className="wrap">
          <Reveal className="feature-bar">
            {FEATURES.map((f) => (
              <div className="feature-cell" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <span className="feature-title">{f.title}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ===================== ABOUT (home page preview) ===================== */}
      <section className="section about-section" id="about">
        <div className="wrap about-grid">
          <Reveal>
            <div className="eyebrow">Your digital partners in growth</div>
            <h2>Empowering Businesses with AI, Software &amp; Digital Innovation</h2>
            <p className="about-copy">
              Is your business ready for what's next, or is an outdated setup quietly slowing you down?
              We combine practical automation with modern design to build websites, dashboards and
              AI-assisted tools that personalize the experience, accelerate growth and support your
              business long-term.
            </p>
            <div className="hero-ctas">
              <Link to="/#contact" className="btn btn-primary">Get a free quote</Link>
              {/* <Link to="/about" className="btn btn-ghost">Learn more about us</Link> */}
            </div>
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

      {/* ===================== SERVICES ===================== */}
      <section className="section" id="services">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Intelligent Business Solutions</div>
            <h2>Custom-Built Solutions for a Smarter, Scalable Business</h2>
            <p>Every business is different — pick what you need, or combine a few.</p>
          </Reveal>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} className="svc-card" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                <img className="svc-img" src={s.img} alt={s.title} loading="lazy" />
                <div className="svc-shade" />
                <div className="svc-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="svc-arrow">→</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHAT I BUILD / PROJECTS ===================== */}
      <section className="section projects-section" id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Selected work</div>
            <h2>What I Build</h2>
            <p>Real, deployed projects across industries — hover a card to scroll through the live page.</p>
          </Reveal>
          <ProjectsShowcase items={PROJECTS} />
          <div className="projects-viewall">
            <Link to="/portfolio" className="btn btn-primary">View all projects</Link>
          </div>
        </div>
      </section>

      {/* ===================== TECHNOLOGIES ===================== */}
      <section className="section tech-section" id="technologies">
        <ParticleField className="tech-particles" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal className="section-head">
            <div className="eyebrow">Tools of the trade</div>
            <h2>Technologies I Use</h2>
            <p>Modern, industry-standard tools chosen for speed, security and long-term value.</p>
          </Reveal>
        </div>
        <div className="tech-marquee-wrap">
          <div className="tech-marquee">
            {[...TECHS, ...TECHS].map((t, i) => (
              <div className="tech-chip" key={`${t.name}-${i}`}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section testi-section" id="testimonials">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">What clients say</div>
            <h2>Trusted by Businesses I've Worked With</h2>
            <p>A few words from people I've built for — and the numbers behind the work.</p>
          </Reveal>

          {/* stat / score bar */}
          {/* <Reveal className="testi-stats">
            {STATS.map((s) => (
              <div className="testi-stat" key={s.label}>
                <div className="testi-stat-value">{s.value}</div>
                <div className="testi-stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal> */}

          {/* testimonial cards */}
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <Reveal className="testi-card" key={t.name} style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="testi-quote-mark">"</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-person">
                  <div className="testi-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="section contact-section" id="contact">
        <div className="wrap">
          <Reveal className="contact-head">
            <div className="eyebrow" style={{  }}>Let's connect</div>
            <h2>I Want to Hear from You</h2>
            <p className="contact-intro">
              Have a project in mind? Share a few details and I'll get back to you with the right approach, a clear timeline and a free quote — usually within one business day.
            </p>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-info">
              <div className="ci-row">
                <span className="ci-icon"><FaMapMarkerAlt /></span>
                <div><h4>Location</h4><p>Noida, Uttar Pradesh, India</p></div>
              </div>
              <div className="ci-row">
                <span className="ci-icon"><FaEnvelope /></span>
                <div><h4>Email</h4><p><a href="mailto:abhishekoutlook1997@gmail.com">abhishekoutlook1997@gmail.com</a></p></div>
              </div>
              <div className="ci-row">
                <span className="ci-icon"><FaPhoneAlt /></span>
                <div><h4>Phone</h4><p><a href="tel:+917985142638">+91 79851 42638</a></p></div>
              </div>
            </Reveal>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------------- Working contact form (Web3Forms) ---------------- */
function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formEl = e.target
    const data = new FormData(formEl)
    data.append('access_key', WEB3FORMS_KEY)
    data.append('subject', 'New enquiry from portfolio website')
    data.append('from_name', 'Portfolio Website')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        formEl.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Reveal className="contact-form">
      <form onSubmit={handleSubmit} className="cf-inner">
        <div className="cf-row">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="cf-row">
          <input type="tel" name="mobile" placeholder="Mobile Number" />
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <textarea name="message" placeholder="Write Your Message Here.." rows={6} required />
        <button type="submit" className="btn btn-primary cf-submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'success' && (
          <p className="cf-msg cf-ok">✓ Thanks! Your message has been sent — I'll reply soon.</p>
        )}
        {status === 'error' && (
          <p className="cf-msg cf-err">Something went wrong. Please email me directly at abhishekoutlook1997@gmail.com.</p>
        )}
      </form>
    </Reveal>
  )
}

