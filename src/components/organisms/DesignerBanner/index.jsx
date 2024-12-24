// components
import { RoleBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";

// assets
import vid from "role/sosmedhero.webp";

// constant
import {
  bannerWrapper,
  bannerTitle,
  bannerSubtitle,
} from "constant/roleStyles";

export default function DesignerBanner() {
  return (
    <div className={bannerWrapper}>
      <div className="flex flex-wrap xl:flex-row xs:flex-col items-center xl:justify-between relative hd:px-44 3xl:px-28 xl:gap-0 lg:gap-14">
        <div className="xl:w-1/3 lg:w-1/2 xs:w-5/6 h-full flex items-center order-1 xl:order-2 mt-10">
          <Fade direction="up" duration={1000}>
            <img
              src={vid}
              alt="Video Editor"
              className="hd:h-[450px] 3xl:h-[400px] 2xl:h-[420px] xl:h-[300px] lg:h-[400px] xs:h-[285px] w-full z-10 relative hd:top-5 3xl:-top-10"
            />
          </Fade>
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
                Social Media Growth Assistants
              </p>
            </div>
          </Fade>

          <Fade direction="down" duration={1000}>
            <h1 className={bannerTitle}>
              Hire{" "}
              <span className="text-blue-600">
                AI-Powered Social Media Growth Assistants
              </span>{" "}
              to Elevate Your Online Presence and Save 70% on Costs.
            </h1>
          </Fade>

          <Fade direction="right" duration={750}>
            <p className={bannerSubtitle}>
              An all-in-one solution for creating, managing, and growing your
              social media platforms, powered by the latest AI tools.
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
