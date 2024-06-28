import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team1 from "../../assets/Images/Team/team1.png";
import team2 from "../../assets/Images/Team/team2.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import SectionWrapper from "../Main/SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.4,
        }
      );
    });
  }, []);

  return (
    <SectionWrapper>
      <div className="w-full py-5" id="team">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="md:text-4xl text-2xl text-center text-black ourteam-font">
            Meet the team!
          </h1>
          <p className="text-gray-500 text-center">
            Meet our diverse team of world-class creators, designers and problem
            solvers.
          </p>
        </div>
        <div className="w-full flex md:flex-row flex-col md:justify-center items-center my-16 md:gap-12 gap-8">
          <div
            className="w-[320px] bg-stone-50 px-5 py-6 bg flex flex-col justify-center items-center gap-5 shadow-lg"
            id="card1"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="w-[150px] bg-gray-300 border-[1px] border-zinc-100 shadow-md flex items-end relative rounded-full overflow-hidden">
              <div className="w-full h-full flex justify-center">
                <img src={team1} alt="Founder Abhyuday Singh" loading="lazy" />
              </div>
            </div>

            <div className="w-auto h-auto text-base text-gray-700 flex flex-col items-center justify-center">
              <h4 className="text-blue-900 text-xl font-bold text-center">
                Abhyuday Singh
              </h4>
              <h2 className="text-sm font-light my-2 px-5 py-1 text-gray-500 border-[1px] border-slate-400 rounded-sm">
                Founder
              </h2>
              <div className="text-center text-sm font-serif my-3">
                Abhyuday Singh is a visionary entrepreneur and the driving force
                behind Care Edge.
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#/linkedin.com" target="_blank">
                  <FaLinkedin className="text-gray-800 w-5 h-5 cursor-pointer" />
                </a>
                <a href="#/linkedin.com" target="_blank">
                  <FaInstagram className="text-gray-800 w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="w-[320px] bg-stone-50 px-5 py-6 bg flex flex-col justify-center items-center gap-5 shadow-lg"
            id="card3"
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="w-[150px] bg-zinc-400 border-[1px] border-zinc-100 shadow-md flex items-end relative rounded-full overflow-hidden">
              <div className="w-full h-full flex justify-center">
                <img src={team2} alt="Co Founder Rishika Jaiswal" loading="lazy" />
              </div>
            </div>

            <div className="w-auto h-auto text-base text-gray-700 flex flex-col items-center justify-center">
              <h4 className="text-blue-900 text-xl font-bold text-center">
                Rishika Jaiswal
              </h4>
              <h2 className="text-sm font-light my-2 px-5 py-1 text-gray-500 border-[1px] border-slate-400 rounded-sm">
                Co Founder
              </h2>
              <div className="text-center text-sm font-serif my-3">
                Abhyuday Singh is a visionary entrepreneur and the driving force
                behind Care Edge.
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#/linkedin.com" target="_blank">
                  <FaLinkedin className="text-gray-800 w-5 h-5 cursor-pointer" />
                </a>
                <a href="#/linkedin.com" target="_blank">
                  <FaInstagram className="text-gray-800 w-5 h-5 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurTeam;
