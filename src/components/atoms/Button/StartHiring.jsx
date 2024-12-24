import { useRouter } from "next/router";
import PropTypes from "prop-types";

// constant
import { isNav, comp } from "constant/padding";

export default function StartHiringBtn({ open, nav, lp, custom }) {
  const router = useRouter();

  const handleClick = () => {
    if (router.pathname === "/") {
      window.location.hash = "#progress";
    } else if (router.pathname === "/landing-page-1" || lp) {
      window.location.hash = "#progress";
    } else {
      router.push("/");
      setTimeout(() => {
        window.location.hash = "#progress";
      }, 1000);
    }

    open();
  };

  const style = custom ? custom : "";

  return (
    <button className={`${nav ? isNav : comp} ${style}`} onClick={handleClick}>
      Try Our AI-Powered VAs Free
    </button>
  );
}

StartHiringBtn.propTypes = {
  open: PropTypes.func.isRequired,
  nav: PropTypes.bool,
  lp: PropTypes.bool,
  custom: PropTypes.string,
};
