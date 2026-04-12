import { useHttp } from "../../../hooks/useHttp";
import ProjectCard from "../../layout/projectCard/projectCard";
import "./projects.css";

interface Project {
  id: string;
  titulo: string;
  descripcion: string;
  nivel: string;
  tecnologias: string[];
}

export default function Projects() {
  const { data, loading, error } = useHttp<Project[]>("/src/data/data.json");

  console.log(data);

  return (
    <>
      <div id="projects-section" className="projects-section">
        <h2>Projects</h2>
      </div>
      <hr />
      <section className="projects-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data?.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.titulo}
            description={project.descripcion}
            level={project.nivel}
            technologies={project.tecnologias}
          />
        ))}
      </section>
    </>
  );
}
