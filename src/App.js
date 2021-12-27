import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import HomePage from "./pages/home/home";
import Favourites from "./pages/favourites/favourites";
import About from "./pages/about/about";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/modal";
import Scroll from "./components/scroll-to-top/scroll";

import "./App.css";

const App = () => {
  return (
    <div className='app-container'>
      <Modal />
      <NavBar />
      <div className='main-body h-100'>
        <Switch>
          <Route exact path='/' component={HomePage} key={1} />
          <Route eaxct path='/favourites' component={Favourites} key={2} />
          <Route exact path='/about' component={About} key={3} />
        </Switch>
      </div>
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
