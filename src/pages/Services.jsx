import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description:
      'We craft scalable, high-performance websites using modern stacks like React, Next.js, and Node.js.',
    image: 'https://img.icons8.com/color/96/web.png',
  },
  {
    title: 'UI/UX Design',
    description:
      'From wireframes to high-fidelity prototypes, our design team delivers delightful and intuitive user experiences.',
    image: 'https://img.icons8.com/color/96/design.png',
  },
  {
    title: 'Mobile Apps',
    description:
      'We build cross-platform mobile apps using Flutter and React Native to ensure top-notch user experience on every device.',
    image: 'https://img.icons8.com/fluency/96/smartphone-tablet.png', // ✅ Working
  },
  {
    title: 'Custom Software',
    description:
      'Tailored software solutions for startups, enterprises, and everything in between. We solve your unique business challenges.',
    image: 'https://img.icons8.com/color/96/source-code.png',
  },
  {
    title: 'Brand Strategy',
    description:
      'Position your business for digital success with our strategic branding, storytelling, and visual identity services.',
    image: 'https://img.icons8.com/fluency/96/strategy-board.png', // ✅ Working
  },
  {
    title: 'Cloud Integration',
    description:
      'We offer scalable and secure cloud integrations using AWS, Azure, or GCP to future-proof your infrastructure.',
    image: 'https://img.icons8.com/color/96/cloud.png',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.section
      id="services"
      className="py-20 px-4 bg-[#0A192F] text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => toggleService(index)}
            className={`cursor-pointer p-6 rounded-xl border border-[#64ffda] transition duration-300 bg-[#112240] hover:bg-[#64ffda] hover:text-[#0A192F] text-left ${
              activeIndex === index ? 'bg-[#64ffda] text-[#0A192F]' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-14 h-14 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="text-sm origin-top overflow-hidden"
                  initial={{ opacity: 0, scaleY: 0.8 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <p>{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
