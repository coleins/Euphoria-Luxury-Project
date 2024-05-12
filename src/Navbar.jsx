import React from "react";
import "./components/Navbar.css";
import logo_light from "./assets/logo-black.png";
import logo_dark from "./assets/logo-white.png";
import search_icon_light from "./assets/search-w.png";
import search_icon_dark from "./assets/search-b.png";
import toogle_light from "./assets/night.png";
import toogle_dark from "./assets/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        padding: "15px 7%",
        transition: "0.5s",
        backgroundColor:"#c4fe76",
      }}
    >
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contant Us</li>
        <li>About</li>
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#242224",
          padding: "10px 20px",
          borderRadius: "50px",
        }}
      >
        <input
          style={{
            padding: "6px",
            background: "transparent",
            border: "0",
            outline: "0",
            color: "#fff",
            fontSize: "18px",
            maxWidth: "200px",
          }}
          type="text"
          placeholder="search"
        />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={theme === "light" ? toogle_light : toogle_dark}
        alt=""
        className="tongle-icon"
      />
    </div>
  );
};

export default Navbar;
