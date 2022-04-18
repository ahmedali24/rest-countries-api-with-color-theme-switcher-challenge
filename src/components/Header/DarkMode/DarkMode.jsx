import React from "react";
import darkMode from "../../../images/moon.png";
import styles from "./DarkMode.module.css";

const DarkMode = () => {
  return (
    <div className={styles.darkmode}>
      <img className={styles.img} src={darkMode} alt="" />
      <label>Dark Mode</label>
    </div>
  );
};

export default DarkMode;
