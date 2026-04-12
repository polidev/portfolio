import "./projectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  level: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  level,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <header className="project-card_header">
        <img src="" alt="" />
        <h3>{title}</h3>
        <span>{level}</span>
      </header>

      <p className="project-card_description">{description}</p>

      <footer className="project-card_footer">
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </footer>
    </article>
  );
}
