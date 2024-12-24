// components
import { Fade } from "react-awesome-reveal";
import { RateCardVid } from "atoms/Card";

// assets
import vid1 from "role/vid1.webp";

// constant
import { padding } from "constant/padding";

export default function VidPrice() {
  return (
    <div className={`${padding} bg-[#F6F4F4] flex flex-col items-center `}>
      <div className="hd:w-4/5 xs:w-full hd:gap-14 3xl:gap-12 2xl:gap-12 xl:gap-8 lg:gap-10 xs:gap-8 hd:px-0 3xl:px-28 flex xl:flex-row xs:flex-col items-center justify-center">
        <Fade
          direction="left"
          duration={1000}
          className="hd:w-[15%] 3xl:w-1/5 2xl:w-1/6 xl:w-1/5 lg:w-1/5 md:w-2/5 xs:w-3/5"
        >
          <img
            src={vid1}
            alt="Talent doing video editing"
            className="xl:rounded-full xs:rounded-3xl"
          />
        </Fade>

        <div className="hd:w-2/3 xl:w-4/5 flex flex-col hd:gap-7 3xl:gap-6 2xl:gap-5 xl:gap-6 xs:gap-5">
          <Fade direction="down" duration={1000}>
            <h1 className="xl:text-left xs:text-center hd:text-[3.2rem] try:text-[3.2rem] 3xl:text-[2.8rem] 2xl:text-5xl lg:text-[2.5rem] xs:text-3xl font-bold">
              All{" "}
              <span className="text-blue-600">
                video editors are proficient
              </span>{" "}
              in the latest video editing tools.
            </h1>
          </Fade>

          <Fade direction="up" duration={1000}>
            <p className="xl:text-left xs:text-center hd:text-2xl 2xl:text-2xl xl:text-xl xs:text-xl">
              Whether you’re posting more content on Youtube or scaling your ad
              creatives through Meta Ads, our trained video editors are ready to
              help you scale.
            </p>
          </Fade>
        </div>
      </div>

      <RateCardVid />
    </div>
  );
}
