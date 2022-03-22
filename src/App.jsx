import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const countries = await response.json();
    console.log(countries);
    setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="app">
      <Home />
      {/* {countries.map((country) => {
        return (
          <div className="country" key={country.code}>
            <img src={country.flag} alt="" />
            <h1>{country.name}</h1>
            <h4>{country.population}</h4>
          </div>
        );
      })} */}
    </div>
  );
};

export default App;
