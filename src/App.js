// App.js
import React, { useState } from "react";
import "./components/Navbar.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./Navbar"; 
import BookingForm from "./components/BookingForm";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("Home");
  const [theme, setTheme] = useState("light"); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar
        handleNavbarItemClick={setSelectedComponent}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      {/* Display the selected component */}
      {selectedComponent === "Home" && <Home />}
      {selectedComponent === "Contact" && <Contact />}
      {selectedComponent === "About" && <About />}
      {selectedComponent === "Cabins" && <Cabins />}
      {selectedComponent === "Booking" && <BookingForm />}
    </div>
  );
};

export default App;
