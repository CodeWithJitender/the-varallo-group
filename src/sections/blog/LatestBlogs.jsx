import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "5 Essential Financial Strategies for Small Businesses",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-3.png",
    link: "#",
  },
  {
    title: "Tax-Saving Tips for Entrepreneurs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-2.png",
    link: "#",
  },
  {
    title: "The Importance of Financial Planning for Startups",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "blog-1.png",
    link: "#",
  },
];

const LatestBlogs = () => {
  return (
    <section className="container-fluid mx-auto px-4 py-20">
      <motion.h2
        className="text-h2 font-semibold text-center mb-5 md:mb-12 font-parkinsans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Latest Blogs
      </motion.h2>

      <div className="space-y-12 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-t pt-10 sm:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:w-[55%]">
              <h3 className="text-p lg:text-[30px] font-semibold font-manrope mb-2 sm:mb-5 text-[#262626]">
                {post.title}
              </h3>
              <p className="font-manrope text-lg mb-2 sm:mb-4">{post.excerpt}</p>
              <a
                href={post.link}
                className="font-manrope text-secondary font-medium underline text-[16px]"
              >
                Read more
              </a>
            </div>
            <motion.div
              className="md:w-[45%] flex justify-center md:justify-end"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={`./${post.image}`}
                alt={post.title}
                className="rounded-xl w-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
