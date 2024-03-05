import React, { useState } from "react";
import "./signUp.css";
import regImg from "../home/images/Sign In.png";
import forgetImg from "../home/images/Change_Password.png";
import signInImg from "../home/images/Sign In2.png";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showMessage } from "../rtk/slices/userState";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [action, setAction] = useState("Sign In");
  const dispatch = useDispatch();
  // const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const logPeople = [
    {
      name: "WisePay",
      userName: "wisepay@gmail.com",
      password: "wisepay",
    },
  ];

  const handleSendClick = () => {
    if (email === logPeople[0].userName && password === logPeople[0].password) {
      dispatch(showMessage(true));
      setEmail("");
      setPassword("");
      navigate("/");
    } else if (
      email !== logPeople[0].userName &&
      password === logPeople[0].password
    ) {
      document
        .getElementById("invalid-email-feedback")
        .classList.remove("d-none");
    } else if (
      email === logPeople[0].userName &&
      password !== logPeople[0].password
    ) {
      document
        .getElementById("invalid-password-feedback")
        .classList.remove("d-none");
    } else {
      document
        .getElementById("invalid-email-feedback")
        .classList.remove("d-none");
      document
        .getElementById("invalid-password-feedback")
        .classList.remove("d-none");
    }
  };

  return (
    <div className="signIn-page d-flex align-items-center justify-content-center">
      <div id="signUp-img">
        <img
          src={
            action === "Sign In"
              ? signInImg
              : action === "Register"
              ? regImg
              : forgetImg
          }
          alt=""
        />
      </div>
      <div className=" position-relative" id="signIn-inputs">
        <h1 className="sign-heading fw-bold mb-4 ms-2 align-self-start">
          {action}
        </h1>
        <Form className="position-relative" id="form">
          {action === "Sign In" || action === "Forget Password ?" ? null : (
            <Row className="mb-3">
              <Col>
                <Form.Label id="form-label">First Name</Form.Label>
                <Form.Control id="form-control" type="text" required />
              </Col>
              <Col>
                <Form.Label id="form-label">Last Name</Form.Label>
                <Form.Control id="form-control" type="text" required />
              </Col>
            </Row>
          )}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label id="form-label">Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="form-control"
              type="email"
              required
            />
            {action === "Sign In" && (
              <Form.Text
                className="ms-2 mt-0 mb-2 text-danger d-none"
                id="invalid-email-feedback">
                This mail does not exist in our record
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formGroupPassword">
            <Form.Label id="form-label" className="mb-2">
              {action === "Forget Password ?" ? "Code" : "Password"}
            </Form.Label>
            {action === "Register" && (
              <Form.Text className="text-muted ms-2 mt-0 mb-2">
                Your password MUST have at least one UPPERCASE character
              </Form.Text>
            )}
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="form-control"
              type="password"
              required
            />
            {action === "Forget Password ?" && (
              <Form.Text className="text-muted ms-2 mx-2">
                Please enter the code sent to your mail
              </Form.Text>
            )}
            {action === "Sign In" && (
              <Form.Text
                className="ms-2 mt-0 mb-2 text-danger d-none"
                id="invalid-password-feedback">
                Oops, that wasn't the right password. Try again.
              </Form.Text>
            )}
            {action === "Sign In" && (
              <span
                className="text-end mt-2 me-3"
                id="forget-btn"
                onClick={() => {
                  setAction("Forget Password ?");
                }}>
                Forget Password ?
              </span>
            )}
          </Form.Group>
        </Form>
        <Button
          id="form-submit"
          className="w-100 my-2"
          type="btn"
          onClick={handleSendClick}>
          {action === "Forget Password ?" ? "Reset Password" : action}
        </Button>
        {action === "Sign In" && (
          <span
            className="ms-4 text-center"
            id="forget-btn"
            onClick={() => {
              setAction("Register");
            }}>
            I don't have an account
          </span>
        )}
      </div>
    </div>
  );
}

export default SignUp;
