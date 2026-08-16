import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoIcon from '../assets/logo-icon.png'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', menu: 'services' },
  { label: 'Solutions', to: '/solutions', menu: 'solutions' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
]

const MEGA_MENUS = {
  services: {
    heading: 'Services',
    columns: [
      {
        title: 'Development',
        items: ['Web App Development', 'Ecommerce Development', 'Software Development', 'AI Development'],
      },
      {
        title: 'Design & Branding',
        items: ['Web Design', 'Graphics Design', 'Logo & Branding'],
      },
    ],
    base: '/services',
  },
  solutions: {
    heading: 'Solutions',
    columns: [
      {
        title: 'Business Systems',
        items: ['CRM', 'ERP', 'Admin Panel', 'HRMS', 'POS', 'Project Management'],
      },
      {
        title: 'Industry Solutions',
        items: ['Ecommerce', 'Health Care', 'Ticketing', 'Learning', 'Vendor', 'Real Estate'],
      },
    ],
    base: '/solutions',
  },
}

function slugify(text) {
  return text.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMega, setOpenMega] = useState(null)
  const headerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Jump to a section when the URL has a hash (e.g. /#projects)
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ block: 'start' }), 80)
    }
  }, [location])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMega(null)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenMega(null)
  }

  // Lock body scroll + guarantee the panel sits above everything (incl. the
  // floating WhatsApp button / social rail) while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  // Close the mobile menu automatically if the viewport is resized back to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) closeAll() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const headerClass = [
    'site-header',
    scrolled ? 'scrolled' : '',
    menuOpen ? 'menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <header ref={headerRef} className={headerClass}>
      <nav className="wrap nav">
        <NavLink to="/" className="logo" onClick={closeAll}>
          <img src={logoIcon} alt="TechAbhi" className="logo-img" />
          <span className="logo-wordmark">Tech<span className="logo-accent">Abhi</span></span>
        </NavLink>

        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {NAV_LINKS.map((link) => (
            <div key={link.to} className="nav-item">
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={(e) => {
                  if (link.menu) {
                    e.preventDefault()
                    setOpenMega(openMega === link.menu ? null : link.menu)
                  } else {
                    closeAll()
                  }
                }}
              >
                {link.label}
                {link.menu && <span className={`caret ${openMega === link.menu ? 'up' : ''}`}>▾</span>}
              </NavLink>

              {link.menu && (
                <div className={`mega-menu ${openMega === link.menu ? 'open' : ''}`}>
                  <div className="mega-menu-columns">
                    {MEGA_MENUS[link.menu].columns.map((col) => (
                      <div className="mega-col" key={col.title}>
                        <div className="mega-col-title">{col.title}</div>
                        {col.items.map((item) => (
                          <Link
                            key={item}
                            to={`${MEGA_MENUS[link.menu].base}#${slugify(item)}`}
                            onClick={closeAll}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mega-foot">
                    <Link to={MEGA_MENUS[link.menu].base} className="mega-viewall" onClick={closeAll}>
                      View all {MEGA_MENUS[link.menu].heading.toLowerCase()} →
                    </Link>
                    <Link to="/#contact" className="mega-quote" onClick={closeAll}>
                      Get a quote
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}

         
        </div>

        <div className="nav-cta">
          <NavLink to="/#contact" className="btn btn-primary">Start a project</NavLink>
        </div>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
