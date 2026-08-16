import './GlobeMock.css'
import globeImg from '../assets/globe.jpg'

export default function GlobeMock() {
  return (
    <div className="globe-card">
      <div className="globe-stage">
        <div className="globe-sphere" style={{ backgroundImage: `url(${globeImg})` }} />
        <div className="orbit-ring">
          <div className="orbit-dot" />
        </div>
        <span className="globe-pin p1" />
        <span className="globe-pin p2" />
        <span className="globe-pin p3" />
      </div>
    </div>
  )
}
