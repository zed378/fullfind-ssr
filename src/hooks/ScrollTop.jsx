import PropTypes from "prop-types";
import { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollElement =
      document.scrollingElement || document.documentElement || document.body;

    scrollElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
