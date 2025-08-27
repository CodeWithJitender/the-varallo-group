import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaSmile, FaClock } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="">
      <div className="container-fluid ">
        <motion.p
          className="text-center text-4xl font-parkinsans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
         Our mission is to deliver expert court reporting,<img src="m-1.png" alt="" className="mx-2 inline w-6 md:w-4 lg:w-10" />
         
         legal video, association and administrative services as a true extension of your team. We simplify operations, <img src="m-2.png" alt="" className="mx-2 inline w-6 md:w-14 lg:w-10" />
          
         strengthen results and free you to focus on what matters most. More than support, we partner closely with you to anticipate client needs and elevate your success<img src="m-3.png" alt="" className="mx-2 inline w-6 md:w-14 lg:w-10" />.
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
