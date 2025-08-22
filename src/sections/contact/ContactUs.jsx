import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaChevronDown } from "react-icons/fa";
import Button from "../../components/Button";

const ContactUs = () => {
  const [open, setOpen] = useState(false);

  const services = [
    { name: "General Inquiry", email: "inquiry@example.com" },
    { name: "Support", email: "support@example.com" },
    { name: "Billing", email: "billing@example.com" },
    { name: "Partnerships", email: "partners@example.com" },
    { name: "Press", email: "press@example.com" },
    { name: "Careers", email: "careers@example.com" },
    { name: "Technical Help", email: "tech@example.com" },
    { name: "Feedback", email: "feedback@example.com" },
  ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  return (
    <section>
      <div className="container-fluid">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 font-parkinsans font-semibold">Contact Us</h2>
          <p className="font-manrope text-sm lg:text-xl mt-2">
          Reach out today, we’ll map the way forward with clear strategies and reliable legal assistance..
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 ">
          <div className="">
            {/* Left Info Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white rounded-2xl p-8 flex flex-col justify-between bg-grad"
            >
              <div>
                <h3 className="text-[32px] font-manrope font-semibold">
                  You tell us. We Listen.
                </h3>
                <p className="mb-4 font-manrope text-p lg:text-xl">
                 What started as a way to help my mum manage her childcare centre.
                </p>

                <div className="space-y-4 mt-8">
                  {/* Working Hours */}
                  <div className="flex gap-4">
                    <div className="bg-btn w-14 h-14 rounded flex items-center justify-center">
                      <FiClock className="text-2xl" />
                    </div>
                    <p>
                      <strong className="font-manrope text-p font-medium">
                        Working Hours:
                      </strong>
                      <br />
                      <span className="text-[#ffffffb9] lg:text-xl mt-1 block">
                        Mon–Thu: 08:00am – 05:00pm <br /> Fri: 08:00am – 05:00pm
                      </span>
                    </p>
                  </div>

                  {/* Office Address */}
                  <div className="flex gap-4">
                    <div className="bg-btn w-14 h-14 rounded flex items-center justify-center">
                      <FiMapPin className="text-2xl" />
                    </div>
                    <p>
                      <strong className="font-manrope text-p font-medium">
                        Office Address:
                      </strong>
                      <br />
                      <span className="text-[#ffffffb9] lg:text-xl mt-1 block">
                        34 Grafton Street, Suite 2 <br /> Millbury, MA 01527
                      </span>
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="bg-btn w-14 h-14 rounded flex items-center justify-center">
                      <FiPhone className="text-2xl" />
                    </div>
                    <p>
                      <strong className="font-manrope text-p font-medium">
                        Call us:
                      </strong>
                      <br />
                      <span className="text-[#ffffffb9] lg:text-xl mt-1 block">
                        508.753.9282
                      </span>
                    </p>
                  </div>

                  {/* Email Dropdown */}
                  <div className="flex items-start gap-3 relative">
                    <div className="bg-btn w-14 h-14 rounded flex items-center justify-center">
                      <FiMail className="text-2xl" />
                    </div>

                    <div>
                      <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 font-manrope text-p font-medium text-white"
                      >
                        Email us
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <span className="text-[#ffffffb9] lg:text-xl mt-1 block">
                        Select services
                      </span>

                      <AnimatePresence>
                        {open && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bg-white text-gray-800 shadow-lg rounded-lg mt-3 w-56 z-20 border"
                          >
                            {services.map((service, index) => (
                              <li
                                key={index}
                                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer transition"
                              >
                                <a
                                  href={`mailto:${service.email}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {service.name}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-10">
                <a href="#" className="bg-btn p-3 rounded-full">
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a href="#" className="bg-btn p-3 rounded-full">
                  <FaFacebook className="text-white text-xl" />
                </a>
              </div>
            </motion.div>
            {/* Map */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-6 h-full"
            >
              <iframe
                className="w-full h-96 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.234567!2d-71.7575!3d42.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3e8c8b2c0c9a3%3A0x123456789abcdef!2s34%20Grafton%20St%2C%20Millbury%2C%20MA%2001527!5e0!3m2!1sen!2sus!4v1700000000000"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-3xl font-semibold font-manrope text-center mb-2">
            Schedule Online
            </h3>
            <p className="text-p lg:text-xl font-manrope text-center mb-6">
            You will receive an email confirming receipt of your request within 24 hours. If you do not receive this confirmation email, please call the office to confirm we have received the scheduling request.
            </p>

            {/* Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {/* Firm Name */}
              <motion.div custom={0} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl ">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Attorney Name */}
              <motion.div custom={1} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Attorney Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter attorney name"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Contact Number */}
              <motion.div custom={2} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Contact Number*
                </label>
                <input
                  type="text"
                  placeholder="Enter contact number"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Contact Name */}
              <motion.div custom={3} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Contact Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter contact name"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Contact Email */}
              <motion.div
                custom={4}
                variants={fadeInUp}
                className="md:col-span-2 mb-3"
              >
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Contact Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Section Title */}
              <motion.h4
                custom={5}
                variants={fadeInUp}
                className="md:col-span-2 font-bold text-p  font-manrope mt-4"
              >
                Proceeding Information
              </motion.h4>

              {/* Preferred Date */}
              <motion.div custom={6} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Preferred Date*
                </label>
                <input
                  type="date"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Preferred Time */}
              <motion.div custom={7} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Preferred Time*
                </label>
                <input
                  type="time"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* State */}
              <motion.div custom={8} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Select State*
                </label>
                <div className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl">
                  <select className="w-full bg-[#F2F2F2]">
                    <option>Select State</option>
                  </select>
                </div>
              </motion.div>

              {/* City */}
              <motion.div custom={9} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Select City*
                </label>
                <div className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl">
                  <select className="w-full bg-[#F2F2F2]">
                    <option>Select City</option>
                  </select>
                </div>
              </motion.div>

              {/* Witness */}
              <motion.div custom={10} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Witness(es)*
                </label>
                <input
                  type="text"
                  placeholder="Enter witness(es)"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Estimated Duration */}
              <motion.div custom={11} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Estimated Duration*
                </label>
                <input
                  type="text"
                  placeholder="Enter duration"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Services Needed */}
              <motion.div custom={12} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Services Needed*
                </label>
                <input
                  type="text"
                  placeholder="Enter services needed"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* File Upload */}
              <motion.div custom={13} variants={fadeInUp} className="mb-3">
                <label className="block font-manrope mb-2 font-bold text-base md:text-xl">
                  Upload File
                </label>
                <input
                  type="file"
                  className="border font-manrope rounded-lg px-4 py-3 w-full bg-[#F2F2F2] text-xl"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className=""
              >
                <Button
                  text="Schedule a Consultation"
                  link="/pay"
                  color={"text-white"}
                  arrowClass="d"
                />
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
