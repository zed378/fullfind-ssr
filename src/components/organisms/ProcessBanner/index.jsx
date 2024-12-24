// components
import { Fade } from "react-awesome-reveal";

// assets
import map from "home/map.webp";
import checkb from "icons/checkb.svg";

// constant
import { padding } from "constant/padding";

export default function ProcessBanner() {
  return (
    <div
      className={`${padding} bg-[#F2EBEC] flex xl:flex-nowrap xs:flex-wrap xl:flex-row xs:flex-col items-center 2xl:justify-center xl:justify-between 3xl:gap-32 2xl:gap-20 xl:gap-16 lg:gap-10 relative`}
    >
      <div className="hd:w-2/5 3xl:w-2/5 2xl:w-1/2 xl:w-1/2 lg:w-2/3 xs:w-4/5 xl:m-0 xs:mx-auto hd:mt-12 3xl:mt-10 2xl:mt-16 xs:mt-10">
        <img src={map} alt="Map of Talents" className="w-auto" />
      </div>

      <div className="hd:w-[27.5%] 3xl:w-2/5 xl:w-[45%] xs:w-full 2xl:mt-8 xs:mt-10">
        <Fade direction="down" duration={1000}>
          <p className="hd:text-2xl 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-xl">
            <span className="font-bold">
              Here at FullFind, we believe that great talents are out there.
            </span>{" "}
            All we need is a mechanism to filter them based on merit, not only
            experience.
          </p>
        </Fade>

        <Fade direction="up" duration={1500}>
          <h1 className="3xl:mt-10 2xl:mt-7 xl:mt-4 lg:mt-7 xs:mt-5 hd:text-5xl 3xl:text-[2.5rem] 2xl:text-4xl xl:text-3xl lg:text-4xl xs:text-2xl font-bold 3xl:leading-none">
            That’s why we are very heavy on{" "}
            <span className="text-blue-600">Skill-Based Hiring.</span>
          </h1>
        </Fade>

        <div className="w-full flex flex-col 2xl:gap-4 xs:gap-2 3xl:mt-10 2xl:mt-7 xl:mt-4 lg:mt-7 xs:mt-5">
          <div className="w-full flex items-start lg:gap-3 xs:gap-2">
            <Fade direction="left" duration={1000}>
              <img
                src={checkb}
                alt="Blue check icons"
                className="mt-1 hd:w-8 3xl:w-7 2xl:w-6 xl:w-5 lg:w-6 xs:w-5"
              />
            </Fade>

            <Fade
              direction="right"
              duration={1000}
              className="hd:w-[90%] 3xl:w-[92%] 2xl:w-[93.5%] xl:w-[93%] lg:w-[95%] xs:w-[90%]"
            >
              <p className="hd:text-lg 2xl:text-base xl:text-sm lg:text-base xs:text-sm">
                Every candidate that applies to work for one of our clients are
                put through skill tests that are tailor-made based on each
                client’s actual day-to-day tasks.
              </p>
            </Fade>
          </div>

          <div className="w-full flex items-start lg:gap-3 xs:gap-2">
            <Fade direction="left" duration={1000}>
              <img
                src={checkb}
                alt="Blue check icons"
                className="mt-1 hd:w-8 3xl:w-7 2xl:w-6 xl:w-5 lg:w-6 xs:w-5"
              />
            </Fade>

            <Fade
              direction="right"
              duration={1000}
              className="hd:w-[90%] 3xl:w-[92%] 2xl:w-[93.5%] xl:w-[93%] lg:w-[95%] xs:w-[90%]"
            >
              <p className="hd:text-lg 2xl:text-base xl:text-sm lg:text-base xs:text-sm">
                All candidates who apply will have already demonstrated their
                ability to perform the specific tasks your marketing team
                requires.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
