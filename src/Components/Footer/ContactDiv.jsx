import { BsPlay } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <h3 className="font-bold max-w-[250px] text-xl text-left">
        Download App
      </h3>
      <p className="text-sm mb-5">connect with care edge</p>
      <div className="w-full">
        <button className="py-2 px-6 rounded-md bg-black cursor-pointer flex items-center gap-2 ">
          <div>
            <FaGooglePlay className="text-xl" />
          </div>
          <div className="text-left text-xs leading-3">
            Available on the{" "}
            <span className="block text-base">Google Play</span>
          </div>
        </button>
        <button className="py-2 px-6 rounded-md bg-black cursor-pointer flex items-center gap-2 my-2">
          <div>
            <FaApple className="text-xl" />
          </div>
          <div className="text-left text-xs leading-3">
            Download on the<span className="block text-base">App Store</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContactDiv;
