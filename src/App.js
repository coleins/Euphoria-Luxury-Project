import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./Navbar.jsx";
import BookingForm from "./components/BookingForm"
const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <BookingForm/>
      <Contact />
      <About />
      
      
    </div>
  );
};

export default App;
