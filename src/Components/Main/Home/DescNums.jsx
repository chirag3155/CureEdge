import { descNums } from '@/Components/Shared/Consts';

const DescNums = () => {
  return (
    <div className="flex m-5 md:m-[30px] mt-20 px-10 xs:px-16 xs:m-[10px] sm:m- sm:px-5 md:px-0 flex-wrap md:flex-nowrap text-center justify-center md:justify-center gap-2 sm:gap-7 lg:gap-[40px]">
      {descNums.map((descNum, index) => (
        <div
           className="shadow-lg h-[113px] shadow-cyan-500/70 rounded-3xl shadow-xl p-4 md:px-1 lg:w-60 w-20 bg-[#ffffffd1] w-full xs:w-[50%] sm:w-[25%] md:w-[20%] lg:w-[14%] xl:w-[14%] m-2 hover:-translate-y-1 hover:scale-110 duration-300"
          style={{ background: 'linear-gradient(90.26deg, rgb(160, 221, 243) 0.17%, rgb(128 255 242) 99.77%)' }}
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2">{descNum.num}</h3>
          <p className="lg:text-base text-sm">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;
