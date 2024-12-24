// components
import { Fade } from "react-awesome-reveal";

// assets
import checkg from "icons/checkg.svg";
import { MdStar } from "react-icons/md";

export default function RateCardVid() {
  return (
    <div className="bg-white rounded-3xl hd:w-9/12 3xl:w-5/6 xs:w-full hd:p-10 3xl:p-10 3xl:mt-20 2xl:p-8 2xl:mt-16 xl:p-7 xl:mt-14 lg:p-6 xs:p-3 xs:mt-10">
      <Fade direction="down" duration={500} cascade>
        <ul className="w-full overflow-hidden flex xl:flex-row xs:flex-col flex-wrap justify-between xl:gap-0 xs:gap-4">
          {/* Associate */}
          <li className="xl:w-[32.5%] xs:w-full xl:rounded-l-3xl xl:rounded-r-lg xs:rounded-3xl bg-[#FAE0EC] hd:px-8 hd:pt-16 hd:pb-12 3xl:px-7 3xl:pt-16 3xl:pb-10 2xl:px-6 2xl:pt-14 2xl:pb-10 xl:px-5 xl:pt-12 xl:pb-9 lg:px-7 lg:pt-12 lg:pb-9 xs:px-5 xs:pt-12 xs:pb-7 flex flex-col hd:gap-8 3xl:gap-7 2xl:gap-6 xl:gap-5 lg:gap-6 xs:gap-5 relative">
            <div className="absolute top-0 right-6">
              <div className="rounded-b-2xl flex items-center gap-1 bg-slate-300 px-3 py-4">
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
              </div>
            </div>

            <Fade direction="down" duration={1000}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl font-bold">
                Associate
              </h1>
            </Fade>

            <Fade direction="up" duration={1500}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl text-blue-600 font-black">
                $1997
                <span className="hd:text-2xl 3xl:text-lg xl:text-base lg:text-lg xs:text-sm">
                  /mo
                </span>
              </h1>
            </Fade>

            <Fade direction="down" duration={750} cascade>
              <ul className="w-full flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    1-2 years of experience
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    Proficient in Adobe Premiere Pro & After Effects
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    An effective team member capable of handling video editing
                    tasks under supervision.
                  </p>
                </li>
              </ul>
            </Fade>
          </li>
          {/* End of Associate */}

          {/* Senior */}
          <li className="xl:w-[32.5%] xs:w-full xl:rounded-lg xs:rounded-3xl bg-[#FAE0EC] hd:px-8 hd:pt-16 hd:pb-12 3xl:px-7 3xl:pt-16 3xl:pb-10 2xl:px-6 2xl:pt-14 2xl:pb-10 xl:px-5 xl:pt-12 xl:pb-9 lg:px-7 lg:pt-12 lg:pb-9 xs:px-5 xs:pt-12 xs:pb-7 flex flex-col hd:gap-8 3xl:gap-7 2xl:gap-6 xl:gap-5 lg:gap-6 xs:gap-5 relative">
            <div className="absolute top-0 right-6">
              <div className="rounded-b-2xl flex items-center gap-1 bg-slate-300 px-3 py-4">
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
              </div>
            </div>

            <Fade direction="down" duration={1000}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl font-bold">
                Senior
              </h1>
            </Fade>

            <Fade direction="up" duration={1500}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl text-blue-600 font-black">
                $2997
                <span className="hd:text-2xl 3xl:text-lg xl:text-base lg:text-lg xs:text-sm">
                  /mo
                </span>
              </h1>
            </Fade>

            <Fade direction="down" duration={750} cascade>
              <ul className="w-full flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    3-5 years of experience
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    Advanced in various video editing softwares
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    Works well independently or as a leader of small project
                    teams; responsible for more complex projects requiring
                    sophisticated editing skills.
                  </p>
                </li>
              </ul>
            </Fade>
          </li>
          {/* End of Senior */}

          {/* Lead */}
          <li className="xl:w-[32.5%] xs:w-full xl:rounded-r-3xl xl:rounded-l-lg xs:rounded-3xl bg-[#FAE0EC] hd:px-8 hd:pt-16 hd:pb-12 3xl:px-7 3xl:pt-16 3xl:pb-10 2xl:px-6 2xl:pt-14 2xl:pb-10 xl:px-5 xl:pt-12 xl:pb-9 lg:px-7 lg:pt-12 lg:pb-9 xs:px-5 xs:pt-12 xs:pb-7 flex flex-col hd:gap-8 3xl:gap-7 2xl:gap-6 xl:gap-5 lg:gap-6 xs:gap-5 relative">
            <div className="absolute top-0 right-6">
              <div className="rounded-b-2xl flex items-center gap-1 bg-slate-300 px-3 py-4">
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
                <MdStar className="3xl:w-8 3xl:h-8 2xl:h-6 2xl:w-6 xl:w-5 xl:h-5 lg:w-7 lg:h-7 xs:h-5 xs:w-5" />
              </div>
            </div>

            <Fade direction="down" duration={1000}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl font-bold">
                Lead
              </h1>
            </Fade>

            <Fade direction="up" duration={1500}>
              <h1 className="hd:text-5xl 2xl:text-4xl xl:text-3xl lg:text-5xl xs:text-4xl text-blue-600 font-black">
                $3997
                <span className="hd:text-2xl 3xl:text-lg xl:text-base lg:text-lg xs:text-sm">
                  /mo
                </span>
              </h1>
            </Fade>

            <Fade direction="down" duration={750} cascade>
              <ul className="w-full flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    5+ years of experience
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    Expert in various video editing softwares
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <img
                    src={checkg}
                    alt="Check gray icons"
                    className="hd:w-7 2xl:w-6 xl:w-5 lg:w-7"
                  />

                  <p className="w-4/5 hd:text-lg 3xl:text-base 2xl:text-lg xl:text-base lg:text-lg">
                    Capable of leading large teams of editors, managing multiple
                    projects, and providing strategic direction in video
                    production.
                  </p>
                </li>
              </ul>
            </Fade>
          </li>
          {/* End of Lead */}
        </ul>
      </Fade>

      <Fade direction="up" duration={1500}>
        <p className="text-center cursor-pointer 3xl:text-2xl hd:my-5 3xl:my-7 2xl:my-7 2xl:text-xl xl:my-6 lg:my-5 lg:text-lg xs:my-5 xs:text-base">
          Check out some{" "}
          <span className="font-bold hover:text-[#D6BCD2] underline lg:underline-offset-8 xs:underline-offset-4 decoration-4 decoration-[#D6BCD2] ">
            example portfolios
          </span>{" "}
          here
        </p>
      </Fade>
    </div>
  );
}
