// components
import { PriceCards } from "atoms/Card";
import { Fade } from "react-awesome-reveal";
import ProgressBar from "atoms/ProgressBar";

// constant
import { padding } from "constant/padding";

export default function PricingSection() {
  return (
    <div className={`${padding} bg-white flex flex-wrap flex-col`}>
      <Fade direction="down" duration={1500}>
        <h1 className="hd:text-[65px] hd:text-7xl 3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-5xl xs:text-4xl text-center font-black hd:px-44 3xl:px-20 2xl:px-10 xl:leading-tight">
          Fixed Monthly <span className="text-blue-600">Pricing</span> for All
          Roles
        </h1>
      </Fade>

      <PriceCards />

      <hr className="xl:my-28 xs:my-20" />

      <div
        className={`bg-white flex flex-col items-center hd:gap-20 3xl:gap-16 2xl:gap-12 xl:gap-8 xs:gap-6`}
      >
        <Fade direction="down" duration={750} className="hd:w-4/5 3xl:w-5/6">
          <h1 className="font-black 3xl:text-7xl xl:text-6xl lg:text-5xl xs:text-4xl text-center">
            How it works
          </h1>
        </Fade>

        <ProgressBar />
      </div>
    </div>
  );
}
