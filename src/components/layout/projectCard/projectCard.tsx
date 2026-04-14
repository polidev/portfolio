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
        <img
          src="https://i.pinimg.com/736x/c0/58/04/c05804e3505d145ba9bec0cc239fa3af.jpg"
          alt=""
        />
        <h3>
          {title} <span>{level}</span>
        </h3>
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
