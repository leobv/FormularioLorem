import React from 'react';
import './InformacionStyle.css';
import presidente from '../img/presidente.svg';
import customer from '../img/customer.svg';
import consultant from '../img/consultant.svg';
import gerente from '../img/gerente.svg';
import asobanca from '../img/asobanca.png';
import ipbf from '../img/Ipbf.jpg';
import hightelecom from '../img/hightelecom.png';
import ebanx from '../img/ebanx.png';
import bitman from '../img/Bitmap.png';
import zendesk from '../img/Zendesk.png';


function Informacion() {
  return (
      <div className="Informacion">
            <div className="Logo">
              <img src={bitman} alt="Bitman" />
              <img src={asobanca} alt="Asobanca" />
              <img src={ipbf} alt="Ipbf" />
              <img src={hightelecom} alt="Hightelecom" />
              <img src={ebanx} alt="Ebanx" />
              <img src={zendesk} alt="Zendesk" />
            </div>
            <p>
              Te invitan este webinar, donde trataremos la temática de cómo humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
              <br />
              <br />
              Además podremos conocer las estrategias que aplicó LOREM para generar una experiencia memorable para sus clientes, mientras se convertía en el gran Unicornio de LATAM.
              <br />
              <br />
              Escucha de primera mano la voz de nuestros especialistas:
              <br/>
              <br/>
              <img className='especialistas' src={presidente} alt="Presidente" />
              <br />
              <img className='especialistas' src={customer} alt="Customer" />
              <br />
              <img className='especialistas' src={consultant} alt="Consultant" />
              <br />
              <img className='especialistas' src={gerente} alt="Gerente" />
              <br />
              <br />
              Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
              <br />
              <br />
              ¡Te esperamos!
            </p>
            <div className="Logo">
              <img src={bitman} alt="Bitman" />
              <img src={asobanca} alt="Asobanca" />
              <img src={ipbf} alt="Ipbf" />
              <img src={hightelecom} alt="Hightelecom" />
              <img src={ebanx} alt="Ebanx" />
              <img src={zendesk} alt="Zendesk" />
            </div>
      </div>
    );
  }
  
export default Informacion;
 