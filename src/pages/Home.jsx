import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Nav2Bar from "../components/Nav2Bar";
import Carousel from "../components/Carousel";
import ServiceBox from "../components/Servixes";
import { Typography, Box } from "@mui/material";
import ClientComponent from "../components/Clients";
import CalculationComp from "../components/CalculationComp";
import Footer from "../components/Footer";
import abc from "../assets/images/clients/HMEL-Logo.png";
import MainComponent from "../components/Abc";
import BelowCarousel from "../components/BelowCarousel";
import Contact from "../components/Contact";
import Career from "../components/Career";
import EcoComp from "../components/EcoComp";
import TechComp from "../components/TechComp";

const Home = () => {
  return (
    <Router>
      <div className="h-12">
        <Navbar />
        <Nav2Bar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Carousel />
                <BelowCarousel />
                <ServiceBox />
                <ClientComponent />
                <CalculationComp />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          
        <Route path="/about-us" element={<Contact />} />
        <Route path="/services" element={<Contact />} />
        {/* <Route path="/our-tech" element={<TechComp />} /> */}
        <Route path="/surya-eco" element={<EcoComp />} />
        <Route path="/career" element={<Career />} />
        
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default Home;
