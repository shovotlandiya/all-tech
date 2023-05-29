import cn from "classnames";
import { useMemo } from "react";

import { useMediaQuery } from "@/context/MediaQueryProvider";

import styles from "@/components/Typography/Typography.module.scss";

const breakpointKeys = {
  xs: "extraSmall",
  sm: "small",
  md: "medium",
  lg: "large",
  xl: "extraLarge",
  xxl: "extraExtraLarge",
  xxxl: "extraExtraExtraLarge",
};

const Typography = (props) => {
  const {
    as: Element = "span",
    weight = "regular",
    type = "base",
    level,
    breakpoints,
    className,
    children,
    ...rest
  } = props;

  const matches = useMediaQuery();
  const fontClass = useMemo(() => {
    const defaultClassName = type && level ? type + level : type;
    if (!breakpoints) {
      return defaultClassName;
    }
    let className = "";
    for (const breakpoint of Object.keys(breakpoints)) {
      const breaks = breakpointKeys[breakpoint];
      if (matches && matches[breaks]) {
        const level = breakpoints[breakpoint].level || "";

        className = breakpoints[breakpoint].type + level;
      }
    }
    return className || defaultClassName;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  const classes = cn({
    [styles[fontClass]]: true,
    [styles.typography]: true,
    [styles[weight]]: true,
    [className]: Boolean(className),
  });

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};
export default Typography;
