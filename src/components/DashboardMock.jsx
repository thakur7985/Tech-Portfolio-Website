import { useEffect, useState, useRef } from 'react'
import './DashboardMock.css'

function useCountUp(end, prefix = '') {
  const [val, setVal] = useState(0)
  const started = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let cur = 0
        const step = Math.max(1, Math.round(end / 40))
        const t = setInterval(() => {
          cur += step
          if (cur >= end) { cur = end; clearInterval(t) }
          setVal(cur)
        }, 30)
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [end])

  return [ref, `${prefix}${val.toLocaleString('en-IN')}`]
}

const BAR_HEIGHTS = [30, 55, 40, 70, 50, 85, 65]

export default function DashboardMock() {
  const [ordersRef, orders] = useCountUp(1284)
  const [empRef, employees] = useCountUp(47)
  const [revRef, revenue] = useCountUp(92000, '₹')

  return (
    <div className="dash">
      <div className="dash-top">
        <div className="dash-dots"><span /><span /><span /></div>
        <div className="dash-title">admin.dashboard</div>
        <div className="dash-live"><i />live</div>
      </div>
      <div className="dash-body">
        <div className="dash-stats">
          <div className="dash-stat" ref={ordersRef}>
            <div className="label">Orders</div>
            <div className="num t">{orders}</div>
          </div>
          <div className="dash-stat" ref={empRef}>
            <div className="label">Employees</div>
            <div className="num o">{employees}</div>
          </div>
          <div className="dash-stat" ref={revRef}>
            <div className="label">Revenue</div>
            <div className="num a">{revenue}</div>
          </div>
        </div>
        <div className="dash-chart">
          {BAR_HEIGHTS.map((h, i) => (
            <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
        <div className="dash-list">
          <div className="dash-row"><span className="r-name"><span className="r-dot" />New enquiry — Real Estate site</span><span className="r-status">assigned</span></div>
          <div className="dash-row"><span className="r-name"><span className="r-dot" />Inventory sync</span><span className="r-status">complete</span></div>
          <div className="dash-row"><span className="r-name"><span className="r-dot" />Invoice #0231</span><span className="r-status">paid</span></div>
        </div>
      </div>
    </div>
  )
}
