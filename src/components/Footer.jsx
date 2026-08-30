import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'
import './Footer.css'
import footerWave from '../assets/footer-wave.jpg'

/* Add your real profile URLs here */
const FOOT_SOCIALS = [

  { name: 'Instagram', href: 'https://instagram.com/', cls: 'ig', icon: (
    <path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.89A4.29 4.29 0 1 1 16.29 12 4.29 4.29 0 0 1 12 16.29Zm6.85-11.15a1.54 1.54 0 1 0 1.54 1.54 1.54 1.54 0 0 0-1.54-1.54Z"/>
  ) },
  { name: 'Facebook', href: 'https://facebook.com/', cls: 'fb', icon: (
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/>
  ) },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', cls: 'li', icon: (
  <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  ) },
  { name: 'Skype', href: 'skype:live:?chat', cls: 'sk', icon: (
    <path fill="currentColor" d="M20.24 13.6a8.9 8.9 0 0 0 .16-1.66 8.36 8.36 0 0 0-8.42-8.3 8.6 8.6 0 0 0-1.44.12 4.85 4.85 0 0 0-2.44-.66A4.9 4.9 0 0 0 3.2 8a4.83 4.83 0 0 0 .68 2.47 8.9 8.9 0 0 0-.15 1.62 8.36 8.36 0 0 0 8.42 8.3 8.7 8.7 0 0 0 1.48-.13 4.86 4.86 0 0 0 2.37.61 4.9 4.9 0 0 0 4.9-4.86 4.8 4.8 0 0 0-.66-2.42ZM12.2 17.9c-2.6 0-4.7-1.28-4.7-2.86 0-.66.5-1.16 1.2-1.16 1.5 0 1.28 2.06 3.5 2.06.98 0 1.7-.5 1.7-1.16 0-.8-.76-1-1.9-1.28l-1.02-.24c-1.9-.44-3.44-1.28-3.44-3.26 0-2.12 2-3.14 4.28-3.14 2.42 0 4.4 1.1 4.4 2.62 0 .68-.52 1.12-1.2 1.12-1.32 0-1.14-1.76-3.36-1.76-1 0-1.56.42-1.56 1.02 0 .74.72.96 1.98 1.24l.76.18c1.98.46 3.62 1.24 3.62 3.3 0 2.1-1.86 3.32-4.58 3.32Z"/>
  ) },
  { name: 'YouTube', href: 'https://youtube.com/', cls: 'yt', icon: (
    <path fill="currentColor" d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.5 3.02 3.02 0 0 0 2.12 2.14C4.5 20.15 12 20.15 12 20.15s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.5ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z"/>
  ) },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div
        className="footer-wave-bg"
        style={{ backgroundImage: `url(${footerWave})` }}
        aria-hidden="true"
      />

      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <img src={logoIcon} alt="TechAbhi" className="footer-logo-img" />
            <span>Tech<span className="logo-accent">Abhi</span></span>
          </div>
          <p>Web development, business systems and design — built by one person, fast to ship.</p>

          <div className="footer-social">
            <div className="footer-title">Follow me</div>
            <div className="footer-social-row">
              {FOOT_SOCIALS.map((s) => (
                <a
                  key={s.name}  
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fs-link ${s.cls}`}
                  aria-label={s.name}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-title">Quick links</div>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <div className="footer-col">
          <div className="footer-title">Popular solutions</div>
          <Link to="/solutions">CRM &amp; ERP</Link>
          <Link to="/solutions">HRMS &amp; POS</Link>
          <Link to="/solutions">Ecommerce</Link>
        </div>

          <div className="footer-col">
          <div className="footer-title">Contact</div>
          <a href="mailto:abhishekoutlook1997@gmail.com">abhishekoutlook1997@gmail.com</a>
          <a href="tel:+917985142638">+91 79851 42638</a>
          <span className="footer-loc">Noida, Uttar Pradesh, India</span>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>&copy; {year} TechAbhi. All rights reserved.</p>
      </div>
    </footer>
  )
}