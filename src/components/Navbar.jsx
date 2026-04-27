import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Frontend API</h2>

      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/items">Items</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;