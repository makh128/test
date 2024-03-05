import React from "react";
import NavbarApp from "../home/navbar-app/navbar";
import Footer from "../home/footer/footer";
import TermsConditionsContent from "./terms-conditions-content";

function TermsConditions() {
  return (
    <>
      <NavbarApp id="blogs-nav" />
      <TermsConditionsContent />
      <Footer />
    </>
  );
}

export default TermsConditions;
