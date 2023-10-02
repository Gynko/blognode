import { Link } from "react-router-dom";
import "./header.styles.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <Link className="header-links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-links" to="/api/blogcontent">
              Blog
            </Link>
          </li>
          <li>
            <Link className="header-links" to="/api/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
