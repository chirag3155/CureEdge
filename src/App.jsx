import { Route, Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import AboutUs from "./Pages/AboutUs";
import Services from "./Components/Main/Services/Services";
import Blogs from "./Pages/Blogs";
import Prices from "./Pages/Prices";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

const Home = () => {
  return (
    <>
      <div className="text-[#1d4d85] app min-w-[280px] min-h-screen  bg-[url('src/assets/images/heroi-bg.webp')]">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
