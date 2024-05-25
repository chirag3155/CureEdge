import Logo from '@/assets/Images/Logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';

const Header = () => {
  const [selectedPage, setSelectedPage] = useState('home'); // Assuming 'home' is the default value
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home'); // Reset selected page when user scrolls to top
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
    className={`${flexBetween} ${
      isTopOfPage ? '' : 'bg-[#84ceff]'
    } transition fixed top-0 z-30 w-full p-5 md:px-16`}
  >
      <img className="w-10 sm:w-20" src={Logo} alt="Logo" />
      <NavBar
        flexBetween={flexBetween}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default Header;
