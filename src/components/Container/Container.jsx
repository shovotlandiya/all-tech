import cn from "classnames";

import styles from "@/components/Container/Container.module.scss";

const Container = ({ children, className }) => {
  return (
    <div className={styles.row}>
      <div
        className={cn({
          [styles.container]: true,
          [className]: Boolean(className),
        })}
      >
        {children}
      </div>
    </div>
  );
};
export default Container;
