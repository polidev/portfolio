import htmlIcon from "../../../assets/icons8-html-5.svg";
import cssIcon from "../../../assets/icons8-css-3.svg";
import tailwindIcon from "../../../assets/icons8-tailwind-css.svg";
import jsIcon from "../../../assets/icons8-javascript.svg";
import tsIcon from "../../../assets/icons8-typescript.svg";
import reactIcon from "../../../assets/icons8-react.svg";
import nodeIcon from "../../../assets/icons8-node-js.svg";
import expressIcon from "../../../assets/icons8-express-js.svg";
import postgreIcon from "../../../assets/icons8-postgre-sql.svg";
import "./techStack.css";

export default function TechStack() {
  return (
    <>
      <ul className="tech-stack">
        <li className="animate-delay-100">
          <img
            max-width="48"
            max-height="48"
            src={htmlIcon}
            alt="HTML Icon"
            title="HTML"
          />
        </li>
        <li className="animate-delay-150">
          <img
            max-width="48"
            max-height="48"
            src={cssIcon}
            alt="CSS Icon"
            title="CSS"
          />
        </li>
        <li className="animate-delay-200">
          <img
            max-width="48"
            max-height="48"
            src={tailwindIcon}
            alt="Tailwind Icon"
            title="Tailwind"
          />
        </li>
        <li className="animate-delay-250">
          <img
            max-width="48"
            max-height="48"
            src={jsIcon}
            alt="JavaScript Icon"
            title="JavaScript"
          />
        </li>
        <li className="animate-delay-300">
          <img
            max-width="48"
            max-height="48"
            src={tsIcon}
            alt="TypeScript Icon"
            title="TypeScript"
          />
        </li>
        <li className="animate-delay-350">
          <img
            max-width="48"
            max-height="48"
            src={reactIcon}
            alt="React Icon"
            title="React"
          />
        </li>
        <li className="animate-delay-400">
          <img
            max-width="48"
            max-height="48"
            src={nodeIcon}
            alt="Node.js Icon"
            title="Node.js"
          />
        </li>
        <li className="animate-delay-450">
          <img
            max-width="48"
            max-height="48"
            src={expressIcon}
            alt="Express.js Icon"
            title="Express.js"
          />
        </li>
        <li className="animate-delay-500">
          <img
            max-width="48"
            max-height="48"
            src="https://img.icons8.com/color/48/sql.png"
            alt="SQL Icon"
            title="SQL"
          />
        </li>
        <li className="animate-delay-550">
          <img
            max-width="48"
            max-height="48"
            src={postgreIcon}
            alt="PostgreSQL Icon"
            title="PostgreSQL"
          />
        </li>
      </ul>
    </>
  );
}
