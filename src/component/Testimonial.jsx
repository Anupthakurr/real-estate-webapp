import React, { useState, useEffect } from "react";
import { testimonialsData } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // Time between slides (in milliseconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container mx-auto py-16 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        What Our{" "}
        <span className="underline decoration-wavy decoration-pink-500">
          Clients
        </span>{" "}
        Say
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
        Hear from our happy customers about their experiences.
      </p>

      <div className="relative flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl p-8 rounded-3xl shadow-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].alt}
                className="w-24 h-24 rounded-full border-4 border-white mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {testimonialsData[currentIndex].name}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                {testimonialsData[currentIndex].title}
              </p>
              <p className="text-center mb-4 italic">
                "{testimonialsData[currentIndex].text}"
              </p>
              <div className="flex gap-1">
                {Array.from({
                  length: testimonialsData[currentIndex].rating,
                }).map((_, index) => (
                  <span key={index} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonial;
