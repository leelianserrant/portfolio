import { useState, useEffect, useRef } from 'react'

const COMMANDS = [
  'git commit -m "drop the beat" --sign',
  'docker compose up -d --build',
  'npm run ship && echo "live"',
  'pnpm test -- --bail   # all green'
]

export default function useTypewriter() {
  const [text, setText] = useState('')
  const state = useRef({ ci: 0, pos: 0, del: false })

  useEffect(() => {
    let timeout

    function loop() {
      const { ci, pos, del } = state.current
      const s = COMMANDS[ci]
      setText(s.slice(0, pos))

      if (!del) {
        state.current.pos++
        if (state.current.pos > s.length) {
          state.current.del = true
          timeout = setTimeout(loop, 1100)
          return
        }
      } else {
        state.current.pos--
        if (state.current.pos < 0) {
          state.current.del = false
          state.current.pos = 0
          state.current.ci = (ci + 1) % COMMANDS.length
        }
      }

      timeout = setTimeout(loop, del ? 28 : 62)
    }

    loop()
    return () => clearTimeout(timeout)
  }, [])

  return text
}
