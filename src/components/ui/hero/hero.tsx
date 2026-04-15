import { Link } from "react-router";
import TechStack from "../techStack/techStack.tsx";
import "./hero.css";

import profilePicture from "../../../assets/profile.svg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <aside className="hero-description">
          <h1>Hi, I'm Jesús Politrón</h1>
          <h2>Freelance Frontend Developer</h2>

          <p>Building high quality web applications since 2021.</p>

          <h3>Tech stack:</h3>

          <TechStack />
        </aside>

        <aside className="hero-profile">
          <img src={profilePicture} alt="" />
          <span>
            <Link to="https://github.com/polidev" target="_blank">
              GitHub
            </Link>

            <Link
              to="https://www.linkedin.com/in/jesus-politron/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </span>
        </aside>
      </section>
    </>
  );
}
