import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";

const data = [
  {
    title: "Nationwide Reach. Local Expertise.",
    text: "With trusted professionals across all 50 states, we offer personalized court reporting and legal services backed by decades of regional expertise.",
    img: "./featured-1.jpg",
    link: "https://example.com/learn-more",
    btnText: "Explore More",
  },
  {
    title: "One Team. Multiple Solutions.",
    text: "From certified reporting to administrative and business support, our integrated team delivers a full spectrum of services customized to your firm’s needs.",
    img: "./featured-2.jpg",
    link: "https://example.com/learn-more",
    btnText: "Explore More",
  },
  {
    title: "Tech-Driven. People-Focused.",
    text: "We create purposeful, on-brand content that connects with your audience at every touchpoint. From creative direction and storyboarding",
    img: "./featured-3.jpg",
    link: "https://example.com/learn-more",
    btnText: "Explore More",
  },
];

export default function FeaturedHighlights() {
  return (
    <section className="bg-grad relative  text-white">
      <div className="image-top absolute top-0 left-0 w-60 h-60">
        <img src="/icon-half.png" alt="Featured 1" />
      </div>
      <div className="image-middle absolute top-[50%] w-60 right-0">
        <img src="/icon-right.png" alt="Featured 2" />
      </div>
      <div className="image-bottom absolute left-0 -rotate-90 bottom-0 w-60 h-60">
        <img src="/icon-half.png" alt="Featured 3" />
      </div>
      <div className="container-fluid space-y-10 md:space-y-16">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row relative z-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            {/* Text Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-medium font-parkinsans mb-4">
                {item.title}
              </h2>
              <p className="text-[#FFFFFFA1] mb-6 font-manrope">{item.text}</p>
              <Button link={item.link} text={item.btnText} key={idx} />
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-[50px] w-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
