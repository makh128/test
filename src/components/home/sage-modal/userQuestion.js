import React from "react";
import "./userQuestion.css";
import userImg from "../images/user.png";
function UserQuestion(props) {
  return (
    <div class="user-message position-relative my-4 ms-2">
      <div class="user-image d-flex align-items-center">
        <img src={userImg} id="user-img" alt="" />
        <span class="fw-bold mx-2" id="userName">
          You
        </span>
      </div>
      <div class="user-question ">
        <p class="ms-5">{props.question}</p>
      </div>
    </div>
  );
}

export default UserQuestion;
