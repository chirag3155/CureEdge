import { DoctorsData } from "@/Components/Shared/Consts";
import SectionWrapper from "../SectionWrapper";
import Doctor from "./Doctor";
import aboutus from "../../../assets/Images/Doctors/aboutus.png";

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      {/* <h3 className="text-4xl font-bold text-center mb-20">
        Recommended Hospitals
      </h3>
      {/* <div className="flex justify-between gap-10 overflow-auto px-5 md:p-0">
        {DoctorsData.doctors.map((doctor, index) => (
          <Doctor key={index} doc={doctor} />
        ))}
      </div> */}

      <div className="text-center my-8">
        <div className="flex justify-center items-center space-x-4">
          <div className="w-20 h-1 bg-teal-400"></div>
          <h1 className="text-3xl font-bold">About Us</h1>
          <div className="w-20 h-1 bg-teal-400"></div>
        </div>
      </div>
      <div className="h-max"></div>
      <div className="flex flex-wrap items-center max-w-full justify-normal">
        <div className="flex-1 p-4">
          <img className="max-w-full h-auto" src={aboutus} alt="About Us" />
        </div>
        <div className="w-1/12"></div>
        <div className="flex-1 p-4 text-justify text-xs sm:text-base md:text-lg">
          {DoctorsData.desc}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Doctors;
