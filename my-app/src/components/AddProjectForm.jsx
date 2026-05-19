import { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !tech) return;

    const newProject = {
      id: Date.now(),
      title,
      image,
      description,
      tech
    };

    addProject(newProject);

    setTitle("");
    setImage("");
    setDescription("");
    setTech("");
  }

  return (
    <section id="add" className="form-section">
      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Technologies Used"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          required
        />

        <textarea
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button type="submit">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default AddProjectForm;