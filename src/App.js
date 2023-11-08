import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Block from "./Block";
import Transaction from "./Transaction";
import Address from "./Address";
import Token from "./Token";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/tx/:txHash" element={<Transaction />} />
          <Route path="/block/:blockInfo" element={<Block />} />
          <Route path="/address/:address" element={<Address />} />
          <Route path="/token/:token" element={<Token />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
