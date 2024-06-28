import { Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <>
      <div className="text-[#1d4d85] app min-w-[280px] min-h-screen  ">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
