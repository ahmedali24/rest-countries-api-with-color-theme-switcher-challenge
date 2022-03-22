import React from "react";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <DarkMode />
    </header>
  );
};

export default Header;
