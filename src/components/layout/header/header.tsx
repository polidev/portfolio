import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/">Polidev</Link>

        <ul className="header-nav-list">
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
          <HashLink
            smooth
            to="https://drive.google.com/file/d/15D4tqXmzu2DRlGrs-E0IC8VYBpWrwltY/view?usp=drive_link"
            target="_blank"
          >
            <button className="header-download-button">Download CV</button>
          </HashLink>
        </ul>
      </nav>
    </header>
  );
}
