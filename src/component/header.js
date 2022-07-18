import { Link } from "react-router-dom";
import "../styles.css";
import { useAuth } from "../context";

export default function Header() {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;

  return (
    <nav className="navigation head-nav">
      <Link to="/">
        <div className="nav-logo">Notify</div>
      </Link>
      <div className="nav-submenu">
        <ul className="nav-flex-row">
          <li className="nav-submenu-sub">
            {loginStatus ? (
              <p
                className="bold button button-primary p2"
                onClick={(e) => {
                  logOutHandler();
                }}
              >
                LogOut
              </p>
            ) : (
              <Link to="/Login" className="bold button button-primary p2">
                LogIn
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}