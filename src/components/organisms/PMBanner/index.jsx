// components
import { RoleBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";

// assets
import vid from "role/adslead.webp";

// constant
import {
  bannerWrapper,
  bannerTitle,
  bannerSubtitle,
} from "constant/roleStyles";

export default function PMBanner() {
  return (
    <div className={bannerWrapper}>
      <div className="flex flex-wrap xl:flex-row xs:flex-col items-center xl:justify-between relative hd:px-44 3xl:px-28 xl:gap-0 lg:gap-14">
        <div className="xl:w-1/3 lg:w-1/2 xs:w-5/6 h-full flex items-center order-1 xl:order-2 mt-10">
          <Fade direction="up" duration={1000}>
            <img
              src={vid}
              alt="Video Editor"
              className="w-full z-10 relative hd:top-5 3xl:-top-10"
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
                Lead Generation Assistant
              </p>
            </div>
          </Fade>

          <Fade direction="down" duration={1000}>
            <h1 className={bannerTitle}>
              Hire{" "}
              <span className="text-blue-600">
                AI-Powered Lead Generation Assistant
              </span>{" "}
              to Boost Your Pipeline and Save 70% in Costs.
            </h1>
          </Fade>

          <Fade direction="right" duration={750}>
            <p className={bannerSubtitle}>
              Build targeted lead lists, handle outreach, and manage CRM
              workflows with assistants trained to streamline your lead
              generation efforts.
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
