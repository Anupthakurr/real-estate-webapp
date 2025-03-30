import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-10 px-6 md:px-20 lg:px-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold mb-4 md:mb-0">Apna Homes</div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Apna Homes. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
