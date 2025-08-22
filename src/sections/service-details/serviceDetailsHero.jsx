import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { motion } from "framer-motion"; // ✅ Use framer-motion here
import ServiceDetailsHeroPage from "../../components/ServiceDetailsHeroPage";
import VerticalSlider from "./VerticalSlider";


const ServiceDetailsHero = ({ data }) => {
  const { name, title, pera, link, images } = data;
  
  return (
    <section className="service-details-hero bg-black text-white relative overflow-hidden p-0">
      <div className="container-fluid mx-auto px-4 grid xl:grid-cols-2 items-center relative z-10">
        
        {/* Image and Info Cards */}
        <motion.div
          className="mt-12 lg:mt-0 relative flex justify-center xl:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Main Image/Slider Component */}
            <VerticalSlider images={images} />
            {/* <ServiceDetailsHeroPage /> */}
          </div>
        </motion.div>
        {/* Text Content */}
        <div className="xl:order-1">
          <motion.div
            className="tag text-xl inline-block leading-9 py-4 px-6 rounded-[50px] border border-[#727272] my-5 sm:mt-10 lg:mt-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {name}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-parkinsans leading-10 xl:max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-gray-300 font-monospace text-xl mt-4 xl:max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {pera}
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button text="Get Started Today" link="/" arrowClass="d" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsHero;
