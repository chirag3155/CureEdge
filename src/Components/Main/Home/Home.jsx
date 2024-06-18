import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import SearchContainer from './SearchContainer';
// import CardComponent from './CardComponent';

const images = [
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
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
    <SectionWrapper id="home" className="flex flex-col items-center">
      <div className="relative w-full h-80 md:h-96 overflow-hidden mb-10 shadow-lg shadow-cyan-500/50 ">
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <SearchContainer />
<DescNums/>
      {/* Container for DescNums */}
      
      
      {/* <OyoExpanding/> */}
    </SectionWrapper>
  );
};

export default Home;
