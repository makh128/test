import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import BlogsSection from "../../home/blogs-section/blogsSection";
import blogImg from "../../home/images/img-temp.png";

function BlogPageContent() {
  const { id } = useParams();
  return (
    <div className="blog-page pt-5">
      <Container>
        <div id="blog-heading" className="ms-5">
          <h1 id="blog-title" className="fw-bold">
            Title Goes Here
          </h1>
          <p id="blog-date" className="fw-bold pb-3">
            August 15,2023
          </p>
        </div>
        <img src={blogImg} alt="" id="blog-img" className="w-100 px-4 mb-5" />
        <p className="card-text blog-text mb-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </p>
      </Container>
      <BlogsSection className="blog-blogs-section" />
    </div>
  );
}

export default BlogPageContent;
