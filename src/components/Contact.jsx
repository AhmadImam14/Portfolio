function Contact() {
  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="contact-card fade-in">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations, opportunities, or just to say hello.</p>

          <div className="social-links">
            <a href="mailto:ahmad0903998@gmail.com">Email</a>
            <a href="https://github.com/AhmadImam14" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/137_legend" target="_blank" rel="noreferrer">Twitter/X</a>
          </div>
        </div>

        <div className="contact-card fade-in">
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Your message" />
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
