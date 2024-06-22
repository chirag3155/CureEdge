import React from "react";
import bedImage from "../../assets/Images/Recommendation/image103.png";
import doctorsImage from "../../assets/Images/Recommendation/image104.png";
import nearestImage from "../../assets/Images/Recommendation/image101.png";
import timeImage from "../../assets/Images/Recommendation/image102.png";
import locationImage from "../../assets/Images/Recommendation/image105.png";
import hospitalImage from "../../assets/Images/Recommendation/Rectangle4185.png";

const Card = ({ hospital, onCallNow, onBookAppointment }) => {
  return (
    <div className="w-full flex flex-col gap-2 h-auto border-2 border-teal-400 rounded-xl px-2 py-5">
      {/* Left Hospital Image Section */}
      <div className="w-full h-[200px] rounded-xl overflow-hidden">
        <img
          src={hospital.frontImage || hospitalImage}
          alt="Hospital"
          className="w-full h-full"
        />
      </div>
      {/* Right Description Section */}
      <div className="w-full h-full ">
        <h2 className="text-base font-semibold text-slate-700">
          {hospital.name} - {hospital.title}
        </h2>
        <div className="flex w-full justify-start gap-3 my-2">
          <div className="flex items-center border-[1px] p-2 px-4 gap-6 rounded-md shadow-sm border-gray-300">
            <img src={bedImage} alt="Bed" className="w-5 h-5" />
            <p className="ml-2 text-sm">{hospital.beds}</p>
          </div>
          <div className="flex items-center border-[1px] p-1 px-3 gap-6 rounded-md shadow-sm border-gray-300">
            <img src={doctorsImage} alt="Doctors" className="w-5 h-5" />
            <p className="ml-2 text-sm">{hospital.doctors}</p>
          </div>
        </div>
        <div className="mt-2 flex gap-3">
          <p className="flex gap-1 items-center text-xs text-gray-700">
            <img src={nearestImage} alt="Nearest" className="w-4 h-4" />{" "}
            {hospital.near}
          </p>
          <p className="text-xs text-gray-700">{hospital.stateCity}</p>
        </div>
        <div className="my-2">
          <p className="flex gap-1 items-center text-xs text-gray-700">
            <img src={timeImage} alt="Time" className="w-4 h-4" />{" "}
            {hospital.openingTime} - {hospital.closingTime}
          </p>
        </div>
        <div className="">
          <p className="flex gap-1 items-center text-xs text-gray-700">
            <img src={locationImage} alt="Location" className="w-4 h-4" />{" "}
            {hospital.location}
          </p>
        </div>
        <div className="w-full mt-2 flex gap-2">
          <button
            className="w-full px-5 py-2 border-[1px] border-teal-400 text-xs text-teal-400 rounded-lg shadow-lg hover:bg-teal-400 ease-in duration-200 hover:text-white"
            onClick={onCallNow}
          >
            Call Now
          </button>
          <button
            className="w-full px-5 py-2 border-[1px] border-teal-400 text-xs text-white bg-teal-400 rounded-lg shadow-lg"
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
