import PropTypes from "prop-types";

// assets
import card4 from "pricing/card4.png";
import card3 from "pricing/card3.png";

export default function PriceCardMini({ val }) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white hd:gap-20 hd:px-10 hd:py-20 3xl:gap-16 3xl:px-10 3xl:py-20 2xl:gap-12 2xl:px-0 2xl:py-16 xl:gap-8 xl:px-5 xl:py-20 lg:gap-8 lg:px-5 lg:py-24 xs:gap-6 xs:px-3 xs:py-16">
      <h1 className="text-center font-light 3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-3xl xs:text-2xl">
        Pricing for {val}:
      </h1>

      <div className="grid lg:grid-cols-2 hd:gap-10 3xl:gap-10 2xl:gap-8 xl:gap-7 lg:gap-8 xs:gap-6 hd:w-[65%] 3xl:w-4/5 2xl:w-5/6 xs:w-full">
        <div
          className="relative w-full shadow-2xl rounded-3xl hd:border-[6px] 3xl:border-[6px] 2xl:border-4 xl:border-4 lg:border-2 xs:border-2 border-zinc-200 overflow-hidden flex flex-col justify-center items-start hd:px-20 hd:py-16 3xl:px-16 3xl:py-14 2xl:px-12 2xl:py-12 xl:px-14 xl:py-12 lg:px-8 lg:py-8 xs:px-6 xs:py-7 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${card4})` }}
        >
          <h3 className="text-center text-black font-bold hd:text-8xl 3xl:text-8xl 2xl:text-[5rem] xl:text-7xl lg:text-6xl xs:text-6xl hd:mb-14 3xl:mb-12 2xl:mb-10 xl:mb-8 lg:mb-6 xs:mb-5">
            $997
            <span className="font-bold hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl xs:text-lg">
              /month
            </span>
          </h3>

          <h1 className="font-bold text-[#F9756D] hd:text-6xl 3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-5xl xs:text-5xl">
            Part-Time
          </h1>
        </div>

        <div
          className="relative w-full shadow-2xl rounded-3xl hd:border-[6px] 3xl:border-[6px] 2xl:border-4 xl:border-4 lg:border-2 xs:border-2 border-zinc-200 overflow-hidden flex flex-col justify-center items-start hd:px-20 hd:py-16 3xl:px-16 3xl:py-14 2xl:px-12 2xl:py-12 xl:px-14 xl:py-12 lg:px-8 lg:py-8 xs:px-6 xs:py-7 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${card3})` }}
        >
          <h3 className="text-center text-black font-bold hd:text-8xl 3xl:text-8xl 2xl:text-[5rem] xl:text-7xl lg:text-6xl xs:text-6xl hd:mb-14 3xl:mb-12 2xl:mb-10 xl:mb-8 lg:mb-6 xs:mb-5">
            $1,947
            <span className="font-bold hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl xs:text-lg">
              /month
            </span>
          </h3>

          <h1 className="font-bold text-[#F9756D] hd:text-6xl 3xl:text-6xl 2xl:text-5xl xl:text-5xl lg:text-5xl xs:text-5xl">
            Full-Time
          </h1>
        </div>
      </div>
    </div>
  );
}

PriceCardMini.propTypes = {
  val: PropTypes.string.isRequired,
};
