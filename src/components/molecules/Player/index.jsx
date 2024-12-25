import { useState, useEffect } from "react";

// components
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Image from "next/image";
// import ReactPlayer from "react-player";

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

// hooks
import WidthSize from "hooks/screenSize";

// dynamic
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default function Player() {
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
  const [loaded, setLoaded] = useState(false);
  const width = WidthSize();

  useEffect(() => {
    setLoaded(true); // Set loaded to true when component mounts
    console.log("Player component has been loaded!");

    return () => {
      setLoaded(false); // Set loaded to false on unmount
      console.log("Player component has been unloaded!");
    };
  }, []);

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

  return loaded ? (
    <div
      className={`hd:py-16 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 flex flex-col items-center xl:gap-12 lg:gap-8 xs:gap-5 relative pt-10 glass-white`}
    >
      <div className="absolute 2xl:top-20 xl:top-20 lg:-top-10 hd:w-[450px] hd:-right-32 3xl:w-[375px] 3xl:-right-28 2xl:w-[300px] 2xl:-right-24 xl:w-60 xl:-right-24 xl:block xs:hidden">
        <Image
          src={outlinew}
          alt="FulFind logo outline white"
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      </div>

      <div className="absolute hd:top-72 3xl:top-72 2xl:top-64 xl:top-56 lg:-top-10 hd:w-[375px] hd:-left-24 3xl:w-[275px] 3xl:-left-20 2xl:w-[250px] 2xl:-left-14 xl:w-48 xl:-left-10 xl:block xs:hidden">
        <Image
          src={outlinew}
          alt="FulFind logo outline white"
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      </div>

      <div className="w-full flex flex-col items-center 2xl:gap-5 xl:gap-4">
        <h1 className="font-bold 2xl:text-6xl lg:text-5xl xs:text-3xl text-center xl:mb-2 xs:mb-4 hd:w-3/5 3xl:w-3/4 2xl:w-3/4 xl:w-4/5 ">
          Tired of Traditional VAs?
        </h1>
        <p className="text-center font-bold 3xl:text-3xl 2xl:text-2xl xl:text-xl lg:text-xl xs:text-base">
          <span className="text-[#F9756D]">
            Discover How Our AI-Powered VAs
          </span>{" "}
          <br className="xl:block xs:hidden" /> Will 2x Your Productivity &{" "}
          <span className="text-blue-600">Save You 70%</span> in Staffing Costs
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
            <div className="xl:w-14 xl:h-14 xs:w-10 xs:h-10 flex justify-center items-center rounded-full border border-blue-500 cursor-pointer hover:bg-blue-300">
              <div className="xl:w-8 xs:w-6 ">
                <Image
                  src={logo}
                  alt="Fullfind Logo only"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
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
  ) : (
    <p>Loading . . .</p>
  );
}
