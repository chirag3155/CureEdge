import { DoctorsData } from "@/Components/Shared/Consts";
import SectionWrapper from "../SectionWrapper";
import aboutus from "../../../assets/Images/Doctors/aboutus.png";

const Doctors = () => {
  return (
    <SectionWrapper id="doctors">
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image Column (Left on all screens) */}
          <div className="md:order-1 flex items-center justify-center">
            <img
              className="rounded-lg shadow-lg md:max-h-full object-cover w-full"
              src={aboutus}
              alt="About Us"
            />
          </div>
          {/* Text Column (Right on all screens) */}
          <div className="md:order-2 flex items-center justify-center">
            <div className="p-4 max-w-lg">
              <h2 className="text-primary md:text-4xl text-2xl font-semibold mb-2">
                About Us
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome to CareEdge
              </h1>
              <p className="text-base mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
              <p className="text-base mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i>{" "}
                  Skilled Instructors
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i> Bed
                  Booking
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i> Tests
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i> Expert
                  Assistance
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i> Health
                  Check Up
                </p>
                <p className="flex items-center">
                  <i className="fa fa-arrow-right text-primary me-2"></i>{" "}
                  International Certificate
                </p>
              </div>
              {/* Read More Button */}
              <a
                href="#"
                className="bg-primary text-white py-3 px-6 rounded-lg inline-block hover:bg-primary-dark transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Doctors;
