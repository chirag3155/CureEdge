import React from "react";
import bedImage from "../../assets/Images/Recommendation/image103.png";
import doctorsImage from "../../assets/Images/Recommendation/image104.png";
import nearestImage from "../../assets/Images/Recommendation/image101.png";
import timeImage from "../../assets/Images/Recommendation/image102.png";
import locationImage from "../../assets/Images/Recommendation/image105.png";
import hospitalImage from "../../assets/Images/Recommendation/Rectangle4185.png";

const Card = ({ hospital, onCallNow, onBookAppointment }) => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-2 md:h-[350px] h-auto border-2 border-teal-400 rounded-lg px-3 py-8">
      {/* Left Hospital Image Section */}
      <div className="md:w-[45%] w-full max-h-[450px] md:h-full h-[200px] rounded-xl overflow-hidden">
        <img
          src={hospital.frontImage || hospitalImage}
          alt="Hospital"
          className="w-full h-full"
        />
      </div>
      {/* Right Description Section */}
      <div className="md:w-[55%] w-full h-full relative">
        <h2 className="text-lg font-semibold text-slate-700">
          {hospital.name} - {hospital.title}
        </h2>
        <div className="flex w-full justify-start gap-3 my-2">
          <div className="flex items-center border-[1px] p-2 px-4 gap-6 rounded-md shadow-sm border-gray-300">
            <img src={bedImage} alt="Bed" className="w-7 h-7" />
            <p className="ml-2">{hospital.beds}</p>
          </div>
          <div className="flex items-center border-[1px] p-2 px-4 gap-6 rounded-md shadow-sm border-gray-300">
            <img src={doctorsImage} alt="Doctors" className="w-7 h-7" />
            <p className="ml-2">{hospital.doctors}</p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <p className="flex gap-1 items-center text-sm text-gray-700">
            <img src={nearestImage} alt="Nearest" className="w-4 h-4" />{" "}
            {hospital.near}
          </p>
          <p className="text-sm text-gray-700">{hospital.stateCity}</p>
        </div>
        <div className="my-2">
          <p className="flex gap-1 items-center text-sm text-gray-700">
            <img src={timeImage} alt="Time" className="w-4 h-4" />{" "}
            {hospital.openingTime} - {hospital.closingTime}
          </p>
        </div>
        <div className="my-2">
          <p className="flex gap-1 items-center text-sm text-gray-700">
            <img src={locationImage} alt="Location" className="w-4 h-4" />{" "}
            {hospital.location}
          </p>
        </div>
        <div className="mt-3 flex md:flex-row flex-col gap-2">
          <button
            className="px-5 py-2 border-[1px] border-teal-400 text-sm text-gray-500 rounded-sm shadow-lg hover:bg-teal-400 ease-in duration-200 hover:text-white"
            onClick={onCallNow}
          >
            Call Now
          </button>
          <button
            className="px-5 py-2 border-[1px] border-teal-400 text-sm text-white bg-teal-400 rounded-sm shadow-lg"
            onClick={onBookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
