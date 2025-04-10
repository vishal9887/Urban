import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Video from '../components/Video';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Custom Software',
    description: 'Tailored software solutions to fit your business needs perfectly.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mobile App Development',
    description: 'Create fast, beautiful, and reliable mobile applications.',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Creative UI/UX Design',
    description: 'Designs that are not only beautiful but user-centric and intuitive.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80',
  },
];

const Home = () => {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero />
      <Video />

      {/* Feature Section */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">What We Do</h2>
          <p className="text-lg text-gray-600">
            From concept to launch, we build digital products that scale and succeed.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 12,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden text-center transition-all duration-300"
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
