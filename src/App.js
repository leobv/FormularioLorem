import React from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Informacion from './components/Informacion';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <Header />
      <Formulario />
      <Informacion />
      <Contacto />
    </div>
  );
}

export default App;
