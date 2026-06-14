import './BilanStage.css'

export default function BilanStage() {
  return (
    <section id="stage">
      <div className="wrap">
        <div className="head">
          <span className="num">B1</span>
          <h2>Le Stage</h2>
          <div className="meta">ALIECOM<br />4 MOIS · PARIS Xe</div>
        </div>

        <div className="stage-card">
          <div className="stage-header">
            <span className="company">Aliecom</span>
            <div className="details">
              DevOps · Informatique · Paris Xe arrondissement<br />
              Stage de 4 mois · BUT3 Informatique
            </div>
          </div>
          <div className="stage-body">
            <p>
              Je suis très satisfait de cette expérience parce que je sens une
              <b> réelle montée en compétence</b>. Mon profil de développeur applicatif
              s'oriente peu à peu vers un profil de <span className="highlight">DevOps</span>.
            </p>
            <p>
              Ma vision de l'entreprise a évolué : les rencontres que j'ai faites m'ont
              permis de découvrir une toute nouvelle facette, <b>plus chaleureuse</b>,
              du monde professionnel. Ce n'est pas ma première fois en entreprise, mais
              cette fois-ci je me sens réellement intégré. J'ai trouvé ma place dans
              l'équipe assez rapidement, grâce à la <b>bienveillance de l'équipe Aliecom</b>
              {' '}et à ma prise de confiance par rapport à mes précédents stages.
            </p>
            <p>
              Au fil de ma période chez Aliecom, j'ai pu développer mon <b>autonomie</b>,
              mon <b>organisation</b>, mais surtout ma capacité à <b>savoir demander de
              l'aide</b>. Mon tuteur me fait confiance et n'hésite pas à me donner des
              responsabilités. Cet environnement m'a permis de développer les compétences
              évoquées.
            </p>
            <p>
              Ce stage confirme mon <b>projet professionnel en DevOps</b> et me permet
              aussi de continuer en alternance. La recherche d'alternance a été le plus
              gros nœud de mon parcours dans l'enseignement supérieur et ce stage a
              réussi à le démêler.
            </p>

            <div className="stage-missions">
              <div className="mission">Conception, développement et déploiement d'applications internes et clients</div>
              <div className="mission">Support informatique et maintenance du parc</div>
              <div className="mission">Maintenabilité de l'infrastructure en équipe</div>
              <div className="mission">CI/CD et pipelines de déploiement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
