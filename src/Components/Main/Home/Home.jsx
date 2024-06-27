import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DescNums from "./DescNums";
import SectionWrapper from "../SectionWrapper";
import SearchContainer from "./SearchContainer";

const images = [
  "https://conectandonegocios.com/uploads/noticias/1704743646.jpg",
  "https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930.jpg",
  "https://jdcorporateblog.com/wp-content/uploads/2020/04/Online-Doctor.jpg",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col items-center md:pt-36 sm:pt-28 pt-20"
    >
      <div className="relative w-full h-96 md:h-[calc(100vh-200px)] overflow-hidden mb-4 shadow-lg">
        <AnimatePresence initial={false}>
          {images.map((image, index) => (
            index === currentIndex && (
              <motion.img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.8 } }}
              />
            )
          ))}
        </AnimatePresence>
      </div>
      <div className="flex space-x-2 mb-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <SearchContainer />
      <DescNums />
    </div>
  );
};

export default Home;
