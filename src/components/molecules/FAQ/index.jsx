import PropTypes from "prop-types";

// components
import { Fade } from "react-awesome-reveal";
import ProgressBar from "atoms/ProgressBar";
import { FAQCard } from "atoms/Card";
import { RoleBtn } from "atoms/Button";
import ExploreRoles from "molecules/ExploreRoles";
import Grow from "molecules/Grow";

// constant
import { padding } from "constant/padding";

export default function FAQ({ val }) {
  return (
    <>
      <div
        className={`${padding} bg-white flex flex-col items-center hd:gap-14 3xl:gap-8 2xl:gap-6 xl:gap-5 lg:gap-4 xs:gap-5`}
      >
        <Fade direction="down" duration={750} className="hd:w-4/5 3xl:w-5/6">
          <h1 className="font-black 3xl:text-7xl xl:text-6xl lg:text-5xl xs:text-4xl text-center">
            How it works
          </h1>
        </Fade>

        <ProgressBar />

        <Fade
          direction="down"
          duration={2000}
          className="w-full flex justify-center"
        >
          <RoleBtn inCard={false} val={val} />
        </Fade>

        <FAQCard />

        <ExploreRoles />
      </div>

      <Grow />
    </>
  );
}

FAQ.propTypes = { val: PropTypes.string };
