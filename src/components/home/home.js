import React from "react";
import NavbarApp from "./navbar-app/navbar";
import Slider from "./slider/slider";
import Ticker from "./slider/ticker";
import Features from "./features-section/features";
import Power from "./power-section/power";
import PowerPrivacy from "./power-section/powerPrivacy";
import Install from "./install-section/install";
import BlogsSection from "./blogs-section/blogsSection";
import Footer from "./footer/footer";

function Home() {
  return (
    <div>
      <NavbarApp id="navbar-transparent" />
      <Slider />
      <Ticker />
      <Features />
      <Power />
      <PowerPrivacy />
      <Install />
      <BlogsSection className="home-blogs-section" />
      <Footer />
    </div>
  );
}

export default Home;
