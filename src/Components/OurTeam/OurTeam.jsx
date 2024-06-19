import team1 from "../../assets/Images/Team/team1.jpeg";
import team2 from "../../assets/Images/Team/team2.jpeg";
import { FaLinkedin } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="w-full  mt-28 py-5">
      <div className="w-full flex justify-center items-center space-x-4">
        <div className="w-20 h-1 bg-teal-400"></div>
        <h1 className="md:text-4xl text-2xl font-bold text-center">Our Team</h1>
        <div className="w-20 h-1 bg-teal-400"></div>
      </div>
      <div className="w-full flex md:flex-row flex-col my-12 gap-8">
        <div className="md:w-1/2 w-full  flex flex-col justify-center items-center gap-5">
          <div className="md:w-[80%] w-full h-auto">
            <img
              src={team1}
              alt="Founder Abhyuday Singh"
              loading="lazy"
              className="w-full rounded-xl bg-slate-200"
            />
            <div className="w-full flex justify-between items-center mt-5">
              <h2 className="text-2xl font-bold text-black">
                Founder - <span className="text-blue-500">Abhyuday Singh</span>
              </h2>
              <a href="#/linkedin.com" target="_blank">
                <FaLinkedin className="text-blue-500 w-8 h-8 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className=" md:w-[80%] w-full h-auto text-base text-gray-700">
            <span className="text-blue-500 font-semibold">Abhyuday Singh</span>{" "}
            is the driving force behind CureEdge, bringing a wealth of
            experience, passion, and a visionary approach to the world of
            healthcare technology. With a background in both medical sciences
            and software engineering.
          </div>
        </div>
        <div className="md:w-1/2 w-full  flex flex-col justify-center items-center gap-5">
          <div className="md:w-[80%] w-full h-auto">
            <img
              src={team2}
              alt="Co-Founder Rishika Jaiswal"
              loading="lazy"
              className="w-full rounded-xl bg-slate-200"
            />
            <div className="w-full flex justify-between items-center mt-5">
              <h2 className="text-2xl font-bold text-black">
                Co-Founder -{" "}
                <span className="text-blue-500">Rishika Jaiswal</span>
              </h2>
              <a href="#/linkedin.com" target="_blank">
                <FaLinkedin className="text-blue-500 w-8 h-8 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className=" md:w-[80%] w-full h-auto text-base text-gray-700">
            <span className="text-blue-500 font-semibold">Rishika Jaiswal</span>{" "}
            Rishika Jaiswal is the co-founder of CureEdge, playing a pivotal
            role in shaping the company's vision and driving its mission
            forward. With a robust background in healthcare management and
            strategic development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
