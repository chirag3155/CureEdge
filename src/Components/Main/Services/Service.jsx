import React from 'react';

const Service = ({ SelectService, setSelectService, service }) => {
  const lowerCaseService = service.title.toLowerCase().replace(/\s+/g, '');

  return (
    <div
      onClick={() => setSelectService(lowerCaseService)}
      className={`${
        SelectService === lowerCaseService
          ? 'bg-[#6adcff] rounded-ss-[25px] xs:rounded-ss-[50px] sm:rounded-ss-[75px]'
          : 'bg-[#ffffffd1] hover:bg-[#c2f1ff] rounded-lg'
      } cursor-pointer transition-all duration-300 ease-in-out delay-100 rounded-lg flex flex-col items-center gap-4 p-2 xs:p-4 lg:p-10 shadow-md hover:-translate-y-1 hover:scale-110`}
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl">
        {service.title}
      </p>
    </div>
  );
};

export default Service;
