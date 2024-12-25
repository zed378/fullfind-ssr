import { useState, useEffect, useRef, useCallback } from "react";

// components
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image";

// constant
import { testi, url } from "constant/testimony";

// hooks
import WidthSize from "hooks/screenSize";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "styles/testi.css";

// dynamic
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default function Testimony() {
  const width = WidthSize();

  const [screen, setScreen] = useState({
    width: "640px",
    height: "360px",
  });

  const [options, setOptions] = useState({
    playing: false,
    controls: true,
    volume: 1,
    muted: false,
    pip: true,
    width: screen.width,
    height: screen.height,
    stopOnUnmount: true,
    wrapper: "div",
    config: { youtube: { playerVars: { showinfo: 0 } } },
  });

  useEffect(() => {
    if (width >= 1900) {
      setScreen({
        width: "900px",
        height: "493px",
      });
    } else if (width >= 1400 && width < 1900) {
      setScreen({
        width: "800px",
        height: "380px",
      });
    } else if (width >= 1200 && width < 1400) {
      setScreen({
        width: "580px",
        height: "325px",
      });
    } else if (width >= 1024 && width < 1200) {
      setScreen({
        width: "460px",
        height: "240px",
      });
    } else if (width >= 768 && width < 1024) {
      setScreen({
        width: "640px",
        height: "360px",
      });
    } else if (width >= 480 && width < 768) {
      setScreen({
        width: "460px",
        height: "260px",
      });
    } else if (width < 480) {
      setScreen({
        width: "300px",
        height: "180px",
      });
    }
  }, [width]);

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      width: screen.width,
      height: screen.height,
    }));
  }, [screen]);

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
    <div
      id="testi"
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto overflow-hidden flex flex-col hd:gap-28 3xl:gap-16 2xl:gap-16 xl:gap-12 lg:gap-14 bg-white relative`}
    >
      <div className="w-full flex items-start xl:flex-row xs:flex-col xs:gap-10 xl:justify-between">
        <Fade direction="up" duration={1250} className="xl:w-1/2 xs:w-full">
          <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-4xl xs:text-3xl xl:text-left xs:text-center xl:mb-0 xs:mb-6 3xl:leading-none 2xl:leading-none xl:leading-none font-black hd:mt-12 3xl:mt-10 2xl:mt-8 xl:mt-12">
            Hear what these people have to{" "}
            <span className="text-blue-600">say about</span> working with talent
            placed by <span className="text-blue-600">FullFind</span>
          </h1>
        </Fade>

        <div className="xl:w-1/2 xs:w-full relative">
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
            // className="hd:px-7 3xl:px-6 2xl:px-5 xl:px-4 lg:px-6 xs:px-5 py-3"
            className="responsive-padding"
            ref={sliderRef}
            // style={{ padding: "0 20px" }}
          >
            {testi.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full rounded-3xl bg-[#F2EBEC] xl:p-10 lg:p-10 xs:p-6 flex flex-col justify-center gap-4 overflow-hidden swiper-slide shadow-md"
              >
                <Fade direction="down" duration={750} delay={300}>
                  <h2 className="hd:text-4xl 3xl:text-2xl 2xl:text-xl xl:text-xl xs:text-xl lg:text-3xl font-black">
                    {item.title}
                  </h2>
                </Fade>

                <Fade direction="down" duration={1000} delay={300}>
                  <p className="hd:text-3xl 3xl:text-lg 2xl:text-base xl:text-sm lg:text-xl xs:text-base">
                    {item.content}
                  </p>
                </Fade>

                <Fade direction="up" duration={750} delay={300}>
                  <div className="w-full flex items-center mt-4 xs:gap-3 lg:gap-4 xl:gap-3">
                    <div className="3xl:w-16 xl:w-12 lg:w-16 xs:w-12 rounded-full overflow-hidden">
                      <Image
                        src={item.img}
                        alt="Client Picture"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>

                    <div className="w-full flex flex-col hd:gap-0">
                      <p className="hd:text-3xl 3xl:text-2xl 2xl:text-xl xl:text-base lg:text-2xl font-semibold">
                        {item.name}
                      </p>

                      <p className="hd:text-xl 3xl:text-lg 2xl:text-base xl:text-sm lg:text-xl xs:text-sm font-normal">
                        {item.job}
                      </p>
                    </div>
                  </div>
                </Fade>
              </SwiperSlide>
            ))}
          </Swiper>

          <GrPrevious
            onClick={handlePrev}
            className="absolute cursor-pointer hd:w-7 hd:h-7 text-blue-600 top-1/2 -translate-y-1/2 z-20 left-0"
          />
          <GrNext
            onClick={handleNext}
            className="absolute cursor-pointer hd:w-7 hd:h-7 text-blue-600 top-1/2 -translate-y-1/2 z-20 right-0"
          />
        </div>
      </div>

      <ul className="w-full grid xl:grid-cols-2 xs:grid-cols-1 justify-between gap-10 ">
        {url.map((item) => (
          <li
            key={item.id}
            className={`flex justify-center overflow-hidden rounded-xl ${
              item.id % 2 === 0
                ? "xl:justify-end lg:justify-center"
                : "xl:justify-start lg:justify-center"
            }`}
          >
            <ReactPlayer {...options} url={item.url} />
          </li>
        ))}
      </ul>
      <div id="guarantee" className="w-full absolute bottom-10"></div>
    </div>
  );
}
