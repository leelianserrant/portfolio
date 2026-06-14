import './Timeline.css'

const EVENTS = [
  {
    year: '2013',
    title: 'Premiers projets de développement',
    desc: 'Découverte du code en autodidacte. Scripting Lua sur Roblox Studio, création de mini-jeux. Le début de tout.',
    current: false
  },
  {
    year: '2021',
    title: 'Lycée, option NSI',
    desc: 'Spécialité Numérique et Sciences Informatiques. Les premiers vrais fondamentaux en algorithmique, Python et bases de données.',
    current: false
  },
  {
    year: '2022',
    title: 'Efrei, Bachelor Ingénierie & Numérique',
    desc: 'Formation en ingénierie du numérique à l\'Efrei. Montée en puissance sur les technologies web et la culture projet.',
    current: false
  },
  {
    year: '2025',
    title: 'IUT Villetaneuse, BUT 3',
    desc: 'Université Paris Nord. SAE S5/S6, approfondissement des compétences, portfolio et soutenance. L\'année du bachelor.',
    current: false
  },
  {
    year: '2026',
    title: 'Stage DevOps chez Aliecom',
    desc: 'Paris Xe. Conception, développement et déploiement d\'applications internes et clients. Intégration dans une véritable équipe professionnelle. Le déclic.',
    current: true
  }
]

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="wrap">
        <div className="head">
          <span className="num">A2</span>
          <h2>Le Parcours</h2>
          <div className="meta">FRISE<br />CHRONOLOGIQUE</div>
        </div>
        <div className="timeline-track">
          {EVENTS.map((ev, i) => (
            <div key={i} className={`tl-item ${ev.current ? 'current' : ''}`}>
              <div className="tl-dot" />
              <div className="tl-content">
                <div className="tl-year">{ev.year}</div>
                <h3>{ev.title}</h3>
                <p>{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
