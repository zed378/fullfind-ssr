import PropTypes from "prop-types";

// components
import { Fade } from "react-awesome-reveal";
import { RoleBtn } from "atoms/Button";
import LoadingBar from "atoms/LoadingBar";
import CountUp from "react-countup";

// assets
import checkg from "icons/checkg.svg";
import usflag from "icons/usflag.svg";
import logo from "brand/logo.png";

// hooks
import useProgress from "hooks/progress";

// constant

export default function Save({ val, btn }) {
  const { inView, progressRef } = useProgress();

  return (
    <div
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto bg-white flex flex-col items-center hd:gap-20 3xl:gap-16 2xl:gap-12 xl:gap-8 xs:gap-6`}
    >
      <Fade direction="down" duration={750} className="hd:w-4/5 3xl:w-5/6">
        <h1 className="hd:text-[65px] 3xl:text-[50px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl 2xl:leading-tight font-black 3xl:leading-tight xl:text-left xs:text-center">
          Save a LOT of money while being sure{" "}
          <span className="text-blue-600">the talent is top-notch.</span>
        </h1>
      </Fade>

      <div className="hd:w-4/5 3xl:w-5/6 xs:w-full 2xl:border-4 xs:border-2 border-[#D6BCD2] rounded-3xl w-full flex xl:flex-row xs:flex-col items-center justify-between 2xl:p-10 xl:p-8 lg:px-8 lg:py-10 xs:px-5 xs:py-6">
        <div className="xl:w-[55%] xs:w-full hd:py-3 hd:pr-10 xl:pr-8">
          <Fade direction="down" duration={1500}>
            <h2 className="font-semibold text-neutral-500 lg:text-xl xs:text-lg ">
              U.S. Video Editor
            </h2>
          </Fade>

          <Fade direction="down" duration={1000}>
            <div className="w-full flex items-end gap-3">
              <h1
                ref={progressRef}
                className="text-neutral-500 flex hd:text-6xl xl:text-5xl lg:text-6xl xs:text-4xl"
              >
                $
                {inView ? (
                  <CountUp
                    end={74000}
                    decimal=","
                    duration={2}
                    enableScrollSpy
                  />
                ) : (
                  74
                )}
              </h1>

              <p className="text-neutral-500 hd:mb-2 2xl:mb-1 hd:text-3xl lg:text-2xl xs:text-base">
                / year
              </p>
            </div>
          </Fade>

          <div className="xl:my-6 lg:my-8 xs:my-6">
            <Fade direction="down" duration={750}>
              <LoadingBar
                primary="bg-neutral-500"
                secondary="#F6F4F4"
                prog={74}
                icon={usflag}
              />
            </Fade>

            <Fade direction="up" duration={750}>
              <LoadingBar
                primary="bg-blue-600"
                secondary="#F6F4F4"
                prog={18}
                icon={logo}
              />
            </Fade>
          </div>

          <Fade direction="up" duration={1000}>
            <div className="w-full text-neutral-500 flex items-end gap-3">
              <h1
                ref={progressRef}
                className="text-blue-600 hd:text-6xl xl:text-5xl lg:text-6xl xs:text-4xl"
              >
                $
                {inView ? (
                  <CountUp
                    end={24000}
                    decimal=","
                    duration={1.25}
                    enableScrollSpy
                  />
                ) : (
                  24
                )}
              </h1>
              <p className="text-neutral-500 hd:mb-2 2xl:mb-1 hd:text-3xl lg:text-2xl xs:text-base">
                / year
              </p>
            </div>
          </Fade>

          <Fade direction="up" duration={1500}>
            <h2 className="font-semibold text-blue-600 lg:text-xl xs:text-lg ">
              FullFind Talent
            </h2>
          </Fade>
        </div>

        <div className="xl:w-[45%] xs:w-full bg-[#FAE0EC] rounded-3xl hd:p-14 3xl:px-12 3xl:py-10 2xl:px-10 2xl:py-12 xl:p-8 lg:p-8 xl:mt-0 xs:mt-10 xs:p-6">
          <Fade direction="down" duration={1000}>
            <h1 className="hd:text-4xl 3xl:text-2xl 2xl:text-3xl xl:text-2xl lg:text-3xl xs:text-xl">
              Hire an {val} for <span className="font-bold">70% less</span>{" "}
              compared to their US equivalent.
            </h1>
          </Fade>

          <Fade direction="down" duration={1000}>
            <p className="hd:my-5 xl:my-4 lg:my-5 xs:my-4 2xl:text-2xl xl:text-xl lg:text-2xl xs:text-lg">
              From $1997/mo
            </p>
          </Fade>

          <Fade direction="down" duration={500} cascade>
            <ul className="w-full flex flex-col 2xl:gap-3 xl:gap-2 lg:gap-3 xs:gap-2">
              <li className="flex items-start 2xl:gap-3 xl:gap-2 lg:gap-3 xs:gap-2">
                <img
                  src={checkg}
                  alt="Gray check icons"
                  className="mt-1 hd:w-7 2xl:w-6 xl:w-5 lg:w-6"
                />{" "}
                <p className="m-0 w-5/6 hd:text-2xl 2xl:text-xl lg:text-lg xs:text-sm">
                  <span className="font-bold">FREE</span> custom work from all
                  candidates
                </p>
              </li>
              <li className="flex items-start 2xl:gap-3 xl:gap-2 lg:gap-3 xs:gap-2">
                <img
                  src={checkg}
                  alt="Gray check icons"
                  className="mt-1 hd:w-7 2xl:w-6 xl:w-5 lg:w-6"
                />
                <p className="m-0 w-5/6 hd:text-2xl 2xl:text-xl lg:text-lg xs:text-sm">
                  Fluent in <span className="font-bold">English</span>
                </p>
              </li>
              <li className="flex items-start 2xl:gap-3 xl:gap-2 lg:gap-3 xs:gap-2">
                <img
                  src={checkg}
                  alt="Gray check icons"
                  className="mt-1 hd:w-7 2xl:w-6 xl:w-5 lg:w-6"
                />
                <p className="m-0 w-5/6 hd:text-2xl 2xl:text-xl lg:text-lg xs:text-sm">
                  Ongoing <span className="font-bold">support</span>
                </p>
              </li>
              <li className="flex items-start 2xl:gap-3 xl:gap-2 lg:gap-3 xs:gap-2">
                <img
                  src={checkg}
                  alt="Gray check icons"
                  className="mt-1 hd:w-7 2xl:w-6 xl:w-5 lg:w-6"
                />
                <p className="m-0 w-5/6 hd:text-2xl 2xl:text-xl lg:text-lg xs:text-sm">
                  <span className="font-bold">FREE</span> replacement
                </p>
              </li>
            </ul>
          </Fade>

          <Fade direction="down" duration={2000} className="mt-10">
            <RoleBtn inCard={true} val={btn} />
          </Fade>
        </div>
      </div>
    </div>
  );
}

Save.propTypes = { val: PropTypes.string, btn: PropTypes.string };
