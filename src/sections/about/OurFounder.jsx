import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

function OurFounder() {
  return (
    <section className="bg-gradient-to-r from-sky-600 to-sky-400 py-32">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row  gap-10 bg-white/10 backdrop-blur-lg rounded-2xl p-5">
          {/* Left Side - Image + Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex  md:items-start w-full flex-col-reverse lg:flex-row md:w-1/2 items-stretch text-white relative"
          >
            <div className="flex flex-col  lg:justify-between h-full relative z-30">
              <h2 className="text-h2 font-parkinsans leading-tight">
                Nancy <br className="lg:block hidden"/> Varallo
              </h2>
              {/* Social Icons */}
              <div className="flex gap-4 ">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-sky-600 rounded-full p-2 hover:bg-sky-100 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-sky-600 rounded-full p-2 hover:bg-sky-100 transition"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
            <div className="lg:absolute bottom-0 right-0 lg:w-[320px] mb-5 lg:mb-0">
              <img src="founder.png" className="w-full h-auto"  alt="Nancy Varallo" />
            </div>
          </motion.div>

          {/* Right Side - Quote + Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-white"
          >

            {/* Quote */}
            <div className="text-p md:text-2xl xl:text-3xl font-parkinsans text-center  mb-6 relative flex">
              <span className="text-4xl self-start">
                <img src="q-left.png" className="w-20" alt="" />
              </span>
              <p className="p-0">
                Turning a lifelong passion into a legacy of support for court
                reporting.
              </p>

              <span className="text-4xl  self-end">
                <img src="q-right.png" className="w-20" alt="" />
              </span>
            </div>

            {/* Description */}
            <p className="text-xl leading-relaxed font-manrope">
              Nancy Varallo began her court reporting career in 1979 and founded
              The Varallo Group in 2001, blending decades of expertise with a
              bold vision for smarter legal support. With a family legacy in
              court reporting since 1937, she’s carried it forward as an NCRA
              President, Project Steno co-founder, mentor and advocate. Known as
              the “Fearless Leader,” Nancy leads with heart, innovation and a
              commitment to quality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurFounder;
