import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <header>
        <nav>
          {/* <ul> */}
          <ul>
            <Link to="/"></Link>
            <Link to="home">Home</Link>
          </ul>
          {/* </ul> */}
        </nav>
      </header>
    </div>
  );
}
