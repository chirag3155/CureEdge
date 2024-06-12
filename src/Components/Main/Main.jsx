import Home from "@/Components/Main/Home/Home";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
import Reviews from "./Review/Reviews";
import CardList from "../Card/cardList";

const Main = () => {
  return (
    <>
    <Home/>
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <CardList/>
      <Services />
      <Doctors />
      <Reviews />
      
    </div>
    </>
  );
};

export default Main;
