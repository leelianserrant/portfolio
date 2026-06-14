import './Presentation.css'

export default function Presentation() {
  return (
    <section id="presentation">
      <div className="wrap">
        <div className="head">
          <span className="num">00</span>
          <h2>Liner Notes</h2>
          <div className="meta">QUI JE SUIS<br />EN QUELQUES MOTS</div>
        </div>
        <div className="pres-grid">
          <div className="pres-photo">
            <img src="/assets/photo.webp" alt="Leelian Serrant" />
          </div>
          <div className="pres-content">
            <div className="liner-title">
              Développeur depuis mes <em>13 ans</em>,<br />
              j'ai grandi avec le <em>code</em>.
            </div>
            <p>
              Je m'appelle <b>Leelian Serrant</b>, étudiant en <b>BUT3 Informatique</b> à
              l'IUT de Villetaneuse. Le développement informatique n'est pas qu'un cursus
              pour moi, c'est une passion qui m'accompagne depuis le collège. Mes premières
              lignes de code, c'était sur <span className="accent">Roblox Studio</span>, à
              créer des jeux pour mes camarades. Depuis, je n'ai jamais arrêté.
            </p>
            <p>
              En intégrant ce BUT, je voulais acquérir les <b>compétences techniques</b> pour
              aller plus loin. Trois ans plus tard, mon profil a évolué. Du développement
              applicatif, je m'oriente peu à peu vers le <b>DevOps</b>, un domaine où je
              peux intervenir à tous les niveaux. Du code au déploiement, de l'infrastructure
              à la CI/CD.
            </p>
            <p>
              Ma méthode de travail, c'est le <b>learning by doing</b>. Je suis du genre à
              me lancer dans un projet avant d'avoir lu toute la documentation. Je rencontre
              des difficultés, je cherche, je comprends. C'est de cette manière que
              j'apprends le mieux.
            </p>
            <div className="pres-tags">
              <span>DEVOPS</span>
              <span>FULL-STACK</span>
              <span>GAME DEVELOPMENT</span>
              <span>LEARNING BY DOING</span>
              <span>PARIS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
