import { useEffect } from "react";

// components
import useEmblaCarousel from "embla-carousel-react";

import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

// constant
import { reason } from "constant/reason";

// hooks
import WidthSize from "hooks/screenSize";
import { reasonSlideWidth } from "hooks/slideContainer";

export default function WhyCarousel() {
  const width = WidthSize();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 1,
  });
  useEffect(() => {
    reasonSlideWidth(width);
  }, [width]);

  return (
    <div className="w-full h-auto relative mb-10">
      <div className="hd:h-[45rem] hd:w-[37.5rem] 3xl:h-[45rem] 3xl:w-[30rem] 2xl:h-[45rem] 2xl:w-[30rem] xl:h-[45rem] xl:w-[15rem] xs:w-12 absolute top-0 2xl:-left-12 xl:-left-20 bg-gradient-to-r from-white via-blue-50 to-transparent z-10 rounded-br-full"></div>

      <div className="embla w-full overflow-hidden">
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div className="embla__container flex w-full py-10">
            {reason.map((item, index) => (
              <div
                key={index}
                className="embla__slide h-[28rem] rounded-3xl bg-white shadow-xl py-10 px-12 2xl:border-4 xs:border-2 border-gray-200 mx-6"
              >
                <h2 className="hd:text-4xl 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-3xl xs:text-2xl font-bold text-blue-600 mb-7">
                  {item.title}
                </h2>
                <p className="hd:text-xl 3xl:text-lg 2xl:text-[1.05rem] xl:text-lg lg:text-lg xs:text-base text-gray-400">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="hire" className="absolute -bottom-20"></div>

      <div className="hd:h-[35rem] hd:w-[37.5rem] 3xl:h-[35rem] 3xl:w-[30rem] 2xl:h-[35rem] 2xl:w-[30rem] xl:h-[35rem] xl:w-[15rem] xs:w-12 absolute top-0 2xl:-right-12 xl:-right-20 bg-gradient-to-l from-white via-blue-50 to-transparent z-10 rounded-tl-full"></div>

      <FaCircleChevronLeft
        className="text-[#F9756D] absolute cursor-pointer z-20 2xl:left-32 xl:left-32 lg:left-20 xs:left-0 top-1/2 -translate-y-1/2 h-auto hd:w-14 3xl:w-12 2xl:w-10 xl:w-10 lg:w-14 xs:w-10"
        onClick={() => emblaApi.scrollPrev()}
      />
      <FaCircleChevronRight
        className="text-[#F9756D] absolute cursor-pointer z-20 2xl:right-32 xl:right-32 lg:right-20 xs:right-0 top-1/2 -translate-y-1/2 h-auto hd:w-14 3xl:w-12 2xl:w-10 xl:w-10 lg:w-14 xs:w-10"
        onClick={() => emblaApi.scrollNext()}
      />
    </div>
  );
}
