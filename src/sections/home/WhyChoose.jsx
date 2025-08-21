import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "500+",
    description:
      "Court Reporting Firms Served",
  },
  {
    title: "40K+",
    description:
      "Attorneys Assisted ",
  },
  {
    title: "24+",
    description:
      "Years of Industry Experience",
  },
  {
    title: "2.5M+",
    description:
      "Million Depositions Handled",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <section className="why-choose">
      <div className="container-fluid">
        {/* Left Content */}
        <motion.div
          className="lg:flex justify-between items-end gap-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-h2 font-parkinsans font-medium">
           Experience You Trust. <br /> Support You Deserve.
          </h1>
          <motion.p
            className="text-gray-600 mt-6 lg:max-w-[40%] font-manrope text-base"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            For law firms that value reliability, accuracy and confidentiality, our team delivers more than just services; we deliver peace of mind.
          </motion.p>
        </motion.div>

        {/* Image & Mid Content */}
        <div className="md:flex gap-20 items-end mt-10">
          <motion.div
            className="relative md:w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="./why-choose.png" alt="hero" className="w-full" />
          </motion.div>

          <motion.div
            className="md:w-[40%] flex flex-col justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Buttons */}
            <motion.div
              className="flex gap-4 mt-10 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl p-4 text-white text-sm font-medium bg-btn flex flex-col justify-between">
                <p className="font-manrope text-xl leading-8">
                 Decades of expertise led by Nancy  trusted by firms nationwide.
                </p>
                <Link to={"/services"} className="text-base mt-5 font-manrope leading-8">
                  Learn More
                </Link>
              </div>
              <div className="rounded-xl p-4 text-white text-sm font-medium bg-btn flex flex-col justify-between">
                <p className="font-manrope text-xl leading-8">
                 Precision in every word. Because in law, details matter.
                </p>
                <Link to={"/services"} className="text-base mt-5 font-manrope leading-8">
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Vertical Slider */}
            <motion.div
              className="vertical-slider mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Slider {...settings}>
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between p-4 ps-0 ">
                      <h3 className="text-h3 font-medium font-parkinsans">
                        {stat.title}
                      </h3> 
                      <p className="text-black font-manrope text-base max-w-[300px] pe-5">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
