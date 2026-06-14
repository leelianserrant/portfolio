import './BilanSAE.css'

export default function BilanSAE() {
  return (
    <section id="sae">
      <div className="wrap">
        <div className="head">
          <span className="num">A3 · A4</span>
          <h2>Bilan SAE</h2>
          <div className="meta">S5 &amp; S6<br />EN ÉQUIPE</div>
        </div>

        <div className="sae-block">
          <div className="sae-label">
            <span className="sae-num">S5</span>
            <h3>Le projet majeur</h3>
            <span className="semester">SEMESTRE 5</span>
          </div>
          <p>
            La SAE S5 a été un <b>réel défi</b>, autant sur les compétences techniques que sur
            le travail d'équipe. Réalisé avec mes camarades de BUT3 Informatique, le projet
            nous a poussés dans nos retranchements. Nous avions beaucoup d'idées et il a fallu
            <b>trancher</b> pour ne garder que les plus pertinentes.
          </p>
          <p>
            Nous avons mis un effort particulier sur la <b>direction artistique</b> et l'univers
            du projet, un choix qui a été <span className="highlight">salué par les enseignants
            jury</span>. Nous avons aussi fait face à des <b>problèmes de performances</b>, ce qui
            nous a obligés à repenser l'architecture et à optimiser. Livrer un projet abouti dans
            un délai imparti, c'était la vraie difficulté de ce semestre.
          </p>
          <div className="sae-takeaway">
            → Acquis : gestion de projet sous contrainte, optimisation, direction artistique, arbitrage des priorités
          </div>
          <div className="sae-screenshots">
            <img src="/assets/trackstar1.png" alt="Capture SAE S5" className="screenshot-img" />
            <img src="/assets/trackstar2.png" alt="Capture SAE S5" className="screenshot-img" />
          </div>
        </div>

        <div className="sae-block">
          <div className="sae-label">
            <span className="sae-num">S6</span>
            <h3>La réflexion</h3>
            <span className="semester">SEMESTRE 6</span>
          </div>
          <p>
            Le projet S6 était moins chargé que le S5. Le temps imparti étant plus court,
            les attentes étaient calibrées en conséquence. Réalisé avec les mêmes camarades
            de BUT3, la difficulté ne se situait pas au niveau technique mais plutôt au niveau
            de la <b>réflexion</b>.
          </p>
          <p>
            Un travail de fond nous a été demandé sur l'<b>intelligence artificielle</b>, ce
            qui nous a poussés à <span className="highlight">reconsidérer notre vision de l'IA</span>
            {' '}et ses implications. Un exercice qui dépasse le développement pur et qui pousse
            à la pensée critique.
          </p>
          <div className="sae-takeaway">
            → Acquis : pensée critique, réflexion éthique sur l'IA, synthèse, travail collaboratif
          </div>
          <div className="sae-screenshots">
            <img src="/assets/voronoi.svg" alt="Capture SAE S6 - Voronoi" className="screenshot-img" />
            <img src="/assets/voronoi2.png" alt="Capture SAE S6 - Voronoi" className="screenshot-img" />
          </div>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--smoke)', textAlign: 'center', marginTop: '20px' }}>
          Ces deux projets nous ont permis de progresser autant sur le plan technique que
          personnel, et de prendre du recul sur notre manière de travailler.
        </p>
      </div>
    </section>
  )
}
