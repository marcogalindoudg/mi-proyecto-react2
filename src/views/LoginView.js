import React from 'react';

function LoginView() {
  return (
    <div style={{ padding: '20px' }}>
      <h3>Iniciar Sesión</h3>
      <input type="email" placeholder="Correo" />
      <br />
      <input type="password" placeholder="Contraseña" />
      <br />
      {/* Dejamos este botón rojo a propósito para "corregirlo" después */}
      <button style={{ background: 'red', color: 'white', marginTop: '10px' }}>
        Entrar
      </button>
    </div>
  );
}
export default LoginView;