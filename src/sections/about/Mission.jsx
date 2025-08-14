import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaSmile, FaClock } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="py-10">
      <div className="container-fluid">
        <motion.p
          className="text-center text-h2 font-parkinsans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our mission is to simplify operations,<img src="m-1.png" alt="" className="mx-2 inline w-20" />
         
          strengthen outcomes and free up our clients to focus on what matters most. We do<img src="m-2.png" alt="" className="mx-2 inline w-20" />
          
         more than support — we partner, anticipate and elevate<img src="m-3.png" alt="" className="mx-2 inline w-20" />
          
          .
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
