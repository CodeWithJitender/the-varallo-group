import React from "react";

const Hero = ({ children }) => {
  return (
    <section className="hero bg-black text-white relative overflow-hidden">
      <div className="container-fluid  relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Hero;
