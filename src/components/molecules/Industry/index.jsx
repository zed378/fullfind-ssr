import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// components
import { Fade } from "react-awesome-reveal";
import Sticky from "react-sticky-el";

// assets
import { FaStar } from "react-icons/fa6";
import dot from "pricing/dot.svg";

// hooks
import useIncrementalValue from "hooks/incremental";

export default function Industry({ data, head }) {
  const { value, start, reset } = useIncrementalValue(120, 200);

  const path = useLocation();
  return (
    <div
      id="parent1"
      className="w-full bg-white hd:px-20 hd:py-36 3xl:px-20 3xl:py-32 2xl:py-28 xl:py-24 lg:py-20 xs:py-16"
    >
      {head && (
        <Fade direction="down" duration={1000}>
          <h1 className="text-center hd:text-5xl 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-2xl xs:text-2xl">
            OUR <span className="text-blue-600">{head}</span> ARE PERFECT FOR:
          </h1>
        </Fade>
      )}

      {/* Component for tablet and mobile */}
      {path.pathname === "/roles/creative" && (
        <div className="w-full flex flex-col items-center xl:hidden xs:block lg:py-12 xs:py-10">
          <Fade direction="down" duration={1000}>
            <div className="flex items-center justify-center gap-2 w-auto lg:mb-4">
              <FaStar className="text-yellow-500 h-auto lg:w-6 xs:w-5" />
              <FaStar className="text-yellow-500 h-auto lg:w-6 xs:w-5" />
              <FaStar className="text-yellow-500 h-auto lg:w-6 xs:w-5" />
              <FaStar className="text-yellow-500 h-auto lg:w-6 xs:w-5" />
              <FaStar className="text-yellow-500 h-auto lg:w-6 xs:w-5" />
            </div>
          </Fade>

          <Fade direction="up" duration={1000}>
            <h1 className="3xl:text-[65px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-4xl mb-4 xs:w-full font-bold text-center">
              Industries <br /> We Serve
            </h1>
          </Fade>
        </div>
      )}
      {/* End of Component for tablet and mobile */}

      <div
        className={`hd:py-24 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-0 lg:px-7 xs:px-5 w-full h-auto overflow-hidden flex xl:flex-row xs:flex-col relative xl:justify-center`}
      >
        <div
          className="xl:w-2/5 xs:w-full xs:mb-20 xl:mb-0 xl:block xs:hidden hd:mt-16 3xl:mt-16 2xl:mt-14 xl:mt-10"
          onClick={reset}
        >
          <Sticky
            boundaryElement="#parent1"
            hideOnBoundaryHit={false}
            onFixedToggle={(isFixed) => {
              isFixed && start();
              !isFixed && reset();
            }}
            bottomOffset={100}
          >
            <div
              className={`flex flex-col items-end hd:pr-20 3xl:pr-16 2xl:pr-14 xl:pr-10`}
              style={{ marginTop: value }}
            >
              <div className="flex flex-col hd:gap-5 3xl:gap-4 2xl:gap-4">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500 h-auto hd:w-10 3xl:w-9 2xl:w-7" />
                  <FaStar className="text-yellow-500 h-auto hd:w-10 3xl:w-9 2xl:w-7" />
                  <FaStar className="text-yellow-500 h-auto hd:w-10 3xl:w-9 2xl:w-7" />
                  <FaStar className="text-yellow-500 h-auto hd:w-10 3xl:w-9 2xl:w-7" />
                  <FaStar className="text-yellow-500 h-auto hd:w-10 3xl:w-9 2xl:w-7" />
                </div>

                <h1 className="3xl:text-[65px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl mb-4 xs:w-full font-bold">
                  Industries <br /> We Serve
                </h1>
              </div>
            </div>
          </Sticky>
        </div>

        <div
          id="second"
          className="xl:w-1/2 xs:w-full h-full xl:mb-0 xs:mb-5 flex flex-col hd:gap-16 hd:py-16 hd:pl-20 3xl:gap-16 3xl:py-16 3xl:pl-16 2xl:gap-14 2xl:py-14 2xl:pl-12 xl:gap-12 xl:py-10 xl:pl-10 lg:gap-12 lg:py-12 lg:pl-10 xs:gap-10 xs:py-7 xs:pl-5 border-l-4 border-black relative"
        >
          <img
            src={dot}
            alt={dot}
            className="absolute h-auto hd:w-7 3xl:w-7 2xl:w-7 xl:w-5 xs:w-5 -top-4 2xl:-left-4 xl:-left-3 xs:-left-3"
          />

          <img
            src={dot}
            alt={dot}
            className="absolute h-auto hd:w-7 3xl:w-7 2xl:w-7 xl:w-5 xs:w-5 -bottom-4 2xl:-left-4 xl:-left-3 xs:-left-3"
          />

          {data.map((item) => (
            <div
              key={item.id}
              className="w-full flex 2xl:flex-row xs:flex-col 2xl:items-center hd:gap-10 3xl:gap-8 2xl:gap-6 xl:gap-5 lg:gap-4 xs:gap-3"
            >
              <div className="hd:w-40 hd:h-40 3xl:h-40 3xl:w-40 2xl:w-32 2xl:h-32 xl:h-32 xl:w-32 lg:h-32 lg:w-32 xs:h-28 xs:w-28">
                <Fade
                  direction="left"
                  duration={1000}
                  className="w-full h-full flex items-center justify-center bg-blue-100 rounded-xl hd:p-6 3xl:p-6 2xl:p-4 xl:p-3 lg:p-4 xs:p-3"
                >
                  <img src={item.image} alt={item.image} />
                </Fade>
              </div>

              <div className="flex flex-col hd:w-3/5 3xl:w-2/3 2xl:w-2/3 hd:gap-3 3xl:gap-3">
                <Fade direction="down" duration={1000}>
                  <h1 className="font-bold hd:text-4xl 3xl:text-[34px] 2xl:text-3xl xl:text-3xl lg:text-3xl xs:text-2xl">
                    {item.title}
                  </h1>
                </Fade>

                <Fade direction="up" duration={1000}>
                  <p className="hd:text-2xl 3xl:text-xl 2xl:text-lg xl:text-xl lg:text-xl xs:text-sm">
                    {item.desc}
                  </p>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Industry.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
  head: PropTypes.string,
};
