import Home from "@/Components/Main/Home/Home";
// import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
import Reviews from "./Review/Reviews";
// import CardList from "../Card/cardList";
import Services1 from "../Card/Servicess";
import CardSection from "../Recommendation/CardSection";
import OurTeam from "../OurTeam/OurTeam";

const Main = () => {
  return (
    <>
      <Home />
      <div className="max-w-[1430px] m-auto md:px-16 px-8">
        {/* <CardList /> */}
        {/* <Services /> */}
        <Services1 />
        <CardSection />
        <OurTeam />
        <Doctors />
        <Reviews />
      </div>
    </>
  );
};

export default Main;
