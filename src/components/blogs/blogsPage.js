import React from "react";
import "./blogsPage.css";
import NavbarApp from "../home/navbar-app/navbar";
import Footer from "../home/footer/footer";
import BlogsContent from "./blogs-content";
function BlogsPage() {
  return (
    <>
      <NavbarApp id="blogs-nav" />
      <BlogsContent />
      <Footer />
    </>
  );
}

export default BlogsPage;
