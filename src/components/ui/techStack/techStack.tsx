import htmlIcon from "../../../assets/icons8-html-5.svg";
import cssIcon from "../../../assets/icons8-css-3.svg";
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
        <li>
          <img
            width="48"
            height="48"
            src={htmlIcon}
            alt="HTML Icon"
            title="HTML"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={cssIcon}
            alt="CSS Icon"
            title="CSS"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={jsIcon}
            alt="JavaScript Icon"
            title="JavaScript"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={tsIcon}
            alt="TypeScript Icon"
            title="TypeScript"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={reactIcon}
            alt="React Icon"
            title="React"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={nodeIcon}
            alt="Node.js Icon"
            title="Node.js"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={expressIcon}
            alt="Express.js Icon"
            title="Express.js"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/sql.png"
            alt="sql"
            title="SQL"
          />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src={postgreIcon}
            alt="PostgreSQL Icon"
            title="PostgreSQL"
          />
        </li>
      </ul>
    </>
  );
}
