import React from "react";
import sageImg from "../images/smarta.png";
import locationImg from "../images/location.png";
import coinImg from "../images/dollar (1).png";
import arrow from "../images/arrow-right-10.png";
import { Form } from "react-bootstrap";
import "./sage-signOut.css";
function SageSignOut() {
  return (
    <>
      <div
        id="sage-welcome"
        className=" d-flex align-items-center justify-content-center flex-column">
        <div id="sage-img">
          <img src={sageImg} alt="" />
        </div>
        <h6 id="sage-msg" className="fw-bold">
          How can I help you today?
        </h6>
      </div>
      <div id="sage-inputs">
        <p>
          To ensure the proper functioning of the assistant, please fill in the
          required fields.
        </p>
        <div
          id="inputs"
          className=" d-flex align-items-center justify-content-center">
          <div
            id="income"
            className=" d-flex align-items-center justify-content-center w-50 px-3">
            <div
              id="income-icon"
              className="mx-2  d-flex align-items-center justify-content-center">
              <img src={coinImg} id="coin-img" alt=" " />
              <span className="ms-1">Income</span>
            </div>
            <Form.Control
              id="form-control"
              type="number"
              placeholder="Enter Income Here"
            />
          </div>
          <div
            id="location"
            className="d-flex align-items-center justify-content-center w-50 px-3">
            <div
              id="location-icon"
              className="mx-2 d-flex align-items-center justify-content-center">
              <img src={locationImg} alt=" " />
              <span className="ms-1">Location</span>
            </div>
            <Form.Control
              id="form-control"
              type="text"
              placeholder="Enter Location Here"
            />
          </div>
        </div>
      </div>
      <div
        id="sage-simple-questions"
        className=" align-items-center flex-column  ">
        <h6 id="simple-title" className="align-self-start fw-bold">
          Simple Questions
        </h6>
        <ul
          id="simple-list"
          className="list-unstyled d-flex align-items-center justify-content-between">
          <li id="question">
            <span className="pe-3">How much should I sepnd for grocery?</span>
            <img src={arrow} alt="" />
          </li>
          <li id="question">
            <span className="pe-3">How much should I sepnd for grocery?</span>
            <img src={arrow} alt="" />
          </li>
          <li id="question">
            <span className="pe-3">How much should I sepnd for grocery?</span>
            <img src={arrow} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default SageSignOut;
