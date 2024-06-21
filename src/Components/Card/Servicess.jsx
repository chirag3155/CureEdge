import { ServicesData } from "@/Components/Shared/Consts";
import Banner1 from "../Main/Services/Banner1";
import { useState } from "react";
import SectionWrapper from "../Main/SectionWrapper";
import CardList from "./CardList";

const Services1 = () => {
  const [SelectService, setSelectService] = useState("cardiology"); // Assuming 'cardiology' is the default value

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );

  return (
    <SectionWrapper id="services">
      <div className="text-center my-8">
        <div className="flex justify-center items-center space-x-4">
          <div className="w-20 h-1 bg-teal-400"></div>
          <h1 className="md:text-4xl text-2xl font-bold">Services</h1>
          <div className="w-20 h-1 bg-teal-400"></div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <CardList />
      </div>
      <Banner1 />
    </SectionWrapper>
  );
};

export default Services1;
