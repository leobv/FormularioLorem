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
      <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
      <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Formulario;
