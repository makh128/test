import React from "react";
import "./privacy-policy.css";
import NavbarApp from "../home/navbar-app/navbar";
import Footer from "../home/footer/footer";
import PrivacyPolicyContent from "./privacy-policy-content";
function PrivacyPolicy() {
  return (
    <>
      <NavbarApp id="blogs-nav" />
      <PrivacyPolicyContent />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
