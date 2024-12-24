import { useState, useEffect } from "react";

// component
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
// import { StartHiringBtn } from "atoms/Button";

// assets
import logo from "brand/logo.png";
import thumb from "home/thumbnail.webp";
import { PiShareFatThin } from "react-icons/pi";
import {
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";

// constant
// import { padding } from "constant/padding";

// hooks
import WidthSize from "hooks/screenSize";

export default function HowWeHelp() {
  const [screen, setScreen] = useState({
    width: "640px",
    height: "360px",
  });

  const [options, setOptions] = useState({
    url: "https://www.youtube.com/watch?v=GnG_GtQWLd8",
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

  return (
    <div
      className={`hd:py-16 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 bg-[#F2EBEC] flex flex-col items-center xl:gap-12 lg:gap-8 xs:gap-3`}
    >
      <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl text-center xl:mb-2 xs:mb-4">
        How We Help You <span className="text-[#F9756D]">Scale</span>
      </h1>

      <div className="p-3 bg-white rounded-3xl">
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

            <h1 className="3xl:text-2xl font-semibold">Fullfind</h1>
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

      {/* <div id="hire" className="w-full flex justify-center lg:mt-0 xs:mt-4">
        <StartHiringBtn />
      </div> */}
    </div>
  );
}
