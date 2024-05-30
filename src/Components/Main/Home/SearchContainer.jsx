import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchContainer = () => {
  const [location, setLocation] = useState(null);

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // Add your logic to handle the location data here
        },
        (error) => {
          console.error('Error obtaining location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <motion.div
      className="searchContainer searchContainer--bg"
      style={{ backgroundImage: "url('https://assets.oyoroomscdn.com/cmsMedia/115d178d-ef59-4212-a6ed-953eb4ce8241.jpg')" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="searchContainer__wrapper p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="searchContainer__tagline text-2xl md:text-3xl font-bold mb-4 text-center text-white">
          Over 174+ hospitals across 35+ states
        </h1>
        <div className="searchContainer__searchWidgetContainer">
          <div className="oyo-row oyo-row--no-spacing homeSearchWidget grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="homeSearchWidget__gutter homeSearchWidget__autoComplete">
              <div className="autoCompleteDesktop autoCompleteDesktop--home w-full">
                <form className="autoCompleteDesktop__searchContainer">
                  <input
                    id="autoComplete__home"
                    type="text"
                    className="autoCompleteDesktop__searchBox autoCompleteDesktop__searchBox--home autoCompleteDesktop__searchBox--nearbyVisible w-full p-2 border border-gray-300 rounded transition duration-300 ease-in-out hover:bg-gray-100"
                    placeholder="Search by city, hotel, or neighborhood"
                    autoComplete="off"
                    required
                  />
                  <div className="autoCompleteDesktop__nearbyComponentWrapper flex items-center mt-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onClick={handleNearMeClick}
                      className="nearbyComponent ripple flex items-center cursor-pointer"
                    >
                      <span className="nearbyComponent__iconWrapper mr-2">
                        <svg className="nearbyComponent__icon w-5 h-5 text-blue-500" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M12 15c-1.196 0-2.172-.974-2.172-2.172S10.804 10.655 12 10.655s2.172.974 2.172 2.172S13.196 15 12 15zm0-3c-.368 0-.672.304-.672.672S11.632 12.344 12 12.344s.672-.304.672-.672S12.368 12 12 12zm0-7.5c-4.034 0-7.314 3.28-7.314 7.314 0 4.003 7.314 13.186 7.314 13.186s7.314-9.141 7.314-13.186C19.314 7.78 16.034 4.5 12 4.5zm0 12.002c-2.073 0-3.756-1.682-3.756-3.756 0-.9.28-1.787.806-2.533.21-.324.47-.615.77-.872.317.296.667.543 1.05.735l.364.158.365-.158c.383-.166.733-.43 1.05-.735.3.257.56.548.77.872.526.746.806 1.633.806 2.533 0 2.074-1.682 3.756-3.755 3.756z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-sm font-bold nearbyComponent__text text-blue-500">Near me</span>
                    </motion.div>
                  </div>
                </form>
              </div>
            </div>
            <div className="homeSearchWidget__gutter homeSearchWidget__dateRangePicker">
              <div className="datePickerDesktop bg-white datePickerDesktop--home flex items-center justify-between border border-gray-300 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                <div className="datePickerDesktop__checkInOut">
                  <span className="datePickerDesktop__checkInOutText text-black">Wed, 29 May</span>
                </div>
              </div>
            </div>
            <div className="homeSearchWidget__gutter homeSearchWidget__guestRoomPicker">
              <div className="guestRoomPicker bg-white guestRoomPicker--home flex items-center justify-between border border-gray-300 p-2 rounded transition duration-300 ease-in-out hover:bg-gray-100">
                <div className="guestRoomPicker__guestRoomCount text-black">
                  1 Bed
                </div>
              </div>
            </div>
            <div className="homeSearchWidget__gutter homeSearchWidget__search flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                className="searchButton searchButton--home bg-blue-500 md:h-10 lg:h-10 xl:h-10 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                Search
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchContainer;
