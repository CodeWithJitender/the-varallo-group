import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCamera } from "@fortawesome/free-solid-svg-icons";
// import personImage from "../assets/about-image.jpg"; // Replace with your image
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="" id="WhatSetsUsApart">
      <div className="container-fluid">
        <div className=" mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 col-span-2">
            <motion.div
              className="flex md:items-center flex-col md:flex-row gap-5 md:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="md:w-[50%] text-4xl md:text-5xl font-medium leading-tight font-parkinsans">
                Decades of Experience.
               
                <br />
                One Trusted Team.
              </h2>
              <div className="md:w-[35%] ms-auto">
                <h3 className="text-xl md:text-2xl font-manrope">
                Delivering Trusted Solutions to Court Reporting Firms Everywhere

                </h3>
                <p className="text-tertiary mt-2 font-manrope">
                 With more than 50 years of court reporting expertise, The Varallo Group combines a rich legacy, unwavering precision and forward-thinking innovation to empower and support your firm every step of the way.

                </p>
              </div>
            </motion.div>

            <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <motion.div
                className="md:mt-20"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="./about-home.png"
                  alt="Expert"
                  className="rounded-2xl w-full max-w-xl object-cover"
                />
              </motion.div>
              {/* Right Column */}
              <motion.div
                className="space-y-8 md:mt-20 flex flex-col justify-center md:gap-5"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="mb-4 text-h3 font-manrope">
                    What Sets Us Apart
                  </h3>
                  <p className="text-tertiary text-xl max-w-[500px] mt-2 ">
                    Our handpicked team draws from decades of experience, delivering service with precision and professionalism.  Think of us as a trusted extension of your team, dedicated to driving results together.
                  </p>
                </div>

                <motion.div
                  className=""
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {[
                    { 
                      icon: faCamera, 
                      title: "Technology-Driven", 
                      description: "We leverage advanced tools to streamline scheduling, delivery and communication so you can scale with confidence. " 
                    },
                    { 
                      icon: faLock, 
                      title: "Confidential & Reliable", 
                      description: "We recognize the trust you’ve placed in us and we’re dedicated to protecting the confidentiality of your private company information. " 
                    },
                    { 
                      icon: faLock, 
                      title: "People First", 
                      description: "It’s not just what we do, it’s about the people we serve. Our dedicated team brings genuine passion to help your business thrive and succeed." 
                    }
                  ].map((card, index) => (
                    <div key={index} className="flex items-start flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-between mb-4 md:mb-8">
                      <div className="bg-grad text-white p-3 rounded-[3px]">
                        <FontAwesomeIcon icon={card.icon} />
                      </div>
                      <h4 className="font-medium font-manrope text-tertiary text-p sm:w-[28%] md:w-full lg:w-[25%]">
                        {card.title}
                      </h4>
                      <p className="font-manrope text-tertiary sm:w-[40%] md:w-full lg:w-[60%]">
                        {card.description}
                      </p>
                  </div>))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
