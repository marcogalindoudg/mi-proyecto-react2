import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto: Actividad 2</h1>
        <p>Componente de Formulario (Avance del Sprint 2)</p>

        {/* Este es el nuevo componente */}
        <form className="login-form">
          <h3>Iniciar Sesión</h3>
          <div className="form-group">
            <label>Usuario:</label>
            <input type="text" placeholder="Escribe tu usuario" />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" placeholder="Escribe tu contraseña" />
          </div>
          <button type="submit">Entrar</button>
        </form>

      </header>
    </div>
  )
}

export default App