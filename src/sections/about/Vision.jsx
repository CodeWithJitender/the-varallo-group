import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  const visionPoints = [
    {
      img: "/v-1.png",
      title: "Reliable",
      desc: "Consistent support you can count on, every time.",
    },
    {
      img: "/v-2.png",
      title: "Scalable",
      desc: "Services that grow with your needs.",
    },
    {
      img: "/v-1.png",
      title: "Expert",
      desc: "Skilled guidance from industry professionals.",
    },
    {
      img: "/v-2.png",
      title: "Empowering",
      desc: "Helping the court reporting community thrive.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-sky-500 to-sky-600 py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-h2 mb-4"
          >
            Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 leading-relaxed font-manrope text-xl"
          >
            We envision a future where every reporting firm, regardless of size,
            can access seamless solutions. By investing in technology and
            people, we aim to uplift the industry, one partnership at a time.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-8">
            {visionPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h4 className="font-semibold font-manrope text-p">
                    {item.title}
                  </h4>
                  <p className="text-base lg:text-lg leading-snug font-manrope mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            src="./vision.png" // Replace with your actual image path
            alt="Professional"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
