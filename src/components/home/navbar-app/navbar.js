import React, { useState } from "react";
import "./navbar.css";
import logo from "../images/logo ca.svg";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactUsModal from "../contactUs-modal/contact-us-modal";
import { useSelector } from "react-redux";
import UserDropdown from "./userDropdown";

function NavbarApp(props) {
  const isSignIn = useSelector((state) => state.userState);

  const [modalShow, setModalShow] = useState("");

  return (
    <>
      <Navbar expand="md" id={props.id}>
        <div className="container-fluid p-0">
          <div className="d-flex align-items-center justify-content-center ps-4">
            <Link to="/" className="ms-4 mx-2">
              <img src={logo} className="navbar-brand" alt="wisepay" />
            </Link>
            {isSignIn === false ? (
              <Link
                to="/signUp"
                id="nav-btn"
                className="nav-link px-3 py-2 fw-bold">
                Sign In
              </Link>
            ) : (
              <UserDropdown />
            )}
          </div>
          <Navbar.Toggle
            id="nav-icon"
            aria-controls="basic-navbar-nav"
            className="me-3"
          />
          <Navbar.Collapse className="m-0 p-0" id="basic-navbar-nav">
            <Nav className="ms-auto" id="nav-menu">
              <Nav.Link
                className="mx-2 nav-link"
                id="nav-item"
                onClick={() => window.location.replace("/#features")}>
                Features
              </Nav.Link>
              <Link to="/blogs" className="mx-2 nav-link" id="nav-item">
                Blogs
              </Link>
              <Nav.Link
                href="#link"
                className="mx-2"
                id="nav-item"
                onClick={() => setModalShow(true)}>
                Contact Us
              </Nav.Link>
              <Nav.Link
                id="nav-btn"
                className=" px-3 fw-bold"
                onClick={() => {
                  window.location.replace("/#install-section");
                }}>
                DownLoad
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <ContactUsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default NavbarApp;
