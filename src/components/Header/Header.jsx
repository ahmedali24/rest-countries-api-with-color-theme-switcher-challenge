import React from "react";
import Logo from "./Logo/Logo";
import DarkMode from "./DarkMode/DarkMode";
import styles from "./Header.module.css";

const Header = ({ dark }) => {
  return (
    <header className={styles.header} id={`styles.${dark}`}>
      <Logo />
      <DarkMode />
    </header>
  );
};

export default Header;
