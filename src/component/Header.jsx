import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/h5.jpg')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-orange-900">
            Discover a place you'll love to live
          </p>
        </motion.h2>

        <div className="space-x-6 mt-16">
          <motion.a
            href="#Project"
            className="relative inline-block px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 transition-transform transform hover:scale-105 hover:shadow-[0_0_10px_rgba(252,211,77,0.8)]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Projects
          </motion.a>

          <motion.a
            href="#contact"
            className="relative inline-block px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 transition-transform transform hover:scale-105 hover:shadow-[0_0_10px_rgba(192,132,252,0.8)]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
