import { useRef, useEffect } from 'react'
import useTypewriter from '../../hooks/useTypewriter'
import './Hero.css'

export default function Hero() {
  const typed = useTypewriter()
  const ringsRef = useRef(null)

  useEffect(() => {
    function onMove(e) {
      if (!ringsRef.current) return
      const x = (e.clientX / innerWidth - 0.5) * 30
      const y = (e.clientY / innerHeight - 0.5) * 30
      ringsRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const techs = ['REACT', 'TYPESCRIPT', 'NODE.JS', 'SYMFONY', 'DOCKER', 'POSTGRES']
  const marqueeContent = techs.map((t, i) => (
    <span key={i}>{t}<span className="hot" style={{ margin: '0 26px' }}>★</span></span>
  ))

  return (
    <header id="hero">
      <div className="pulse-rings" ref={ringsRef}>
        <span className="ring" />
        <span className="ring" />
        <span className="ring" />
      </div>
      <div className="wrap hero-grid">
        <div className="eyebrow">
          <span className="rec" /> FULL-STACK DEVELOPER · PARIS
        </div>
        <h1>
          <span className="fill">LEELIAN</span><br />
          <span className="out">SERRANT</span><br />
          <span className="beat pulse">PORTFOLIO.</span>
        </h1>
        <p className="tag">
          Je conçois des <b>applications web</b> complètes. Back-end solide, front-end soigné.
          {' '}<code>$ npm run build</code> et déploiement en production.
        </p>
        <div className="term">
          <div className="bar">
            <i /><i /><i />
            <span>~/LSEDEV · zsh · 90 BPM</span>
          </div>
          <div className="body">
            <div className="l1">
              <span className="pr">LSEDEV@studio</span>:~$ {typed}
              <span className="cursor" />
            </div>
          </div>
        </div>
        <div className="cta-row">
          <a href="#tracks" className="btn solid">▶ Découvrir mes projets</a>
          <a href="#booking" className="btn ghost">Me contacter</a>
        </div>
      </div>
      <div className="marquee">
        <div>{marqueeContent}{marqueeContent}</div>
      </div>
    </header>
  )
}
