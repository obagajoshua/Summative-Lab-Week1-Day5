import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";
import "./App.css";


function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
    },
    {
      id: 2,
      title: "Weather App",
      description: "A weather application that provides real-time weather information based on user location.",
    },
    {
      id: 3,
      title: "Task Manager",
      description: "A task management application that allows users to create, update, and delete tasks.",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <main className="container">
        <ProjectForm onAddProject={handleAddProject} />
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <ProjectList
          projects={filteredProjects}
          onDeleteProject={handleDeleteProject}
        />
      </main>
    </div>
  );
}

export default App;