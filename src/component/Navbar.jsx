import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0  w-full z-10">
      <div className=" container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img className="w-14 h-15" src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer text-orange-900 hover:text-gray-400 "
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer text-orange-900
          hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#Project"
            className="cursor-pointer text-orange-900
          hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer text-orange-900
          hover:text-gray-400"
          >
            Testinomials
          </a>
        </ul>
        <button className="hidden md:block bg-red px-8 py-2 rounded-full text-orange-900">
          Sign up
        </button>
        <img
          onClick={() => setshowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>
      {/* ---------------------------mobile-menu---------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full " : "h-0 w-0"
        } top-0 bottom-0 right-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setshowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer "
            alt=""
          />
        </div>
        <ul className="flex flex-col  gap-2 mt-5 px-5 text-1 font-medium">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
