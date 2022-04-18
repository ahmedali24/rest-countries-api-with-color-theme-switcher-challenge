import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

export const ThemeContext = createContext("light");

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");

  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const countries = await response.json();
    setCountries(countries);
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Header />
        <Search
          handleChange={handleChange}
          setCountries={setCountries}
          countries={countries}
        />
        <div className="countries">
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
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
