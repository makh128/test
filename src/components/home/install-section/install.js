import React from "react";
import "./install.css";
import { Container } from "react-bootstrap";
import appImg from "../images/app.png";
import googleLink from "../images/google.png";
import appStorLink from "../images/apple.png";
function Install() {
  return (
    <div className="install-section " id="install-section">
      <Container
        id="container"
        className=" d-flex align-items-center justify-content-center ">
        <div>
          <img src={appImg} alt="" id="install-app-img" />
        </div>
        <div className="install-text d-flex  flex-column">
          <h1 class="fw-bold">WIZEPAY</h1>
          <h6 class="fw-bold">HELPS YOU SAVE MONEY</h6>
          <p>Take Control of Your Finances Today Easy 2-minute Signup.</p>
          <div class="links">
            <a href="/" class="me-2">
              <img src={googleLink} alt="" />
            </a>
            <a href="/" class="m-2">
              <img src={appStorLink} alt="" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Install;
