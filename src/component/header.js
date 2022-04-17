import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/">
        <div className="nav-logo">Notify</div>
      </Link>
    </nav>
  );
}
