import React from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  }),
};

const Contact = () => {
  return (
    <div className='bg-[#F1EFEC]'>
      <motion.section
      id="contact"
      className="py-20 px-4 bg-[#F1EFEC] text-white text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl text-black font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>

      <motion.p
        className="mb-6 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Pricing for our services is tailored to each project. Please contact us to discuss your specific needs and receive a customized quote.
      </motion.p>

      <form className="max-w-xl mx-auto grid grid-cols-1 text-black gap-4">
        {['Your Name', 'Your Email'].map((placeholder, i) => (
          <motion.input
            key={i}
            type={placeholder.includes('Email') ? 'email' : 'text'}
            placeholder={placeholder}
            className="p-3 rounded-lg text-black"
            custom={i}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        ))}
        <motion.textarea
          placeholder="Your Message"
          className="p-3 rounded-lg text-black"
          rows="5"
          custom={2}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-80 transition"
        >
          Send Message
        </motion.button>
      </form>

      {/* DISCLAIMER LINE */}
      <motion.p
        className="mt-10 text-sm text-black italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
      >
        DISCLAIMER: Contacting us may cause sudden clarity.
      </motion.p>
    </motion.section>
    </div>
  );
};

export default Contact;
