import React from "react";
import styles from "./Countries.module.css";

const Countries = ({ flag, name, population, region, capital }) => {
  return (
    <div className={styles.countries}>
      <div className={styles.country}>
        <div>
          <img className={styles.flag} src={flag} alt="" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <h4>
            Population: <span>{population}</span>
          </h4>
          <h4>
            Region: <span>{region}</span>
          </h4>
          <h4>
            Capital: <span>{capital}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Countries;
