import RoleBadge from "../components/RoleBadge";

function Dashboard() {
  return (
    <main className="page">
      <h1 className="page-title">Dashboard</h1>
      <p className="page-subtitle">
        Resumen general del sistema y roles disponibles.
      </p>

      <div className="grid">
        <div className="card dashboard-card">
          <h3>Items registrados</h3>
          <div className="dashboard-number">12</div>
          <p>Total de items disponibles.</p>
        </div>

        <div className="card dashboard-card">
          <h3>Rol actual</h3>
          <RoleBadge role="admin" />
          <p>Permisos completos sobre los items.</p>
        </div>

        <div className="card dashboard-card">
          <h3>Estado</h3>
          <div className="dashboard-number">OK</div>
          <p>Frontend listo para integrarse con backend.</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;