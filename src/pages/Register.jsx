function Register() {
  return (
    <section className="auth-wrapper">
      <form className="auth-card">
        <h2>Crear cuenta</h2>
        <p>Registra un nuevo usuario para el sistema.</p>

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Samuel Quispe" />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input type="email" placeholder="usuario@email.com" />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="btn btn-primary">Registrar</button>
      </form>
    </section>
  );
}

export default Register;