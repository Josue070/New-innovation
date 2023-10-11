import React from "react";
import images from "../../assets/images";
import "./LogStyle.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const Login = () => {
  return (
    <div className="ContenedorLog">
      <div className="ContenedorAll">
        <div className="ContenedorAcces">
          <img
            src={images[1].cam_logo_oscuro}
            alt={images[1].title}
            className="LogoScuro" 
          />
          <br/>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              id="custom-css-outlined-input"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Correo electrónico"
              id="custom-css-outlined-input"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              id="custom-css-outlined-input"
              fullWidth
              variant="outlined"
            />
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#000000", color: "white" }}
          >
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
          Iniciar sesión
          </Link>
          </Button>
          <div className="blok">
            <p className="Parrafo" style={{ textAlign: "center" }}>
              <Link to={"/OlvidarContrasena"}>¿Olvidaste tu contraseña?</Link>
            </p>
            <h2 className="Titulo">
              ¿Aún no tienes cuenta? <Link to={"/Registro"}>Regístrate</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


