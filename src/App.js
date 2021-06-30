import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherListing from "./Components/WeatherListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={WeatherListing} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
