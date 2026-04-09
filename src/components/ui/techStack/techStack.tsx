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
          <img src={htmlIcon} alt="HTML Icon" />
        </li>
        <li>
          <img src={cssIcon} alt="CSS Icon" />
        </li>
        <li>
          <img src={jsIcon} alt="JavaScript Icon" />
        </li>
        <li>
          <img src={tsIcon} alt="TypeScript Icon" />
        </li>
        <li>
          <img src={reactIcon} alt="React Icon" />
        </li>
        <li>
          <img src={nodeIcon} alt="Node.js Icon" />
        </li>
        <li>
          <img src={expressIcon} alt="Express.js Icon" />
        </li>
        <li>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/sql.png"
            alt="sql"
          />
        </li>
        <li>
          <img src={postgreIcon} alt="PostgreSQL Icon" />
        </li>
      </ul>
    </>
  );
}
