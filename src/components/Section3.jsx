import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Split text into words to apply the animation
const headingWords = ["WHY", "WE'RE", "HERE"];
const subheadingText = [
  "Most businesses aren’t short on tools.",
  "They’re short on time",
  "And clarity.",
  "And a team that truly gets it."
];
const paragraphText = [
  "At Urban Orbit, we exist for the human behind the hustle — the overwhelmed founder,",
  "the passionate creator, the visionary business owner. You're not just a project on our timeline.",
  "You’re a person with a dream that matters."
];

const wordVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15, // Increased delay for each word to slow down the animation
      duration: 0.4,    // Slowed down duration for word animation
      ease: 'easeOut',
    },
  }),
};

export default function Section3() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className=" min-h-screen text-center text-white bg-[#35378D] rounded-[170px] ease-out w-[70%] mx-auto bg-opacity-50 py-1 bg-chat-gradient backdrop-blur-3xl"
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="text-7xl font-bold mt-[6%] ml-[15%]">
        <div className="flex justify-start space-x-6">
          {headingWords.map((word, i) => ( 
            <motion.span
              key={i}
              className="inline-block"
              custom={i}
              initial="hidden"
              animate={controls}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subheading */}
      <div className="text-4xl my-4 font-semibold mb-12 text-left w-[70%] mx-auto">
        {subheadingText.map((text, i) => (
          <motion.div
            key={i}
            className="my-2"
            custom={i + headingWords.length}
            initial="hidden"
            animate={controls}
            variants={wordVariants}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Paragraph Text */}
      <div className="mx-auto text-left mt-[-3%] w-[70%] mb-[7%]">
        {paragraphText.map((text, i) => (
          <motion.p
            key={i}
            className="text-4xl font-semibold my-2"
            custom={i + headingWords.length + subheadingText.length}
            initial="hidden"
            animate={controls}
            variants={wordVariants}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}