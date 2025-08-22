import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Confidentiality Counts: Best Practices for Protecting Client Data in the Digital Age",
    excerpt:
      "It’s really intriguing to know that in today’s hyper connected and data driven world, where a single click can send information halfway across the globe, confidentiality standards aren’t just a compliance checkbox rather",
    image: "blog-1.jpg",
    link: "",
  },
  {
    title: "Marketing on a Budget: How Independent Court Reporting Firms Can Build a Strong ",
    excerpt:
      "In a world where every search, click and review influence a potential client’s choice, having a solid online presence for independent court reporting firms isn’t just an extra, it’s essential. ",
    image: "blog-2.jpg",
    link: "",
  },
  {
    title: "What Attorneys Wish You Knew: Common Missteps Court Reporters ",
    excerpt:
      "The transcript isn’t just words on a page, it’s the heartbeat of every case. You’ve heard it said before one small misstep and the whole case can wobble. That’s exactly the tightrope attorneys walk on",
    image: "blog-3.jpg",
    link: "",
  },
];

const BlogSection = () => {
  return (
    <section className="container-fluid">
      <motion.h2
        className="text-h2 font-semibold text-center mb-5 md:mb-12 font-parkinsans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Blog
      </motion.h2>

      <div className="space-y-12 max-w-7xl mx-auto">
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

export default BlogSection;
