// components
import { RoleBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";

// assets
import vid from "role/mark.webp";
import cube from "icons/cube.svg";
import yt from "icons/mark.svg";
import insta from "icons/growth.svg";
import tiktok from "icons/campaign.svg";

// constant
import {
  bannerWrapper,
  bannerTitle,
  bannerSubtitle,
} from "constant/roleStyles";

export default function AccountBanner() {
  return (
    <div className={bannerWrapper}>
      <div className="flex flex-wrap xl:flex-row xs:flex-col items-center xl:justify-between relative hd:px-44 3xl:px-28 xl:gap-0 lg:gap-14">
        <div className="xl:w-1/3 lg:w-1/2 xs:w-5/6 h-full flex items-center order-1 xl:order-2 hd:mt-10 3xl:mt-32 2xl:mt-14 xl:mt-12 xs:mt-10">
          <div className="relative">
            <Fade
              direction="left"
              duration={1000}
              className="absolute z-20 hd:-right-8 hd:top-1/4 3xl:-right-8 3xl:top-1/46 2xl:-right-7 2xl:top-1/4 xl:-right-6 xl:top-1/4 lg:top-1/4 lg:-right-8 xs:-right-6 xs:top-1/4 "
            >
              <img
                src={yt}
                alt="Youtube icons"
                className="topOnlyFar hd:w-16 3xl:w-14 2xl:w-16 xl:w-14 lg:w-16 xs:w-14 "
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
                className="topRightFar hd:w-16 3xl:w-14 2xl:w-16 xl:w-14 lg:w-16 xs:w-14 "
              />
            </Fade>
            <Fade
              direction="left"
              duration={1000}
              className="absolute z-20 hd:right-1/4 hd:-bottom-16 3xl:right-1/4 3xl:-bottom-0 2xl:-bottom-10 2xl:right-1/4 xl:-bottom-7 xl:right-1/4 lg:-bottom-8 lg:right-1/4 xs:-bottom-7 xs:right-1/4 "
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
                className="hd:h-[350px] 3xl:h-[325px] 2xl:h-[300px] xl:h-[300px] lg:h-[400px] xs:h-[285px] w-auto z-0 absolute hd:-top-0 3xl:-top-16 2xl:-top-8 3xl:-left-10 2xl:-left-12 animate-spin-very-slow"
              />
            </Fade>
            <Fade direction="up" duration={1000}>
              <img
                src={vid}
                alt="Video Editor"
                className=" w-full z-10 relative hd:top-5 3xl:-top-10"
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
                Creative Assistants
              </p>
            </div>
          </Fade>

          <Fade direction="down" duration={1000}>
            <h1 className={bannerTitle}>
              Hire{" "}
              <span className="text-blue-600">
                AI-Powered Creative Assistants
              </span>{" "}
              and Save 70% in Staffing Costs While Doubling Efficiency.
            </h1>
          </Fade>

          <Fade direction="right" duration={750}>
            <p className={bannerSubtitle}>
              Get access to top-tier creative talent equipped with the latest AI
              tools to handle your post-production needs.
            </p>
          </Fade>

          <Fade
            duration={500}
            direction="up"
            delay={200}
            className="hd:mt-10 3xl:mt-7 2xl:mt-6 xl:mt-6 lg:mt-10 xs:mt-5 flex xl:justify-start xs:justify-center"
          >
            <RoleBtn nav={false} val="Hire an AI-Powered Assistant" />
          </Fade>
        </div>
      </div>
    </div>
  );
}
