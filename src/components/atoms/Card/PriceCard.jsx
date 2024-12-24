// components
import StartHiringBtn from "atoms/Button/StartHiring";

// assets
import checkr from "icons/checkr.svg";
import roulette from "icons/roulette.svg";

export default function PriceCard() {
  return (
    <ul className="w-full flex xl:flex-row xs:flex-col xl:items-end 2xl:justify-evenly xl:justify-between xl:gap-0 xs:gap-10">
      <li className="2xl:w-1/4 xl:w-[32%] xs:w-full bg-white rounded-3xl border border-slate-200 hd:py-16 hd:px-10 3xl:py-14 3xl:px-6 2xl:py-12 2xl:px-6 xl:px-7 xl:py-12 lg:px-14 lg:py-16 xs:px-10 xs:py-12 flex flex-col items-center ">
        <h1 className="text-center hd:text-5xl 3xl:text-4xl xl:text-3xl lg:text-4xl xs:text-2xl hd:mb-10 3xl:mb-8 2xl:mb-6 xl:mb-6 lg:mb-10">
          Associate
        </h1>

        <h1 className="text-center hd:text-8xl 3xl:text-7xl xl:text-6xl lg:text-7xl xs:text-5xl text-blue-600">
          $1997<span className="2xl:text-xl xl:text-lg">/mo</span>
        </h1>

        <h2 className="text-center font-bold italic 3xl:text-2xl 2xl:text-xl lg:text-2xl xs:text-xl">
          $11/hour
        </h2>

        <h2 className="text-center font-light italic mb-5">
          $100 to start getting samples
        </h2>

        <ul className="w-full flex flex-col gap-3 lg:mb-10 xs:mb-6">
          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Fluent in English
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            1-2 years experience
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Free Forever Replacement Guarantee
          </li>
        </ul>

        <div className="w-full flex justify-center">
          <StartHiringBtn />
        </div>

        <p className="text-center text-slate-500 lg:mt-6 xs:mt-4 2xl:text-base xl:text-sm xs:text-xs">
          Cancel anytime
        </p>
      </li>

      <li
        className="2xl:w-1/4 xl:w-[32%] xs:w-full bg-white rounded-3xl border border-slate-200 hd:py-16 hd:px-10 3xl:py-14 3xl:px-6 2xl:py-12 2xl:px-6 xl:px-7 xl:py-12 lg:px-14 lg:py-16 xs:px-10 xs:py-12 flex flex-col items-center bg-no-repeat "
        style={{
          backgroundImage: `url(${roulette})`,
          backgroundSize: "80%",
          backgroundPosition: "-175% 70%",
        }}
      >
        <h1 className="text-center hd:text-5xl 3xl:text-4xl xl:text-3xl lg:text-4xl xs:text-2xl hd:mb-10 3xl:mb-8 2xl:mb-6 xl:mb-6 lg:mb-10">
          Senior
        </h1>

        <h1 className="text-center hd:text-8xl 3xl:text-7xl xl:text-6xl lg:text-7xl xs:text-5xl text-blue-600">
          $2997<span className="2xl:text-xl xl:text-lg">/mo</span>
        </h1>

        <h2 className="text-center font-bold italic 3xl:text-2xl 2xl:text-xl lg:text-2xl xs:text-xl">
          $17/hour
        </h2>

        <h2 className="text-center font-light italic mb-5">
          $100 to start getting samples
        </h2>

        <ul className="w-full flex flex-col gap-3 lg:mb-10 xs:mb-6">
          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Fluent in English
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            3-5 years experience
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Free Forever Replacement Guarantee
          </li>
        </ul>

        <div className="w-full flex justify-center">
          <StartHiringBtn />
        </div>

        <p className="text-center text-slate-500 lg:mt-6 xs:mt-4 2xl:text-base xl:text-sm xs:text-xs">
          Cancel anytime
        </p>
      </li>

      <li className="2xl:w-1/4 xl:w-[32%] xs:w-full bg-white rounded-3xl border border-slate-200 hd:py-16 hd:px-10 3xl:py-14 3xl:px-6 2xl:py-12 2xl:px-6 xl:px-7 xl:py-12 lg:px-14 lg:py-16 xs:px-10 xs:py-12 flex flex-col items-center ">
        <h1 className="text-center hd:text-5xl 3xl:text-4xl xl:text-3xl lg:text-4xl xs:text-2xl hd:mb-10 3xl:mb-8 2xl:mb-6 xl:mb-6 lg:mb-10">
          Lead
        </h1>

        <h1 className="text-center hd:text-8xl 3xl:text-7xl xl:text-6xl lg:text-7xl xs:text-5xl text-blue-600">
          $3997<span className="2xl:text-xl xl:text-lg">/mo</span>
        </h1>

        <h2 className="text-center font-bold italic 3xl:text-2xl 2xl:text-xl lg:text-2xl xs:text-xl">
          $22/hour
        </h2>

        <h2 className="text-center font-light italic mb-5">
          $100 to start getting samples
        </h2>

        <ul className="w-full flex flex-col gap-3 lg:mb-10 xs:mb-6">
          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Fluent in English
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            5+ years experience
          </li>

          <li className="flex items-start hd:gap-3 3xl:gap-2 xl:gap-2 xs:gap-2 hd:text-xl 3xl:text-lg 2xl:text-lg xl:text-base lg:text-2xl xs:text-lg font-semibold">
            <img
              src={checkr}
              alt="check blue"
              className="hd:w-7 xl:w-6 lg:w-8 xs:w-7"
            />
            Free Forever Replacement Guarantee
          </li>
        </ul>

        <div className="w-full flex justify-center">
          <StartHiringBtn />
        </div>

        <p className="text-center text-slate-500 lg:mt-6 xs:mt-4 2xl:text-base xl:text-sm xs:text-xs">
          Cancel anytime
        </p>
      </li>
    </ul>
  );
}
