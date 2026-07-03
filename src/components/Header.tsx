import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">NeighbourShare</Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Browse</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;