import { useBeat } from '../../context/BeatContext'
import './BeatBar.css'

export default function BeatBar() {
  const { isLive, toggleLive, nowPlaying } = useBeat()

  return (
    <div className="beatbar">
      <button className="play" onClick={toggleLive}>
        {isLive ? '❚❚' : '▶'}
      </button>
      <div className="eq">
        <span /><span /><span /><span /><span /><span />
      </div>
      <div className="track">
        NOW PLAYING
        <b>{nowPlaying}</b>
      </div>
      <div className="bpm">
        <span className="dot" />
        <span>90</span>
        <small>BPM</small>
      </div>
    </div>
  )
}
