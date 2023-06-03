import React, { useState } from 'react';
import './FormularioStyle.css';

const Formulario = () => {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [campo3, setCampo3] = useState('');
  const [campo4, setCampo4] = useState('');
  const [campo5, setCampo5] = useState('');
  const [campo6, setCampo6] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de datos
    console.log(campo1, campo2, campo3, campo4, campo5, campo6);

  };

  return (
    <div className="Formulario">
        <h2>!Inscribite y reserva tu lugar ahora!</h2>
          <form onSubmit={handleSubmit}>
            <div className="Input">
              <h5>Nombre</h5>
                <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
              <h5>Apellido</h5>
                <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
              <h5>Correo electrónico del trabajo</h5>
                <input type="text" value={campo3} onChange={(e) => setCampo3(e.target.value)} />
              <h5>Pais</h5>
                <input type="text" value={campo4} onChange={(e) => setCampo4(e.target.value)} />
              <h5>Número de teléfono</h5>
                <input type="text" value={campo5} onChange={(e) => setCampo5(e.target.value)} />
              <h5>Puesto de trabajo</h5>
                <input type="text" value={campo6} onChange={(e) => setCampo6(e.target.value)} />
            </div>
          <button className="Button" type="submit">Inscribete</button>
        </form>
    </div>
  );
};
export default Formulario;
