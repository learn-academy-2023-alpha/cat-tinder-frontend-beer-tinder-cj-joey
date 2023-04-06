import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockBeers from "./mockBeers";

const App = () => {
  const [beers, setBeers] = useState(mockBeers);
  const createBeer = (beer) => {
    console.log("Created Beer:", beer);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beerindex"
          element={<BeerIndex key={beers.id} beers={beers} />}
        />
        <Route path="/beershow/:id" element={<BeerShow beers={beers} />} />
        <Route path="/beernew" element={<BeerNew createBeer={createBeer} />} />
        <Route path="/beeredit" element={<BeerEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
