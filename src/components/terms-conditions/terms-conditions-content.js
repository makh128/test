import React from "react";
import "./terms-conditions-content.css";
import { Container } from "react-bootstrap";
function TermsConditionsContent() {
  return (
    <div className="terms-conditions-page">
      <Container className="mb-5">
        <h2 className="terms-conditions-heading fw-bold py-4">
          Terms & Conditions
        </h2>
        <div className="content">
          <p className="fs-17">
            Apple’s Privacy Policy describes how Apple collects, uses, and
            shares your personal data. In addition to this Privacy Policy, we
            provide data and privacy information embedded in our products and
            certain features that ask to use your personal data. This
            product-specific information is accompanied by our Data & Privacy
            Icon.
          </p>
          <h2 className="fw-bold fs-5 my-2">Indemnification</h2>
          <p className="fs-17">
            You agree to defend, indemnify and hold harmless Vavaweb and its
            licensee and licensors, and their employees, contractors, agents,
            officers and directors, from and against any and all claims,
            damages, obligations, losses, liabilities, costs or debt, and
            expenses (including but not limited to attorney’s fees), resulting
            from or arising out of a) your use and access of the Service, or b)
            a breach of these Terms.
          </p>
          <h2 className="fw-bold fs-5 my-2">Limitation Of Liability</h2>
          <p className="fs-17">
            You agree to defend, indemnify and hold harmless Vavaweb and its
            licensee and licensors, and their employees, contractors, agents,
            officers and directors, from and against any and all claims,
            damages, obligations, losses, liabilities, costs or debt, and
            expenses (including but not limited to attorney’s fees), resulting
            from or arising out of a) your use and access of the Service, or b)
            a breach of these Terms.
          </p>
          <h2 className="fw-bold fs-5 my-2">Disclaimer</h2>
          <p className="fs-17">
            Your use of the Service is at your sole risk. The Service is
            provided on an “AS IS” and “AS AVAILABLE” basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance. Vavaweb its subsidiaries, affiliates, and
            its licensors do not warrant that a) the Service will function
            uninterrupted, secure or available at any particular time or
            location; b) any errors or defects will be corrected; c) the Service
            is free of viruses or other harmful components; or d) the results of
            using the Service will meet your requirements.
          </p>
          <h2 className="fw-bold fs-5 my-2">Exclusions</h2>
          <p className="fs-17">
            Without limiting the generality of the foregoing and notwithstanding
            any other provision of these terms, under no circumstances will
            Vavaweb ever be liable to you or any other person for any indirect,
            incidental, consequential, special, punitive or exemplary loss or
            damage arising from, connected with, or relating to your use of the
            Service, these Terms, the subject matter of these Terms, the
            termination of these Terms or otherwise, including but not limited
            to personal injury, loss of data, business, markets, savings,
            income, profits, use, production, reputation or goodwill,
            anticipated or otherwise, or economic loss, under any theory of
            liability (whether in contract, tort, strict liability or any other
          </p>
        </div>
      </Container>
    </div>
  );
}

export default TermsConditionsContent;
