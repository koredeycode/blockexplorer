import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Block from "./Block";
import Transaction from "./Transaction";
import Address from "./Address";
import Token from "./Token";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/tx/:txHash" component={Transaction} />
          <Route path="/block/:blockInfo" component={Block} />
          <Route path="/address/:address" component={Address} />
          <Route path="/token/:token" component={Token} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
