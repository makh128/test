import React from "react";
import { Link } from "react-router-dom";
import "./blog-address.css";
import arrow from "../../home/images/arrow-down.png";
function BlogAddress() {
  return (
    <div id="blog-address" className=" d-flex align-items-center">
      <Link to={"/blogs"}>Blogs</Link>
      <img src={arrow} alt="" id="arrow" />
      <span>Title Goes Here</span>
    </div>
  );
}

export default BlogAddress;
