import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login demostrativo");
  };

  return (
    <section className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <p>Accede al panel de gestión de items.</p>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            placeholder="admin@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Ingresar</button>
      </form>
    </section>
  );
}

export default Login;