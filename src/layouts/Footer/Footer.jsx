import Link from "next/link";

import SecondFooter from "@/layouts/Footer/SecondFooter/SecondFooter";
import Container from "@/components/Container/Container";
import NavLink from "@/components/NavLink/NavLink";
import Typography from "@/components/Typography/Typography";

import { navLinks } from "@/layouts/Header/Navbar/config";

import styles from "@/layouts/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <ul className={styles.footerList}>
            <div className={styles.footerLeft}>
              <Link href="/">All-tech</Link>
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
            </div>
            <div className={styles.footerRight}>
              <ul className={styles.footerRight}>
                <p>Work time</p>
                <li>
                  Mo 9 <sup>00</sup>-18 <sup>00</sup>
                </li>
                <li>
                  Tu 9<sup>00</sup>-18<sup>00</sup>
                </li>
                <li>
                  We 9<sup>00</sup>-18<sup>00</sup>
                </li>
                <li>
                  Th 9<sup>00</sup>-18<sup>00</sup>
                </li>
                <li>
                  Fr 9<sup>00</sup>-18<sup>00</sup>
                </li>
                <li>Sa Day off</li>
                <li>Su Day off</li>
              </ul>
            </div>
          </ul>
        </Container>
      </div>
      <SecondFooter />
    </>
  );
};

export default Footer;
