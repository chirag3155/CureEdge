import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SectionWrapper = ({ id, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.to(section, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 50%", // Adjust this value to control when the animation starts
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="md:py-16 py-10 opacity-0" id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default SectionWrapper;
