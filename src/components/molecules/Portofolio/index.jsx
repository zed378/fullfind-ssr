import { useRef, useCallback } from "react";
import { useImageViewer } from "react-image-viewer-hook";

// components
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

// constant
import { portofolioImages } from "constant/portofolio";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portofolio() {
  const { getOnClick, ImageViewer } = useImageViewer();
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="bg-white w-full flex justify-center">
      <div className="hd:w-1/2 3xl:w-3/5 2xl:w-3/5 xl:w-4/5 lg:w-5/6 md:w-11/12 xs:w-full md:rounded-2xl bg-[#F9756D] flex flex-col items-center hd:py-16 hd:px-20 3xl:py-14 3xl:px-12 2xl:py-12 2xl:px-10 xl:py-12 xl:px-10 lg:py-10 lg:px-5 xs:py-10 xs:px-3">
        <Fade direction="down" duration={1000}>
          <h1 className="text-white text-center font-semibold hd:text-5xl 3xl:text-5xl 2xl:text-4xl xl:text-4xl lg:text-4xl xs:text-3xl">
            VIEW PORTOFOLIO
          </h1>
        </Fade>

        <div className="w-full relative hd:my-7 3xl:my-7 2xl:my-6 xl:my-5 lg:my-7 xs:my-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 1,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            spaceBetween={100}
            loop={true}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            className="hd:px-7 3xl:px-6 2xl:px-5 xl:px-4 lg:px-6 xs:px-5 py-3"
            ref={sliderRef}
          >
            {portofolioImages.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full rounded-3xl bg-[#F2EBEC] flex flex-col justify-center gap-4 overflow-hidden swiper-slide shadow-md"
                onClick={getOnClick(`${item}?auto=compress&cs=tinysrgb&w=1200`)}
              >
                <div
                  className="w-full flex items-center bg-cover bg-no-repeat hd:h-[36rem] 3xl:h-[34rem] 2xl:h-[30rem] xl:h-[30rem] lg:h-[32rem] md:h-[25rem] xs:h-[20rem] "
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          <IoIosArrowDropleftCircle
            onClick={handlePrev}
            className="absolute cursor-pointer hd:w-12 hd:h-12 3xl:h-10 3xl:w-10 2xl:w-9 2xl:h-9 xl:h-12 xl:w-12 lg:h-12 lg:w-12 xs:h-8 xs:w-8 text-blue-200 top-1/2 -translate-y-1/2 z-20 left-0"
          />
          <IoIosArrowDroprightCircle
            onClick={handleNext}
            className="absolute cursor-pointer hd:w-12 hd:h-12 3xl:h-10 3xl:w-10 2xl:w-9 2xl:h-9 xl:h-12 xl:w-12 lg:h-12 lg:w-12 xs:h-8 xs:w-8 text-blue-200 top-1/2 -translate-y-1/2 z-20 right-0"
          />
        </div>

        <div className="flex justify-center">
          <Fade direction="up" duration={1000}>
            <button
              className="bg-white hover:bg-slate-100 hover:text-slate-500 font-bold border-2 border-black hover:border-slate-400 transition-all lg:px-10 xs:px-3 hd:py-2 3xl:py-2 2xl:py-1 xl:py-1 lg:py-1 xs:py-1 hd:text-xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-xl xs:text-lg rounded-full"
              onClick={getOnClick(
                `${portofolioImages[0]}?auto=compress&cs=tinysrgb&w=1200`
              )}
            >
              Check Out Our Work Samples
            </button>
          </Fade>
        </div>

        <ImageViewer />
      </div>
    </div>
  );
}
