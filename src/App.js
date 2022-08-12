import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NavBar from "./components/NavBar"
import Filter from "./components/Filter";
import ProductDetail from "./pages/ProductDetail.page";

function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
        <Filter />
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
