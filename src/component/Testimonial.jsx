import React from "react";
import { testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts slightly below
      whileInView={{ opacity: 1, y: 0 }} // Moves up as it enters viewport
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false }} // Reanimates on scroll
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }} // Starts above
        whileInView={{ opacity: 1, y: 0 }} // Moves to normal position
        transition={{ duration: 1 }} // Duration
        className="text-2xl sm:text-4xl font-bold mb-2 text-center"
      >
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        initial={{ opacity: 0, y: -20 }} // Starts slightly above
        whileInView={{ opacity: 1, y: 0 }} // Moves down smoothly
        transition={{ duration: 1, delay: 0.2 }} // Delayed animation
        className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
      >
        Real stories from those who found home with us.
      </motion.p>

      {/* Testimonials Grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.3 }} // Delay between children animations
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center bg-white"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
            />
            <p className="text-lg font-medium mb-4">{testimonial.text}</p>
            <h3 className="font-bold">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.designation}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
