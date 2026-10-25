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

  const { title, cat, desc, tech, img, url } = project

  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <Reveal>
            <Link to="/portfolio" className="pd-back">← Back to portfolio</Link>
            <div className="eyebrow">{cat}</div>
            <h1>{title}</h1>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="pd-shot">
            <div className="pd-browserbar"><span /><span /><span /></div>
            <div className="pd-shot-frame">
              <img src={img} alt={`${title} — full page screenshot`} loading="lazy" />
            </div>
          </Reveal>

          <div className="pd-content">
            <Reveal className="pd-main">
              <h2>About the project</h2>
              <p>{desc}</p>
            </Reveal>

            <Reveal className="pd-side">
              <div className="pd-side-block">
                <span className="pd-side-label">Category</span>
                <span className="pd-side-value">{cat}</span>
              </div>
              {tech?.length > 0 && (
                <div className="pd-side-block">
                  <span className="pd-side-label">Built with</span>
                  <div className="pf-tech">
                    {tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {url && (
                <a className="btn btn-ghost pd-side-btn" href={url} target="_blank" rel="noopener noreferrer">
                  Visit live site →
                </a>
              )}
              <Link to="/#contact" className="btn btn-primary pd-side-btn">Start your project</Link>
            </Reveal>
          </div>

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
