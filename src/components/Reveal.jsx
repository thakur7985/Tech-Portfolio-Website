import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', style, as: Tag = 'div', id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} id={id} className={`reveal ${visible ? 'in' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  )
}
