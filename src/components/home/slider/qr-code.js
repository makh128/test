import React from "react";
import qrImage from "../images/qrcode.png";
import "./qr-code.css";

function QrCode() {
  return (
    <div className=" d-flex align-items-center justify-content-center flex-column position-absolute z-2 bottom-0 m-5">
      <img src={qrImage} alt="app-qr" id="qr-img" class="rounded-4 mb-4" />
      <span id="qr-download" className="text-light position-relative fw-bold">
        Scan To DownLoad
      </span>
    </div>
  );
}

export default QrCode;
