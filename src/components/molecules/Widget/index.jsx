import { useEffect } from "react";

// assets
import outline from "brand/outline.png";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full 2xl:h-[700px] lg:h-[1270px] md:h-[1170px] xs:h-[1200px] relative mt-0"
      data-url="https://calendly.com/fullfind/hiring-goals-call"
    >
      <img
        src={outline}
        alt="FulFind logo outline white"
        className="absolute -z-10 top-0 hd:w-[450px] hd:-left-64 3xl:w-[300px] 3xl:-left-40 2xl:w-[200px] 2xl:-left-28 xl:w-40 xl:-left-28 xl:block xs:hidden"
      />

      {/* <p className="font-bold absolute hd:-top-10 3xl:top-2 2xl:top-3 xl:top-3 lg:top-3 md:-top-8 xs:-top-8 left-1/2 -translate-x-1/2 hd:text-3xl 3xl:text-2xl 2xl:text-xl xl:text-lg lg:text-lg md:text-sm w-full text-center">
        <span className="text-[#F97068] underline underline-offset-2 decoration-2 font-montserrat">
          Book in a call
        </span>{" "}
        below to get started
      </p> */}
    </div>
  );
};

export default CalendlyWidget;
