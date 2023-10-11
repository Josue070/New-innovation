import React, { Component } from "react";
import Slider from "react-slick";
import images from "../../../assets/images";
import "./CarrusellLogo.css"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <img src={images[1].cam_logo_oscuro} alt="" className="ImagenCar"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}