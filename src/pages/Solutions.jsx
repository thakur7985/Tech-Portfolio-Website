import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './InnerPage.css'

const SOLUTIONS = [
  { icon: '🛒', title: 'Ecommerce', desc: 'Product catalog, cart, checkout and order tracking.' },
  { icon: '📋', title: 'Project Management', desc: 'Tasks, timelines and team collaboration in one place.' },
  { icon: '📇', title: 'CRM', desc: 'Track leads, follow-ups and customer history.' },
  { icon: '🏗️', title: 'ERP', desc: 'Connect sales, stock, staff and finance in one dashboard.' },
  { icon: '🛠️', title: 'Admin Panel', desc: 'A control room to manage content, users and orders.' },
  { icon: '👥', title: 'HRMS', desc: 'Attendance, payroll and leave tracking, automated.' },
  { icon: '🧾', title: 'POS', desc: 'Billing, inventory sync and daily sales reports.' },
  { icon: '🏥', title: 'Health Care', desc: 'Appointment booking and patient record management.' },
  { icon: '🎫', title: 'Ticketing', desc: 'Support tickets, routing and resolution tracking.' },
  { icon: '🎓', title: 'Learning', desc: 'Courses, enrollments and progress tracking for students.' },
  { icon: '📦', title: 'Vendor', desc: 'Vendor onboarding, orders and payment tracking.' },
  { icon: '🏘️', title: 'Real Estate', desc: 'Property listings, filters and enquiry management.' },
]

function slugify(text) {
  return text.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Solutions() {
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
            <div className="eyebrow">Ready-to-build systems</div>
            <h1>Solutions</h1>
            <p>Common business systems, built and customized around how your business actually runs.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sol-grid">
            {SOLUTIONS.map((s) => (
              <Reveal key={s.title} id={slugify(s.title)} className="sol-card">
                <div className="sol-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/#contact" className="sol-link">Get a quote →</Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="inner-cta">
            <h2>Need something more specific?</h2>
            <p>If it's not on this list, it's probably still something I can build — just ask.</p>
            <Link to="/#contact" className="btn btn-primary">Start a project</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
