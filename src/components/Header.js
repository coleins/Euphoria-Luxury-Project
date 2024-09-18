import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Header.css";

export default function Header({ logo }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Euphoria logo" className="logo" />
      </div>
      <nav>
        <ul className="navbar-links">
          {/* <Link to="/"></Link> */}
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
