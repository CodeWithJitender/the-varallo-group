import React from "react";
import { motion } from "framer-motion";

const ServiceOver = ({ data }) => {
  const { title, pera } = data;

  return (
    <section className="bg-white">
      <div className="container-fluid">
        <div className="md:flex items-center gap-10">
          {/* Image Section */}
          <motion.div
            className="text-end md:order-2 md:w-[30%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/service-over.png"
              alt="Service Overview"
              className="w-full max-w-xl mx-auto"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:order-1 md:w-[60%] mt-10 md:mt-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="md:flex justify-between items-end gap-10">
              <motion.h2
                className="text-h2 font-parkinsans"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Service <br className="hidden md:block" /> Overview
              </motion.h2>

              <motion.p
                className="md:text-end text-base md:text-[32px] text-tertiary md:mt-6 font-medium font-manrope leading-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {title}
              </motion.p>
            </div>

            {pera.map((text, index) => (
              <motion.p
                key={index}
                className="md:mt-6 text-gray-700 text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOver;
