import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-black text-white sticky top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1600px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
         <Link to='/'> <img src="/logo.png" alt="Logo" className="h-14" /></Link>
        </motion.div>

        {/* Hamburger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          whileTap={{ scale: 0.9, rotate: isOpen ? 90 : 0 }}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </motion.button>

        {/* Desktop Nav */}
        <motion.div
          className="hidden lg:flex items-center justify-between flex-1 gap-8 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <nav className="flex gap-6 text-lg font-medium mx-auto">
            <Link className="font-manrope" to="/">Home</Link>
            <Link className="font-manrope" to="/about">About Us</Link>
            <Link className="font-manrope" to="/services">Services</Link>
            <Link className="font-manrope" to="/blog">Blog</Link>
            <Link className="font-manrope" to="/contact">Contact Us</Link>
            {/* <Link className="font-manrope" to="/legal">Legal Policies</Link> */}
          </nav>

          <div className="flex gap-3">
            <Link
              to="/resources"
              className="border border-white rounded-full px-5 py-2 text-lg font-manrope hover:bg-white hover:text-black transition"
            >
              Resource Portal
            </Link>
            <Link
              to="/pay"
              className="border border-white rounded-full px-5 py-2 text-lg font-manrope hover:bg-white hover:text-black transition"
            >
              Pay Invoice
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              {/* <Link to="/legal" onClick={() => setIsOpen(false)}>Legal Policies</Link> */}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/resources"
                className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Resource Portal
              </Link>
              <Link
                to="/pay"
                className="border border-white rounded-full px-5 py-2 text-sm text-center hover:bg-white hover:text-black transition"
                onClick={() => setIsOpen(false)}
              >
                Pay Invoice
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
