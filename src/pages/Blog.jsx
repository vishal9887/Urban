import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Why Your Business Needs a Website",
    excerpt: "Having a website increases your visibility and builds trust with potential clients.",
  },
  {
    title: "Top 5 Web Design Trends in 2025",
    excerpt: "From dark mode to micro-interactions, explore the latest design trends.",
  },
  {
    title: "How to Choose a Tech Stack",
    excerpt: "Choosing the right tools can save you time and money in the long run.",
  },
];

const Blog = () => {
  return (
    <motion.section
      id="blog"
      className="py-20 px-4 bg-white text-black text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Blog
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 rounded-2xl text-left shadow-md hover:shadow-xl hover:border-primary transition-all duration-300"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-700 mb-4">{blog.excerpt}</p>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-primary font-semibold hover:underline transition-all"
            >
              Read More →
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Blog;
