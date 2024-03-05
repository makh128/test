import React, { useState } from "react";
import "./power.css";
import { Col, Container, Row } from "react-bootstrap";
import powerImg1 from "../images/Encrypted.png";
import powerImg2 from "../images/Personalized.png";
import powerImg3 from "../images/Universal.png";

function Power() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const renderPowerImage = () => {
    switch (activeItem) {
      case 0:
        return powerImg1;
      case 1:
        return powerImg2;
      case 2:
        return powerImg3;
      default:
        return powerImg1;
    }
  };

  const renderPowerDescription = () => {
    switch (activeItem) {
      case 0:
        return "Our platform delivers personalized recommendations and insights based on your unique financial situation and goals.";
      case 1:
        return "Get personalized financial advice tailored to your individual needs and goals.";
      case 2:
        return "Support for all major credit cards, ensuring you can manage all your accounts in one place.";
      default:
        return "";
    }
  };

  return (
    <div className="power-section py-5">
      <Container>
        <h1 className="power-title text-end me-5 fw-bold">
          Level Up Your Spending Game
        </h1>
        <Row className="py-4 d-flex align-items-center justify-content-center flex-nowrap">
          <Col>
            <div className="position-relative">
              <img src={renderPowerImage()} alt="" className="power-img" />
              <p className="power-image-des">{renderPowerDescription()}</p>
            </div>
          </Col>
          <Col>
            <ul className="power-list ps-0">
              <li
                className={`effect ${activeItem === 0 ? "active" : ""}`}
                onClick={() => handleItemClick(0)}>
                Encrypted & Secure
              </li>
              <li
                className={`${activeItem === 1 ? "active" : ""}`}
                onClick={() => handleItemClick(1)}>
                Personalized
              </li>
              <li
                className={`${activeItem === 2 ? "active" : ""}`}
                onClick={() => handleItemClick(2)}>
                Universal credit card support
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Power;
