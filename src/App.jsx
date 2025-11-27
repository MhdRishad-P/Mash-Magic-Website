import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Differentiators from "./component/Differentiators";
import Programs from "./component/Program";
import Testimonials from "./component/Testimonial";
import FooterCTA from "./component/Footer";
import AboutUs from "./component/AboutUs";
import ContactPage from "./component/ContactPage";

// HOME PAGE COMPONENT
function Home() {
  return (
    <>
      <HeroSection />
      <Differentiators />
      <Programs />
      <Testimonials />
      <FooterCTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* FIXED NAVBAR */}
      <Navbar />

      {/* CONTENT BELOW NAVBAR */}
      <div className="pt-24 font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/whyus" element={<Differentiators />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
