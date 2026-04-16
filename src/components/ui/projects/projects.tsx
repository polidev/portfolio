import { useHttp } from "../../../hooks/useHttp.tsx";
import ProjectCard from "../../layout/projectCard/projectCard.tsx";
import "./projects.css";

export default function Projects() {
  const { data, loading, error } = useHttp("src/data/data.json");

  console.log(data);

  return (
    <>
      <section id="projects" className="projects-section">
        <header>
          <h2>Projects</h2>
        </header>

        <div className="projects-container">
          {/* Replace with a custom loading component */}
          {loading && <p>Loading...</p>}
          {/* Replace with a custom error component */}
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
        </div>
      </section>
    </>
  );
}
