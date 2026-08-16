export default function ComingSoon({ title }) {
  return (
    <section className="section wrap" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <div>
        <div className="eyebrow">Under construction</div>
        <h1 style={{ fontSize: 'clamp(28px,4vw,42px)' }}>{title} page — coming next</h1>
        <p style={{ color: 'var(--text-soft)', marginTop: '14px', maxWidth: 480 }}>
          We're building this page right after Home. Check back soon.
        </p>
      </div>
    </section>
  )
}
