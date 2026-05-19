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

        <span className="tech-badge">{project.tech}</span>

        <button className="project-btn">
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;