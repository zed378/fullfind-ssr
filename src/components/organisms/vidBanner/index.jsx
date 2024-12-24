// components
import { RoleBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";

// assets
import cube from "icons/cube.svg";
import yt from "icons/yt.svg";
import insta from "icons/insta.svg";
import tiktok from "icons/tiktok.svg";
import vid from "role/vid.webp";

// constant
import { padding } from "constant/padding";

export default function VidBanner() {
  return (
    <div
      className={`w-full h-auto xl:px-16 xs:px-8 3xl:pb-16 2xl:pt-32 2xl:pb-16 xl:pt-28 xl:pb-12 xs:pt-16 xs:pb-16 bg-[#F2EBEC] `}
    >
      <div className="flex flex-wrap xl:flex-row xs:flex-col items-center xl:justify-between relative hd:px-44 3xl:px-28 xl:gap-0 lg:gap-14">
        <div className="xl:w-1/3 lg:w-1/2 xs:w-5/6 h-full flex items-center order-1 xl:order-2 mt-10">
          <div className="relative">
            <Fade
              direction="left"
              duration={1000}
              className="absolute z-20 hd:right-8 hd:-top-2 3xl:right-8 3xl:-top-16 2xl:right-7 2xl:-top-10 xl:right-6 xl:-top-8 lg:-top-8 lg:right-8 xs:right-6 xs:-top-8 "
            >
              <img
                src={yt}
                alt="Youtube icons"
                className="topRightFar hd:w-16 3xl:w-14 2xl:w-16 xl:w-14 lg:w-16 xs:w-14 "
              />
            </Fade>

            <Fade
              direction="left"
              duration={1000}
              className="absolute z-20 hd:-left-8 hd:bottom-1/4 3xl:bottom-1/4 3xl:-left-7 2xl:bottom-1/4 2xl:-left-8 xl:bottom-1/4 xl:-left-7 lg:bottom-1/4 lg:-left-8 xs:bottom-1/4 xs:-left-7 "
            >
              <img
                src={insta}
                alt="Instagram icons"
                className="topOnlyFar hd:w-16 3xl:w-14 2xl:w-16 xl:w-14 lg:w-16 xs:w-14 "
              />
            </Fade>

            <Fade
              direction="left"
              duration={1000}
              className="absolute z-20 hd:left-1/2 hd:-bottom-16 3xl:left-1/2 3xl:-bottom-0 2xl:-bottom-10 2xl:left-1/2 xl:-bottom-7 xl:left-1/2 lg:-bottom-8 lg:left-1/2 xs:-bottom-7 xs:left-1/2 "
            >
              <img
                src={tiktok}
                alt="Tiktok icons"
                className="animate-bounce hd:w-16 3xl:w-14 2xl:w-16 xl:w-14 lg:w-16 xs:w-14 "
              />
            </Fade>

            <Fade direction="right" duration={1000}>
              <img
                src={cube}
                alt="Video Editor"
                className="hd:h-[375px] 3xl:h-[325px] 2xl:h-[325px] xl:h-[300px] lg:h-[400px] xs:h-[285px] w-auto z-0 absolute hd:top-24 3xl:top-0 2xl:top-2 2xl:-right-10 animate-spin-very-slow"
              />
            </Fade>

            <Fade direction="up" duration={1000}>
              <img
                src={vid}
                alt="Video Editor"
                className="w-full z-10 relative hd:top-5 3xl:-top-10"
              />
            </Fade>
          </div>
        </div>

        <div
          id="banner"
          className="xl:w-[55%] xs:w-full order-2 xl:order-1 xl:mt-10 lg:mt-0 xs:mt-10"
        >
          <Fade direction="left" duration={1000}>
            <div className="flex items-center xl:justify-start xs:justify-center gap-2 cursor-pointer 3xl:text-base xl:text-sm">
              <p className="hover:text-blue-400 hover:underline">Roles</p>
              <p className="hover:text-blue-400">&gt;</p>
              <p className="hover:text-blue-400 hover:underline">
                Video Editor
              </p>
            </div>
          </Fade>

          <Fade direction="down" duration={1000}>
            <h1 className="hd:text-[65px] 3xl:text-[50px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl 2xl:leading-tight font-black 3xl:leading-tight mt-6 xl:text-left xs:text-center">
              Hire Vetted <span className="text-blue-600">Video Editors</span>{" "}
              and Save 70% in Staffing Costs.
            </h1>
          </Fade>

          <Fade direction="right" duration={750}>
            <p className="hd:text-[33px] 3xl:text-[25px] 2xl:text-[1.25rem] xl:text-xl lg:text-2xl xs:text-xl hd:mt-8 3xl:mt-6 2xl:mt-6 xl:mt-5 lg:mt-10 xs:mt-5 2xl:py-0 2xl:leading-tight xl:text-left xs:text-center">
              Get 5-20 <span className="font-bold">qualified candidates</span>{" "}
              to do a FREE video for you before deciding on a hire.
            </p>
          </Fade>

          <Fade
            duration={500}
            direction="up"
            delay={200}
            className="hd:mt-10 3xl:mt-7 2xl:mt-6 xl:mt-6 lg:mt-10 xs:mt-5 flex xl:justify-start xs:justify-center"
          >
            <RoleBtn nav={false} val="Hire a Video Editor" />
          </Fade>
        </div>
      </div>
    </div>
  );
}
