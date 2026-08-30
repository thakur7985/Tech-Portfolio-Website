import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'
import './InnerPage.css'
import './Portfolio.css'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)

  // Unknown slug → send back to the portfolio grid instead of a blank page.
  if (!project) return <Navigate to="/portfolio" replace />

  const { title, cat, desc, tech } = project

  return (
    <>
      <section className="inner-hero">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <Link to="/portfolio" className="pd-back">← Back to portfolio</Link>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{cat}</div>
            <h1>{title}</h1>
            <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>{desc}</p>
            <div className="pd-hero-actions" style={{ justifyContent: 'center' }}>
              <Link to="/#contact" className="btn btn-ghost">Start your project</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="inner-cta">
            <h2>Want something like this?</h2>
            <p>Tell me what you want to build and I'll get back to you with a plan and a free quote.</p>
            <Link to="/#contact" className="btn btn-primary">Start a project</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}