import { useContext } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./header.styles.css";

export default function Header() {
  const contextData = useContext(MyContext);
  const { user, setUser } = contextData;
  const isLoggedIn = document.cookie.includes("user=");
  const navigate = useNavigate();
  function handleLogout() {
    // Clear user from context/state
    setUser({ username: "" });
    navigate("/login"); // Ensure you've imported `useNavigate`

    // Make a request to the server to handle server-side logout
    fetch("/api/logout", { method: "POST" })
      .then(/* handle response if necessary */)
      .catch(console.error);
  }

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
            {user.username !== "" && isLoggedIn ? (
              <li>
                <button
                  className="header-button-logout header-links"
                  onClick={handleLogout}
                >
                  Logout, {user.username}
                </button>
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
