import { createContext, useContext, useState, useRef, useCallback, useEffect } from 'react'

const BeatContext = createContext()

const BEAT_MS = 3000

export function BeatProvider({ children }) {
  const [isLive, setIsLive] = useState(false)
  const [nowPlaying, setNowPlaying] = useState('SET ON PAUSE')
  const bassRef = useRef(0)
  const kickTimerRef = useRef(null)
  const shocksRef = useRef([])

  const palette = [
    [255, 45, 111],
    [198, 255, 58],
    [242, 183, 5]
  ]

  const doKick = useCallback(() => {
    bassRef.current = 1
    const s = shocksRef.current
    s.push({
      x: 0.5 + (Math.random() - 0.5) * 0.25,
      y: 0.42 + (Math.random() - 0.5) * 0.2,
      t: 0,
      col: palette[Math.floor(Math.random() * 3)]
    })
    if (s.length > 6) s.shift()
  }, [])

  const startKicks = useCallback(() => {
    if (kickTimerRef.current) clearInterval(kickTimerRef.current)
    doKick()
    kickTimerRef.current = setInterval(doKick, BEAT_MS)
  }, [doKick])

  const stopKicks = useCallback(() => {
    if (kickTimerRef.current) {
      clearInterval(kickTimerRef.current)
      kickTimerRef.current = null
    }
  }, [])

  const toggleLive = useCallback(() => {
    setIsLive(prev => {
      const next = !prev
      if (next) {
        document.body.classList.add('live')
        startKicks()
        setNowPlaying('CODE THAT SLAPS · INSTRUMENTAL')
      } else {
        document.body.classList.remove('live')
        stopKicks()
        setNowPlaying('SET ON PAUSE')
      }
      return next
    })
  }, [startKicks, stopKicks])

  const playTrack = useCallback((title) => {
    if (!isLive) {
      document.body.classList.add('live')
      startKicks()
      setIsLive(true)
    }
    setNowPlaying(title + ' · LIVE')
  }, [isLive, startKicks])

  useEffect(() => {
    return () => stopKicks()
  }, [stopKicks])

  return (
    <BeatContext.Provider value={{
      isLive, toggleLive, nowPlaying, playTrack,
      bassRef, shocksRef, beatMs: BEAT_MS
    }}>
      {children}
    </BeatContext.Provider>
  )
}

export function useBeat() {
  return useContext(BeatContext)
}
