import { MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FooterData } from "../Shared/Consts";
import SocialsDiv from "../Socials/SocialsDiv";
import ContactDiv from "./ContactDiv";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1d4d85]  text-white relative overflow-hidden">
      <div className="max-w-[1250px]  w-full m-auto flex justify-between gap-5 flex-wrap md:flex-nowrap md:py-28 py-10 px-5">
        <div className="md:w-[30%]  w-full font-bold text-3xl">
          <h2 className="text-green-500">CareEdge</h2>
          <p className="text-sm my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            commodi quibusdam voluptatibus odio provident voluptas pariatur qui,
          </p>
          <SocialsDiv />
        </div>
        <div className="md:w-[50%]  w-full flex gap-3 md:justify-evenly justify-start flex-wrap">
          <div>
            <p className="font-bold text-base mb-3">Departments</p>
            <ul>
              {FooterData.departments.map((department, index) => (
                <li key={index} className="text-sm">
                  {department}
                </li>
              ))}
            </ul>
          </div>
          <ul>
            <p className="font-bold text-base mb-3">Quick Links</p>
            {FooterData.link.map((link) => (
              <a href={link.link} key={link.id}>
                <li className="hover:text-teal-400 cursor-pointer text-sm">
                  {link.name}
                </li>
              </a>
            ))}
          </ul>
          <ul>
            <p className="font-bold text-base mb-3 ">Contact Us</p>

            <li className="flex items-center gap-2 my-2 text-sm">
              <div className="w-auto inline-block rounded-full p-2 overflow-visible bg-teal-400">
                <PhoneIcon className="w-3 text-white " />
              </div>
              <div className="block">
                <span className="block">+91 909146768</span>{" "}
                <span className="block">+91 919999991</span>
              </div>
            </li>
            <li className="flex items-center gap-2 my-2 text-sm">
              <div className="w-auto inline-block rounded-full p-2 overflow-visible bg-teal-400">
                <IoIosMail className="w-3 text-white " />
              </div>
              <div className="block">
                <span className="block">careedge@gmail.com</span>{" "}
                <span className="block">careedge@gmail.com</span>
              </div>
            </li>
            <li className="flex items-center gap-2 my-2 text-sm">
              <div className="w-auto inline-block rounded-full p-2 overflow-visible bg-teal-400">
                <FaLocationDot className="w-3 text-white " />
              </div>
              <div className="block">
                <span className="block text-sm max-w-[150px]">
                  11 care edge Cort, 11-C Lucknow India
                </span>{" "}
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-[20%] w-full ">
          <ContactDiv />
        </div>
      </div>
      <div className="max-w-[1250px] w-full py-5 border-white border-t-2 m-auto md:text-lg text-sm text-[#ffffffda] md:text-left text-center">
        Website Terms | Privacy Policy | Accessibility Statement | CA
        Transparency in Supply Chains Act | Supplier Code of Conduct | Marketing
        to Children | Do Not Sell My Information
        <h4 className="md:text-lg text-sm mt-2">
          {" "}
          &copy; 2024 CareEdge LLC All rights reserved
        </h4>
      </div>
      <div className="max-w-screen-md w-full h-7 bg-teal-400 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-xl"></div>
    </div>
  );
};

export default Footer;
