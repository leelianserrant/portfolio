import './MondePro.css'

const ITEMS = [
  {
    icon: '🏢',
    title: 'Culture d\'entreprise',
    text: 'Chez Aliecom, l\'ambiance est à taille humaine. Pas de hiérarchie rigide, chacun a sa voix. La bienveillance de l\'équipe a changé ma vision du monde professionnel.'
  },
  {
    icon: '🤝',
    title: 'Travail d\'équipe',
    text: 'Collaboration quotidienne avec les autres développeurs. Revues de code, pair programming, entraide sur les blocages techniques. Nous avançons ensemble.'
  },
  {
    icon: '🔧',
    title: 'Outils mobilisés',
    text: 'Docker, Git, CI/CD pipelines, monitoring. Passage d\'un environnement académique à des outils de production réels.'
  },
  {
    icon: '📋',
    title: 'Réunions & organisation',
    text: 'Points réguliers avec mon tuteur, réunions d\'équipe quotidiennes. Apprendre à communiquer l\'avancement et les blocages de manière concise.'
  },
  {
    icon: '🚧',
    title: 'Gestion des blocages',
    text: 'Le plus difficile au départ, c\'est d\'oser poser des questions. Les échanges avec mon tuteur ont levé ce blocage. Aujourd\'hui c\'est devenu naturel.'
  },
  {
    icon: '🔐',
    title: 'Responsabilités',
    text: 'Mon tuteur me fait confiance. Projets menés en autonomie avec un cadre directif. De véritables responsabilités, pas de la simple observation.'
  }
]

export default function MondePro() {
  return (
    <section id="monde-pro">
      <div className="wrap">
        <div className="head">
          <span className="num">B2</span>
          <h2>Le Monde Professionnel</h2>
          <div className="meta">DÉCOUVERTE<br />TERRAIN</div>
        </div>
        <div className="monde-grid">
          {ITEMS.map((item, i) => (
            <div className="monde-item" key={i}>
              <div className="monde-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
