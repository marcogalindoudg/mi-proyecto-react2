import { useState } from 'react' 
import './App.css'

function App() {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault() 
    console.log('--- Datos del Formulario (Sprint 3) ---')
    console.log('Usuario capturado:', username)
    console.log('Contraseña capturada:', password)
    alert('Datos enviados a la consola: ' + username)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto: Actividad 3</h1>
        <p>Componente de Formulario con Estado (Avance del Sprint 3)</p>

        {}
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Iniciar Sesión</h3>
          <div className="form-group">
            <label>Usuario:</label>
            {}
            <input 
              type="text" 
              placeholder="Escribe tu usuario"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            {}
            <input 
              type="password" 
              placeholder="Escribe tu contraseña"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Entrar</button>
        </form>

      </header>
    </div>
  )
}

export default App