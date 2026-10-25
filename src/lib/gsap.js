// Single place to register GSAP plugins so every component shares them.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

// Animations only run for visitors who haven't asked the OS to reduce motion.
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

// Split text into words, each wrapped in a clipping mask so words can rise
// "out of nowhere". Masks get a little bottom room so descenders (g, y, p)
// aren't cut off by tight heading line-heights.
export function splitWordsMasked(target) {
  const split = SplitText.create(target, { type: 'words', mask: 'words' })
  gsap.set(split.masks, { paddingBottom: '0.14em', marginBottom: '-0.14em' })
  return split
}

// Typewriter-style wipe for the small mono .eyebrow labels. They're flex
// containers, so splitting them into chars would break their layout —
// instead the label is revealed left→right in one step per character.
export function typeIn(el, vars = {}) {
  const steps = Math.max(1, el.textContent.trim().length)
  return gsap.from(el, {
    clipPath: 'inset(0 100% 0 0)',
    duration: steps * 0.03,
    ease: `steps(${steps})`,
    ...vars,
  })
}

export { gsap, ScrollTrigger, SplitText, useGSAP }
