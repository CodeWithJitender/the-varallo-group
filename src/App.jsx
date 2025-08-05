import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of each animation (ms)
      delay: 1000, // 👈 Global delay before each animation starts
      once: true,
      mirror: false,
    });
  }, []);
  // Re-initialize whenever `data` changes
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:service-name" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
