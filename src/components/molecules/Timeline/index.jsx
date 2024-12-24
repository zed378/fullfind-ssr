import { useEffect, useState } from "react";
import "styles/timeline.css";

// components
import StartHiringBtn from "atoms/Button/StartHiring";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Sticky from "react-sticky-el";

// assets
import w1 from "icons/w1.svg";
import w2 from "icons/w2.svg";
import w6 from "icons/w6.svg";
import w4 from "icons/w4.svg";
import w5 from "icons/w5.svg";
import w7 from "icons/w7.svg";

// hooks
import WidthSize from "hooks/screenSize";
import setTimlineTopHeight from "hooks/timeline";
import useIncrementalValue from "hooks/incremental";

// constants
// import { padding } from "constant/padding";
import { options, contentStyle, childrenOptions } from "constant/timeline";

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
          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w1}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">Sourcing</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              We meticulously recruit and vet candidates from our curated global
              talent pool, focusing on professionals from developing countries
              who bring top-tier skills and cost efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w2}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">Skill Testing</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              Each candidate completes a customized sample task and technical
              assessment, including proficiency with AI tools like ChatGPT,
              Canva AI, and Zapier, for your review.
            </p>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w3}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">Pre-Onboarding</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              FullFind will conduct interviews and reference checks before
              sending them over to you for the final interview.
            </p>
          </VerticalTimelineElement> */}

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w4}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">Pre-Onboarding</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              FullFind conducts detailed interviews, reference checks, and
              cultural fit assessments before sending the best candidates for
              your final interview.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w6}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">AI Training</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              Our team provides specialized training to ensure your assistant is
              proficient in the latest AI tools and workflows, enabling them to
              deliver immediate value to your business.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w7}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">
              Ongoing Management & Oversight
            </h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              We assign a dedicated project manager to oversee your assistant’s
              performance, ensuring seamless integration and effective execution
              of tasks.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w2}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">
              Retention & Continuous Development
            </h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              FullFind manages all payments, contracts, and benefits on your
              behalf, allowing you to settle invoices conveniently using your US
              debit or credit card. We also provide ongoing AI training to keep
              your assistant up-to-date with the latest tools and techniques,
              enhancing their value to your business over time.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement {...childrenOptions}>
            <img
              src={w5}
              alt="Process logo"
              className="3xl:w-14 2xl:w-14 xl:w-12 lg:w-20 xs:w-14"
            />
            <h1 className="text-2xl font-bold">Replacement</h1>
            <p className="hd:text-base 3xl:text-sm lg:text-base xs:text-xs">
              Enjoy a FREE forever replacement guarantee with FullFind. If your
              talent isn’t the right fit, replace them anytime at no cost, as
              long as you remain a client.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className=" w-full xl:hidden flex xs:justify-center my-3 lg:inline-flex xs:hidden">
        <StartHiringBtn nav={false} />
      </div>
    </div>
  );
}
