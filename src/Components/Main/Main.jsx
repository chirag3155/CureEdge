import Home from "@/Components/Main/Home/Home";
import Doctors from "./Doctors/Doctors";
import Reviews from "./Review/Reviews";
import Services1 from "../Card/Servicess";
import CardSection from "../Recommendation/CardSection";

const Main = () => {
  return (
    <>
      <Home />
      <div className="m-[80px]"> {/* Adjusted max-w-7xl for max width */}
        <Services1 />
        <CardSection />
        <Doctors />
        <Reviews />
      </div>
    </>
  );
};

export default Main;
