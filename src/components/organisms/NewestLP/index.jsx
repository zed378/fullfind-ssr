import { useState, useEffect } from "react";

// components
import { StartHiringBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Carousel from "molecules/Carousel";
import Player from "molecules/Player";

// assets

import thumb from "home/thumbnail.webp";
import bg from "home/bg.png";
import person1 from "home/person1.webp";
import bgp1 from "home/bgp1.svg";
import c1 from "home/c1.webp";
import c2 from "home/c2.webp";

// constant
import { padding } from "constant/padding";

export default function NewLP() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* banner */}
      <div className={`${padding} flex flex-col gap-2 glass-white`}>
        <div className=" flex items-center 3xl:justify-center 2xl:justify-between hd:px-28 3xl:px-16 overflow-hidden">
          <div className="animate__animated animate__backInDown absolute -z-50 hd:w-[750px] hd:top-10 hd:left-[36.5%] 3xl:w-[700px] 3xl:top-10 3xl:left-[37.5%] 2xl:w-[700px] 2xl:top-0 2xl:left-[35%] xl:w-[800px] xl:top-9 lg:top-10 xs:top-5 xs:left-0">
            <Image
              src={bg}
              alt="Assets background"
              style={{ width: "100%", height: "auto" }}
              loading="lazy"
            />
          </div>

          <div
            id="banner"
            className="hd:w-3/5 3xl:w-[70%] xs:w-full xl:mt-0 xs:mt-10"
          >
            <Fade direction="down" duration={1000}>
              <h1 className="hd:text-[65px] 3xl:text-[44px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl 2xl:leading-tight font-bold 2xl:text-left xs:text-center">
                Hire AI-Powered Virtual Assistants &{" "}
                <span className="text-blue-600">Save Up to 70%</span> in{" "}
                {/* <br className="2xl:block xs:hidden" /> */}
                Staffing Costs
              </h1>
            </Fade>

            <Fade direction="right" duration={750} className="relative -z-50">
              <p className="text-slate-600 hd:text-[33px] 3xl:text-[25px] 2xl:text-[1.25rem] xl:text-2xl lg:text-2xl xs:text-xl mt-8 2xl:py-0 2xl:leading-tight 2xl:text-left xs:text-center">
                Leverage AI-enhanced talent to scale your business faster and
                more efficiently.
              </p>
            </Fade>

            <div className="mt-10"></div>

            <Fade
              duration={500}
              direction="up"
              delay={200}
              className="w-full flex 2xl:justify-start xs: justify-center"
            >
              <StartHiringBtn nav={false} />
            </Fade>
          </div>

          <div className="3xl:w-1/2 2xl:w-full xs:w-full h-full flex items-center mt-10 2xl:contents xs:hidden">
            <div className="relative w-auto hd:mt-20 3xl:mt-10 2xl:mt-8">
              <div className="hd:h-[525px] 3xl:h-[460px] 2xl:h-[400px] xl:h-[400px] lg:h-[330px] md:h-[370px] xs:h-[320px] w-auto z-0 absolute bottom-0 right-20 hd:left-96 3xl:left-72 2xl:left-24 xl:left-[72%] lg:left-[55%] md:left-28 xs:left-10 ">
                <Image
                  src={bgp1}
                  alt="Recruiter review candidates"
                  style={{ objectFit: "contain" }}
                  layout="fill"
                  loading="lazy"
                />
              </div>

              <div className=" 3xl:w-2/3 2xl:w-4/5 xl:w-full lg:w-full md:w-full sm:w-full hd:left-80 3xl:left-64 2xl:left-16 xl:left-[60%] lg:left-[45%] md:left-[17.5%] w-full relative z-10 ">
                <Image
                  src={person1}
                  alt="Recruiter review candidates"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-[10%] hd:left-72 3xl:left-64 2xl:left-10 xl:left-[60%] lg:left-32 md:left-16 z-20">
                <Fade direction="right" duration={750}>
                  <div className="hd:h-44 3xl:h-40 2xl:h-32 xl:h-36 lg:h-32 xs:h-28 topRight">
                    <Image
                      src={c1}
                      alt="Talents"
                      style={{ width: "auto", height: "100%" }}
                      loading="lazy"
                    />
                  </div>
                </Fade>
              </div>

              <div className="absolute 2xl:right-0 xl:-right-64 xl:top-20 lg:top-5 lg:-right-48 md:-right-16 xs:top-3 xs:right-0 z-20">
                <Fade direction="right" duration={750}>
                  <div className="hd:h-48 3xl:h-44 2xl:h-40 xl:h-40 lg:h-44 xs:h-32 topOnly">
                    <Image
                      src={c2}
                      alt="Talents"
                      style={{ width: "auto", height: "100%" }}
                      loading="lazy"
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div
          id="caro"
          className="w-full xl:mt-10 xs:mt-10 h-auto relative order-3"
        >
          <div className="h-40 3xl:w-72 2xl:w-64 xl:w-40 xs:w-12 absolute top-0 left-0 bg-gradient-to-r from-white via-white to-transparent z-10"></div>

          <Carousel />

          <div className="h-40 3xl:w-72 2xl:w-64 xl:w-40 xs:w-12 absolute top-0 right-0 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
        </div>
      </div>
      {/* End of banner */}

      {/* How we help */}
      <Player />
    </div>
  );
}
