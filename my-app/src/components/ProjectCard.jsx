import portfolioImage from "../assets/portfolio2.png";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image || portfolioImage}
        alt={project.title}
        className="project-image"
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;