// src/Components/Link.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const handleClick = () => {
    setSelectedPage(page);
  };

  return (
    <NavLink
      to={`/${page.toLowerCase().replace(/ /g, "-")}`}
      className={`${
        selectedPage === page
          ? "text-primary border-b-2 mt-0.5 border-[#2b7dad]"
          : "text-[#1d4d85]"
      }ransition font-bold text-lg duration-500 hover:text-[#2b7dad]`}
      onClick={handleClick}
    >
      {page}
    </NavLink>
  );
};

export default Link;
