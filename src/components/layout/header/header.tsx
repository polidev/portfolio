import { Link } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/">Polidev</Link>

        <ul className="header-nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <Link
            to="https://drive.google.com/file/d/15D4tqXmzu2DRlGrs-E0IC8VYBpWrwltY/view?usp=drive_link"
            target="_blank"
          >
            <button className="header-download-button">Download CV</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
