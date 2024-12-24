import PropTypes from "prop-types";
// components
import { Fade } from "react-awesome-reveal";
import BookACall from "atoms/Button/BookACall";

// assets
import grow from "home/grow.webp";

// constant
// import { padding } from "constant/padding";

export default function Grow({ bg }) {
  return (
    <div
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto ${
        bg ? bg : "bg-[#fafafa]"
      } overflow-hidden flex xl:flex-row xs:flex-col flex-wrap xl:items-center xl:justify-center hd:justify-between hd:gap-0 3xl:gap-10 2xl:gap-8 xl:gap-7 lg:gap-10 xs:gap-10`}
    >
      <div className="w-full h-auto bg-[#e7e7e7] flex xl:flex-row xs:flex-col items-center hd:px-24 hd:py-16 xl:rounded-3xl xs:rounded-2xl 3xl:px-12 3xl:py-12 2xl:px-10 2xl:py-10 xl:px-10 xl:py-10 lg:py-10 md:py-8 xs:py-6">
        <div className="xl:w-1/2 xs:w-full flex flex-col hd:gap-20 3xl:gap-12 2xl:gap-10 xl:gap-7 lg:gap-10 md:gap-7 xs:gap-6">
          <Fade direction="down" duration={1000}>
            <h1 className="hd:text-6xl 3xl:text-5xl 2xl:text-[42px] xl:text-3xl lg:text-3xl xs:text-2xl xs:text-center xl:text-left font-semibold hd:leading-tight 3xl:leading-tight 2xl:leading-snug xl:leading-tight lg:leading-snug">
              Our Virtual <br /> Marketing Assistant <br /> start at just{" "}
              <span className="text-blue-600">$9/hour</span>{" "}
            </h1>
          </Fade>

          {/* <Fade direction="up" duration={1000}>
          <p className="hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg xs:text-lg xs:text-center xl:text-left">
            Book in a 30-minute “hiring goals”{" "}
            <span className="font-semibold">call today</span>
          </p>
        </Fade> */}

          <Fade
            direction="up"
            duration={1500}
            className="w-full flex xl:justify-start xs:justify-center"
          >
            <BookACall />
          </Fade>
        </div>

        <Fade
          direction="left"
          duration={1000}
          className="xl:block xs:hidden xl:w-1/2"
        >
          <img src={grow} alt="Grow icons" />
        </Fade>
      </div>
    </div>
  );
}

Grow.propTypes = { bg: PropTypes.string };
