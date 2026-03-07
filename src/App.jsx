import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/home";
import Favourites from "./pages/favourites/favourites";
import About from "./pages/about/about";
import Suggestion from "./pages/suggestion/Suggestion";

import Sign from "./layouts/sign/sign";
import Share from "./layouts/share/share";

import NavBar from "./components/navbar/NavBar";
import Footer from "./layouts/footer/Footer";
import Scroll from "./components/scroll-to-top/scroll";

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
