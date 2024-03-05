import React from "react";
import "./blogs-content.css";
import { Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import BlogItem from "../home/blogs-section/blogItem";
function BlogsContent() {
  return (
    <div id="blogs-page">
      <Container>
        <h1 className="fw-bold pt-4">Explore All Posts</h1>
        <div
          id="heading-search"
          className=" d-flex align-items-center justify-content-between my-4 px-4">
          <p id="blogs-count">
            Showing
            <span className="fw-bold px-1" id="count">
              36
            </span>
            Posts
          </p>
          <div
            id="search-inputs"
            className=" d-flex align-items-center justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className="w-75"
              id="form-control"
            />
            <div
              id="filter"
              className="w-50 ms-4 d-flex align-items-center justify-content-center">
              <span>Filter : </span>
              <Form.Select
                aria-label="select"
                id="select"
                className="ms-2 w-50">
                <option>All</option>
                <option value="1">One</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <Row className="blogs-container py-4">
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="1" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="2" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="3" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="4" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="5" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="6" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="7" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="8" />
          <BlogItem res="col-sm-12 col-md-6 col-lg-4 col-xl-4" id="9" />
        </Row>
      </Container>
    </div>
  );
}

export default BlogsContent;
