import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../images/search.svg";

const Input = ({ handleChange }) => {
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
        <select className={styles.select}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
