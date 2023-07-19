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
          <Route path="/" exact element={<Home />} />
          <Route path="/tx/:txHash" element={<Transaction />} />
          <Route path="/block/:blockInfo" element={<Block />} />
          <Route path="/address/:address" element={<Address />} />
          <Route path="/token/:token" element={<Token />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
