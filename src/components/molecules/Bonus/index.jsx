import { useState } from "react";

// components
import { Fade } from "react-awesome-reveal";

// assets
import checkr from "icons/checkr.svg";
import p5 from "home/p5.jpg";

// constant
import { padding } from "constant/padding";

export default function Bonus() {
  const [show, setShow] = useState({
    sop: true,
    quarter: false,
    lib: false,
    cult: false,
  });

  return (
    <div
      className={`${padding} bg-[#F6F4F4] overflow-hidden w-full flex justify-center`}
    >
      <div className="hd:w-3/5 3xl:w-11/12 xs:w-full border-2 border-[#a49193] rounded-3xl relative hd:px-10 hd:py-14 3xl:px-10 3xl:py-12 2xl:px-12 2xl:pt-14 2xl:pb-10 xl:px-6 xl:pt-14 xl:pb-10 lg:px-8 lg:pt-16 lg:pb-10 xs:px-5 xs:pt-12 xs:pb-10 flex xl:flex-row xs:flex-col-reverse xl:justify-between">
        <div className="absolute -top-6 bg-[#F9756D] px-7 py-2 -rotate-3 rounded-xl">
          <Fade direction="up" duration={1000}>
            <h1 className="text-white text-2xl">Bonuses</h1>
          </Fade>
        </div>

        <Fade direction="down" duration={500} cascade>
          <ul className="hd:w-3/5 xl:w-2/3 xs:w-full xl:mt-0 lg:mt-10 xs:mt-10">
            <li
              className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3"
              onClick={() => {
                setShow({
                  sop: !show.sop,
                  quarter: false,
                  lib: false,
                  cult: false,
                });
              }}
            >
              <div className="border border-b-zinc-300 border-x-0 border-t-0 flex items-start hd:gap-3 hd:pb-3 3xl:gap-3 3xl:pb-3 2xl:gap-3 2xl:pb-3 xl:gap-2 xl:pb-3 lg:gap-3 lg:pb-3 xs:gap-2 xs:pb-2">
                <img
                  src={checkr}
                  alt="Check Red Icons"
                  className="hd:w-8 2xl:w-9 xl:w-7 lg:w-8 xs:w-7"
                />
                <h1 className="hd:text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl">
                  SOP and Project Management Templates
                </h1>
              </div>

              {show.sop && (
                <Fade direction="down" duration={500}>
                  <div className="flex items-start hd:gap-6 hd:pb-6 2xl:mt-3 3xl:pb-6 3xl:gap-6 2xl:gap-6 2xl:pb-4 xl:gap-4 xl:mt-3 lg:gap-7 lg:pb-6 lg:mt-3 xs:gap-6 xs:pb-4 xs:mt-3">
                    <div className="w-8 h-8"> </div>
                    <p className="hd:text-lg 3xl:text-xl 2xl:text-xl lg:text-xl">
                      Steal our SOP and Project Management templates that we
                      have used to manage 37 remote talent from Indonesia
                    </p>
                  </div>
                </Fade>
              )}
            </li>

            <li
              className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3"
              onClick={() => {
                setShow({
                  sop: false,
                  quarter: !show.quarter,
                  lib: false,
                  cult: false,
                });
              }}
            >
              <div className="border border-b-zinc-300 border-x-0 border-t-0 flex items-start hd:gap-3 hd:pb-3 3xl:gap-3 3xl:pb-3 2xl:gap-3 2xl:pb-3 xl:gap-2 xl:pb-3 lg:gap-3 lg:pb-3 xs:gap-2 xs:pb-2">
                <img
                  src={checkr}
                  alt="Check Red Icons"
                  className="hd:w-8 2xl:w-9 xl:w-7 lg:w-8 xs:w-7"
                />
                <h1 className="hd:text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl">
                  Quarterly Seminars on Latest AI tools for specific roles
                </h1>
              </div>

              {show.quarter && (
                <Fade direction="down" duration={500}>
                  <div className="flex items-start hd:gap-6 hd:pb-6 2xl:mt-3 3xl:pb-6 3xl:gap-6 2xl:gap-6 2xl:pb-4 xl:gap-4 xl:mt-3 lg:gap-7 lg:pb-6 lg:mt-3 xs:gap-6 xs:pb-4 xs:mt-3">
                    <div className="w-8 h-8"> </div>
                    <p className="hd:text-lg 3xl:text-xl 2xl:text-xl lg:text-xl">
                      We will provide quarterly trainings for your staff - based
                      on their role - on the latest AI tools that can speed up
                      their workflow and increase their productivity
                    </p>
                  </div>
                </Fade>
              )}
            </li>

            <li
              className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3"
              onClick={() => {
                setShow({
                  sop: false,
                  quarter: false,
                  lib: !show.lib,
                  cult: false,
                });
              }}
            >
              <div className="border border-b-zinc-300 border-x-0 border-t-0 flex items-start hd:gap-3 hd:pb-3 3xl:gap-3 3xl:pb-3 2xl:gap-3 2xl:pb-3 xl:gap-2 xl:pb-3 lg:gap-3 lg:pb-3 xs:gap-2 xs:pb-2">
                <img
                  src={checkr}
                  alt="Check Red Icons"
                  className="hd:w-8 2xl:w-9 xl:w-7 lg:w-8 xs:w-7"
                />
                <h1 className="hd:text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl">
                  Digital Training Library
                </h1>
              </div>

              {show.lib && (
                <Fade direction="down" duration={500}>
                  <div className="flex items-start hd:gap-6 hd:pb-6 2xl:mt-3 3xl:pb-6 3xl:gap-6 2xl:gap-6 2xl:pb-4 xl:gap-4 xl:mt-3 lg:gap-7 lg:pb-6 lg:mt-3 xs:gap-6 xs:pb-4 xs:mt-3">
                    <div className="w-8 h-8"> </div>
                    <p className="hd:text-lg 3xl:text-xl 2xl:text-xl lg:text-xl">
                      We will provide a training library that your new staff can
                      use to upgrade their skills based on their roles
                    </p>
                  </div>
                </Fade>
              )}
            </li>

            <li
              className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3"
              onClick={() => {
                setShow({
                  sop: false,
                  quarter: false,
                  lib: false,
                  cult: !show.cult,
                });
                setShow((before) => ({ ...before, cult: !show.cult }));
              }}
            >
              <div className="border border-b-zinc-300 border-x-0 border-t-0 flex items-start hd:gap-3 hd:pb-3 3xl:gap-3 3xl:pb-3 2xl:gap-3 2xl:pb-3 xl:gap-2 xl:pb-3 lg:gap-3 lg:pb-3 xs:gap-2 xs:pb-2">
                <img
                  src={checkr}
                  alt="Check Red Icons"
                  className="hd:w-8 2xl:w-9 xl:w-7 lg:w-8 xs:w-7"
                />
                <h1 className="hd:text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-xl lg:text-2xl xs:text-xl">
                  Cultural training
                </h1>
              </div>

              {show.cult && (
                <Fade direction="down" duration={500}>
                  <div className="flex items-start hd:gap-6 hd:pb-6 2xl:mt-3 3xl:pb-6 3xl:gap-6 2xl:gap-6 2xl:pb-4 xl:gap-4 xl:mt-3 lg:gap-7 lg:pb-6 lg:mt-3 xs:gap-6 xs:pb-4 xs:mt-3">
                    <div className="w-8 h-8"> </div>
                    <p className="hd:text-lg 3xl:text-xl 2xl:text-xl lg:text-xl">
                      We will provide training for your core in-house team on
                      how to best work with outsourced employees from South East
                      Asia, to ensure cultural fit
                    </p>
                  </div>
                </Fade>
              )}
            </li>
          </ul>
        </Fade>

        <div
          className="xl:w-1/4 xs:w-1/2 xs:min-h-[400px] min-h-[200px] bg-cover bg-center rounded-3xl m-auto"
          style={{ backgroundImage: `url(${p5})` }}
        ></div>
      </div>
    </div>
  );
}
