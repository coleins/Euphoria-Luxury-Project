import React from "react";
import logo_light from "./assets/logo-black.png";
import logo_dark from "./assets/logo-white.png";
import search_icon_light from "./assets/search-w.png";
import search_icon_dark from "./assets/search-b.png";
import toogle_light from "./assets/night.png";
import toogle_dark from "./assets/day.png";

const Navbar = ({ handleNavbarItemClick, theme, toggleTheme }) => {
  return (
    <div className="navbar">
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />

      <ul>
        <li
          style={{ fontSize: "40px" }}
          onClick={() => handleNavbarItemClick("Home")}
        >
          Home
        </li>
        <li
          style={{ fontSize: "40px" }}
          onClick={() => handleNavbarItemClick("About")}
        >
          About
        </li>
        <li
          style={{ fontSize: "40px" }}
          onClick={() => handleNavbarItemClick("Cabins")}
        >
          Cabins
        </li>
        <li
          style={{ fontSize: "40px" }}
          onClick={() => handleNavbarItemClick("Booking")}
        >
          Booking
        </li>
        <li
          style={{ fontSize: "40px" }}
          onClick={() => handleNavbarItemClick("Contact")}
        >
          Contact Us
        </li>
      </ul>

      <img
        src={theme === "light" ? toogle_light : toogle_dark}
        alt=""
        className="tongle-icon"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Navbar;
