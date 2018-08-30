import React from "react";

import SlideOne from "./assets/slide1.jpg";
import SlideTwo from "./assets/slide2.jpg";
import SlideThree from "./assets/slide3.jpg";

import "./_carousel.scss";

const Carousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={SlideOne} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={SlideTwo} alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={SlideThree} alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"/>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"/>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;