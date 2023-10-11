import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./nav1.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";

function Navbar1() {
  const navRef = useRef();
  const [categoriasHover, setCategoriasHover] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleCategoriasHover = () => {
    setCategoriasHover(!categoriasHover);
  };

  return (
    <div className="divpa1">
      <header>
        <img src={images[1].cam_logo_oscuro} alt="logo" className="logo" />
        <nav ref={navRef}>
          <Link to="/#">Inicio</Link>
          <Link to="/#">Análisis y proyección de pedidos </Link>
          <Link to="/sobreNosotros">Sobre nosotros</Link>
          <div
            className="categorias"
            onMouseEnter={toggleCategoriasHover}
            onMouseLeave={toggleCategoriasHover}
          >
            <Link to="/#">Categoría</Link>
            {categoriasHover && (
              <div className="sub-menu vertical"> {/* Agrega la clase 'vertical' aquí */}
                <Link to="/gastronomia">Gastronomía</Link>
                <Link to="/moda-estetica">Moda y estética</Link>
                <Link to="/cosmeticos">Cosméticos</Link>
              </div>
            )}
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar1;
