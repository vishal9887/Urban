import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Cpu size={32} />,
    title: 'AI-Powered Solutions',
    desc: 'We integrate cutting-edge AI to streamline processes and enhance user experience.',
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Scalability',
    desc: 'Our cloud-native architectures grow with your business and ensure 99.99% uptime.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile-First Design',
    desc: 'Responsive, modern interfaces tailored for seamless mobile performance.',
  },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-white text-gray-800 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="max-w-3xl mx-auto text-lg mb-12">
        Urban Orbits is a next-gen IT company delivering scalable and AI-powered software, mobile, and cloud solutions. 
        We are dedicated to transforming businesses with intelligent, future-ready digital experiences.
      </p>

      {/* Animated Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-center text-blue-500 mb-4">
              {feature.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default About;
