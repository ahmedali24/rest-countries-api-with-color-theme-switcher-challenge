import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../images/search.svg";

const Input = ({ handleChange, countries, setCountries }) => {
  const filterByRegion = async (region) => {
    if (region === "") {
      const response = await fetch("https://restcountries.com/v2/all");
      const countries = await response.json();
      setCountries(countries);
    } else {
      const res = await fetch(`https://restcountries.com/v2/region/${region}`);
      const data = await res.json();
      await setCountries(data);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchInputs}>
        <img className={styles.searchIcon} src={searchIcon} alt="search icon" />
        <input
          onChange={handleChange}
          className={styles.input}
          type="search"
          name="search"
          id="search"
          placeholder="Search a country..."
        />
      </div>

      <div className={styles.region}>
        <select
          className={styles.select}
          onChange={(e) => filterByRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
