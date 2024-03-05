import React from "react";
import { Card, CardBody, Col } from "react-bootstrap";
import "./blogItem.css";
import arrowRight from "../images/arrow-right-7.png";
import blogImg from "../images/img-temp.png";
import { Link } from "react-router-dom";

function BlogItem(props) {
  return (
    <Col className={`${props.res} mb-5`}>
      <Card className="blog-card bg-transparent border-0">
        <Link to={`/blog/${props.id}`}>
          <div className="text-center p-3 w-100">
            <img className="w-100" id="blog-img" src={blogImg} alt="" />
          </div>
        </Link>
        <CardBody id="card-body">
          <h5 className="card-title fw-bold">Title Goes Here</h5>
          <p className="card-text mb-0">
            <small className="blog-date fw-bold">August 15,2023</small>
          </p>
          <p className="card-text blog-text mt-1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt
          </p>
          <Link
            to={`/blog/${props.id}`}
            className=" text-decoration-none"
            id="explore">
            <a href="/" className="me-2 nav-link">
              Explore More
            </a>
            <img className="bi" aria-hidden="true" src={arrowRight} alt="" />
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
}

export default BlogItem;
