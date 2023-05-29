import Link from "next/link";

import Container from "@/components/Container/Container";

import styles from "@/layouts/Footer/SecondFooter/SecondFooter.module.scss";

const SecondFooter = () => {
  return (
    <div className={styles.secondFooter}>
      <Container className={styles.footerInner}>
        <Link href="/"> © All-tech® 2021</Link>
        <Link href="tel:+998904356261"> +998 90 435 62 61</Link>
      </Container>
    </div>
  );
};

export default SecondFooter;
