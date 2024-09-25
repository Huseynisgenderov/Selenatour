import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Destinations from "./pages/Destinations/Destinations";
import Contact from "./pages/Contact Us/Contact";
import Blog from "./pages/Blog/Blog";
//css
import "./pages/Services/app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
