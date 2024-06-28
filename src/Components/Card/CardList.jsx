import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import styles from "./Card.module.css"; // Import the CSS module

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: "card1",
    frontImage:
      "https://i.pinimg.com/originals/51/64/ff/5164ff92dba683bae95cef5148b98dbf.jpg",
    title: "Bed Booking",
    rating: 4,
    people: 5,
    rooms: 4,
    beds: 3,
    baths: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?",
    location: "BED BOOKING",
    // price: "Price",
  },
  {
    id: "card2",
    frontImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVdOH1Z-qv5yweYHhCrFKbzK1sgJ6AKNaDg&s",
    title: "Tests",
    rating: 3.5,
    people: 4,
    rooms: 3,
    beds: 2,
    baths: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?",
    location: "TESTS",
    // price: "Price",
  },
  {
    id: "card3",
    frontImage:
      "https://static.vecteezy.com/system/resources/previews/013/141/034/non_2x/book-doctor-appointment-card-template-schedule-hospital-visit-editable-social-media-post-design-flat-color-illustration-for-poster-web-banner-ecard-vector.jpg",
    title: "Appointment",
    rating: 5,
    people: 8,
    rooms: 7,
    beds: 5,
    baths: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore, temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut facilis laudantium nam!",
    location: "APPOINTMENT",
    // price: "Price",
  },
  {
    id: "card4",
    frontImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_1nlSipZ0xkaZH4wamByNyzg9bBoIZY0bA&s",
    title: " Assistance",
    rating: 4.5,
    people: 2,
    rooms: 1,
    beds: 1,
    baths: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?",
    location: "ASSISTANCE",
    // price: "Price",
  },
];

const CardList = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div
      className={
        "w-full h-full flex flex-wrap gap-4 mb-8 xl:justify-between justify-center items-center"
      }
    >
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          ref={(el) => (cardsRef.current[index] = el)}
          {...card}
        />
      ))}
    </div>
  );
};

export default CardList;
