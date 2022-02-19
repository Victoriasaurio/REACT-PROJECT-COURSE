import React from "react";
import { Router } from "@reach/router";
import Home from './containers/Home'
import Dashboard from "./containers/Dashboard";

const App = () => (
  <Router>
    <Home path="/" />
    <Dashboard path="dashboard" />
  </Router>
)

export default App;
