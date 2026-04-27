import { useState } from "react";
import ItemCard from "../components/ItemCard";

function Items() {
  const [items, setItems] = useState([
    {
      id: 1,
      nombre: "Laptop",
      descripcion: "Equipo de prueba",
      estado: true
    },
    {
      id: 2,
      nombre: "Mouse",
      descripcion: "Accesorio de prueba",
      estado: false
    }
  ]);

  const agregarItem = () => {
    const nuevoItem = {
      id: items.length + 1,
      nombre: "Teclado",
      descripcion: "Agregado con useState",
      estado: true
    };

    setItems([...items, nuevoItem]);
  };

  return (
    <div>
      <h1>Items</h1>

      <button onClick={agregarItem}>
        Agregar item
      </button>

      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;