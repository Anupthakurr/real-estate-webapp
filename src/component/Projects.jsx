import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToshow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - cardsToshow : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1, x: 0 }}
      className="container mx-auto py-12 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Project"
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        Projects{" "}
        <span className="underline decoration-wavy decoration-blue-500">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
        Explore my recent projects below
      </p>

      <div className="flex justify-center items-center mb-8 gap-4">
        <button
          onClick={prevProject}
          className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:scale-110 shadow-lg transition-transform"
        >
          ←
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:scale-110 shadow-lg transition-transform"
        >
          →
        </button>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="flex gap-10 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToshow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-t-xl" />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-indigo-100">
                <h2 className="text-xl font-bold mb-2 text-blue-700">
                  {project.title}
                </h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
