import sageImg from "../images/smarta.png";
import "./sage-sginIn.css";
import arrow from "../images/Icon awesome-arrow-right.svg";
import historyIcon from "../images/vuesax-outline-clock.png";
import { Form } from "react-bootstrap";
import SimpleQuestion from "./simple-question";

function SageSignIn() {
  return (
    <>
      <div
        id="sage-welcome"
        className=" d-flex align-items-center justify-content-center">
        <div id="sage-img">
          <img src={sageImg} alt="" />
        </div>
        <div id="user-welcome">
          <p className="mb-1 fw-bold fs-5">
            Hello , <span id="user-name">WisePay</span>
          </p>
          <h6 id="sage-msg" className="fw-bold">
            How can I help you today?
          </h6>
        </div>
      </div>
      <div>
        <div id="search-icon">
          <img src={historyIcon} alt="" />
          <span>Explore History</span>
        </div>
        <div
          id="search-history"
          className="d-flex align-items-center justify-content-between">
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Search"
            className=" mt-1"
          />
          <div>
            <ul
              id="search-list"
              className=" d-flex align-items-center justify-content-center mb-0 list-unstyled px-2">
              <li id="list-item">Today</li>
              <li id="list-item">Today</li>
              <li id="list-item">Today</li>
              <li id="list-item">Today</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="history-questions" className="mt-3">
        <ul
          id="simple-list"
          className="list-unstyled d-flex align-items-center">
          <SimpleQuestion />
          <SimpleQuestion />
          <SimpleQuestion />
        </ul>
      </div>
      <div id="sage-questions">
        <h6 id="simple-title" className="align-self-start fw-bold">
          Simple Questions
        </h6>
        <ul id="simple-list" className="list-unstyled">
          <SimpleQuestion />
          <SimpleQuestion />
          <SimpleQuestion />
        </ul>
      </div>
    </>
  );
}

export default SageSignIn;
