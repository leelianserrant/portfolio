import { useState } from 'react'
import { useBeat } from '../../context/BeatContext'
import PROJECTS from '../../data/projects'
import './Tracklist.css'

export default function Tracklist() {
  const [activeTrack, setActiveTrack] = useState(null)
  const { playTrack } = useBeat()

  function handleClick(index, title) {
    setActiveTrack(index)
    playTrack(title.toUpperCase())
  }

  return (
    <section id="tracks">
      <div className="wrap">
        <div className="head">
          <span className="num">A1 · A4</span>
          <h2>The Tracklist</h2>
          <div className="meta">4 PROJETS<br />EN ROTATION</div>
        </div>
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className={`track-item ${activeTrack === i ? 'playing' : ''}`}
            onClick={() => handleClick(i, p.title)}
          >
            <div className="tno">{p.num}</div>
            <div>
              <h3>{p.title}</h3>
              <div className="feat">{p.feat}</div>
            </div>
            <div className="right">
              <div className="wave">
                <b /><b /><b /><b /><b />
              </div>
              <div>
                <div className="dur">{p.dur}</div>
                <div className="stack">
                  {p.stack.map((s, j) => <b key={j}>{s}</b>)}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="gh-link"
                  onClick={e => e.stopPropagation()}
                >
                  GITHUB ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
