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
          <button className="header-download-button">Download CV</button>
        </ul>
      </nav>
    </header>
  );
}
