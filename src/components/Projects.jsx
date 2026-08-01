import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A few recent ideas, experiments, and products I’ve worked on.</p>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
