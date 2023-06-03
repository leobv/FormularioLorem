import React from "react";
import "./ContactoStyle.css";

function Contacto() {
    return (
      <div className="Contacto">
        <div className="contacto-titulo">
          <h3>© Todos los derechos reservados</h3>
          <h3>Desarrollado por: <a href="https://www.linkedin.com/in/lea-bevi/">Leandro Bevilacqua</a></h3>
        </div>
        <div className="contacto-iconos">
          <a href="https://www.twitter.com/"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter"/></a>
          <a href="https://www.facebook.com/"><img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook"/></a>
          <a href="https://www.linkedin.com/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/></a>
          <a href="https://www.youtube.com/"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube"/></a>
          <a href="https://www.instagram.com/"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/></a>
          <a href="https://www.snapchat.com/add/alejandrofdezarg"><img src="https://img.icons8.com/color/48/000000/snapchat.png" alt="snapchat"/></a>
        </div>
      </div>
    );
  }
  
  export default Contacto;
  