import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import "./header.styles.css";

export default function Header() {
  const contextData = useContext(MyContext);
  const { user } = contextData;
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <ul className="header-ul">
            <li>
              <Link className="header-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header-links" to="/blog">
                Blog
              </Link>
            </li>
            {user.username !== "" ? (
              <li>
                <Link className="header-links" to="/login">
                  Logout, {user.username}
                </Link>
              </li>
            ) : (
              <li>
                <Link className="header-links" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
