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

  const { title, cat, img, url, desc, tech } = project

  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <Reveal>
            <Link to="/portfolio" className="pd-back">← Back to portfolio</Link>
            <div className="eyebrow">{cat}</div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <div className="pd-hero-actions">
              {url ? (
                <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">
                  Visit live site →
                </a>
              ) : (
                <span className="pd-soon">Live link coming soon</span>
              )}
              <Link to="/#contact" className="btn btn-ghost">Start a similar project</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="pd-shot">
            <div className="pd-browserbar"><span /><span /><span /></div>
            <img src={img} alt={title} loading="lazy" />
          </Reveal>

          <Reveal className="pd-content">
            <div className="pd-main">
              <h2>About this project</h2>
              <p>{desc}</p>
            </div>
          </Reveal>

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
