import Link from "next/link";
import React, { useState, useEffect } from "react";
import cn from "classnames";

import Container from "@/components/Container/Container";
import NavLink from "@/components/NavLink/NavLink";
import Typography from "@/components/Typography/Typography";

import { navLinks } from "@/layouts/Header/Navbar/config";

import styles from "@/layouts/Header/Navbar/Navbar.module.scss";

const Navbar = () => {
  const [backChange, setBackChange] = useState(false);

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
    <nav
      className={cn({
        [styles.nav]: true,
        [styles.backChange]: Boolean(backChange),
      })}
    >
      <Container>
        <ul className={styles.navList}>
          <li className={styles.navLeft}>
            <Link href="/">All-tech</Link>
          </li>
          <ul className={styles.navCenter}>
            <input
              className={styles.navInput}
              type="text"
              placeholder="Search All-tech"
            />
          </ul>
          <ul className={styles.navRight}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  href={item.href}
                  activeClassName={styles.activeLink}
                  className={styles.navbarLink}
                >
                  <Typography type="body" level={1}>
                    {item.link}
                  </Typography>
                </NavLink>
              </li>
            ))}
            <li>uz</li>
          </ul>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
