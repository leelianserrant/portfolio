import './Fierte.css'

export default function Fierte() {
  return (
    <section id="fierte">
      <div className="wrap">
        <div className="head">
          <span className="num">C2</span>
          <h2>Ma Fierté</h2>
          <div className="meta">CE DONT JE SUIS<br />LE PLUS FIER</div>
        </div>
        <div className="fierte-block">
          <div className="fierte-text">
            <div className="big">
              Ma montée en <em>compétence</em>,<br />
              tout <em>simplement</em>.
            </div>
            <p>
              Je fais du développement informatique depuis mes <b>13 ans</b>. Mes premières
              lignes, c'était du Lua sur Roblox Studio, à créer des jeux avec mes camarades.
              Quand je me suis lancé dans le BUT Informatique, j'avais un objectif clair :
              acquérir les <b>compétences techniques</b> nécessaires pour aller plus loin
              dans mes projets.
            </p>
            <p>
              Trois ans plus tard, ces compétences je les ai. Je sais concevoir, développer,
              déployer et maintenir une application de bout en bout. Du front-end au back-end,
              de l'infrastructure au monitoring. Ce n'est pas simplement un diplôme, c'est
              une vraie <b>transformation</b>.
            </p>
          </div>
          <div className="fierte-visual">
            <div className="timeline-mini">
              <div className="step">
                <div className="year">2013</div>
                <div className="label">Premiers scripts Lua sur Roblox</div>
              </div>
              <div className="step">
                <div className="year">2017</div>
                <div className="label">Premières applications web personnelles</div>
              </div>
              <div className="step">
                <div className="year">2022</div>
                <div className="label">Efrei, Bachelor Ingénierie & Numérique</div>
              </div>
              <div className="step">
                <div className="year">2025</div>
                <div className="label">IUT Villetaneuse, BUT 3</div>
              </div>
              <div className="step active">
                <div className="year">2026</div>
                <div className="label">Bachelor + objectif Master</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
