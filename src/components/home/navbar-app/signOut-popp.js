import React from "react";
import { Modal } from "react-bootstrap";
import signOutImg from "../images/Mask Group 604.png";
function SignOutPopup(props) {
  return (
    <Modal {...props} size="md" centered id="modal">
      <Modal.Header closeButton onHide={props.onClose}>
        <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
          Sign Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        id="modal-body"
        className=" d-flex align-items-center justify-content-center flex-column text-center">
        <img src={signOutImg} alt="" />
        <p>
          Thank you for using our service! We hope your experience was enjoyable
          and productive. Remember, we're always here to assist you. Have a
          wonderful day!
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default SignOutPopup;
