import React from 'react';
import './InformacionStyle.css';
import logos from '../img/logos.jpg'

function Informacion() {
  return (
      <div className="Informacion">
            <img src={logos} alt="Logos" />
            <p>
              Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
              <br />
              Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
              <br />
              Escucha de primera mano la voz de nuestros especialistas:
              <br/>
              Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
              <br />
              ¡Te esperamos!
            </p>
            <img src={logos} alt="Logos" />
      </div>
    );
  }
  
export default Informacion;
  