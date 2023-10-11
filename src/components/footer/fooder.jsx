import React from "react";
import images from "../../assets/images";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./fooder.css";

//funcion del fooder para toda la plataforma
function fooder() {
    return (
      <div>
          <footer className="pie-pagina">
          <div className="grupo1">
            <div className="box">
              <div className="imgc">
                <img src={images[1].cam_logo_oscuro} alt=""/> 
              </div>
            </div>
            <div className="box">
              <h2>SOBRE NOSOTROS</h2>
              <p> 
                  Somos un equipo de desarrollo, interesados en mostrar una nueva
                  propuesta para captar la atención de los nuevos emprendimientos, con el objetivo de potencializar a los emprendedores, pequeñas pymes y cooperativas nicaraguenses.
          
              </p>
              
            </div>
            <div className="box">
              <h2> SIGUENOS </h2>
              <div class="red-social">
                <a href="https://www.facebook.com/profile.php?id=100086169755768" > 
                  <FacebookIcon/>
                </a>
                <a href="https://instagram.com/farker_nic18?igshid=YmMyMTA2M2Y="> 
                  <InstagramIcon/> 
                </a>
              </div>
            </div>
          </div>
          <div className="grupo2">
            <small>&copy; 2023 <b>New Innovations</b> -Todos los derechos reservados.</small>
          </div>
        </footer>
      </div>
    );
  }
  export default fooder;