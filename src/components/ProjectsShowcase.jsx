import { useEffect, useRef, useState } from 'react'
import './ProjectsShowcase.css'

/**
 * Hover-to-scroll project preview.
 * The full screenshot sits inside a fixed-height frame with overflow hidden.
 * On hover it slowly pans down through the whole page (like scrolling the
 * live site), then eases back to the top when the cursor leaves.
 *
 * Works with any image — but looks best with a full-page (tall) screenshot,
 * since that's what gives it real distance to travel.
 */
function ScrollThumb({ src, alt }) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const [dist, setDist] = useState(0)
  // 'scroll' = image is taller than the frame → pans down on hover.
  // 'cover'  = image is short/landscape → just fills the frame, no scroll.
  const [mode, setMode] = useState('cover')

  const measure = () => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img || !img.naturalWidth) return
    const wrapW = wrap.offsetWidth
    const wrapH = wrap.offsetHeight
    const scaledHeight = img.naturalHeight * (wrapW / img.naturalWidth)
    if (scaledHeight > wrapH + 4) {
      setMode('scroll')
      setDist(scaledHeight - wrapH)
    } else {
      setMode('cover')
      setDist(0)
    }
  }

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <div className="pj-thumb" ref={wrapRef}>
      <div className="pj-browserbar">
        <span /><span /><span />
      </div>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        draggable="false"
        onLoad={measure}
        className={mode === 'scroll' ? 'pj-mode-scroll' : 'pj-mode-cover'}
        style={{ '--scroll-dist': `${dist}px` }}
      />
    </div>
  )
}

export default function ProjectsShowcase({ items: projects }) {
  return (
    <div className="pj-grid">
      {projects.map((p) => (
        <div className="pj-card" key={p.title}>
          <ScrollThumb src={p.img} alt={p.title} />
          <div className="pj-body">
            <div className="pj-cat">{p.cat}</div>
            <h3>{p.title}</h3>
            {p.url ? (
              <a className="pj-link" href={p.url} target="_blank" rel="noopener noreferrer">
                Visit project →
              </a>
            ) : (
              <span className="pj-link pj-link-soon">Live link coming soon</span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
