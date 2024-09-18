import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
import logo from "../Assets/logo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <header>
        <div className="logo">
          <img src={logo} />
        </div>
        <nav>
          {/* <ul> */}
          <ul className="navbar-ul">
            {/* <Link to="/"></Link> */}
            <Link to="home">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
          </ul>
          {/* </ul> */}
        </nav>
      </header>
    </div>
  );
}
