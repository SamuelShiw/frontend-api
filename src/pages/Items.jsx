import { useEffect, useState } from "react";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../services/api";

function Items() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    estado: true,
  });

  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadItems = async () => {
    try {
      setError("");
      const data = await getItems();
      setItems(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "estado" ? value === "true" : value,
    });
  };

  const resetForm = () => {
    setForm({
      nombre: "",
      descripcion: "",
      estado: true,
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setMessage("");

      if (editingId) {
        await updateItem(editingId, form);
        setMessage("Item actualizado correctamente");
      } else {
        await createItem(form);
        setMessage("Item creado correctamente");
      }

      resetForm();
      loadItems();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      nombre: item.nombre,
      descripcion: item.descripcion || "",
      estado: Boolean(item.estado),
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm("¿Seguro que deseas eliminar este item?");

    if (!confirmDelete) return;

    try {
      setError("");
      setMessage("");
      await deleteItem(id);
      setMessage("Item eliminado correctamente");
      loadItems();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page">
      <h1 className="page-title">Gestión de Items</h1>
      <p className="page-subtitle">
        Crea, visualiza, edita y elimina items conectados al backend.
      </p>

      <div className="card" style={{ marginBottom: "28px" }}>
        <h2>{editingId ? "Editar item" : "Crear nuevo item"}</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Ejemplo: Laptop Lenovo"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <textarea
              name="descripcion"
              placeholder="Describe el item"
              value={form.descripcion}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Estado</label>
            <select name="estado" value={form.estado} onChange={handleChange}>
              <option value="true">Activo</option>
              <option value="false">Inactivo</option>
            </select>
          </div>

          <button className="btn btn-primary" disabled={loading}>
            {loading
              ? "Guardando..."
              : editingId
              ? "Actualizar item"
              : "Crear item"}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn"
              style={{ marginTop: "10px", width: "100%" }}
              onClick={resetForm}
            >
              Cancelar edición
            </button>
          )}
        </form>
      </div>

      <div className="grid">
        {items.length === 0 ? (
          <div className="card">
            <p>No hay items registrados todavía.</p>
          </div>
        ) : (
          items.map((item) => (
            <div className="item-card" key={item.id}>
              <h3>{item.nombre}</h3>
              <p>{item.descripcion || "Sin descripción"}</p>

              <strong>
                Estado: {item.estado ? "Activo" : "Inactivo"}
              </strong>

              <div className="item-actions">
                <button
                  className="btn btn-small btn-warning"
                  onClick={() => handleEdit(item)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-small btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Items;