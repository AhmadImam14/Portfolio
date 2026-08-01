import profileImage from '../assets/profile.jpeg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="fade-in">
          <p className="section-subtitle">Hello, I’m</p>
          <h1>Ahmad Imam</h1>
          <h2 className="typing">Software Engineer</h2>
          <p>I build thoughtful digital experiences with clean code, strong design, and a focus on real user needs.</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        <div className="profile-card fade-in">
          <img src={profileImage} alt="Ahmad Imam" className="profile-image" />
        </div>
      </div>
    </section>
  )
}

export default Hero
