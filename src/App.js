import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/display/Navigation";
import Dashboard from "./components/dashboard/Dashboard";
import RubyGemDetails from "./components/projects/RubyGemDetails";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import FavGems from "./components/favorite/FavGems";
import "./App.css";
import Dependency from "./components/search/Dependency";
import FavoriteDetails from "./components/favorite/FavoriteDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={RubyGemDetails} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/favorite" component={FavGems} />
            <Route path="/favoritedetails/:id" component={FavoriteDetails} />
            <Route path="/dependency" component={Dependency} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
