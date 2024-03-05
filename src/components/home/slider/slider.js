import React from "react";
import "./slider.css";
import { Carousel } from "react-bootstrap";
import slider1 from "../images/hero0.png";
import slider2 from "../images/hero2.png";
import slider3 from "../images/hero3.png";
import preIcon from "../images/back.png";
import nextIcon from "../images/forward.png";
import phone1 from "../images/Group 159067.png";
import phone2 from "../images/Group 159196.png";
import QrCode from "./qr-code";
import SageModal from "./sageModal";

function Slider() {
  // Custom CarouselImage component to render images
  function CarouselImage({ text, src }) {
    return <img className="d-block w-100 h-100" src={src} alt={text} />;
  }
  // Custom previous and next icons
  const CustomPrevIcon = () => <img src={preIcon} alt="prev" />;

  const CustomNextIcon = () => <img src={nextIcon} alt="prev" />;

  return (
    <div className="carousel-container position-relative">
      <SageModal />
      <QrCode />
      <Carousel
        id="carousel"
        prevIcon={window.innerWidth >= 600 ? <CustomPrevIcon /> : null}
        nextIcon={window.innerWidth >= 600 ? <CustomNextIcon /> : null}>
        <Carousel.Item interval={5000}>
          <CarouselImage text="First slide" src={slider1} />
          <Carousel.Caption className="caption" id="first-caption">
            <div className="mb-5 text-start">
              <h1 className="caption-head fw-bold">
                SPEND SMARTER, SAVE MORE, LIVE LIMITLESSLY
              </h1>
              <p>
                Make your money work for you. AI-powered savings, effortless
                control.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="Second slide" src={slider2} />
          <Carousel.Caption className="caption w-75 d-flex align-items-center justify-content-between">
            <div className="text-caption mb-5 text-start">
              <h1 className="caption-head fw-bold">
                SPEND SMARTER, SAVE MORE, LIVE LIMITLESSLY
              </h1>
              <p>
                Make your money work for you. AI-powered savings, effortless
                control.
              </p>
            </div>
            <img src={phone1} alt="WiseApp" id="app-img" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <CarouselImage text="Third slide" src={slider3} />
          <Carousel.Caption className="caption w-75 d-flex align-items-center justify-content-between">
            <div className="text-caption mb-5 text-start">
              <h1 className="caption-head fw-bold">
                SPEND SMARTER, SAVE MORE, LIVE LIMITLESSLY
              </h1>
              <p>
                Make your money work for you. AI-powered savings, effortless
                control.
              </p>
            </div>
            <img src={phone2} alt="WiseApp" id="app-img" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
