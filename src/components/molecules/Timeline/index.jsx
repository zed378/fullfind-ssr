"use client";

import { useEffect, useState } from "react";
import "styles/timeline.css";

// components
import StartHiringBtn from "atoms/Button/StartHiring";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Sticky from "react-sticky-el";
import Image from "next/image";

// hooks
import WidthSize from "hooks/screenSize";
import setTimlineTopHeight from "hooks/timeline";
import useIncrementalValue from "hooks/incremental";

// constants
import {
  options,
  contentStyle,
  childrenOptions,
  timelineData,
} from "constant/timeline";

export default function Timeline() {
  const width = WidthSize();
  const [w, setW] = useState("50%");
  const { value, start, reset } = useIncrementalValue(120, 200);

  useEffect(() => {
    setTimlineTopHeight(width, setW);
  }, [width]);

  useEffect(() => {
    contentStyle(w);
  }, [w]);

  return (
    <div
      id="parent"
      className={`hd:py-24 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-10 xl:px-16 xs:px-8 w-full h-auto overflow-hidden flex xl:flex-row xs:flex-col bg-[#F6F4F4] relative xl:justify-center`}
    >
      <div
        className="xl:w-2/5 xs:w-full xs:mb-20 xl:mb-0 xl:block xs:hidden"
        onClick={reset}
      >
        <Sticky
          boundaryElement="#parent"
          hideOnBoundaryHit={false}
          onFixedToggle={(isFixed) => {
            isFixed && start();
            !isFixed && reset();
          }}
          bottomOffset={100}
        >
          <div
            className={`flex flex-col items-end gap-5 hd:pl-12`}
            style={{ marginTop: value }}
          >
            <h1 className="3xl:text-[65px] 2xl:text-5xl xl:text-4xl lg:text-5xl xs:text-3xl mb-4 xs:w-full font-black">
              We Handle Everything
            </h1>
            <p className="w-full hd:text-2x 3xl:text-xl">
              From sourcing to AI training and retention, our candidates are
              thoroughly vetted and continually developed to ensure they exceed
              your expectations. You'll love them.
            </p>
            <div className="hd:mt-10 3xl:mt-5 w-full xl:block xs:hidden">
              <StartHiringBtn nav={false} />
            </div>
          </div>
        </Sticky>
      </div>

      <div className="xl:w-2/5 xs:w-full xs:mb-20 xl:mb-0 xl:hidden xs:block">
        <div className={`flex flex-col items-end gap-5`}>
          <h1 className="3xl:text-[65px] 2xl:text-5xl xl:text-6xl lg:text-5xl xs:text-3xl hd:w-full 3xl:w-[55%] 2xl:w-[65%] xl:w-[90%] mb-4 xs:w-full xs:text-center font-black">
            We Handle Everything
          </h1>
          <p className="hd:w-full 3xl:w-[55%] 2xl:w-[65%] xl:w-[90%] xs:w-full hd:text-2xl xs:text-base xs:text-center">
            From sourcing to AI training and retention, our candidates are
            thoroughly vetted and continually developed to ensure they exceed
            your expectations. You&apos;ll love them.
          </p>
          <div className="my-10 hd:w-full 3xl:w-[55%] 2xl:w-[65%] xl:w-[90%] xs:w-full xl:block xs:hidden">
            <StartHiringBtn nav={false} />
          </div>
        </div>
      </div>

      <div
        id="second"
        className="xl:w-1/2 xs:w-full h-full overflow-hidden xl:mb-0 xs:mb-5"
      >
        <VerticalTimeline {...options}>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement {...childrenOptions} key={index}>
              <div className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14">
                <Image
                  src={item.icon}
                  alt="Process logo"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>

              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className=" w-full xl:hidden flex xs:justify-center my-3 lg:inline-flex xs:hidden">
        <StartHiringBtn nav={false} />
      </div>
    </div>
  );
}
