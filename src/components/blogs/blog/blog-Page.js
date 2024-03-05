import React from "react";
import "./blog-page.css";
import NavbarApp from "../../home/navbar-app/navbar";
import Footer from "../../home/footer/footer";
import BlogPageContent from "./bolg-cage-content";
import BlogAddress from "./blog-address";
import { Container } from "react-bootstrap";
function BlogPage() {
  return (
    <>
      <NavbarApp id="blogs-nav" />
      <Container className="me-4 mt-4">
        <BlogAddress />
      </Container>
      <BlogPageContent />
      <Footer />
    </>
  );
}

export default BlogPage;
