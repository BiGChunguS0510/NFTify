import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import { Token } from "./pages/Token";
import { Pair } from "./pages/Pair";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Token />} />
          <Route path="/pair" element={<Pair />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
