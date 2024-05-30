import { descNums } from '@/Components/Shared/Consts';

const DescNums = () => {
  return (
    <div className="flex  px-10 xs:px-16 sm:px-5 md:px-0 gap-5 flex-wrap items-center md:flex-nowrap text-center justify-center md:justify-around mt-10">
      {descNums.map((descNum, index) => (
        <div
          className="shadow-lg shadow-cyan-500/70 rounded-3xl shadow-xl p-6 md:px-2 lg:w-1/5 w-xl bg-[#ffffffd1] hover:-translate-y-1 hover:scale-110  duration-300"
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
