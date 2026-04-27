import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Frontend API</div>

      <div className="nav-links">
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/items">Items</Link>
      </div>
    </nav>
  );
}

export default Navbar;