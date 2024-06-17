import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import hospitalImage from "../../assets/Images/Recommendation/Rectangle4185.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSection = () => {
  // dummy data for cards
  const hospitalData = [
    {
      id: "card1",
      name: "City Hospital",
      title: "Comprehensive bed booking services",
      frontImage: hospitalImage,
      near: "1.5 Km",
      doctors: 5,
      stateCity: "Shivaji Nagar, Pune",
      beds: 3,
      location: "123 ABC Road, Shivaji Nagar, Pune",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
    {
      id: "card2",
      name: "Metro Health",
      title: "Advanced diagnostic tests available",
      frontImage: hospitalImage,
      near: "3 Km",
      doctors: 10,
      stateCity: "MG Road, Bengaluru",
      beds: 5,
      location: "456 XYZ Street, MG Road, Bengaluru",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
    {
      id: "card3",
      name: "General Hospital",
      title: "Easy doctor appointments with specialists",
      frontImage: hospitalImage,
      near: "2 Km",
      doctors: 8,
      stateCity: "Connaught Place, Delhi",
      beds: 7,
      location: "789 PQR Avenue, Connaught Place, Delhi",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
    {
      id: "card4",
      name: "St. Mary's Hospital",
      title: "24/7 medical assistance available",
      frontImage: hospitalImage,
      near: "4 Km",
      doctors: 6,
      stateCity: "Bandra, Mumbai",
      beds: 6,
      location: "567 LMN Lane, Bandra, Mumbai",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
    {
      id: "card5",
      name: "Sunshine Hospital",
      title: "Expert surgeons and modern facilities",
      frontImage: hospitalImage,
      near: "2.5 Km",
      doctors: 12,
      stateCity: "Salt Lake, Kolkata",
      beds: 10,
      location: "890 UVW Street, Salt Lake, Kolkata",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
    {
      id: "card6",
      name: "Apollo Hospital",
      title: "Specialized medical services available",
      frontImage: hospitalImage,
      near: "5 Km",
      doctors: 20,
      stateCity: "Anna Salai, Chennai",
      beds: 15,
      location: "1011 RST Road, Anna Salai, Chennai",
      openingTime: "10:00 AM",
      closingTime: "8:00 PM",
    },
  ];

  // slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true, // Auto start
    autoplaySpeed: 3000, // Slide change interval (3 seconds)
    responsive: [
      {
        breakpoint: 576, // small devices (phones)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992, // medium devices (tablets)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000, // extra large devices (large desktops, TVs)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full mt-32 h-auto">
      <div className="flex justify-center items-center space-x-4">
        <div className="w-20 h-1 bg-teal-400"></div>
        <h1 className="md:text-3xl text-xl font-bold text-center">
          Recommended Hospitals
        </h1>
        <div className="w-20 h-1 bg-teal-400"></div>
      </div>
      <div className="w-full mt-5 slick-container relative">
        <Slider {...sliderSettings}>
          {hospitalData.map((hospital) => (
            <div key={hospital.id} className="slick-slide px-2">
              <Card
                hospital={hospital}
                onCallNow={() => {
                  console.log("Call Now");
                }}
                onBookAppointment={() => {
                  console.log("Book Appointment");
                }}
              />
            </div>
          ))}
        </Slider>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-0 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-full shadow-md z-10 text-black"
          onClick={() => {
            document.querySelector(".slick-prev.slick-arrow").click();
          }}
        >
          {"<"}
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 translate-x-1/2 right-0 bg-gray-100 bg-opacity-75 px-4 py-2 rounded-full shadow-md z-10 text-black"
          onClick={() => {
            document.querySelector(".slick-next.slick-arrow").click();
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CardSection;
