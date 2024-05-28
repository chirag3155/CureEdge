import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';

const images = [
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="w-full md:w-1/2 max-w-xs lg:max-w-xl">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Your Health Is Our Top Priority
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Securely share your comprehensive medical history with doctors and
            loved ones, for better communication and care.
          </p>
          <Button className="transition duration-300 ease-in-out bg-teal-400 hover:bg-teal-600 text-white py-2 px-4 rounded">
            Appointment Now
          </Button>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
