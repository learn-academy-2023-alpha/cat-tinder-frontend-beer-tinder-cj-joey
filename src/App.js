import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ToastHandler from "./components/ToastHandler";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [toastMessage, setToastMessage] = useState({
    header: "",
    body: "",
  });

  const readBeer = () => {
    fetch("http://localhost:3000/beers")
      .then((response) => response.json())
      .then((payload) => setBeers(payload))
      .catch((error) => console.log(error));
  };

  const createBeer = (beer) => {
    fetch("http://localhost:3000/beers", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(
        (payload) => readBeer(payload),
        setToastMessage({
          header: "Create Successful",
          body: "You Successfully Created a Brew Bud",
        })
      )
      .catch((errors) => console.log("Beer create errors:", errors));
  };

  const updateBeer = (beer, id) => {
    fetch(`http://localhost:3000/beers/${id}`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(
        (payload) => readBeer(payload),
        setToastMessage({
          header: "Update Successful",
          body: "You Successfully Updated your Brew Bud",
        })
      )
      .catch((errors) => console.log("Beer create errors:", errors));
  };

  const deleteBeer = (id) => {
    fetch(`http://localhost:3000/beers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(
        (payload) => readBeer(payload),
        setToastMessage({
          header: "Delete Successful",
          body: "You Successfully deleted your Brew Bud",
        })
      )
      .catch((errors) => console.log("delete errors:", errors));
  };
  useEffect(() => {
    readBeer();
  }, []);
  return (
    <>
      <Header />
      <ToastHandler toastMessage={toastMessage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beerindex"
          element={<BeerIndex key={beers.id} beers={beers} />}
        />
        <Route
          path="/beershow/:id"
          element={<BeerShow beers={beers} deleteBeer={deleteBeer} />}
        />
        <Route path="/beernew" element={<BeerNew createBeer={createBeer} />} />

        <Route
          path="/beeredit/:id"
          element={
            <BeerEdit
              beers={beers}
              updateBeer={updateBeer}
              useEffect={useEffect}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
