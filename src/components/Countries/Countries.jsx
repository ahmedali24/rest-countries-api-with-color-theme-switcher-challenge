import React from "react";
import { useState, useEffect } from "react";
import styles from "./Countries.module.css";

const Countries = () => {
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
    <div className={styles.countries}>
      {countries.map((country) => {
        return (
          <div className={styles.country} key={country.code}>
            <div>
              <img className={styles.flag} src={country.flag} alt="" />
            </div>
            <div className={styles.info}>
              <h1 className={styles.name}>{country.name}</h1>
              <h4>
                Population: <span>{country.population}</span>
              </h4>
              <h4>
                Region: <span>{country.region}</span>
              </h4>
              <h4>
                Capital: <span>{country.capital}</span>
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
