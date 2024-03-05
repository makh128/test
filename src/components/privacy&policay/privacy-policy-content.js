import React from "react";
import { Accordion, Container } from "react-bootstrap";
import AccordionItem from "./accordion-item";
import arrowRight from "../home/images/arrow-right-7.png";
function PrivacyPolicyContent() {
  return (
    <div className="privacy-policy-section">
      <Container>
        <div className="privacy-policy-heading d-flex align-items-center justify-content-between py-4">
          <h2 className="fw-bold">Wizepay Privacy Policy</h2>
          <span>Updated December 22, 2022</span>
        </div>
        <p className="privacy-policy-des">
          Wizepay Privacy Policy describes how Apple collects, uses, and shares
          your personal data. In addition to this Privacy Policy, we provide
          data and privacy information embedded in our products and certain
          features that ask to use your personal data. This product-specific
          information is accompanied by our Data & Privacy Icon.
        </p>
        <Accordion>
          <AccordionItem eventKey="0" />
          <AccordionItem eventKey="1" />
          <AccordionItem eventKey="2" />
          <AccordionItem eventKey="3" />
          <AccordionItem eventKey="4" />
          <AccordionItem eventKey="5" />
          <AccordionItem eventKey="6" />
          <AccordionItem eventKey="7" />
        </Accordion>
        <div className="encrypted my-4">
          <h2>Encrypted & Secure</h2>
          <p class="fs-14">
            There may be situations where we cannot grant your request — for
            example, if you ask us to delete your transaction data and Apple is
            legally obligated to keep a record of that transaction to comply
            with law. We may also decline to grant a request where doing so
            would undermine our legitimate use of data for anti-fraud and
            security purposes, such as when you request deletion of an account
            that is being investigated for security concerns. Other reasons your
            privacy request may be denied are if it jeopardizes the privacy of
            others, is frivolous or vexatious, or would be extremely
            impractical. If you live in California and you cannot access Apple’s
            Data and Privacy page, you or your authorized agent can make a
            request at apple.com/legal/privacy/contact or by calling
            1-800-275-2273.
          </p>
          <div id="explore">
            <a href="/" className="me-2 nav-link">
              Explore More
            </a>
            <img className="bi" aria-hidden="true" src={arrowRight} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PrivacyPolicyContent;
