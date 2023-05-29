import React, { useState, useEffect } from "react";
import cn from "classnames";

import Navbar from "@/layouts/Header/Navbar";

import styles from "@/layouts/Header/Header.module.scss";

const Header = () => {
  const [backChange, setBackChange] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 10) {
        setBackChange(true);
      } else {
        setBackChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scrool", changeNavbarColor);
  }, []);

  return (
    <div
      className={cn({
        [styles.nav]: true,
        [styles.backChange]: Boolean(backChange),
      })}
    >
      <Navbar />
    </div>
  );
};

export default Header;
