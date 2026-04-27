function ItemCard({ name, description, status }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>Estado: {status}</strong>

      <div className="item-actions">
        <button className="btn btn-small btn-warning">Editar</button>
        <button className="btn btn-small btn-danger">Eliminar</button>
      </div>
    </div>
  );
}

export default ItemCard;