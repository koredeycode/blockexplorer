import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Block from "./Block";
import Transaction from "./Transaction";
import Address from "./Address";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tx/:txHash" component={Transaction} />
        <Route path="/block/:blockInfo" component={Block} />
        <Route path="/address/:address" component={Address} />
      </Switch>
    </Router>
  );
}

export default App;
