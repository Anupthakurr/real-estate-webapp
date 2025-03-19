import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion"; // Fix import

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }} // Starts off-screen to the right
      animate={{ opacity: 1, x: 0 }} // Moves to center
      transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition
      whileInView={{ opacity: 1, x: 0 }} // Ensures visibility while in view
      viewport={{ once: false }} // Allows re-animation on scroll
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col md:flex-row items-center md:items-start md:gap-20"
      >
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center md:items-start mt-10 text-gray-600"
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28">
            {[
              { value: "10+", label: "years of Excellence" },
              { value: "12+", label: "projects completed" },
              { value: "20+", label: "Mn. sq. ft Delivered" },
              { value: "25+", label: "ongoing projects" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <p className="text-4xl font-medium text-gray-800">
                  {item.value}
                </p>
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="my-10 max-w-lg">
            Welcome to Apna Homes, where dreams of finding the perfect home
            become a reality. With years of expertise in the real estate
            industry, we specialize in connecting buyers, sellers, and investors
            with properties that match their unique needs and aspirations.
          </p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="group relative inline-flex items-center text-lg font-semibold shadow-lg"
            href="/services"
          >
            <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-indigo-500 px-8 py-4 transition duration-300 ease-in-out group-hover:text-white">
              <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"></span>
              <span className="absolute inset-0 w-full h-full transform translate-x-4 translate-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:shadow-2xl"></span>
              <span className="relative">Learn More</span>
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
