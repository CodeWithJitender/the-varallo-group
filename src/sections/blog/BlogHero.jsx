import React from "react";
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";

function BlogHero() {
  return (
    <Hero>
      <div className="">
        <motion.h1
          className="text-h2 font-parkinsans leading-tight  text-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          You work to unique requirements. <br /> We offer unique solutions.
          <br />
        </motion.h1>

        <motion.p
          className="text-gray-300 font-monospace text-xl mt-4 max-w-[800px] text-center mx-auto"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        What started as a way to help my mum manage her childcare centre became a platform that redefined how early learning services connect with families.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button text="Schedule a Consultation" link="/pay" arrowClass="d" />
        </motion.div>
      </div>
    </Hero>
  );
}

export default BlogHero;
