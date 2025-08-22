import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCamera } from "@fortawesome/free-solid-svg-icons";
// import personImage from "../assets/about-image.jpg"; // Replace with your image
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="">
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
                 Trusted Simplified Solutions for Court Reporting Firms Nationwide.
                </h3>
                <p className="text-tertiary mt-2 font-manrope">
                 With nearly 50 years of court reporting expertise, The Varallo Group blends legacy, precision and innovation to support your firm like an extension of your own team.
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
                    Our handpicked team draws from her deep expertise, delivering every project with precision and professionalism.
                  </p>
                </div>

                <motion.div
                  className="grid sm:grid-cols-2 gap-6 pt-10"
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
                  {/* Card 1 */}
                  <div className="flex items-start gap-3">
                    <div className="bg-grad text-white p-3 rounded-[3px]">
                      <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <div>
                      <h4 className="font-medium font-manrope text-tertiary text-p">
                        Technology Driven
                      </h4>
                      <p className="font-manrope text-tertiary mt-3">
                       Smarter, faster service with advanced tools.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-start gap-3">
                    <div className="bg-grad text-white p-3 rounded-[3px]">
                      <FontAwesomeIcon icon={faLock} />
                    </div>
                    <div>
                      <h4 className="font-medium font-manrope text-tertiary text-p">
                        Confidential & Secure
                      </h4>
                      <p className="font-manrope text-tertiary mt-3">
                       Your data stays safe and compliant.
                      </p>
                    </div>
                  </div>
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
