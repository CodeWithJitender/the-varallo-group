import React from "react";
// import Hero from "../sections/home/Hero";
import AboutSection from "../sections/home/AboutSection";
import FeaturedHighlights from "../sections/home/FeaturedHighlights";
import Testimonials from "../sections/home/Testimonials";
import BlogSection from "../sections/home/BlogSection";
import SmartSlider from "../sections/home/SmartSlider";
import WhyChoose from "../sections/home/WhyChoose";
import HomeHero from "../sections/home/HomeHero";

function Home() {
  return (
    <div className="home-page overflow-x-hidden">
      <HomeHero />
      <div id="what-sets-us-apart">
        <AboutSection />
      </div>
      <div className="" id="smart-support">
        <SmartSlider />
      </div>
      <div className="" id="why-choose">
        <WhyChoose />
      </div>
      <div className="" id="featured-">
        <FeaturedHighlights />
      </div>
      <div className="" id="testimonials">
        <Testimonials />
      </div>
      <div className="" id="our-blog">
        <BlogSection />
      </div>
    </div>
  );
}

export default Home;
