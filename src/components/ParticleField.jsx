import { useEffect, useRef } from 'react'
import './ParticleField.css'

/**
 * Animated connected-dot particle network, drawn on a <canvas> that fills
 * its positioned parent. Pure vanilla JS (no dependency) — dots drift
 * slowly, nearby dots link up with a line, and the whole thing gently
 * reacts to the pointer so it feels alive rather than decorative wallpaper.
 */
export default function ParticleField({ density = 0.00009, color = '18,168,242', className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const parent = canvas.parentElement

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles = []
    let mouse = { x: -9999, y: -9999 }
    let raf = null

    function resize() {
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(140, Math.max(28, Math.round(width * height * density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)
      const linkDist = Math.max(90, Math.min(160, width / 8))

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // gentle pointer attraction
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        const d2 = dx * dx + dy * dy
        if (d2 < 22000) {
          p.x -= dx * 0.0018
          p.y -= dy * 0.0018
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < linkDist) {
            ctx.strokeStyle = `rgba(${color},${0.16 * (1 - dist / linkDist)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},0.75)`
        ctx.fill()
      }

      raf = requestAnimationFrame(step)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    resize()
    if (reducedMotion) {
      step() // draw a single static frame, no rAF loop
    } else {
      raf = requestAnimationFrame(step)
      parent.addEventListener('pointermove', onMove)
      parent.addEventListener('pointerleave', onLeave)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [density, color])

  return <canvas ref={canvasRef} className={`particle-field ${className}`} aria-hidden="true" />
}
