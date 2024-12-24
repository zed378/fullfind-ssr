import { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// assets
import c1 from "caro/c1.png";
import c2 from "caro/c2.png";
import c3 from "caro/c3.png";
import c4 from "caro/c4.png";
import c5 from "caro/c5.png";
import c6 from "caro/c6.png";
import c7 from "caro/c7.png";
import c8 from "caro/c8.png";
import c9 from "caro/c9.png";
import c10 from "caro/c10.png";
import c11 from "caro/c11.png";

// hooks
import WidthSize from "hooks/screenSize";
import { BannerSlideWidth } from "hooks/slideContainer";

export default function Carousel() {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

  const width = WidthSize();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      direction: "ltr",
      duration: 1000,
      startIndex: 1,
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        playOnInit: true,
      }),
    ]
  );

  useEffect(() => {
    BannerSlideWidth(width);
  }, [width]);

  return (
    <div id="guarantee" className="embla w-full overflow-hidden">
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
          {images.map((item, idx) => (
            <div
              key={idx}
              onClick={() => emblaApi.plugins().autoScroll.play()}
              className={`embla__slide flex items-center justify-center grayscale hover:grayscale-0 hd:mx-4 3xl:mx-4 2xl:mx-3 xl:mx-3 xs:mx-2`}
            >
              <img
                src={item}
                alt="Talent"
                className="hd:h-36 3xl:h-32 2xl:h-24 xl:h-24 lg:h-28 xs:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
