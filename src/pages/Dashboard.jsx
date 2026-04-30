import { useEffect, useState } from "react";
import { getItems } from "../services/api";

function Dashboard() {
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const items = await getItems();
        setTotalItems(items.length);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <main className="page">
      <h1 className="page-title">Dashboard</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="grid">
        <div className="card dashboard-card">
          <h3>Total de Items</h3>
          <div className="dashboard-number">
            {loading ? "..." : totalItems}
          </div>
        </div>

        <div className="card dashboard-card">
          <h3>Estado del Sistema</h3>
          <div className="dashboard-number">OK</div>
        </div>

        <div className="card dashboard-card">
          <h3>Sesión</h3>
          <div className="dashboard-number">Activa</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "30px" }}>
        <h3>Acceso rápido</h3>

        <a href="/items" className="btn btn-primary">
          Ir a Items
        </a>
      </div>
    </main>
  );
}

export default Dashboard;