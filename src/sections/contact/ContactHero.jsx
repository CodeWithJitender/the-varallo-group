import React from "react";
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";
import CurvedSlider from "../../components/CurvedSlider";

function ContactHero() {
  return (
    <Hero clCustom="none">
      <div className="max-w-[1600px] m-auto pt-[50px] md:pt-[70px] lg:pt-[100px] px-[20px] md:px-[30px] lg:px-[50px]">
        <motion.h1
          className="text-h2 font-parkinsans leading-tight max-w-[900px] m-auto text-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
         Start your journey with a conversation. Let’s Connect!
        </motion.h1>

        <motion.p
          className="text-gray-300 font-monospace text-xl mt-4 max-w-[800px] text-center mx-auto"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
      Reach out today, we’ll map the way forward with clear strategies and reliable legal assistance.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button text="Get Started Today" link="/pay" arrowClass="d" />
        </motion.div>
       <div className="mt-5">
         {/* <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween", duration: 1.5 }} // Increased duration
          src="./contact-hero.png" // Replace with your actual image path
          alt="Professional"
          className="w-full  "
        /> */}
       </div>
      </div>
      <CurvedSlider/>
    </Hero>
  );
}

export default ContactHero;
