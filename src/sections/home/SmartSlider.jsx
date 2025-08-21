import React from "react";
import Slider from "react-slick";

import Arrow from "../../components/Arrow";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const smartData = [
  {
    title: "TVG Management",
    desc: "Agency management support to streamline operations and boost profitability.",
    image: "smart-1.jpg",
  },
  {
    title: "TVG Reporting",
    desc: "Court reporting and legal videography across the Northeast and beyond.",
    image: "smart-2.jpg",
  },
  {
    title: "TVG Stream",
    desc: "Legal video, trial presentation and event A/V services for law firms and organizations.",
    image: "smart-3.jpg",
  },
  {
    title: "TVG Books",
    desc: "Bookkeeping and financial services for court reporting and professional industries.",
    image: "smart-4.jpg",
  },
  {
    title: "TVG Creative",
    desc: "Marketing, branding and digital solutions for legal and B2B sectors.",
    image: "smart-5.jpg",
  },
  {
    title: "TVG Connect",
    desc: "Association management for trade groups and professional organizations.",
    image: "smart-6.jpg",
  },
  {
    title: "TVG Command",
    desc: "Sales of legal tech platforms like Claudio AI for transcription and automation.",
    image: "smart-7.jpg",
  },
  {
    title: "TVG Verify",
    desc: "Background screening and compliance checks via the SmartHire platform.",
    image: "smart-8.jpg",
  },
  
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer absolute -bottom-12 right-[calc(50%-3rem)] z-10"
      onClick={onClick}
    >
      <Arrow customClass={"bg-secondary "} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="cursor-pointer absolute -bottom-12 left-[calc(50%-3rem)] z-10"
      onClick={onClick}
    >
      <Arrow customClass={"bg-secondary rotate-180"} />
    </div>
  );
}

export default function SmartSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-[#0052B9] to-[#38ABD0] text-white py-20 relative">
      <img src="" alt="" />
      <div className="container- px-[20px] md:px-[25px] lg:ps-[100px]">
        <div className="lg:flex items-stretch">
          <motion.div
            className="lg:w-[40%] flex flex-col justify-between px-6 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-medium leading-tight mb-4">
                Smart Support.
                <br />
                Seamless Solutions.
              </h2>

              <div className="flex items-center gap-2 mb-8">
                <Button
                  text="Get Started Today"
                  color={"text-white"}
                  arrowClass={"sd"}
                  link={"/"}
                />
              </div>
            </motion.div>

            <motion.p
              className="text-white font-manrope text-xl lg:max-w-[500px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At The Varallo Group, our services are built to simplify, strengthen and scale your operations. Whether you're a court reporting firm, law practice or professional organization, our expertise meets your needs right where you are and right when you need it.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:w-[60%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Slider {...settings}>
                {smartData.map((item, i) => (
                  <div key={i} className="px-4">
                    <motion.div
                      className="relative rounded-xl overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded-[30px]"
                      />
                      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-start p-4">
                        <div className="p-4 bg-black/50 backdrop-blur-md text-white rounded-xl w-2/4">
                          <h4 className="font-medium text-p font-manrope mb-1">
                            {item.title}
                          </h4>
                          <p className="font-medium text-base leading-6 text-[#FFFFFFA1]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
