import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const centerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ServiceHero() {
  return (
    <div className="service-hero">
      <div className="container-fluid">
        <motion.div
          className="sm:grid sm:grid-cols-2 lg:grid-cols-[25%,50%,25%] gap-8 "
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Center content */}
          <motion.div
            className="hero-content  flex flex-col items-center gap-6 lg:order-2 self-center col-span-2 lg:col-span-1"
            variants={centerVariants}
          >
            <h1 className="text-h2 font-parkinsans text-center text-white font-normal capitalize">
              Support That Understands You
            </h1>
            <img src="./s-hero.gif" className="m-auto" alt="" />
            <p className="text-xl text-center text-white font-manrope">
              At The Varallo Group, we bring together 8 specialized sub-brands
              under one unified umbrella. Think of us as your one-stop partner
              for smarter, streamlined and scalable success.
            </p>
            <Button
              arrowClass={"sdf"}
              text={"Get Started Today"}
              color={"text-white"}
              link={"/"}
            />
          </motion.div>

          {/* Left GIF */}
          <motion.div
            className="hero-left lg:order-1 lg:self-start"
            variants={leftVariants}
          >
            <img src="s-hero-left.gif" className="w-full mt-10 sm:mt-auto" alt="" />
          </motion.div>
          {/* Right GIF */}
          <motion.div
            className="hero-left lg:order-3 lg:self-end"
            variants={rightVariants}
          >
            <img src="s-hero-right.gif" className="w-full mt-10 sm:mt-auto" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceHero;
