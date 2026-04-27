function ItemCard({ item }) {
  return (
    <div>
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p>Estado: {item.estado ? "Activo" : "Inactivo"}</p>
    </div>
  );
}

export default ItemCard;