import { descNums } from "@/Components/Shared/Consts";

const DescNums = () => {
  return (
    // flex justify-evenly items-center flex-wrap
    <div className="max-w-[1250px]  w-full h-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 p-5 md:my-20 my-5 gap-5 gap-y-8 ">
      {descNums.map((descNum, index) => (
        <div
          className="min-h-[140px] max-h-[140px] max-w-[170px] w-full shadow-cyan-500/70 rounded-3xl shadow-xl  bg-[#ffffffd1]  hover:-translate-y-1 hover:scale-110 duration-300 flex items-center justify-center flex-col px-5"
          style={{
            background:
              "linear-gradient(90.26deg, rgb(160, 221, 243) 0.17%, rgb(128 255 242) 99.77%)",
          }}
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2 text-center">
            {descNum.num}
          </h3>
          <p className="lg:text-base text-sm text-center">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;
