import React from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../assets/homme.jpg";
import Logo2 from "../../assets/enfant.jpg";
import Logo3 from "../../assets/femme.jpg";
export default function Slider() {
  return (
    <div className="carsoulhome">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={Logo} alt="First slide" />
          <Carousel.Caption>
            <h1>
              <div className="but">
                <a
                  href="/"
                  className="bttn effect04"
                  data-sm-link-text="Descover"
                  target="_blank"
                >
                  <span>HOMME</span>
                </a>
              </div>
            </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Logo3} alt="Third slide" />
          <Carousel.Caption>
            <h1>
              <div className="but">
                <a
                  href="/"
                  className="bttn effect04"
                  data-sm-link-text="Descover"
                  target="_blank"
                >
                  <span>FEMME</span>
                </a>
              </div>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Logo2} alt="Third slide" />
          <Carousel.Caption>
            <h1>
              <div className="but">
                <a
                  href="/"
                  className="bttn effect04"
                  data-sm-link-text="Descover"
                  target="_blank"
                >
                  <span>ENFANT</span>
                </a>
              </div>
            </h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
