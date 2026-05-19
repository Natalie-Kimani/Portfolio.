import ProjectCard from "./ProjectCard";

function ProjectList({ projects = [] }) {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

      <div className="projects-container">
        {projects.length === 0 ? (
          <p style={{ color: "white" }}>No projects found</p>
        ) : (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectList;