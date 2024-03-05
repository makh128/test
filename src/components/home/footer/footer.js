import React from "react";
import "./footer.css";
import facBookImg from "../images/facebook.png";
import instagramImg from "../images/instgram.png";
import xImg from "../images/x.png";
import youtubeImg from "../images/youtube.png";
import linkedinImg from "../images/linked.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer d-flex align-items-center justify-content-around py-4 px-4">
      <div className="copyRights text-light">
        <span className="copyRights-text">
          Wiszpay Inc. Is A Property Of Skillizer Services&copy; All Rightd.
          Reversed Reserved.Skillizer Services
        </span>
      </div>
      <div className="privacy-terms d-flex align-items-center justify-content-center mt-2">
        <div className="privacy me-4">
          <Link to="/privacy&policy" className="nav-link fw-bold text-light">
            Privacy Policy
          </Link>
        </div>
        <div className="terms">
          <Link to="/terms&conditions" className="nav-link  fw-bold text-light">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="social-media d-flex align-items-center fw-bold justify-content-center text-light">
        <span className="text"> Follow Us On Social Media</span>
        <div className="social-icons">
          <a href="/">
            <img src={facBookImg} alt="facebook" />
          </a>
          <a href="/" alt="">
            <img src={xImg} alt="x" />
          </a>
          <a href="/">
            <img src={linkedinImg} alt="linkedIn" />
          </a>
          <a href="/">
            <img src={youtubeImg} alt="youtube" />
          </a>
          <a href="/">
            <img src={instagramImg} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
