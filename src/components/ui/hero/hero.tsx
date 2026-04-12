import TechStack from "../techStack/techStack.tsx";
import "./hero.css";
import profilePicture from "../../../assets/profile.svg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-description">
          <h2>
            <span className="hero-description_name">
              Hi, I'm Jesús Politrón
            </span>{" "}
            Freelance Frontend Developer.
          </h2>
          <p>
            I build high quality web applications, simple tools and efficient
            code is my personality, the world is black and white with a touch of
            color I said.
          </p>
          <p>
            <span className="hero-description_stack">Tech stack:</span>
          </p>
          <TechStack />
        </div>

        <div className="hero-picture">
          <img src={profilePicture} alt="" />
          <p>GitHub / LinkedIn</p>
        </div>
      </section>
    </>
  );
}
