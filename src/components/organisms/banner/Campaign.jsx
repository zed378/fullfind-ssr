// components
import { StartHiringBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";
import Carousel from "molecules/Carousel";

// assets
import bg from "home/bg.png";
import checkb from "icons/checkb.svg";
import person1 from "home/person1.webp";
import bgp1 from "home/bgp1.svg";
import c1 from "home/c1.webp";
import c2 from "home/c2.webp";

// constant
import { padding } from "constant/padding";

export default function BannerCampaign() {
  return (
    <div
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-10 xs:py-12 xl:px-16 xs:px-8 w-full h-auto flex flex-col gap-2`}
    >
      <div className=" flex items-center 3xl:justify-center 2xl:justify-between hd:px-28 3xl:px-16">
        <img
          src={bg}
          alt="Assets background"
          className="animate__animated animate__backInDown absolute -z-50 hd:w-[750px] hd:-top-0 hd:left-[36.5%] 3xl:w-[700px] 3xl:top-5 3xl:left-[37.5%] 2xl:w-[700px] 2xl:top-0 2xl:left-[35%] xl:w-[800px] xl:top-9 lg:top-10 xs:top-5 "
        />

        <div id="banner" className="3xl:w-[55%] xs:w-full xl:mt-0 xs:mt-10">
          <Fade direction="down" duration={1000}>
            <h1 className="hd:text-[65px] 3xl:text-[50px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl 2xl:leading-tight font-black">
              Hire the <span className="text-blue-600">Top 1% </span>
              <br className="2xl:block xs:hidden" />
              Overseas Creative Talent with{" "}
              <span className="text-blue-600">Skill-Based</span> Hiring
            </h1>
          </Fade>

          <Fade direction="right" duration={750} className="relative -z-50">
            <div className="bg-blue-200 hd:h-[100px] hd:w-[85rem] try:h-12 try:w-[85rem] try:top-6 3xl:h-[5.4rem] 3xl:w-[80rem] try2:h-12 2xl:h-16 2xl:w-[65rem] absolute hd:top-6 hd:-left-[35%] try:-left-[35%] 3xl:top-5 3xl:-left-[30%] 2xl:top-6 2xl:-left-[35%] "></div>
            <p className="hd:text-[33px] 3xl:text-[25px] 2xl:text-[1.25rem] xl:text-2xl lg:text-2xl xs:text-xl mt-8 2xl:py-0 2xl:leading-tight">
              Hire from around the world and save 70% in staffing costs.
            </p>
          </Fade>

          <Fade direction="down" duration={750} cascade>
            <ul className="flex flex-col hd:gap-3 xs:gap-1 mt-8 mb-8">
              <li className="flex items-center 3xl:gap-3 xs:gap-2 hd:text-[24px] 3xl:text-[18px] lg:text-base xs:text-sm">
                <img
                  src={checkb}
                  alt="check blue"
                  className="hd:w-6 xl:w-5 lg:w-6 xs:w-5"
                />{" "}
                Starts at $11/hr
              </li>
              <li className="flex items-center 3xl:gap-3 xs:gap-2 hd:text-[24px] 3xl:text-[18px] lg:text-base xs:text-sm">
                <img
                  src={checkb}
                  alt="check blue"
                  className="hd:w-6 xl:w-5 lg:w-6 xs:w-5"
                />{" "}
                Unlimited FREE replacements
              </li>
              <li className="flex items-center 3xl:gap-3 xs:gap-2 hd:text-[24px] 3xl:text-[18px] lg:text-base xs:text-sm">
                <img
                  src={checkb}
                  alt="check blue"
                  className="hd:w-6 xl:w-5 lg:w-6 xs:w-5"
                />{" "}
                Full time hire
              </li>
            </ul>
          </Fade>

          <Fade duration={500} direction="up" delay={200}>
            <StartHiringBtn nav={false} lp={true} />
          </Fade>
        </div>

        <div className="3xl:w-1/2 2xl:w-full xs:w-full h-full flex items-center mt-10 2xl:contents xs:hidden">
          <div className="relative w-auto">
            <img
              src={bgp1}
              alt="Recruiter review candidates"
              className=" 3xl:h-[525px] 2xl:h-[450px] xl:h-[400px] lg:h-[330px] md:h-[370px] xs:h-[320px] w-auto z-0 absolute bottom-0 right-20 hd:left-96 3xl:left-72 2xl:left-24 xl:left-[72%] lg:left-[55%] md:left-28 xs:left-10 "
            />

            <img
              src={person1}
              alt="Recruiter review candidates"
              className=" 3xl:w-2/3 2xl:w-4/5 xl:w-full lg:w-full md:w-full sm:w-full hd:left-80 3xl:left-64 2xl:left-16 xl:left-[60%] lg:left-[45%] md:left-[17.5%] w-full relative z-10 "
            />

            <div className="absolute bottom-[10%] hd:left-72 3xl:left-64 2xl:left-10 xl:left-[60%] lg:left-32 md:left-16 z-20">
              <Fade direction="right" duration={750}>
                <img
                  src={c1}
                  alt="Talents"
                  className="hd:h-44 3xl:h-40 2xl:h-32 xl:h-36 lg:h-32 xs:h-28 topRight"
                />
              </Fade>
            </div>

            <div className="absolute 2xl:right-0 xl:-right-64 xl:top-20 lg:top-5 lg:-right-48 md:-right-16 xs:top-3 xs:right-0 z-20">
              <Fade direction="right" duration={750}>
                <img
                  src={c2}
                  alt="Talents"
                  className="hd:h-48 3xl:h-44 2xl:h-40 xl:h-40 lg:h-44 xs:h-32 topOnly"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div
        id="caro"
        className="w-full xl:mt-10 xs:mt-10 h-auto relative overflow-hidden order-3"
      >
        <div className="h-40 3xl:w-72 2xl:w-60 xl:w-40 xs:w-12 absolute top-0 left-0 bg-gradient-to-r from-[#f4f4f4] via-[#f4f4f4] to-transparent z-10"></div>
        <Carousel />
        <div className="h-40 3xl:w-72 2xl:w-60 xl:w-40 xs:w-12 absolute top-0 right-0 bg-gradient-to-l from-[#f4f4f4] via-[#f4f4f4] to-transparent z-10"></div>
      </div>
    </div>
  );
}
