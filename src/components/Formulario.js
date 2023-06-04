import React, { useState } from 'react';
import './FormularioStyle.css';

const Formulario = () => {
  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [campo3, setCampo3] = useState('');
  const [campo4, setCampo4] = useState('');
  const [campo5, setCampo5] = useState('');
  const [campo6, setCampo6] = useState('');

  const paises = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela",
    "Europa",
    "Estados Unidos",
    "México",
    "Canadá",
    // Agrega más países aquí...
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Comprobar si todos los campos están completos
    if (campo1 && campo2 && campo3 && campo4 && campo5 && campo6) {
      // Crear un objeto con los datos del formulario
      const formData = {
        campo1,
        campo2,
        campo3,
        campo4,
        campo5,
        campo6,
      };
  
      // Convertir el objeto a una cadena JSON
      const formDataJson = JSON.stringify(formData);
  
      // Guardar los datos en el localStorage
      localStorage.setItem('formData', formDataJson);
  
      // Limpiar los campos del formulario
      setCampo1('');
      setCampo2('');
      setCampo3('');
      setCampo4('');
      setCampo5('');
      setCampo6('');
  
      // Mostrar un mensaje de éxito o redireccionar a otra página
      console.log('¡Datos guardados con éxito!');
    } else {
      // Mostrar un mensaje de error o resaltar los campos incompletos
      console.log('Por favor, completa todos los campos.');
    }
  };

  const storedFormData = localStorage.getItem('formData');
if (storedFormData) {
  const formData = JSON.parse(storedFormData);
  console.log(formData);
}

  

  return (
    <div className="Formulario">
      <form className="Input" onSubmit={handleSubmit}>
        <h2>¡Inscríbete y reserva tu lugar ahora!</h2>
        <div className={`campo ${campo1 ? '' : 'incompleto'}`}>
          <h5>Nombre</h5>
          <input type="text" value={campo1} onChange={(e) => setCampo1(e.target.value)} />
        </div>
        <div className={`campo ${campo2 ? '' : 'incompleto'}`}>
          <h5>Apellido</h5>
          <input type="text" value={campo2} onChange={(e) => setCampo2(e.target.value)} />
        </div>
        <div className={`campo ${campo3 ? '' : 'incompleto'}`}>
          <h5>Correo electrónico del trabajo</h5>
          <input
            type="email"
            value={campo3}
            onChange={(e) => setCampo3(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            required
          />
        </div>
        <div className={`pais ${campo4 ? '' : 'incompleto'}`}>
          <h5>País</h5>
          <select value={campo4} onChange={(e) => setCampo4(e.target.value)}>
            <option value="">Seleccionar país</option>
            {paises.map((pais) => (
              <option key={pais} value={pais}>
                {pais}
              </option>
            ))}
          </select>
        </div>
        <div className={`campo ${campo5 ? '' : 'incompleto'}`}>
          <h5>Número de teléfono</h5>
          <input
            type="tel"
            value={campo5}
            onChange={(e) => setCampo5(e.target.value)}
            pattern="[0-9]+"
            required
          />
        </div>
        <div className={`campo ${campo6 ? '' : 'incompleto'}`}>
          <h5>Puesto de trabajo</h5>
          <input type="text" value={campo6} onChange={(e) => setCampo6(e.target.value)} />
        </div>
        <button className="Button" type="submit">¡Inscríbete!</button>
      </form>
    </div>
  );
};

export default Formulario;
