import './PasseportCulturel.css'

export default function PasseportCulturel() {
  return (
    <section id="passeport">
      <div className="wrap">
        <div className="head">
          <span className="num">C5</span>
          <h2>Passeport</h2>
          <div className="meta">OUVERTURE<br />CULTURELLE</div>
        </div>
        <div className="passeport-grid">
          <div className="passeport-item">
            <h3><span className="pip" />Veille technologique</h3>
            <p>
              Je suis l'actualité technologique au quotidien : <b>Twitter/X</b> pour les
              annonces du secteur, <b>GitHub Trending</b> pour les dépôts populaires,
              <b> YouTube</b> pour les conférences et tutoriels. Je reste à jour sur
              les frameworks, les pratiques DevOps et les avancées en IA.
            </p>
          </div>
          <div className="passeport-item">
            <h3><span className="pip" />Viva Technology</h3>
            <p>
              J'ai participé à <b>Viva Tech</b> dans un cadre personnel. J'ai pu y
              découvrir le vaste monde qu'est l'informatique, des entreprises des
              quatre coins du monde étaient présentes. C'est comme si j'avais pu voir
              le monde de l'informatique prendre forme dans le réel. Viva Tech
              représente le côté <b>futuriste</b>, l'avenir de l'informatique : IA,
              robotique, startups qui repoussent les limites.
            </p>
          </div>
          <div className="passeport-item">
            <h3><span className="pip" />Musée des Arts et Métiers au CNAM</h3>
            <p>
              Cette année, j'ai visité le <b>Musée des Arts et Métiers au CNAM</b> dans
              le cadre de ma formation. Cette sortie fait office d'opposition à Viva Tech :
              là où Viva Tech représente l'avenir, le musée incarne l'aspect <b>traditionnel</b>,
              le passé de l'informatique. J'ai pu y découvrir l'origine d'appareils du
              quotidien, comme le <b>clavier</b> par exemple, ce qui m'a permis d'enrichir
              ma culture et de comprendre d'où viennent les outils que j'utilise chaque jour.
            </p>
            <img src="/assets/museedesarts.jpg" alt="Musée des Arts et Métiers au CNAM" className="passeport-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}
