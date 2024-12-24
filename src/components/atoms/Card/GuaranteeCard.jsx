// assets
import exchange from "icons/exchange.svg";
import money from "icons/money.svg";

// hooks
import useElementHeight from "hooks/useElementHeight";

export default function GuaranteeCard() {
  const [height, elementRef] = useElementHeight();

  return (
    <div className="w-full grid lg:grid-cols-2 xs:grid-cols-1 xl:gap-10 xs:gap-5 xl:justify-evenly xl:items-center hd:px-52 3xl:px-10">
      <div
        className={` w-full flex flex-col justify-center gap-5 lg:rounded-[3rem] xs:rounded-3xl 3xl:pr-10 3xl:pl-14 3xl:pb-10 3xl:pt-14 2xl:py-10 2xl:px-10 xl:py-8 xl:px-6 lg:px-12 lg:py-10 xs:px-6 xs:py-6 overflow-hidden hover:bg-blue-200 bg-blue-100 relative`}
        style={{ height }}
      >
        <img
          src={money}
          alt="Sad icons"
          className="hd:w-24 3xl:w-24 2xl:w-20 xl:w-20 lg:w-32 xs:w-24 absolute top-6 right-6"
        />

        <div className=" flex flex-col gap-4 relative z-20">
          <h1 className="xl:w-[85%] lg:w-[90%] 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl font-black">
            Just a <span className="text-[#F97068]">$100 refundable</span>{" "}
            deposit to start
          </h1>

          <p className="xl:w-[95%] hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-base lg:text-xl xs:text-base">
            Get <span className="font-bold">FREE samples</span> from 5-20
            qualified candidates before interviewing them.
          </p>
        </div>
      </div>

      <div
        ref={elementRef}
        className={`w-full flex flex-col gap-5 lg:rounded-[3rem] xs:rounded-3xl 3xl:pr-10 3xl:pl-14 3xl:pb-10 3xl:pt-14 2xl:py-10 2xl:px-10 xl:py-8 xl:px-6 lg:px-12 lg:py-10 xs:px-6 xs:py-6 overflow-hidden hover:bg-blue-200 bg-blue-100 relative`}
      >
        <img
          src={exchange}
          alt="Sad icons"
          className="hd:w-24 3xl:w-24 2xl:w-20 xl:w-20 lg:w-32 xs:w-24 absolute top-6 right-6"
        />

        <div className=" flex flex-col gap-4 relative z-20">
          <h1 className="xl:w-[85%] lg:w-[90%] 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl font-black">
            Forever <br />
            <span className="text-[#F97068]">‘FREE Replacement’</span> Guarantee
          </h1>

          <p className="xl:w-[95%] hd:text-2xl 3xl:text-2xl 2xl:text-2xl xl:text-base lg:text-xl xs:text-base">
            Replace the talent for <span className="font-bold">FREE</span> at
            any time. For as many times as you like.
          </p>
        </div>
      </div>
    </div>
  );
}
