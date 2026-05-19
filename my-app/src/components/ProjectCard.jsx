import portfolioImage from "../assets/portfolio2.png";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image || portfolioImage}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {project.tech && (
          <span className="tech-badge">
            {project.tech}
          </span>
        )}

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        ) : (
          <button className="project-btn disabled" disabled>
            No Project Link
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;