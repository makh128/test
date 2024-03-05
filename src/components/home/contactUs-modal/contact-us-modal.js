import React from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import contactImg from "../images/contactus.png";
import "./contactUs-modal.css";

function ContactUsModal(props) {
  return (
    <Modal {...props} size="xl" centered id="modal">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body id="modal-body">
        <Container>
          <Row id="content">
            <Col
              className="d-flex align-items-center justify-content-center flex-column"
              id="contact-heading">
              <div>
                <h1 className="main-title">Contact Us</h1>
                <p className="fs-14">
                  Do you have any questions? Please do not hesitate to contact
                  us directly. Our team will come back to you within a matter of
                  hours to help you.
                </p>
              </div>
              <div>
                <img src={contactImg} alt="" className="contact-img" />
              </div>
            </Col>
            <Col className="px-4" id="contact-form">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label id="form-label">Name</Form.Label>
                  <Form.Control
                    id="form-control"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label id="form-label">Email</Form.Label>
                  <Form.Control
                    id="form-control"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label id="form-label">Subject</Form.Label>
                  <Form.Control
                    id="form-control"
                    type="text"
                    placeholder="Enter subject"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label id="form-label">Message</Form.Label>
                  <Form.Control
                    id="form-control"
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                <Button
                  id="form-submit"
                  variant="primary"
                  type="submit"
                  className="fw-bold w-100 sub-btn">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ContactUsModal;
