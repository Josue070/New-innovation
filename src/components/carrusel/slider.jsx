import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataCursos } from "./data";
import "./stilo.css";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Link } from "react-router-dom";
import  Button  from '@mui/material/Button';

//carrusel de cursos top 
export default class Responsive extends Component {
  render() {
    //configuraciones de carrusel
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="fondo">
            <div className="contenedor">
                <h2 className="titulo">Tendecias</h2>
                <Slider {...settings}>
                    {dataCursos.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.imagen} alt={item.title} className="imagen_curso"/>
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.Precio}</h3>
                                <p>{item.nivel}</p>
                                
                                <Link to={"/Vista"} className="link">
                                  <Button variant="outlined">Mas info.</Button>
                                </Link>
                                
                                <div className="calificacion">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarHalfIcon/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
  }
}

