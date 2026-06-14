import './Contact.css'

export default function Contact() {
  return (
    <section id="booking">
      <div className="wrap booking">
        <h2>
          <span className="out">LET'S</span> MAKE<br />
          SOME <span className="pop pulse">NOISE</span>
        </h2>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-label">Email</div>
            <a href="mailto:leelian.serrant@hotmail.com">leelian.serrant@hotmail.com</a>
          </div>
          <div className="contact-card">
            <div className="contact-label">Téléphone</div>
            <a href="tel:+33782959271">07 82 95 92 71</a>
          </div>
          <div className="contact-card">
            <div className="contact-label">LinkedIn</div>
            <a href="https://www.linkedin.com/in/leelian-serrant-874784252" target="_blank" rel="noreferrer">
              Leelian Serrant
            </a>
          </div>
        </div>

        <a href={`${import.meta.env.BASE_URL}assets/cv.pdf`} download className="btn solid cv-download">
          ↓ Télécharger mon CV (PDF)
        </a>

        <div className="socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/leelian-serrant-874784252" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
      </div>
    </section>
  )
}
