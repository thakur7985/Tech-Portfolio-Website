import { useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, splitWordsMasked, typeIn } from '../lib/gsap'

// Headings that get the word-by-word mask reveal when scrolled into view.
// (The home hero headline has its own timeline in Home.jsx.)
const HEADINGS = [
  '.section-head h2',
  '.contact-head h2',
  '.about-grid h2',
  '.inner-hero h1',
  '.inner-cta h2',
].join(',')

// Small mono labels above headings — typed in letter by letter.
const EYEBROWS = 'main .eyebrow:not(.hero .eyebrow)'

/**
 * Site-wide scroll text animations. Re-runs on every route change and
 * cleans up (un-splits text, kills triggers) before the next page renders.
 * Rendered after <main> so the new page is already in the DOM.
 */
export default function TextAnimations() {
  const { pathname } = useLocation()

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(MOTION_OK, () => {
      gsap.utils.toArray(HEADINGS).forEach((el) => {
        const split = splitWordsMasked(el)
        gsap.from(split.words, {
          yPercent: 110,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray(EYEBROWS).forEach((el) => {
        typeIn(el, { scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
      })

      // About section circuit tree — "grows" up from its trunk as you scroll
      // into the section, then drifts slightly for depth.
      gsap.utils.toArray('.about-tree').forEach((tree) => {
        const section = tree.closest('.about-section')
        gsap.fromTo(tree,
          { clipPath: 'circle(0% at 50% 100%)' },
          {
            clipPath: 'circle(110% at 50% 100%)',
            ease: 'none',
            scrollTrigger: { trigger: section, start: 'top 85%', end: 'center 55%', scrub: 0.6 },
          })
        gsap.fromTo(tree, { y: 60 }, {
          y: -40,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })

      // Contact section glows drift slowly so the background feels alive
      gsap.utils.toArray('.contact-glow').forEach((glow, i) => {
        gsap.to(glow, {
          x: i ? -90 : 110,
          y: i ? -70 : 60,
          scale: i ? 1.15 : 0.9,
          duration: i ? 11 : 9,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      })

      // Feature bar (home) — icons pop in one after another
      const cells = gsap.utils.toArray('.feature-cell')
      if (cells.length) {
        gsap.from(cells, {
          y: 30,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'back.out(1.6)',
          stagger: 0.08,
          scrollTrigger: { trigger: '.feature-bar', start: 'top 90%', once: true },
        })
      }
    })

    // Images/fonts can shift layout after first paint — recalc trigger positions.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      mm.revert()
    }
  }, { dependencies: [pathname], revertOnUpdate: true })

  return null
}
