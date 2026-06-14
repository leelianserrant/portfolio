import './Deck.css'

const CHANNELS = [
  { label: 'FRONTEND', sub: 'React / Angular', level: 88 },
  { label: 'BACKEND', sub: 'Symfony / Django', level: 85 },
  { label: 'DEVOPS', sub: 'Docker / CI-CD', level: 75 },
  { label: 'DATABASE', sub: 'PostgreSQL / MySQL', level: 78 },
  { label: 'SCRIPTING', sub: 'Lua / Python', level: 90 },
  { label: 'VERSIONNING', sub: 'Git / GitHub', level: 85 }
]

export default function Deck() {
  return (
    <section id="deck">
      <div className="wrap">
        <div className="head">
          <span className="num">C1</span>
          <h2>The Deck</h2>
          <div className="meta">STACK<br />TECHNIQUE</div>
        </div>
        <div className="mixer">
          {CHANNELS.map((ch, i) => (
            <div className="channel" key={i}>
              <div className="lvl">
                <i style={{ height: ch.level + '%' }} />
              </div>
              <label>{ch.label}</label>
              <small>{ch.sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
