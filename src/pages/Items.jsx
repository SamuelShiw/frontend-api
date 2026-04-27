import ItemCard from "../components/ItemCard";

function Items() {
  const items = [
    {
      id: 1,
      name: "Laptop Lenovo",
      description: "Equipo registrado para inventario tecnológico.",
      status: "Activo",
    },
    {
      id: 2,
      name: "Mouse Logitech",
      description: "Accesorio disponible para uso interno.",
      status: "Disponible",
    },
    {
      id: 3,
      name: "Monitor Samsung",
      description: "Pantalla asignada al área administrativa.",
      status: "En uso",
    },
  ];

  return (
    <main className="page">
      <h1 className="page-title">Gestión de Items</h1>
      <p className="page-subtitle">
        Lista visual de items registrados en el sistema.
      </p>

      <div className="grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            description={item.description}
            status={item.status}
          />
        ))}
      </div>
    </main>
  );
}

export default Items;