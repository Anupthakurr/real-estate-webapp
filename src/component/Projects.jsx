import React, { useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToshow, setcardstoshow] = useState(1);

  useEffect(() => {
    const updateCardsToshow = () => {
      if (window.innerWidth >= 1024) {
        setcardstoshow(projectsData.length);
      } else {
        setcardstoshow(1);
      }
    };
    updateCardsToshow();
    window.addEventListener("resize", updateCardsToshow);
    return () => window.removeEventListener("resize", updateCardsToshow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'"
      id="Project"
    >
      <h1 className="text-2xl m:text-4xl font-bold mb-2 text-center">
        projects{" "}
        <span className="undeline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Your dream property is just a step away.
      </p>
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToshow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
