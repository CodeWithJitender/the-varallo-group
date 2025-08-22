import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title:
      "From Steno to Stream: How Small Court Reporting Firms Can Leverage Tech to Stay Competitive",
    tag: "Latest Blogs",
    img: "/blog1.png",
  },
  {
    title: "The Power of Partnership: How Legal Videographers and Court Reporters Can Grow Together",
    tag: "Latest Blogs",
    img: "/blog2.png",
  },
  {
    title: "Confidentiality Counts: Best Practices for Protecting Client Data in the Digital Age",
    tag: "Latest Blogs",
    img: "/blog3.png",
  },
];

const TrendingBlogs = () => {
  return (
    <section>
      <div className="container-fluid">
        {/* Heading */}
        <motion.h2
          className="text-center font-parkinsans text-h2 font-semibold mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Trending Blogs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Blog Card */}
          <motion.div
            className="md:col-span-2 relative rounded-xl overflow-hidden group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={blogs[0].img}
              alt="Blog"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute h-full p-5 top-0 left-0 flex flex-col justify-end items-start text-white">
              <span className="bg-[#727272]/50 px-3 font-manrope border border-[#727272] py-1 rounded-md text-xl">
                {blogs[0].tag}
              </span>
              <p className="font-manrope mt-3 text-p lg:text-3xl font-semibold">
                {blogs[0].title}
              </p>
            </div>
          </motion.div>

          {/* Small Blog Cards */}
          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((blog, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden group h-full"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={blog.img}
                  alt="Blog"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-end items-start   text-white">
                  <span className="bg-[#727272]/50 px-3 font-manrope border border-[#727272] py-1 rounded-md text-sm">
                    {blog.tag}
                  </span>
                  <p className="font-manrope mt-2 text-p font-medium">{blog.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs;
