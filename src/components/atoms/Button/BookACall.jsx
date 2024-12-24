// import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// import { BsArrowRight } from "react-icons/bs";

// constant
import { comp } from "constant/padding";

export default function BookACall({ open }) {
  // const [arr, setArr] = useState("");
  const nav = useNavigate("/our-process");
  return (
    <button
      className={`${comp}`}
      // onMouseEnter={() => setArr("animate__animated animate__slideInLeft")}
      // onMouseLeave={() => setArr("animate__animated animate__slideInRight")}
      onClick={() => {
        // window.open(
        //   "https://calendly.com/fullfind/hiring-goals-call",
        //   "_blank"
        // );
        nav("/our-process");
        open();
      }}
    >
      Book a Call Below
      {/* <span className="overflow-hidden flex items-center">
        <BsArrowRight className={arr} />
      </span> */}
    </button>
  );
}

BookACall.propTypes = {
  open: PropTypes.func,
};
