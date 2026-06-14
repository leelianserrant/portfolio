import './Competences.css'

const COMPS = [
  {
    name: 'Réaliser un développement d\'application',
    score: 4,
    desc: 'Conception, développement et déploiement d\'applications complètes. Du maquettage à la mise en production en passant par les tests et l\'intégration continue.'
  },
  {
    name: 'Optimiser des applications informatiques',
    score: 3.5,
    desc: 'Identification des points de ralentissement, refactoring, optimisation des requêtes et de l\'architecture. La SAE S5 m\'a particulièrement confronté à ces enjeux.'
  },
  {
    name: 'Travailler dans une équipe informatique',
    score: 4.5,
    desc: 'Communication, gestion de conflits, pair programming, revue de code. Mon stage chez Aliecom a renforcé cette compétence au quotidien.'
  }
]

function VuMeter({ score }) {
  const total = 5
  const segments = []
  for (let i = 1; i <= total; i++) {
    let cls = 'led off'
    if (i <= Math.floor(score)) {
      if (i <= 3) cls = 'led on-green'
      else if (i <= 4) cls = 'led on-gold'
      else cls = 'led on-red'
    } else if (i === Math.ceil(score) && score % 1 !== 0) {
      cls = 'led on-gold'
    }
    const h = 10 + i * 8
    segments.push(<div key={i} className={cls} style={{ height: h + 'px' }} />)
  }
  return <div className="vu-meter">{segments}</div>
}

export default function Competences() {
  return (
    <section id="competences">
      <div className="wrap">
        <div className="head">
          <span className="num">A5</span>
          <h2>Le Mix</h2>
          <div className="meta">AUTO-ÉVALUATION<br />3 COMPÉTENCES</div>
        </div>

        <table className="comp-table">
          <thead>
            <tr>
              <th>Compétence</th>
              <th>Niveau</th>
            </tr>
          </thead>
          <tbody>
            {COMPS.map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="comp-name">{c.name}</div>
                  <div className="comp-desc">{c.desc}</div>
                </td>
                <td>
                  <VuMeter score={c.score} />
                  <div className="comp-score">{c.score}/5</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="comp-synth">
          <h3>Synthèse</h3>
          <p>
            Ces trois compétences reflètent mon parcours. Un socle technique solide en
            développement, une capacité d'optimisation forgée par les contraintes des SAE
            et surtout un vrai sens du <b>travail d'équipe</b>, c'est ma plus grande force.
            Mon stage chez Aliecom a confirmé que c'est dans le collectif que je donne
            le meilleur de moi-même.
          </p>
        </div>
      </div>
    </section>
  )
}
