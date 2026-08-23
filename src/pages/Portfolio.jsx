import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'
import './Portfolio.css'

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.cat)))]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)

  return (
    <>
      <section className="inner-hero">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Selected work</div>
            <h1>Portfolio</h1>
            <p>Real, deployed projects across industries. Click a project to view it live, or filter by category below.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pf-filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`pf-filter ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="pf-grid">
            {shown.map((p, i) => (
              <Reveal key={p.title} className="pf-card" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className="pf-thumb">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <span className="pf-cat">{p.cat}</span>
                </div>
                <div className="pf-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  {p.tech?.length > 0 && (
                    <div className="pf-tech">
                      {p.tech.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  )}
                  {p.url ? (
                    <a className="pf-visit" href={p.url} target="_blank" rel="noopener noreferrer">
                      Visit project →
                    </a>
                  ) : (
                    <Link className="pf-visit" to={`/portfolio/${p.slug}`}>
                      Read more →
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

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
