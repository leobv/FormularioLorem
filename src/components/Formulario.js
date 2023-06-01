import React, { useState } from 'react';

const Formulario = () => {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de datos
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5>Nombre</h5>
      <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
      <h5>Apellido</h5>
      <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
      <h5>Correo electronico del trabajo</h5>
      <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
      <h5>Pais</h5>
      <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
      <h5>Numero de telefono</h5>
      <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
      <h5>Puesto de trabajo</h5>
      <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
      <button type="submit">Inscribite</button>
    </form>
  );
};
export default Formulario;
