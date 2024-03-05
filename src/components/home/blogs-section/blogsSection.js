import React, { useEffect, useState } from "react";
import "./blogsSection.css";
import { Carousel, Container, Row } from "react-bootstrap";
import BlogItem from "./blogItem";
import nextIcon from "../images/next.png";
import prevIcon from "../images/prev.png";
function BlogsSection(props) {
  const [numItems, setNumItems] = useState(3); // Default number of items

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setNumItems(1);
      } else if (screenWidth < 992) {
        setNumItems(2);
      } else {
        setNumItems(3);
      }
    };
    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Initial call to set number of items based on initial screen width
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Custom previous and next icons
  const CustomNextIcon = () => <img src={nextIcon} alt="next" />;
  const CustomPrevIcon = () => <img src={prevIcon} alt="prev" />;
  return (
    <div className={props.className}>
      <Container className="py-4">
        <h1 className="blogs-head fw-bold mb-4">Explore Our Blogs</h1>
        <Carousel
          id="blogs-carousel"
          prevIcon={window.innerWidth >= 600 ? <CustomPrevIcon /> : null}
          nextIcon={window.innerWidth >= 600 ? <CustomNextIcon /> : null}>
          <Carousel.Item interval={5000}>
            <Row>
              {/* Render BlogItem components based on numItems */}
              {Array.from({ length: numItems }).map((_, index) => (
                <BlogItem key={index} />
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              {/* Render BlogItem components based on numItems */}
              {Array.from({ length: numItems }).map((_, index) => (
                <BlogItem key={index} />
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <Row>
              {/* Render BlogItem components based on numItems */}
              {Array.from({ length: numItems }).map((_, index) => (
                <BlogItem key={index} /> 
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default BlogsSection;
