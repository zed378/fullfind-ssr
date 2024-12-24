// components
import { Fade } from "react-awesome-reveal";

// assets
import gallery from "home/gallery.webp";
import checkg from "icons/checkg.svg";
import example from "home/example.webp";

// constant
import { padding } from "constant/padding";

export default function ProcessSection() {
  return (
    <div className={`${padding} bg-white flex flex-col items-center `}>
      <Fade
        direction="down"
        duration={1500}
        className="hd:w-2/3 3xl:w-4/5 xs:w-full"
      >
        <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-5xl md:text-4xl xs:text-3xl xl:text-left xs:text-center 2xl:mb-12 xs:mb-10 font-bold">
          Here is how our{" "}
          <span className="text-blue-600">Skill-Based Hiring process</span>{" "}
          works
        </h1>
      </Fade>

      <div className="w-full flex items-center justify-center">
        <div className="hd:w-2/3 3xl:w-4/5 rounded-3xl bg-[#f4f4f4] flex justify-between flex-wrap 2xl:p-10 xl:p-9 lg:p-9 xs:p-6">
          {/* First Section */}
          <div className="xl:w-3/4 xs:w-full flex flex-col hd:gap-5 3xl:gap-4 2xl:gap-5 xl:gap-7 lg:gap-6 xs:gap-5">
            <div className="w-full flex items-start hd:gap-5 2xl:gap-4 xl:gap-3 lg:gap-4 xs:gap-2">
              <Fade
                direction="left"
                duration={1000}
                className="bg-[#F9756D] text-white rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-9 3xl:h-9 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 lg:w-10 lg:h-10 xs:w-6 xs:h-6"
              >
                <h2 className="hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-xl font-semibold">
                  1
                </h2>
              </Fade>

              <div className="w-[90%]">
                <Fade direction="down" duration={1000}>
                  <h1 className="text-[#F9756D] hd:mt-1 3xl:mt-0 hd:mb-5 3xl:mb-4 hd:text-4xl 3xl:text-3xl 2xl:mb-4 2xl:text-2xl xl:mb-4 xl:text-2xl lg:mb-4 lg:text-3xl xs:text-xl xs:mb-2 font-bold">
                    Core Skill
                  </h1>
                </Fade>

                <Fade direction="down" duration={1000}>
                  <p className="hd:mb-5 lg:mb-4 xs:mb-3 hd:text-2xl 2xl:text-xl xl:text-base lg:text-lg">
                    We test their role-specific skills by using a past brief or
                    task from your company. We will{" "}
                    <span className="font-bold">create the task</span> to test
                    the candidates for 2 things:
                  </p>
                </Fade>

                <div className="flex flex-col hd:gap-2">
                  <div className="w-full flex items-start gap-3">
                    <img
                      src={checkg}
                      alt="Gray check icons"
                      className="3xl:w-6 xs:w-5"
                    />

                    <div className="w-[90%] flex flex-col gap-1">
                      <Fade direction="down" duration={1000}>
                        <h1 className="hd:text-xl font-bold">Speed</h1>
                      </Fade>

                      <Fade direction="down" duration={1000}>
                        <p className="hd:text-lg 2xl:text-base xl:text-sm lg:text-base xs:text-sm">
                          The result they can produce within a tight deadline
                          (1-3 hours)
                        </p>
                      </Fade>
                    </div>
                  </div>

                  <div className="w-full flex items-start gap-3">
                    <img
                      src={checkg}
                      alt="Gray check icons"
                      className="3xl:w-6 xs:w-5"
                    />

                    <div className="w-[90%] flex flex-col gap-1">
                      <Fade direction="down" duration={1000}>
                        <h1 className="hd:text-xl font-bold">Quality</h1>
                      </Fade>

                      <Fade direction="down" duration={1000}>
                        <p className="hd:text-lg 2xl:text-base xl:text-sm lg:text-base xs:text-sm">
                          The result they can produce given enough time (24-48
                          hours)
                        </p>
                      </Fade>
                    </div>
                  </div>
                </div>

                <Fade direction="down" duration={1000}>
                  <p className="hd:mt-5 lg:mt-4 xs:mt-3 hd:text-2xl 2xl:text-xl lg:text-lg">
                    We believe that this approach, combining real tasks with a
                    structured deadline, will clearly distinguish skilled
                    workers from unskilled ones.
                  </p>
                </Fade>
              </div>
            </div>

            <div className="w-full flex items-start hd:gap-5 2xl:gap-4 xl:gap-3 lg:gap-4 xs:gap-2">
              <Fade
                direction="left"
                duration={1000}
                className="bg-[#F9756D] text-white rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-9 3xl:h-9 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 lg:w-10 lg:h-10 xs:w-6 xs:h-6"
              >
                <h2 className="hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-xl font-semibold">
                  2
                </h2>
              </Fade>

              <div className="w-[90%]">
                <Fade direction="down" duration={1000}>
                  <h1 className="text-[#F9756D] hd:mt-1 3xl:mt-0 hd:mb-5 3xl:mb-4 hd:text-4xl 3xl:text-3xl 2xl:mb-4 2xl:text-2xl xl:mb-4 xl:text-2xl lg:mb-4 lg:text-3xl xs:text-xl xs:mb-2 font-bold">
                    Complementary Skill
                  </h1>
                </Fade>

                <Fade direction="down" duration={1000}>
                  <p className="hd:text-2xl 2xl:text-xl xl:text-base lg:text-lg">
                    We also test the candidates’ complementary skills that will{" "}
                    <span className="font-bold">
                      support their core skills.
                    </span>{" "}
                    For example, we believe that being a ‘video editor’ isn’t
                    just about inserting fancy motion graphics. It’s also about
                    understanding content strategy, audience research and
                    copywriting.
                  </p>
                </Fade>

                <Fade direction="down" duration={1000}>
                  <p className="hd:mt-5 lg:mt-4 xs:mt-3 hd:text-2xl 2xl:text-xl lg:text-lg">
                    The best remote talent understands that their core skill is
                    not enough. To be the best, they{" "}
                    <span className="font-bold">
                      need to learn complementary skills
                    </span>{" "}
                    that help support the outcome of their deliverable.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          {/* End of First Section */}

          {/* Second Section */}
          <div className="3xl:w-1/4 2xl:w-1/5 xl:w-1/4 h-auto xl:block xs:hidden">
            <Fade direction="right" duration={1000}>
              <img src={gallery} alt="Side infographic" />
            </Fade>
          </div>
          {/* End of Second Section */}

          {/* Third Section */}
          <div className="w-full flex items-start mt-16 hd:gap-5 3xl:gap-4 2xl:gap-5 xl:gap-3">
            <div className="bg-[#F9756D] text-white rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-9 3xl:h-9 2xl:w-8 2xl:h-8 xl:w-7 xl:h-7 opacity-0 xl:block xs:hidden">
              <h2 className="hd:text-2xl font-semibold">3</h2>
            </div>

            <div className="xl:w-[90%] flex xl:flex-row xs:flex-col items-center hd:gap-20 3xl:gap-16 2xl:gap-14 xl:gap-12 lg:gap-14 xs:gap-10">
              <Fade
                direction="left"
                duration={1000}
                className="2xl:w-1/3 xl:w-1/2 lg:w-3/4 xs:w-full"
              >
                <img src={example} alt="Some Infographic" />
              </Fade>

              <div className="xl:w-1/2 xs:w-full">
                <Fade direction="down" duration={500} cascade>
                  <ul className="w-full flex flex-col 3xl:gap-3 2xl:gap-2 xs:gap-1 ">
                    <li className="w-full flex items-start gap-3">
                      <img
                        src={checkg}
                        alt="Gray check icons"
                        className="3xl:w-6 xl:w-5 lg:w-6"
                      />

                      <p className="hd:text-xl 2xl:text-base xl:text-base lg:text-lg xs:text-sm w-[90%]">
                        You want videos that get views.
                      </p>
                    </li>
                    <li className="w-full flex items-start gap-3">
                      <img
                        src={checkg}
                        alt="Gray check icons"
                        className="3xl:w-6 xl:w-5 lg:w-6"
                      />

                      <p className="hd:text-xl 2xl:text-base xl:text-base lg:text-lg xs:text-sm w-[90%]">
                        You want blog posts that get traffic.
                      </p>
                    </li>
                    <li className="w-full flex items-start gap-3">
                      <img
                        src={checkg}
                        alt="Gray check icons"
                        className="3xl:w-6 xl:w-5 lg:w-6"
                      />

                      <p className="hd:text-xl 2xl:text-base xl:text-base lg:text-lg xs:text-sm w-[90%]">
                        You want client communications that result in retention.
                      </p>
                    </li>
                  </ul>
                </Fade>

                <Fade direction="down" duration={1000}>
                  <h2 className="font-bold 3xl:my-5 2xl:my-5 xl:my-4 lg:my-6 xs:my-5 2xl:text-2xl xl:text-2xl lg:text-3xl xs:text-xl">
                    Ultimately, these are all achieved by combining a talent’s
                    core skill with complementary skills.
                  </h2>
                </Fade>

                <Fade direction="down" duration={1000}>
                  <p className="hd:text-xl 2xl:text-base xl:text-base lg:text-lg xs:text-base">
                    That’s why at <span className="font-bold">FullFind</span>,
                    we will test these complementary skills.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
          {/* End of Third Section */}
        </div>
      </div>
    </div>
  );
}
