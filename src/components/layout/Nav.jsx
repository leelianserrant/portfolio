import { useState } from 'react'
import './Nav.css'

const LINKS = [
  { label: 'INTRO', target: 'hero' },
  { label: 'PARCOURS', target: 'timeline' },
  { label: 'SAE', target: 'sae' },
  { label: 'STAGE', target: 'stage' },
  { label: 'PROJETS', target: 'tracks' },
  { label: 'DECK', target: 'deck' },
  { label: 'PERSO', target: 'fierte' },
  { label: 'CONTACT', target: 'booking' }
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav>
        <div className="wrap">
          <div className="logo">LSE<i>//</i>DEV</div>
          <div className="navlinks">
            {LINKS.map(l => (
              <a key={l.target} onClick={() => scrollTo(l.target)}>{l.label}</a>
            ))}
          </div>
          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {LINKS.map(l => (
          <a key={l.target} onClick={() => scrollTo(l.target)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
