// import React from 'react';
// import { motion } from 'framer-motion';

// const formVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6 }
//   }),
// };

// const Contact = () => {
//   return (
//     <div className='bg-[#F1EFEC]'>
//       <motion.section
//       id="contact"
//       className="py-20 px-4 bg-[#F1EFEC] text-white text-center"
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <motion.h2
//         className="text-4xl text-black font-bold mb-4"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Contact Us
//       </motion.h2>

//       <motion.p
//         className="mb-6 text-black"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         Pricing for our services is tailored to each project. Please contact us to discuss your specific needs and receive a customized quote.
//       </motion.p>

//       <form className="max-w-xl mx-auto grid grid-cols-1 text-black gap-4">
//         {['Your Name', 'Your Email'].map((placeholder, i) => (
//           <motion.input
//             key={i}
//             type={placeholder.includes('Email') ? 'email' : 'text'}
//             placeholder={placeholder}
//             className="p-3 rounded-lg text-black"
//             custom={i}
//             variants={formVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           />
//         ))}
//         <motion.textarea
//           placeholder="Your Message"
//           className="p-3 rounded-lg text-black"
//           rows="5"
//           custom={2}
//           variants={formVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         />

//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-80 transition"
//         >
//           Send Message
//         </motion.button>
//       </form>

//       {/* DISCLAIMER LINE */}
//       <motion.p
//         className="mt-10 text-sm text-black italic"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         DISCLAIMER: Contacting us may cause sudden clarity.
//       </motion.p>
//     </motion.section>
//     </div>
//   );
// };

// export default Contact;

// File: src/pages/Help.jsx
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  const helpOptions = [
    {
      title: 'User Guide',
      description: 'Learn how to get started and use our services effectively.',
      route: '/help/user-guide',
    },
    {
      title: 'FAQs',
      description: 'Find answers to frequently asked questions.',
      route: '/help/faqs',
    },
    {
      title: 'Contact',
      description: 'Reach out for general, service, or internship queries.',
      route: '/help/contact',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Help Center
      </h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {helpOptions.map((option) => (
          <div
            key={option.title}
            onClick={() => navigate(option.route)}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
              {option.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;

