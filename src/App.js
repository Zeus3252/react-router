import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/card/:user" element={<Card />} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
