import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./Assets/logo.png";
import CabinDetailsPage from "./pages/CabinDetailsPage";
import BookingPage from "./pages/BookingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/cabins/:id" element={<CabinDetailsPage />} />
        <Route path="/bookings/:id" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
