import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "./sage-modal-content.css";
import sendImg from "../images/Icon ionic-md-send@2x.png";
import newTopicImg from "../images/Icon material-refresh.svg";
import SageSignOut from "./sage-signOut";
import SageSignIn from "./sage-signIn";
import { useDispatch, useSelector } from "react-redux";
import { sendQuestion, resetChat } from "../../rtk/slices/userQuestions";
import UserQuestion from "./userQuestion";

function SageModalContent(props) {
  const isSignIn = useSelector((state) => state.userState);
  const messages = useSelector((state) => state.questions);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSendClick = () => {
    if (inputValue !== "" && isSignIn === true) {
      dispatch(sendQuestion(inputValue));
      setInputValue(""); // Clear the input value
    }
  };

  return (
    <Modal {...props} size="xl" centered id="modal">
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="sage-modal-title">
          Credit Advisor Research Assistant
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="sage-modal-body">
        {isSignIn === true && messages.length > 0 ? (
          messages.map((msg) => <UserQuestion question={msg} />)
        ) : isSignIn === true ? (
          <SageSignIn />
        ) : (
          <SageSignOut />
        )}
      </Modal.Body>
      <Modal.Footer
        id="footer"
        className="d-flex align-items-center justify-content-between py-2 px-2"
        style={{ flexWrap: "nowrap" }}>
        <div id="question-form" className="d-flex align-items-center ">
          <Form.Control
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="question-input"
            type="text"
            placeholder="Type a Question"
            className="w-100 me-2"
          />
          <img
            src={sendImg}
            className="mx-2"
            id="send-img"
            alt=""
            onClick={handleSendClick}
          />
        </div>
        <div
          id="new-topic"
          className=" d-flex align-items-center justify-content-center"
          onClick={() => dispatch(resetChat())}>
          <img src={newTopicImg} alt="" />
          <span>New Topic</span>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default SageModalContent;
