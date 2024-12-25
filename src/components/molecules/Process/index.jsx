// import { useNavigate } from "react-router-dom";

// components
import { Fade } from "react-awesome-reveal";
import { StartHiringBtn } from "atoms/Button";
import Image from "next/image";

// assets
import pro1 from "icons/pro1.svg";
import pro2 from "icons/pro2.svg";
import pro3 from "icons/pro3.svg";
import pro4 from "icons/pro4.svg";
import proCard from "home/process.webp";

// constant
// import { padding } from "constant/padding";

export default function Process() {
  // const navigate = useNavigate();
  return (
    <div
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto overflow-hidden bg-[#F2EBEC] flex flex-col `}
    >
      <Fade direction="down" duration={1000}>
        <h1 className="hd:text-[65px] 3xl:text-[55px] 2xl:text-5xl xl:text-4xl lg:text-4xl xs:text-3xl text-center hd:px-[10rem] font-black">
          Only the <span className="text-blue-600">top 1% </span>of all
          candidates get through our pool of{" "}
          <span className="text-blue-600 underline underline-offset-4 decoration-4">
            ready-to-be-placed
          </span>{" "}
          talent
        </h1>
      </Fade>

      <div className="w-full flex xl:flex-row xs:flex-col xl:justify-center xl:items-start gap-10 mt-10">
        <div className="hd:w-1/3 xs:w-full h-full xl:mb-0 xs:mb-0 flex flex-col hd:gap-10 3xl:gap-12 2xl:gap-10 xl:gap-5 xs:gap-8 ">
          <Fade direction="down" duration={1000}>
            <p className="hd:text-3xl 3xl:text-2xl 2xl:text-2xl xl:text-lg lg:text-xl xs:text-base xl:text-left xs:text-center">
              We employ global HR leaders that have worked in US Fortune 500
              companies to build & oversee our vetting process:
            </p>
          </Fade>

          <Fade direction="down" duration={500} cascade className="w-full">
            <ul className="w-full flex flex-col hd:gap-5 3xl:gap-6 2xl:gap-7 xl:gap-5 xs:gap-6">
              <li className="hd:px-7 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto xs:w-full hd:py-2 2xl:py-3 xl:py-2 xs:py-2 cursor-pointer hover:bg-pink-100 rounded-2xl border-2 border-[#F9756D] text-[#F9756D] flex items-center xl:justify-start lg:justify-center xs:justify-start gap-3 hd:text-2xl 3xl:text-2xl 2xl:text-2xl lg:text-xl font-medium">
                <div className="hd:w-10 3xl:w-12 2xl:w-10 xl:w-8 lg:w-10 xs:w-5">
                  <Image
                    src={pro1}
                    alt="Roles Icon"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                English Assessment
              </li>

              <li className="hd:px-7 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto xs:w-full hd:py-2 2xl:py-3 xl:py-2 xs:py-2 cursor-pointer hover:bg-pink-100 rounded-2xl border-2 border-[#F9756D] text-[#F9756D] flex items-center xl:justify-start lg:justify-center xs:justify-start gap-3 hd:text-2xl 3xl:text-2xl 2xl:text-2xl lg:text-xl font-medium">
                <div className="hd:w-10 3xl:w-12 2xl:w-10 xl:w-8 lg:w-10 xs:w-5">
                  <Image
                    src={pro2}
                    alt="Roles Icon"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                Skill Test
              </li>

              <li className="hd:px-7 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto xs:w-full hd:py-2 2xl:py-3 xl:py-2 xs:py-2 cursor-pointer hover:bg-pink-100 rounded-2xl border-2 border-[#F9756D] text-[#F9756D] flex items-center xl:justify-start lg:justify-center xs:justify-start gap-3 hd:text-2xl 3xl:text-2xl 2xl:text-2xl lg:text-xl font-medium">
                <div className="hd:w-10 3xl:w-12 2xl:w-10 xl:w-8 lg:w-10 xs:w-5">
                  <Image
                    src={pro3}
                    alt="Roles Icon"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                Interviews & Reference Checks
              </li>

              <li className="hd:px-7 3xl:px-6 2xl:px-5 xs:px-4 xl:w-auto xs:w-full hd:py-2 2xl:py-3 xl:py-2 xs:py-2 cursor-pointer hover:bg-pink-100 rounded-2xl border-2 border-[#F9756D] text-[#F9756D] flex items-center xl:justify-start lg:justify-center xs:justify-start gap-3 hd:text-2xl 3xl:text-2xl 2xl:text-2xl lg:text-xl font-medium">
                <div className="hd:w-10 3xl:w-12 2xl:w-10 xl:w-8 lg:w-10 xs:w-5">
                  <Image
                    src={pro4}
                    alt="Roles Icon"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                AI Training
              </li>
            </ul>
          </Fade>

          <Fade
            duration={1000}
            direction="up"
            delay={200}
            className="w-full flex xl:justify-start xs:justify-center"
          >
            {/* <button
              className="xl:px-10 3xl:py-3 xl:py-2 md:py-2 xs:px-6 xs:py-1 xs:mt-0 xl:mt-0 justify-center rounded-full hd:text-2xl 3xl:text-2xl xl:text-base lg:text-xl md:text-lg xs:text-lg flex items-center text-white gap-2 bg-[#F9756D] hover:bg-transparent hover:text-[#F9756D] xs:w-auto xl:w-auto font-semibold hd:hover:border-4 3xl:hover:border-[3px] 2xl:hover:border-2 xs:hover:border-2 hover:border-[#F9756D] transition-all"
              onClick={() => {
                if (location.pathname === "/") {
                  document.location.href = "#progress";
                } else if (location.pathname === "/landing-page-1") {
                  document.location.href = "#progress";
                } else {
                  navigate("/");
                  setTimeout(() => {
                    document.location.href = "#progress";
                  }, 1000);
                }

                open();
              }}
            >
              Try Our AI-Powered VA Free for 2 Weeks
            </button> */}
            <StartHiringBtn />
          </Fade>
        </div>

        <div className="hd:w-1/3 xs:w-full xl:block xs:hidden">
          <Fade direction="right" duration={750}>
            <div className="w-full">
              <Image
                src={proCard}
                alt="Hiring Process"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
