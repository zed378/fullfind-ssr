// components
import { Fade } from "react-awesome-reveal";
// import { RateCardAds } from "atoms/Card";

// assets
import vid1 from "role/mark1.webp";

export default function AdsContent() {
  return (
    <div
      className={`w-full hd:py-28 3xl:py-20 3xl:px-0 2xl:py-32 2xl:px-16 xl:py-16 xl:px-12 lg:py-20 lg:px-14 xs:py-16 xs:px-5 bg-[#F6F4F4] flex flex-col items-center `}
    >
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
            <h1 className="xl:text-left xs:text-center hd:text-[3.2rem] try:text-[3.2rem] 3xl:text-[2.8rem] 2xl:text-5xl lg:text-4xl xs:text-2xl font-bold">
              All{" "}
              <span className="text-blue-600">marketers are proficient</span> in
              the latest digital advertising tools and platforms.
            </h1>
          </Fade>

          <Fade direction="up" duration={1000}>
            <p className="xl:text-left xs:text-center hd:text-2xl 2xl:text-2xl xl:text-xl lg:text-lg">
              Whether you&apos;re scaling your ad creatives, producing YouTube
              content, or building your personal brand, our trained AI-powered
              Creative Assistants are ready to help you scale.
            </p>
          </Fade>
        </div>
      </div>

      {/* <RateCardAds /> */}
    </div>
  );
}
