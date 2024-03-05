import React from "react";
import { useDispatch } from "react-redux";
import { sendQuestion } from "../../rtk/slices/userQuestions";
import arrow from "../images/Icon awesome-arrow-right.svg";

function SimpleQuestion() {
  const dispatch = useDispatch();

  return (
    <li id="question">
      <span
        className="pe-3"
        onClick={(e) => {
          dispatch(sendQuestion(e.currentTarget.textContent));
        }}>
        How much should I sepnd for grocery?
      </span>
      <img src={arrow} alt="" />
    </li>
  );
}

export default SimpleQuestion;
