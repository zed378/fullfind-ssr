// components
import { Fade } from "react-awesome-reveal";
import HalfForm from "molecules/Form/halfForm";

// assets
import bg1 from "home/bg1.jpg";
import pr1 from "icons/pr1.svg";
// import pr2 from "icons/pr2.svg";
import pr3 from "icons/pr3.svg";
import pr4 from "icons/pr4.svg";

// constant
import { padding } from "constant/padding";

export default function PricingBanner() {
  return (
    <div
      className={`${padding} bg-contain bg-right-top bg-no-repeat flex 2xl:flex-row xs:flex-col 2xl:justify-between items-center mt-10`}
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className={`2xl:w-1/2 mb-10 flex flex-col items-start gap-2`}>
        <Fade
          direction="down"
          duration={1000}
          // className="hd:w-3/5 3xl:w-5/6 2xl:w-3/4"
        >
          <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-6xl lg:text-4xl xs:text-3xl font-black 2xl:text-left xs:text-center">
            Hire Skill-Tested Talent While{" "}
            <span className="text-blue-600">Saving 70% in Cost</span>
          </h1>
        </Fade>

        <Fade direction="up" duration={1500} className="w-full">
          <p className="2xl:text-left xs:text-center font-semibold hd:my-10 3xl:my-8 2xl:my-7 xs:my-6 hd:text-3xl xl:text-2xl lg:text-xl xs:text-lg">
            Talent starts at $1997/mo
          </p>
        </Fade>

        <div className="w-full lg:gap-6 xs:gap-3 2xl:mb-0 xs:mb-10">
          <Fade direction="left" duration={1500} cascade>
            <ul className="w-full flex items-center lg:flex-row 2xl:justify-start xs:justify-center flex-wrap xl:gap-5 xs:gap-3">
              <li className="bg-[#FAE0EC] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
                <img
                  src={pr1}
                  alt="Pills icons"
                  className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
                />
                <span className="xs:w-4/5 lg:w-full">
                  FREE sample work from all candidates
                </span>
              </li>

              {/* <li className="bg-[#D6BCD2] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
              <img
                src={pr2}
                alt="Pills icons"
                className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
              />
              30-day satisfaction guarantee
            </li> */}

              <li className="bg-[#E5D7D9] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
                <img
                  src={pr3}
                  alt="Pills icons"
                  className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
                />

                <span className="xs:w-4/5 lg:w-full">
                  Talent managed end-to-end
                </span>
              </li>

              <li className="bg-[#D6BCD2] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
                <img
                  src={pr4}
                  alt="Pills icons"
                  className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
                />

                <span className="xs:w-4/5 lg:w-full">
                  Unlimited FREE replacements
                </span>
              </li>
            </ul>
          </Fade>

          {/* <Fade
          direction="right"
          duration={1500}
          cascade
          className="hd:w-2/3 3xl:w-11/12 2xl:w-4/5 xs:w-full"
        >
          <ul className="w-full flex items-center lg:flex-row xs:flex-col justify-end xl:gap-5 xs:gap-3">
            <li className="bg-[#E5D7D9] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
              <img
                src={pr3}
                alt="Pills icons"
                className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
              />
              Talent Managed end-to-end
            </li>

            <li className="bg-[#FAE0EC] rounded-full flex items-center hd:gap-5 3xl:gap-4 3xl:text-2xl 3xl:pr-8 2xl:gap-3 2xl:text-lg 2xl:pr-7 xl:text-base xl:gap-3 xl:pr-7 lg:text-sm lg:gap-2 lg:pr-5 xs:text-sm xs:gap-2 lg:w-auto xs:w-full lg:py-2 lg:pl-2 xs:py-3 xs:pl-3">
              <img
                src={pr4}
                alt="Pills icons"
                className="hd:w-16 3xl:w-14 2xl:w-12 xl:w-10 lg:w-9 xs:w-8"
              />
              FREE FOREVER replacement guarantee
            </li>
          </ul>
        </Fade> */}
        </div>
      </div>

      <HalfForm />
    </div>
  );
}
