import React from "react";
import "./sageModal.css";
import sageImg from "../images/smarta.png";
import SageModalContent from "../sage-modal/sage-modal-content";

function SageModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setModalShow(true)}
        className=" d-flex align-items-center justify-content-center flex-column position-fixed z-2 bottom-0 end-0"
        id="sage-modal">
        <img src={sageImg} alt="sage-img" id="sage-img" class="" />
        <div className="d-flex flex-column align-items-center">
          <span>Ask</span>
          <span className="fw-bold">Sage</span>
        </div>
      </div>

      <SageModalContent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default SageModal;
