import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './InnerPage.css'

const SERVICES = [
  { title: 'Web App Development', desc: 'Fast, dynamic web apps built on a modern stack.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80' },
  { title: 'Ecommerce Development', desc: 'Full online stores with checkout and order management.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
  { title: 'Software Development', desc: 'Custom software built around your exact workflow.', img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80' },
  { title: 'AI Development', desc: 'Chatbots, automation and AI features built into your product.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
  { title: 'Web Design', desc: 'Interfaces and layouts designed before a line of code is written.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' },
  { title: 'Graphics Design', desc: 'Social posts, banners, brochures and marketing visuals.', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80' },
  { title: 'Logo & Branding', desc: 'A brand identity that works everywhere your business shows up.', img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80' },
]

function slugify(text) {
  return text.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80)
  }, [hash])

  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">What I offer</div>
            <h1>Services</h1>
            <p>Every business is different — pick what you need, or combine a few. Every project starts with a free quote.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <Reveal key={s.title} id={slugify(s.title)} className="svc-card svc-card-img">
                <img className="svc-img" src={s.img} alt={s.title} loading="lazy" />
                <div className="svc-shade" />
                <div className="svc-arrow">→</div>
                <div className="svc-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="inner-cta">
            <h2>Not sure which service fits?</h2>
            <p>Tell me what you're trying to build — I'll point you to the right option.</p>
            <Link to="/#contact" className="btn btn-primary">Get a free quote</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
