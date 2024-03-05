import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./userDropdown.css";
import { useDispatch } from "react-redux";
import SignOutPopp from "./signOut-popp";
import { resetState } from "../../rtk/slices/userState";
import { useNavigate } from "react-router";
function UserDropdown() {
  const [modalShow, setModalShow] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = () => {
    dispatch(resetState());
    navigate("/");
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Welcome WizePay</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="drop-item" href="#/action-1">
            WizePay
          </Dropdown.Item>
          <Dropdown.Item id="drop-item" href="#/action-2">
            WizePay@gmail.com
          </Dropdown.Item>
          <Dropdown.Item
            id="sign-out"
            href="#/action-3"
            onClick={() => setModalShow(true)}>
            Sign Out
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <SignOutPopp
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClose={onClose}
      />
    </>
  );
}

export default UserDropdown;
