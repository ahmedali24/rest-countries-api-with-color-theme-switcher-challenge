import React, { useState, useEffect } from "react";
import Countries from "../components/Countries/Countries";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import styles from "./Home.module.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const countries = await response.json();
    console.log(countries);
    setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Search handleChange={handleChange} />
      <div className={styles.countries}>
        {filteredCountries.map((country) => {
          return (
            <Countries
              key={country.numericCode}
              flag={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
