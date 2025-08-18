import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero";

const blogData = {
  title: "How to improve your UI design skills:",
  subtitle: 'Quickly develop an "eye" for great design',
  description:
    "The design industry is constantly evolving, but good design is timeless. Learn how to quickly develop an 'eye' for UI design and improve your design skills in 2023.",
  tags: ["Design", "Product", "12 min read"],
  image: "/blog-hero.jpg", // Replace with your uploaded image path
};

const BlogHero = () => {
  return (
    <section className="">
      <Hero>
      {/* Background Image */}
      <motion.img
        src={blogData.image}
        alt="Blog Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {blogData.title} <br />
          <span className="text-purple-200">{blogData.subtitle}</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">{blogData.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          {blogData.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/20 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      </Hero>
    </section>
  );
};

export default BlogHero;
