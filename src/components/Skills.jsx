import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">A compact overview of the tools and technologies I work with.</p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card fade-in" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
