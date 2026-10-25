import { Link } from 'react-router-dom'
import './InnerPage.css'

export default function NotFound() {
  return (
    <section className="inner-hero not-found">
      <div className="wrap">
        <div className="eyebrow">Error 404</div>
        <h1>Page not found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <div className="hero-ctas" style={{ marginTop: 28 }}>
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/#contact" className="btn btn-ghost">Contact me</Link>
        </div>
      </div>
    </section>
  )
}
