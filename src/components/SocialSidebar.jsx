import './SocialSidebar.css'

/* Add your real profile URLs here */
const SOCIALS = [
  { name: 'Facebook', href: 'https://facebook.com/', cls: 'fb', icon: (
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/>
  ) },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', cls: 'li', icon: (
  <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>
  ) },
  // { name: 'X', href: 'https://x.com/', cls: 'x', icon: (
  //   <path fill="currentColor" d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.83L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.02 4.13H5.05l12.03 15.64Z"/>
  // ) },
  { name: 'YouTube', href: 'https://youtube.com/', cls: 'yt', icon: (
    <path fill="currentColor" d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.5 3.02 3.02 0 0 0 2.12 2.14C4.5 20.15 12 20.15 12 20.15s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.5ZM9.6 15.5v-7l6.2 3.5-6.2 3.5Z"/>
  ) },
  { name: 'Instagram', href: 'https://instagram.com/', cls: 'ig', icon: (
    <path fill="currentColor" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.24A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4Zm0 10.89A4.29 4.29 0 1 1 16.29 12 4.29 4.29 0 0 1 12 16.29Zm6.85-11.15a1.54 1.54 0 1 0 1.54 1.54 1.54 1.54 0 0 0-1.54-1.54Z"/>
  ) },
]

export default function SocialSidebar() {
  return (
    <div className="social-sidebar" aria-label="Social media links">
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`ss-link ${s.cls}`}
          aria-label={s.name}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">{s.icon}</svg>
        </a>
      ))}
      <span className="ss-rail" aria-hidden="true" />
    </div>
  )
}
