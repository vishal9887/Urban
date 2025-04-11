import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffffff,
          backgroundColor: 0x000000,
          size: 2.5,
          speed: 4.0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <motion.section
      ref={vantaRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-screen h-screen overflow-hidden text-white flex items-center justify-center"
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 max-w-screen-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Welcome to Urban Orbits
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl sm:max-w-3xl">
          Transforming your digital presence with innovation and AI-driven solutions.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
