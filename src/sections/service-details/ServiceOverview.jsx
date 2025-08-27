import React from "react";
import { motion } from "framer-motion";
import OverviewCard from "../../components/OverviewCard";

const ServiceOverview = ({ data }) => {
  return (
    <section className="bg-gradient-to-br from-[#1e90ff] to-[#1ca9c9] text-white ">
      <div className="container-fluid">
        <motion.h2
          className="text-center font-parkinsans text-h2 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <div className="max-w-7xl m-auto">
          <div className="">
            {data.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <OverviewCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
