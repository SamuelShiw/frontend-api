import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">Frontend API</div>

      <div className="nav-links">
        {!isAuthenticated && (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {isAuthenticated && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/items">Items</Link>
            <button className="nav-button" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;