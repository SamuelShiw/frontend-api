const API_URL = import.meta.env.VITE_API_URL;

// =======================
// AUTH
// =======================

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al iniciar sesión");
  }

  return data;
}

export async function registerUser(nombre, email, password) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al registrar usuario");
  }

  return data;
}

// =======================
// TOKEN
// =======================

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// =======================
// ITEMS
// =======================

export async function getItems() {
  const response = await fetch(`${API_URL}/api/items`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al obtener items");
  }

  return data;
}

export async function createItem(item) {
  const response = await fetch(`${API_URL}/api/items`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(item),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al crear item");
  }

  return data;
}

export async function updateItem(id, item) {
  const response = await fetch(`${API_URL}/api/items/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(item),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al actualizar item");
  }

  return data;
}

export async function deleteItem(id) {
  const response = await fetch(`${API_URL}/api/items/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error al eliminar item");
  }

  return data;
}