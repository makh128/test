import React from "react";
import { Col } from "react-bootstrap";
import "./privacyBox.css";
function PrivacyBox(props) {
  return (
    <Col className="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 mb-4 text-center d-flex align-items-center flex-column">
      <h3 className="fw-bold" id="privacy-title">
        {props.title}
      </h3>
      <div class="privacy-box border p-2 rounded-3 position-relative d-flex align-items-center justify-content-center">
        <img
          src={props.img}
          alt=""
          className=" position-absolute privacy-img"
        />
        <p class="pt-5 fs-5 pb-3 privacy-des">
          {props.des}
          <br />
        </p>
      </div>
    </Col>
  );
}

export default PrivacyBox;
