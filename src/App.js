import React from 'react';
import Navbar from './components/Navbar';
import LoginView from './views/LoginView';
import './App.css'; // Mantenemos los estilos base

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginView />
    </div>
  );
}
export default App;