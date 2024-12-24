import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// assets
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";

// constants
import { roleSection } from "constant/roles";

// hooks
import WidthSize from "hooks/screenSize";
import { setSlideWidth } from "hooks/slideContainer";

export default function RoleCarousel() {
  const width = WidthSize();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: "ltr",
      duration: 1000,
      startIndex: 2,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
      }),
    ]
  );
  const nav = useNavigate();

  useEffect(() => {
    setSlideWidth(width);
  }, [width]);

  return (
    <div className="w-full flex items-center ">
      <div className="cursor-pointer" onClick={() => emblaApi.scrollPrev()}>
        <AiOutlineCaretLeft className="lg:w-10 lg:h-10 lg:block xs:hidden text-pink-100" />
      </div>

      <div className="embla w-full overflow-hidden">
        <div className="embla__viewport w-full" ref={emblaRef}>
          <div
            className="embla__container flex w-full"
            onMouseEnter={() => {
              emblaApi.plugins().autoScroll.stop();
            }}
            onMouseLeave={() => {
              emblaApi.plugins().autoScroll.play();
            }}
          >
            {roleSection.map((item) => (
              <div
                key={item.id}
                className={`${item.bg} embla__slide cursor-pointer flex flex-col justify-between xl:p-8 xs:p-5 xl:mx-5 xs:mx-2 rounded-3xl relative`}
                onClick={() => nav(item.route)}
              >
                <div className="bg-white rounded-l-xl absolute right-0 hd:top-16 hd:py-4 hd:pl-4 hd:pr-10 3xl:top-14 3xl:py-3 3xl:pl-3 3xl:pr-9 2xl:py-2 2xl:pl-2 2xl:pr-9 2xl:top-14 xl:py-3 xl:pl-3 xl:pr-10 xl:top-14 lg:py-2 lg:pl-3 lg:pr-9 lg:top-12 xs:py-3 xs:pl-3 xs:pr-8 xs:top-10">
                  <img
                    src={item.icons}
                    alt="Role Icons"
                    className="hd:w-14 3xl:w-10 2xl:w-9 xl:w-12 lg:w-10 xs:w-12 "
                  />
                </div>

                <div>
                  <img src={item.image} alt="Talent" className="w-full" />

                  <p className="mt-6 font-bold hd:text-5xl 3xl:text-4xl 2xl:text-2xl xl:text-xl xs:text-2xl">
                    {item.title}
                  </p>
                </div>

                <p className="flex items-center 3xl:mt-10 2xl:mt-2 xl:mt-4 xs:mt-3 gap-2 text-lg font-medium cursor-pointer">
                  Learn more <FaChevronCircleRight />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cursor-pointer" onClick={() => emblaApi.scrollNext()}>
        <AiOutlineCaretRight className="lg:w-10 lg:h-10 lg:block xs:hidden text-pink-100" />
      </div>
    </div>
  );
}
