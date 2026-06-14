import './Objectifs.css'

export default function Objectifs() {
  return (
    <section id="objectifs">
      <div className="wrap">
        <div className="head">
          <span className="num">C3</span>
          <h2>Next Up</h2>
          <div className="meta">OBJECTIFS<br />CT · MT · LT</div>
        </div>
        <div className="obj-grid">
          <div className="obj-card">
            <div className="horizon">CT</div>
            <h3>Court terme</h3>
            <p>
              Obtenir mon <b>Bachelor BUT Informatique</b> et pouvoir poursuivre
              en <b>Master</b>. Consolider mes acquis et préparer la suite
              vers un cursus plus spécialisé.
            </p>
            <div className="timeframe">2026</div>
          </div>
          <div className="obj-card">
            <div className="horizon">MT</div>
            <h3>Moyen terme</h3>
            <p>
              Obtenir mon diplôme de <b>Master en développement IA</b> et avoir
              réalisé au moins un de mes <b>projets personnels</b> aboutis. Associer
              développement et intelligence artificielle.
            </p>
            <div className="timeframe">2028</div>
          </div>
          <div className="obj-card">
            <div className="horizon">LT</div>
            <h3>Long terme</h3>
            <p>
              Avoir mon <b>environnement développeur</b> complet. Un poste
              en entreprise qui me correspond et mon <b>espace personnel</b> avec mes
              projets qui tournent en parallèle.
            </p>
            <div className="timeframe">2030+</div>
          </div>
        </div>
      </div>
    </section>
  )
}
