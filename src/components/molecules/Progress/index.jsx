import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import ScrollCarousel from "scroll-carousel-react";
import { Fade } from "react-awesome-reveal";
import ProgressBar from "atoms/ProgressBar";
import { FAQCard, PriceCards } from "atoms/Card";
import OptionalForm from "molecules/OptionalForm";

// assets
import p1 from "home/p1.jpg";
import p2 from "home/p2.jpg";
import p3 from "home/p3.jpg";
import p4 from "home/p4.jpg";
import p5 from "home/p5.jpg";
import p6 from "home/p6.jpg";
import p7 from "home/p7.jpg";
import p8 from "home/p8.jpg";

// constant
import { CTAbtn } from "constant/padding";

export default function Progress() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];
  const location = useLocation();

  const [hide, setHide] = useState(false);

  useEffect(() => {
    location.pathname == "/landing-page-1" ? setHide(false) : setHide(true);
  }, [location]);

  return (
    <div
      id="progress"
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto overflow-hidden bg-white flex flex-col gap-8 items-center `}
    >
      <Fade direction="down" duration={750}>
        <h1 className="font-black 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-4xl xs:text-3xl hd:mt-0 3xl:mt-10 text-center">
          Hiring Has Never Been <span className="text-blue-600">Easier</span>
        </h1>
      </Fade>

      <Fade direction="up" duration={1000}>
        <p className="hd:text-3xl 3xl:text-2xl 2xl:text-xl xl:text-lg lg:text-2xl xs:text-base text-center">
          You&apos;re one click away from your next perfect fit.
        </p>
      </Fade>

      <ProgressBar />

      <div id="Carousel" className="relative w-screen mb-10 ">
        <ScrollCarousel
          autoplay
          autoplaySpeed={3}
          speed={1}
          elementType="div"
          className=" w-full "
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="xl:w-32 xl:h-32 xs:w-24 xs:h-24 xl:mr-10 xs:mr-5 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          ))}
        </ScrollCarousel>
      </div>

      <PriceCards />

      <div className="mt-10 flex flex-col items-center gap-8">
        <button className={CTAbtn}>
          Hire an AI-Powered Virtual Assistant Now
        </button>
        <p className="italic text-center 3xl:text-2xl 2xl:text-xl xl:text-base">
          All pricing includes the assistant’s salary, management fees, and
          access to
          <br className="lg:block xs:hidden" /> continued AI training resources
        </p>
      </div>

      {!hide && <OptionalForm />}

      <FAQCard />
    </div>
  );
}
