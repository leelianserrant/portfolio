import './DecouverteSoi.css'

export default function DecouverteSoi() {
  return (
    <section id="decouverte">
      <div className="wrap">
        <div className="head">
          <span className="num">B3</span>
          <h2>Miroir</h2>
          <div className="meta">CE QUE J'AI<br />DÉCOUVERT DE MOI</div>
        </div>
        <div className="decouverte-wrap">
          <div className="decouverte-quote">
            <blockquote>
              Le plus dur au départ a été de poser des questions par rapport à des
              difficultés rencontrées. Les points et discussions avec mon tuteur ont
              balayé ce blocage. Aujourd'hui ce problème n'existe plus.
            </blockquote>
            <div className="source">Extrait de mon rapport de stage, Aliecom 2026</div>
          </div>
          <div className="decouverte-details">
            <div className="insight">
              <h4>Oser demander</h4>
              <p>
                J'ai compris que demander de l'aide n'est pas un aveu de faiblesse mais un
                signe de maturité professionnelle. Cela a tout changé dans ma façon de travailler.
              </p>
            </div>
            <div className="insight">
              <h4>Confiance en soi</h4>
              <p>
                Mes précédents stages m'avaient laissé des doutes. Chez Aliecom j'ai pris
                confiance. Mon tuteur me donne des responsabilités et je les assume.
              </p>
            </div>
            <div className="insight">
              <h4>Mon identité professionnelle</h4>
              <p>
                Je ne suis plus simplement un étudiant qui fait un stage. Je suis un développeur
                qui contribue réellement à une équipe. Cette évolution mentale est la plus
                importante de mon parcours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
