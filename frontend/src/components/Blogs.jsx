import React, { useState, useRef, useEffect } from 'react';

import Card from './Card';



const ThreeDCarousel = () => {
  const [paused, setPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [rotation, setRotation] = useState(0);
  const carouselRef = useRef(null);
  const rotationIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      src: "https://www.w3schools.com/w3css/img_lights.jpg",
      title: "Galactic Horizon",
      description: "A stunning visual of a galactic horizon, where stars collide to create new celestial bodies.",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1479409286066-c0b2f4f4a332",
      title: "Star Field",
      description: "A deep view into the star field, showing the beauty of thousands of stars scattered across space.",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s",
      title: "Digital Cosmos",
      description: "A futuristic depiction of space, blending digital art with the beauty of the universe.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3",
      title: "Galactic Wonders",
      description: "A breathtaking view of a galaxy, showing the immense beauty and complexity of the universe.",
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(id);
    setPaused(true);
  };

  useEffect(() => {
    if (!paused) {
      rotationIntervalRef.current = setInterval(() => {
        setRotation((prev) => prev + 0.5);
      }, 16);
    } else {
      clearInterval(rotationIntervalRef.current);
    }

    return () => clearInterval(rotationIntervalRef.current);
  }, [paused]);

  return (
    <div className="min-h-screen text-black pb-32">
      <h1 className="font-bold text-5xl text-center mt-10 mb-16" data-aos="fade-up">
        CORE VALUES
      </h1>
      <p className="w-[90%] sm:w-[70%] font-medium text-lg sm:text-xl mx-auto mt-6 text-center mb-44" data-aos="fade-up">
        At Urban Orbit, values aren’t just words — they’re the quiet principles behind every decision, strategy, and system.
      </p>

      {/* 3D Carousel */}
      <div className="relative w-[320px] h-[320px] mx-auto perspective-[1000px]">
        <div
          ref={carouselRef}
          className="absolute w-full h-full transform-style-preserve-3d"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transition: paused ? "none" : "transform 0.1s",
          }}
        >
          {slides.map((slide, index) => {
            const angle = index * (360 / slides.length);
            return (
              <div
                key={slide.id}
                className="absolute w-[280px] h-[280px] flex items-center justify-center"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(500px)`,
                }}
              >
                <div
                  className={`relative group cursor-pointer text-center w-full h-full transition-transform duration-300 ${
                    selectedCard === slide.id ? 'scale-110 z-10' : ''
                  }`}
                  onClick={() => handleCardClick(slide.id)}
                >
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-[280px] h-[280px] object-cover border-4 border-blue-400 shadow-xl rounded-full"
                  />
                  {!selectedCard && (
                    <div className="absolute bottom-[-100px] w-full opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300">
                      <div className="bg-white text-black rounded-lg shadow-lg p-4 text-sm">
                        <h3 className="font-bold text-lg">{slide.title}</h3>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Card Content Below Carousel */}
      {selectedCard && (
        <div className="mt-10 mx-auto w-[90%] max-w-md text-center bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">
            {slides.find((slide) => slide.id === selectedCard).title}
          </h2>
          <p className="mt-2 text-sm">
            {slides.find((slide) => slide.id === selectedCard).description}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={() => {
              setSelectedCard(null);
              setPaused(false); // Resume rotation
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background-image: url('https://images.unsplash.com/photo-1446776709462-d6b525c57bd3');
          background-attachment: fixed;
          background-size: cover;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
      <div>
     
      </div>
      <div>
        
      </div>
      <div>
     
      </div>
    </div>
  );
  
};





export default ThreeDCarousel;
