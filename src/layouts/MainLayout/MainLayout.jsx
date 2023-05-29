import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

import styles from "@/layouts/MainLayout/MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <section className={styles.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default MainLayout;
