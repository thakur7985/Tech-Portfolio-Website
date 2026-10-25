import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route-change scroll handling for the whole app:
 *  - no hash  → jump to the top of the new page
 *  - #hash    → scroll to that element (e.g. /#contact, /services#crm)
 * Depends on location.key so clicking the same link again (e.g. "Start a
 * project" while already on /#contact) still scrolls.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // wait a tick so the new page has rendered before looking up the target
    const t = setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.scrollTo(0, 0)
    }, 80)
    return () => clearTimeout(t)
  }, [pathname, hash, key])

  return null
}
