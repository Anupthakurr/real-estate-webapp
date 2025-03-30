import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
        <span className="underline decoration-wavy decoration-indigo-500">
          Crafting Excellence, Building Trust
        </span>
      </h1>
      <p className="text-gray-500 max-w-xl text-center mb-12">
        Redefining Real Estate – Where Dreams Find a Home
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-20"
      >
        <img
          src={assets.brand1_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-10 w-full">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "150+", label: "Properties Listed" },
              { value: "100+", label: "Cities Covered" },
              { value: "24/7", label: "Customer Support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative p-6 bg-white rounded-full shadow-xl text-center border border-indigo-300 overflow-hidden transition-transform transform hover:scale-110 hover:shadow-2xl"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-30 animate-pulse" />
                <p className="relative text-3xl font-bold text-indigo-600 z-10">
                  {item.value}
                </p>
                <p className="relative z-10">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="my-10 max-w-lg text-center md:text-left">
            Welcome to Apna Homes, where dreams of finding the perfect home
            become a reality. With years of expertise in the real estate
            industry, we specialize in connecting buyers, sellers, and investors
            with properties that match their unique needs.
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
