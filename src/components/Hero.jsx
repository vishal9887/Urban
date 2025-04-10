import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden text-white"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/12884151_1920_1080_30fps (4).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Urban Orbits</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Transforming your digital presence with innovation and AI-driven solutions.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
