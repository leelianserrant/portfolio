import { useEffect, useRef } from 'react'
import { useBeat } from '../context/BeatContext'

const PALETTE = [
  [255, 45, 111],
  [198, 255, 58],
  [242, 183, 5],
  [150, 40, 220],
  [30, 90, 200]
]

function createBlobs() {
  const blobs = []
  for (let i = 0; i < 7; i++) {
    const c = PALETTE[i % PALETTE.length]
    blobs.push({
      x: Math.random(), y: Math.random(),
      r: 0.15 + Math.random() * 0.2,
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      col: c,
      ph: Math.random() * Math.PI * 2,
      sp: 0.3 + Math.random() * 0.5,
      react: 0.4 + Math.random() * 0.6
    })
  }
  return blobs
}

function createStars() {
  const stars = []
  for (let i = 0; i < 160; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      z: Math.random(),
      tw: Math.random() * Math.PI * 2
    })
  }
  return stars
}

export default function useNebula(canvasRef) {
  const { bassRef } = useBeat()
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const parRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const cx = cv.getContext('2d')
    let W, H, DPR
    const blobs = createBlobs()
    const stars = createStars()
    let t = 0
    let frameId

    function resize() {
      DPR = Math.min(devicePixelRatio || 1, 2)
      W = cv.width = innerWidth * DPR
      H = cv.height = innerHeight * DPR
      cv.style.width = innerWidth + 'px'
      cv.style.height = innerHeight + 'px'
    }

    function onMouse(e) {
      mouseRef.current.x = e.clientX / innerWidth
      mouseRef.current.y = e.clientY / innerHeight
    }

    function draw() {
      t += 0.016
      bassRef.current *= 0.92
      const wobble = bassRef.current * Math.sin(t * 32) * 0.12
      const B = Math.max(0, bassRef.current + wobble)

      parRef.current.x += ((mouseRef.current.x - 0.5) * 30 - parRef.current.x) * 0.05
      parRef.current.y += ((mouseRef.current.y - 0.5) * 30 - parRef.current.y) * 0.05

      cx.setTransform(1, 0, 0, 1, 0, 0)
      cx.clearRect(0, 0, W, H)

      const scale = 1 + B * 0.06
      cx.translate(W / 2 + parRef.current.x * DPR, H / 2 + parRef.current.y * DPR)
      cx.scale(scale, scale)
      cx.translate(-W / 2, -H / 2)

      cx.globalCompositeOperation = 'lighter'

      for (const b of blobs) {
        b.x += b.vx + Math.sin(t * 0.7 + b.ph) * 0.00005
        b.y += b.vy + Math.cos(t * 0.5 + b.ph) * 0.00005
        if (b.x < -0.2 || b.x > 1.2) b.vx *= -1
        if (b.y < -0.2 || b.y > 1.2) b.vy *= -1

        const px = b.x * W, py = b.y * H
        const breathe = 0.88 + 0.12 * Math.sin(t * b.sp + b.ph)
        const swell = 1 + B * 0.35 * b.react
        const rad = b.r * Math.min(W, H) * breathe * swell
        const baseA = 0.06 + B * 0.14 * b.react

        const g = cx.createRadialGradient(px, py, 0, px, py, rad)
        const r = b.col[0], gr = b.col[1], bl = b.col[2]
        g.addColorStop(0, `rgba(${r},${gr},${bl},${baseA})`)
        g.addColorStop(0.4, `rgba(${r},${gr},${bl},${baseA * 0.4})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        cx.fillStyle = g
        cx.beginPath()
        cx.arc(px, py, rad, 0, Math.PI * 2)
        cx.fill()
      }

      cx.globalCompositeOperation = 'source-over'
      for (const s of stars) {
        const px = s.x * W, py = s.y * H
        const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.9 + s.tw))
        const a = (0.1 + 0.45 * s.z) * tw * (1 + B * 0.6)
        cx.fillStyle = `rgba(232,230,224,${Math.min(1, a)})`
        const sz = (0.5 + s.z * 1.4) * DPR * (1 + B * 0.3)
        cx.fillRect(px, py, sz, sz)
      }

      frameId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouse)
    draw()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [canvasRef, bassRef])
}
