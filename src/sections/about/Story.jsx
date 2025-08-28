import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  const item = [
    {
      year: "2017",
      title: "The Birth of TVG",
      para: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
      img: "/Story.png",
    },
    {
      year: "2018",
      title: "Expanding Services",
      para: "We began expanding our services to more agencies, ensuring smoother operations and a growing network of trusted partners.",
      img: "/Story.png",
    },
    {
      year: "2020",
      title: "Innovation & Growth",
      para: "With a focus on technology and innovation, we streamlined workflows and adapted to new industry standards.",
      img: "/Story.png",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="">
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-h2 font-parkinsans">
            Managing a court reporting agency
          </h2>
          <p className="mt-4 font-manrope text-[#00100D] text-xl max-w-4xl mx-auto">
            Managing a court reporting agency means balancing client demands,
            coordinating with reporters, billing cycles and deadlines all while
            maintaining your firm&apos;s reputation.
          </p>
        </div>
      </div>

      {/* Story Content */}
      {item.map((story, index) => (
        <motion.div
          key={index}
          className="bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          variants={fadeInUp}
        >
          <div className="max-w-[1600px] m-auto px-4 py-[50px]">
            <div
              className={`flex flex-col md:flex-row gap-5 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="md:w-[60%]"
                variants={fadeInUp}
              >
                <img
                  src={story.img}
                  alt="Story"
                  className="rounded-2xl w-full shadow-lg max-w-[700px] mx-auto"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="md:w-[50%]"
                variants={fadeInUp}
              >
                <p className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                  {story.year}
                </p>
                <h3 className="text-h2 mb-4 font-parkinsans max-w-[300px] leading-normal">
                  {story.title}
                </h3>
                <p className="font-manrope text-[#00100D] text-base md:text-lg lg:text-xl">
                  {story.para}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Story;
