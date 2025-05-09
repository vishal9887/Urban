import React, { useEffect } from 'react'; // ✅ Correct import for useEffect
import { Routes, Route, useLocation } from 'react-router-dom'; // ✅ Correct import for react-router-dom
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import '@fontsource/poppins';
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  const location = useLocation(); // ✅ get current route

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []); // Ensure AOS.init runs only once

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      {/* Conditionally render Footer */}
     {location.pathname !== '/' && <Footer />} 
    </>
  );
}

export default App;
