import { useRef } from "react";

// components
import { Fade } from "react-awesome-reveal";

// assets
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import f1 from "flow/f1.webp";
import f2 from "flow/f2.webp";
import f3 from "flow/f3.webp";
import f4 from "flow/f4.webp";
import f5 from "flow/f5.webp";
import f6 from "flow/f6.webp";
import f7 from "flow/f7.webp";

// hooks
import { useOverflow, useScroll } from "hooks/processflow";

// constant
import { padding } from "constant/padding";

export default function ProcessFlow() {
  const processFlowRef = useRef(null);
  const isOverflowing = useOverflow(processFlowRef);
  const { scrollLeft, scrollRight } = useScroll(processFlowRef);

  return (
    <div className={`${padding} bg-[#F2EBEC] `}>
      <Fade direction="down" duration={1000} className="xl:pl-[25px]">
        <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-5xl md:text-4xl xs:text-3xl xl:text-left xs:text-center font-bold">
          Here is how our{" "}
          <span className="text-blue-600">
            Skill-Based
            <br className="xl:block xs:hidden" /> Hiring process
          </span>{" "}
          works
        </h1>
      </Fade>

      {/* Process Flow */}
      <div className="w-full pl-[15px] overflow-x-auto" ref={processFlowRef}>
        <div className="w-[2275px] h-[675px] flex mt-12 overflow-x- ">
          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f1})` }}
            >
              <div className="w-[450px] h-[290px] border-t-2 border-blue-600 rotate-[30deg] absolute bottom-0 -left-24 "></div>
            </div>

            <div
              // direction="left"
              // duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[5px] "
            >
              1
            </div>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Sourcing
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  We recruit and vet the candidates for you from our pool of
                  local talent here in South East Asia. We source candidates by
                  filtering the best CVs and Portfolios to best fit the
                  requirements that were discussed in our onboarding process.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f2})` }}
            >
              <div className="w-[330px] h-[160px] border-t-2 border-blue-600 rotate-[14deg] absolute bottom-0 -left-4 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[190px] "
            >
              2
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Language and Skill Tests
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  First, we test their level of English. Then, as outlined by
                  the process above, each candidate will do 1 custom work for
                  you as a sample. Before even the interview stage. This will
                  make sure they are the perfect fit to help you scale.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f3})` }}
            >
              <div className="w-[335px] h-[90px] border-t-2 border-blue-600 rotate-[9deg] absolute bottom-0 -left-1 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[270px] "
            >
              3
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Pre-Onboarding
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  We will help take care of HR interviews and reference checks
                  before sending them over to you for the final interview or
                  screening.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f4})` }}
            >
              <div className="w-[330px] h-[43px] border-t-2 border-blue-600 rotate-[7.5deg] absolute bottom-0 -left-2 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[323px] "
            >
              4
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Client Interview
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  You will interview our vetted candidates and choose the ones
                  you think would be the perfect candidate. While also taking
                  into account their assessment results.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f5})` }}
            >
              <div className="w-[325px] h-[20px] border-t-2 border-blue-600 absolute bottom-0 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-medium absolute -left-4 top-[368px] "
            >
              5
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-blue-600 font-semibold text-2xl mt-7 mb-3">
                  Onboarding
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  We will then onboard this talent to you. We will place an
                  experienced project manager from our team for 60 days to help
                  your new talent properly integrate into your team.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f6})` }}
            >
              <div className="w-[325px] h-[20px] border-t-2 border-blue-600 absolute bottom-0 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[368px] "
            >
              6
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Retention
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  We take care of all the salary payouts, legality and
                  compliance of local laws and regulations.
                </p>
              </Fade>
            </div>
          </div>

          <div className="w-[325px] h-full flex flex-col border-x border-[#B5B5B5] relative">
            <div
              className="bg-white bg-cover hover:bg-zinc-400 h-3/5 relative"
              style={{ backgroundImage: `url(${f7})` }}
            >
              <div className="w-[325px] h-[20px] border-t-2 border-blue-600 absolute bottom-0 "></div>
            </div>

            <Fade
              direction="left"
              duration={750}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9756D] text-white text-xl font-medium absolute -left-4 top-[368px] "
            >
              7
            </Fade>

            <div className="h-2/5 py-5 px-10">
              <Fade direction="down" duration={1500}>
                <h1 className="text-[#F9756D] font-semibold mt-4 text-2xl mb-3">
                  Replacement
                </h1>
              </Fade>

              <Fade direction="down" duration={1500}>
                <p className="text-sm">
                  You have a FREE forever replacement guarantee as long as you
                  keep working with FullFind. You can always replace your talent
                  if you feel they are not a good fit for you. Free. Forever.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      {/* End of Process Flow */}

      {isOverflowing && (
        <div className="flex items-center gap-3 mt-10">
          <IoIosArrowDropleftCircle
            className="w-10 h-10 cursor-pointer"
            onClick={scrollLeft}
          />
          <IoIosArrowDroprightCircle
            className="w-10 h-10 cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      )}
    </div>
  );
}
