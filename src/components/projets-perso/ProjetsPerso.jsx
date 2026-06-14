import './ProjetsPerso.css'

export default function ProjetsPerso() {
  return (
    <section id="projets-perso">
      <div className="wrap">
        <div className="head">
          <span className="num">C4</span>
          <h2>Projets Personnels</h2>
          <div className="meta">EN DEHORS<br />DU CURSUS</div>
        </div>

        <p className="perso-intro">
          Le développement ne s'arrête pas à la sortie de l'IUT. Depuis mes <b>13 ans</b> je
          travaille sur des projets personnels et cela n'a jamais changé.
        </p>

        <div className="perso-card">
          <div className="perso-card-header">
            <span className="perso-icon">🎮</span>
            <h3>Développement de jeux sur Roblox</h3>
            <span className="perso-tag">LUA / LUAU</span>
          </div>
          <div className="perso-card-body">
            <p>
              Je développe des <b>jeux vidéo sur Roblox</b> depuis le collège. C'est comme
              cela que tout a commencé, scripting en Lua, level design, mécaniques de jeu.
              Un environnement qui m'a donné le goût du code avant même de savoir ce
              qu'était un IDE.
            </p>
            <p>
              Aujourd'hui je continue à y travailler sur des projets plus ambitieux, avec une
              approche plus structurée qu'à mes débuts. L'expérience acquise en BUT m'aide à
              mieux architecturer mes jeux.
            </p>
            <div className="perso-gallery">
              <img src="/assets/roblox1.png" alt="Capture Roblox 1" className="gallery-img" />
              <img src="/assets/roblox2.png" alt="Capture Roblox 2" className="gallery-img" />
              <img src="/assets/roblox3.png" alt="Capture Roblox 3" className="gallery-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
