import React from "react";
import { testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false }}
      className="container mx-auto py-16 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-bold mb-6 text-center"
      >
        Customer{" "}
        <span className="underline decoration-wavy decoration-indigo-500">
          Testimonials
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
      >
        Real stories from those who found their dream home with us.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.3 }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[340px] border rounded-lg shadow-lg p-8 bg-white hover:shadow-2xl transition-all duration-300"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-500"
              src={testimonial.image}
              alt={`Testimonial from ${testimonial.name}`}
            />
            <p className="text-lg font-medium mb-4 text-gray-700">
              {testimonial.text}
            </p>
            <h3 className="font-bold text-indigo-600">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.designation}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
