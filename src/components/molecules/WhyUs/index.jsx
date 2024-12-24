// components
import StartHiringBtn from "atoms/Button/StartHiring";
import { Fade } from "react-awesome-reveal";
import GuaranteeCard from "atoms/Card/GuaranteeCard";

// constant
// import { padding } from "constant/padding";

export default function WhyUs() {
  return (
    <div
      className={`hd:py-16 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 w-full h-auto flex flex-col items-center gap-10 bg-white`}
    >
      <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-4xl xs:text-3xl text-center font-black hd:w-3/5 3xl:w-[70%] 2xl:w-full xs:w-full leading-normal">
        Save time and money.
      </h1>

      <GuaranteeCard />

      {/* <div className="flex items-center justify-center gap-3">
        <img
          src={dollar}
          alt="Dollar coin icons"
          className="hd:w-10 3xl:w-10 2xl:w-10 xl:w-8 lg:w-8 xs:w-10 lg:block xs:hidden"
        />

        <p className="3xl:text-xl 2xl:text-lg xl:text-base lg:text-sm xs:text-sm">
          <span className="font-black">$100 to start - </span>Get FREE custom
          work from 5-20 qualified candidates before the interview stage.
        </p>
      </div> */}
      <div className="w-full h-0" id="hire"></div>
      <Fade
        duration={1500}
        direction="up"
        delay={200}
        className="w-full flex justify-center "
      >
        <StartHiringBtn />
      </Fade>
    </div>
  );
}
