import { useRouter } from "next/router";

// components
import Slider from "react-slick";
import { Fade } from "react-awesome-reveal";
import StartHiringBtn from "atoms/Button/StartHiring";
import Reason from "molecules/Reason";
import Image from "next/image";

// assets
import p1 from "home/p1.jpg";
import p2 from "home/p2.jpg";
import p3 from "home/p3.jpg";
import p4 from "home/p4.jpg";
import p5 from "home/p5.jpg";
import p6 from "home/p6.jpg";
import p7 from "home/p7.jpg";
import p8 from "home/p8.jpg";
import r1 from "icons/r1.svg";
import r2 from "icons/r2.svg";
import r3 from "icons/r3.svg";
import r4 from "icons/r4.svg";
import r5 from "icons/r5.svg";
import r6 from "icons/r6.svg";
import r7 from "icons/r7.svg";
import brand from "brand/logo.webp";

// dynamic
import dynamic from "next/dynamic";
const ScrollCarousel = dynamic(() => import("scroll-carousel-react"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default function Roles() {
  const router = useRouter();
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];

  const options = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    pauseOnHover: false,
    className: "center",
    centerMode: true,
  };

  return (
    <div className="w-full bg-white">
      <div className="xl:py-20 xs:py-5 w-full">
        <h1 className="font-bold 2xl:text-5xl lg:text-4xl xs:text-3xl text-center mb-5">
          Why Hire AI-Powered Virtual Assistants?
        </h1>

        <Reason />

        <div id="hire"></div>
      </div>

      <div
        id="roles"
        className={`hd:py-20 3xl:py-20 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 bg-white overflow-hidden flex xl:flex-row flex-wrap items-start relative`}
      >
        <div
          id="Carousel"
          className="relative w-full mb-10 xs:block 2xl:hidden"
        >
          <ScrollCarousel
            autoplay
            autoplaySpeed={3}
            speed={0}
            elementType="div"
            className=" w-full "
          >
            {images.map((item, index) => (
              <div
                key={index}
                className="xs:w-24 xs:h-24 rounded-full overflow-hidden"
              >
                <Image
                  src={item}
                  alt="talent"
                  style={{ width: "auto", height: "100%" }}
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollCarousel>
        </div>

        <div className="w-1/5 hd:h-[38rem] hd:mt-5 3xl:h-[34rem] 3xl:mt-3 2xl:h-[30rem] 2xl:mt-3 overflow-hidden 2xl:block xs:hidden">
          <Slider {...options}>
            {images.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="3xl:w-24 3xl:h-24 2xl:w-20 2xl:h-20 rounded-full m-auto overflow-hidden">
                  <Image
                    src={item}
                    alt="Talents"
                    style={{ width: "100%", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hd:w-7/12 3xl:w-4/5 2xl:w-2/3 xs:w-full flex flex-col gap-9 relative z-10">
          <Fade direction="down" duration={1000}>
            <h1 className="hd:text-[82px] 3xl:text-7xl 2xl:text-6xl xl:text-6xl lg:text-5xl xs:text-3xl xl:text-left xs:text-center font-black">
              Virtual marketing assistants from{" "}
              <span className="text-blue-600">FullFind</span> can help you:
            </h1>
          </Fade>

          <div className="w-full h-auto flex flex-col gap-3 lg:mb-3">
            <Fade direction="down" duration={500} cascade>
              <ul className="w-full flex flex-wrap lg:flex-row xs:flex-col items-center gap-3 xs:justify-center xl:justify-start">
                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/video-editor")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r1}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Edit Videos
                </li>

                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/designer")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r2}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Create Landing Pages
                </li>

                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto lg:w-[35%] xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl xl:inline-flex xs:hidden"
                  onClick={() => router.push("/roles/ads")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r3}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Design Ads
                </li>
              </ul>
            </Fade>

            <Fade direction="down" duration={500} delay={750} cascade>
              <ul className="w-full flex xl:justify-start xs:justify-center flex-wrap lg:flex-row xs:flex-col items-center gap-3">
                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/va")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r4}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Create Funnels
                </li>

                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/account")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r5}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Communicate with Clients
                </li>
              </ul>
            </Fade>

            <Fade direction="down" duration={500} delay={1250} cascade>
              <ul className="w-full flex xl:justify-start xs:justify-center flex-wrap lg:flex-row xs:flex-col items-center gap-3 ">
                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/ui-ux")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r6}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Generate Leads
                </li>

                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl xl:hidden"
                  onClick={() => router.push("/roles/ads")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r3}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  Design Ads
                </li>

                <li
                  className="hd:px-6 3xl:px-6 2xl:px-5 xs:px-4 lg:w-auto xs:w-full py-2 cursor-pointer bg-zinc-100 hover:bg-zinc-200 rounded-full border border-zinc-200 font-medium flex items-center gap-3 hd:text-xl 3xl:text-lg 2xl:text-base lg:text-xl"
                  onClick={() => router.push("/roles/pm")}
                >
                  <div className=" 3xl:w-8 2xl:w-7 lg:w-8 xs:w-5">
                    <Image
                      src={r7}
                      alt="Roles Icon"
                      style={{ width: "100%", height: "auto" }}
                      loading="lazy"
                    />
                  </div>
                  And much more...
                </li>
              </ul>
            </Fade>
          </div>

          <Fade
            direction="down"
            duration={1000}
            className="flex xl:justify-start xs:justify-center"
          >
            <StartHiringBtn nav={false} />
          </Fade>
        </div>

        <div className="absolute opacity-25 hd:w-[500px] hd:top-[180px] hd:right-10 3xl:w-[320px] 3xl:right-5 3xl:top-44 2xl:w-[300px] 2xl:top-44 2xl:right-6 z-0 2xl:block xs:hidden">
          <Image
            src={brand}
            alt="logo"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
