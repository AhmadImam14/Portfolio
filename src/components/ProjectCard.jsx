function ProjectCard({ project }) {
  return (
    <article className="project-card fade-in">
      <div className="project-image">{project.imageLabel}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.technologies.map((tech) => (
          <span className="tag" key={tech}>{tech}</span>
        ))}
      </div>

      <div className="project-actions">
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
        {!project.github && !project.demo && <span>Private repo · demo on request</span>}
      </div>
    </article>
  )
}

export default ProjectCard
