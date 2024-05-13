// Navbar.js
import React from "react";
import logo_light from "./assets/logo-black.png";
import logo_dark from "./assets/logo-white.png";
import search_icon_light from "./assets/search-w.png";
import search_icon_dark from "./assets/search-b.png";
import toogle_light from "./assets/night.png";
import toogle_dark from "./assets/day.png";
import Cabins from "./components/Cabins";

const Navbar = ({ handleNavbarItemClick, theme, toggleTheme }) => {
  return (
    <div className="navbar">
      <img src={theme === "light" ? logo_light : logo_dark} alt="" className="logo" />

      <ul>
        <li onClick={() => handleNavbarItemClick("Home")}>Home</li>
        <li onClick={() => handleNavbarItemClick("Contact")}>Contact Us</li>
        <li onClick={() => handleNavbarItemClick("About")}>About</li>""
        <li onClick={() => handleNavbarItemClick("Booking")}>Booking</li>
        <li onClick={() => handleNavbarItemClick("Booking")}>Booking</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={theme === "light" ? search_icon_light : search_icon_dark} alt="" />
      </div>

      <img src={theme === "light" ? toogle_light : toogle_dark} alt="" className="tongle-icon" onClick={toggleTheme} />
    </div>
  );
};

export default Navbar;
