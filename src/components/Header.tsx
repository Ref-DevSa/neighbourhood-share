import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

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

          {user ? (
            <>
              <li className="user-name">Hello, {user.name}</li>
              <li>
                <button className="link-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;