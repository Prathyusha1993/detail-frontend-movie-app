import React, { Component } from "react";
import Movie from "./components/movie";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavbarComp from "./components/navbarComp";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from './components/registerForm';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarComp />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movie} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
