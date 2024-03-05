import React from "react";
import "./powerPrivacy.css";
import { Container, Row } from "react-bootstrap";
import PrivacyBox from "./privacyBox";
import bankImg from "../images/Mask Group 638.png";
import factorImg from "../images/Group 159429.png";
import dataImg from "../images/Group 159428.png";

function PowerPrivacy() {
  return (
    <Container className=" d-flex align-items-center justify-content-center flex-column mb-5">
      <div className="privacy-header text-center mb-5">
        <h1 className="fw-bold">Security & Privacy</h1>
        <p>
          Bank-level security & privacy you can trust Your data is yours, and so
          is your money.
        </p>
      </div>
      <Row
        id="privacy-row"
        className="d-flex align-items-center justify-content-center">
        <PrivacyBox
          img={bankImg}
          title="Bank-Level Encryption"
          des="Powered by Plaid, we secure your information with AES-256 encryption, the same standard trusted by banks."
        />
        <PrivacyBox
          img={factorImg}
          title="Multi-Factor Authentication"
          des="Powered by Plaid, we secure your information with AES-256 encryption, the same standard trusted by banks."
        />
        <PrivacyBox
          img={dataImg}
          title="Data Minimization"
          des="Powered by Plaid, we secure your information with AES-256 encryption, the same standard trusted by banks."
        />
      </Row>
    </Container>
  );
}

export default PowerPrivacy;
