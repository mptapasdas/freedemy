import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/home.jsx";
import Favourites from "./pages/favourites/favourites.jsx";
import About from "./pages/about/about.jsx";
import Suggestion from "./pages/suggestion/Suggestion.jsx";

import Sign from "./layouts/sign/sign.jsx";
import Share from "./layouts/share/share.jsx";

import NavBar from "./components/navbar/NavBar.jsx";
import Footer from "./layouts/footer/Footer.jsx";
import Scroll from "./components/scroll-to-top/scroll.jsx";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Share />
      <Sign />
      <NavBar />
      <div className="main-body h-100">
        <Routes>
          <Route path="/" element={<HomePage />} key={1} />
          <Route path="/favourites" element={<Favourites />} key={2} />
          <Route path="/about" element={<About />} key={3} />
          <Route path="/suggest" element={<Suggestion />} key={4} />
        </Routes>
      </div>
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
