import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import AddProjectForm from "./components/AddProjectForm";
import ProjectList from "./components/ProjectList";
import projectsData from "./data/projects";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(() => projectsData || []);
  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  }

  const filteredProjects = projects.filter((project) =>
    (project.title || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar />

      <Hero />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <AddProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
