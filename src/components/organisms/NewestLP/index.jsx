import { useState, useEffect } from "react";

// components
import { StartHiringBtn } from "atoms/Button";
import { Fade } from "react-awesome-reveal";
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Carousel from "molecules/Carousel";

// assets
import logo from "brand/logo.png";
import thumb from "home/thumbnail.webp";
import outlinew from "brand/outline.png";
import { PiShareFatThin } from "react-icons/pi";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaPlay, FaPause } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import bg from "home/bg.png";
import person1 from "home/person1.webp";
import bgp1 from "home/bgp1.svg";
import c1 from "home/c1.webp";
import c2 from "home/c2.webp";

// constant
import { padding } from "constant/padding";

// hooks
import WidthSize from "hooks/screenSize";

export default function NewLP() {
  const [screen, setScreen] = useState({
    width: "640px",
    height: "360px",
  });

  const [options, setOptions] = useState({
    url: "https://www.youtube.com/watch?v=gKEaFcO9ssk",
    playing: false,
    controls: true,
    volume: 1,
    light: thumb,
    muted: false,
    pip: true,
    width: screen.width,
    height: screen.height,
    stopOnUnmount: true,
    wrapper: "div",
    config: { youtube: { playerVars: { showinfo: 0 } } },
  });

  const [shareBtn, setShareBtn] = useState(false);

  const width = WidthSize();

  useEffect(() => {
    if (width > 1200) {
      setScreen({
        width: "720px",
        height: "420px",
      });
    } else if (width > 720 && width < 1201) {
      setScreen({
        width: "640px",
        height: "360px",
      });
    } else if (width < 721 && width > 480) {
      setScreen({
        width: "460px",
        height: "260px",
      });
    } else if (width < 481) {
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

  const playVids = () =>
    setOptions((prev) => ({
      ...prev,
      playing: !prev.playing,
      light: prev.light ? "" : prev.light,
    }));

  return (
    <div className="w-full overflow-x-hidden">
      {/* banner */}
      <div className={`${padding} flex flex-col gap-2 glass-white`}>
        <div className=" flex items-center 3xl:justify-center 2xl:justify-between hd:px-28 3xl:px-16 overflow-hidden">
          <img
            src={bg}
            alt="Assets background"
            className="animate__animated animate__backInDown absolute -z-50 hd:w-[750px] hd:top-10 hd:left-[36.5%] 3xl:w-[700px] 3xl:top-10 3xl:left-[37.5%] 2xl:w-[700px] 2xl:top-0 2xl:left-[35%] xl:w-[800px] xl:top-9 lg:top-10 xs:top-5 xs:left-0"
          />

          <div
            id="banner"
            className="hd:w-3/5 3xl:w-[70%] xs:w-full xl:mt-0 xs:mt-10"
          >
            <Fade direction="down" duration={1000}>
              <h1 className="hd:text-[65px] 3xl:text-[44px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl 2xl:leading-tight font-bold 2xl:text-left xs:text-center">
                Hire AI-Powered Virtual Assistants &{" "}
                <span className="text-blue-600">Save Up to 70%</span> in{" "}
                {/* <br className="2xl:block xs:hidden" /> */}
                Staffing Costs
              </h1>
            </Fade>

            <Fade direction="right" duration={750} className="relative -z-50">
              <p className="text-slate-600 hd:text-[33px] 3xl:text-[25px] 2xl:text-[1.25rem] xl:text-2xl lg:text-2xl xs:text-xl mt-8 2xl:py-0 2xl:leading-tight 2xl:text-left xs:text-center">
                Leverage AI-enhanced talent to scale your business faster and
                more efficiently.
              </p>
            </Fade>

            <div className="mt-10"></div>

            <Fade
              duration={500}
              direction="up"
              delay={200}
              className="w-full flex 2xl:justify-start xs: justify-center"
            >
              <StartHiringBtn nav={false} />
            </Fade>
          </div>

          <div className="3xl:w-1/2 2xl:w-full xs:w-full h-full flex items-center mt-10 2xl:contents xs:hidden">
            <div className="relative w-auto hd:mt-20 3xl:mt-10 2xl:mt-8">
              <img
                src={bgp1}
                alt="Recruiter review candidates"
                className="hd:h-[525px] 3xl:h-[460px] 2xl:h-[400px] xl:h-[400px] lg:h-[330px] md:h-[370px] xs:h-[320px] w-auto z-0 absolute bottom-0 right-20 hd:left-96 3xl:left-72 2xl:left-24 xl:left-[72%] lg:left-[55%] md:left-28 xs:left-10 "
              />

              <img
                src={person1}
                alt="Recruiter review candidates"
                className=" 3xl:w-2/3 2xl:w-4/5 xl:w-full lg:w-full md:w-full sm:w-full hd:left-80 3xl:left-64 2xl:left-16 xl:left-[60%] lg:left-[45%] md:left-[17.5%] w-full relative z-10 "
              />

              <div className="absolute bottom-[10%] hd:left-72 3xl:left-64 2xl:left-10 xl:left-[60%] lg:left-32 md:left-16 z-20">
                <Fade direction="right" duration={750}>
                  <img
                    src={c1}
                    alt="Talents"
                    className="hd:h-44 3xl:h-40 2xl:h-32 xl:h-36 lg:h-32 xs:h-28 topRight"
                  />
                </Fade>
              </div>

              <div className="absolute 2xl:right-0 xl:-right-64 xl:top-20 lg:top-5 lg:-right-48 md:-right-16 xs:top-3 xs:right-0 z-20">
                <Fade direction="right" duration={750}>
                  <img
                    src={c2}
                    alt="Talents"
                    className="hd:h-48 3xl:h-44 2xl:h-40 xl:h-40 lg:h-44 xs:h-32 topOnly"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div
          id="caro"
          className="w-full xl:mt-10 xs:mt-10 h-auto relative order-3"
        >
          <div className="h-40 3xl:w-72 2xl:w-64 xl:w-40 xs:w-12 absolute top-0 left-0 bg-gradient-to-r from-white via-white to-transparent z-10"></div>

          <Carousel />

          <div className="h-40 3xl:w-72 2xl:w-64 xl:w-40 xs:w-12 absolute top-0 right-0 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
        </div>
      </div>
      {/* End of banner */}

      {/* How we help */}
      <div
        className={`hd:py-16 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 flex flex-col items-center xl:gap-12 lg:gap-8 xs:gap-5 relative pt-10 glass-white`}
      >
        <img
          src={outlinew}
          alt="FulFind logo outline white"
          className="absolute 2xl:top-20 xl:top-20 lg:-top-10 hd:w-[450px] hd:-right-32 3xl:w-[375px] 3xl:-right-28 2xl:w-[300px] 2xl:-right-24 xl:w-60 xl:-right-24 xl:block xs:hidden"
        />

        <img
          src={outlinew}
          alt="FulFind logo outline white"
          className="absolute hd:top-72 3xl:top-72 2xl:top-64 xl:top-56 lg:-top-10 hd:w-[375px] hd:-left-24 3xl:w-[275px] 3xl:-left-20 2xl:w-[250px] 2xl:-left-14 xl:w-48 xl:-left-10 xl:block xs:hidden"
        />

        <div className="w-full flex flex-col items-center 2xl:gap-5 xl:gap-4">
          <h1 className="font-bold 2xl:text-6xl lg:text-5xl xs:text-3xl text-center xl:mb-2 xs:mb-4 hd:w-3/5 3xl:w-3/4 2xl:w-3/4 xl:w-4/5 ">
            Tired of Traditional VAs?
          </h1>
          <p className="text-center font-bold 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-xl xs:text-base">
            <span className="text-[#F9756D]">
              Discover How Our AI-Powered VAs
            </span>{" "}
            <br className="xl:block xs:hidden" /> Will 2x Your Productivity &{" "}
            <span className="text-blue-600">Save You 70%</span> in Staffing
            Costs
          </p>
        </div>

        <div className="p-3 bg-blue-100 rounded-3xl">
          <div
            onMouseEnter={() => setOptions({ ...options, volume: 1 })}
            className="rounded-3xl overflow-hidden"
          >
            <ReactPlayer {...options} />
          </div>

          <div className="w-full xl:my-6 xs:my-3 px-2 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="xl:w-14 xl:h-14 xs:w-10 xs:h-10 flex justify-center items-center rounded-full border border-blue-500">
                <img
                  src={logo}
                  alt="Fullfind Logo only"
                  className="xl:w-8 xs:w-6"
                />
              </div>

              <h1 className="3xl:text-2xl font-semibold">FullFind</h1>
            </div>

            <div className="relative">
              <div
                className="rounded-full p-2 bg-slate-100 hover:bg-slate-200 cursor-pointer hover:text-sky-500"
                onMouseEnter={() => setShareBtn(true)}
                onClick={() => setShareBtn(!shareBtn)}
              >
                <PiShareFatThin className="xl:w-7 xl:h-7 xs:w-4 xs:h-4 " />
              </div>

              {shareBtn && (
                <div
                  onMouseEnter={() => setShareBtn(true)}
                  onMouseLeave={() => setShareBtn(false)}
                  className="flex flex-col items-start gap-3 absolute top-10 right-4 z-50 px-4 pt-5 pb-3 rounded-b-3xl rounded-tl-3xl border border-sky-500 bg-sky-100"
                >
                  <AiFillCloseCircle
                    className="w-6 h-6 text-red-500 absolute -top-2 -right-2 cursor-pointer"
                    onClick={() => setShareBtn(false)}
                  />

                  <FacebookShareButton url={options.url} hashtag="Fullfind">
                    <div className="flex items-center gap-2 text-blue-500 hover:text-blue-800">
                      <FaFacebook className=" xl:w-6 xl:h-6 xs:w-4 xs:h-4 " />
                      <p className="hover:font-semibold text-black xl:text-base xs:text-xs">
                        Facebook
                      </p>
                    </div>
                  </FacebookShareButton>

                  <LinkedinShareButton url={options.url}>
                    <div className="flex items-center gap-2 text-blue-500 hover:text-blue-800">
                      <FaLinkedin className=" xl:w-6 xl:h-6 xs:w-4 xs:h-4 " />
                      <p className="hover:font-semibold text-black xl:text-base xs:text-xs">
                        LinkedIn
                      </p>
                    </div>
                  </LinkedinShareButton>

                  <TelegramShareButton url={options.url}>
                    <div className="flex items-center gap-2 text-sky-500 hover:text-sky-800">
                      <FaTelegramPlane className=" xl:w-6 xl:h-6 xs:w-4 xs:h-4 " />
                      <p className="hover:font-semibold text-black xl:text-base xs:text-xs">
                        Telegram
                      </p>
                    </div>
                  </TelegramShareButton>

                  <TwitterShareButton url={options.url}>
                    <div className="flex items-center gap-2 text-black hover:text-slate-500">
                      <FaXTwitter className=" xl:w-6 xl:h-6 xs:w-4 xs:h-4 " />
                      <p className="hover:font-semibold text-black xl:text-base xs:text-xs">
                        Twitter
                      </p>
                    </div>
                  </TwitterShareButton>

                  <WhatsappShareButton url={options.url}>
                    <div className="flex items-center gap-2 text-green-500 hover:text-green-900">
                      <FaWhatsapp className=" xl:w-6 xl:h-6 xs:w-4 xs:h-4 " />
                      <p className="hover:font-semibold text-black xl:text-base xs:text-xs">
                        WhatsApp
                      </p>
                    </div>
                  </WhatsappShareButton>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={playVids}
          className="flex items-center justify-center gap-2 text-[#F9756D]m border-2 rounded-2xl border-[#F9756D] text-[#F9756D] hover:bg-[#F9756D] hover:text-white transition-all px-5 py-2"
        >
          {options.playing === false ? <FaPlay /> : <FaPause />} Watch Now
        </button>
      </div>
      {/* End of how we help */}
    </div>
  );
}
