import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/home";
import Favourites from "./pages/favourites/favourites";
import About from "./pages/about/about";
import ApiDoc from "./pages/api-documentation/api-documentation";

import Sign from "./layouts/sign/sign";
import Share from "./layouts/share/share";

import NavBar from "./components/navbar/NavBar";
import Footer from "./layouts/footer/Footer";
import Scroll from "./components/scroll-to-top/scroll";

import "./App.css";

const App = () => {
    return (
        <div className='app-container'>
            <Share />
            <Sign />
            <NavBar />
            <div className='main-body h-100'>
                <Switch>
                    <Route exact path='/' component={HomePage} key={1} />
                    <Route
                        eaxct
                        path='/favourites'
                        component={Favourites}
                        key={2}
                    />
                    <Route exact path='/about' component={About} key={3} />
                    <Route exact path='/api' component={ApiDoc} key={4} />
                </Switch>
            </div>
            <Footer />
            <Scroll />
        </div>
    );
};

export default App;
