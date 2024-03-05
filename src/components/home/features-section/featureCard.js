import React from "react";
import "./featuresCard.css";
import { Card, CardBody, Col } from "react-bootstrap";

function FeatureCard(props) {
  return (
    <Col className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4">
      <Card id="feature-card" className="p-3">
        <div className="card-image">
          <img src={props.img} alt="" />
        </div>
        <CardBody>
          <h5 className="card-title text-light fw-bold f-tahoma">
            {props.title}
          </h5>
          <p className="card-text text-light ">{props.des}</p>
        </CardBody>
      </Card>
    </Col>
  );
}

export default FeatureCard;
