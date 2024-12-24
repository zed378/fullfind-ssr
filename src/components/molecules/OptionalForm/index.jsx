// component
import EmbeddedForm from "molecules/EmbeddedForm";

// assets
import chip from "banner/chip.png";
import leader from "banner/leader.png";
import exchange from "banner/exchange.png";

// hooks
import { useMediaQuery } from "react-responsive";

export default function OptionalForm() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const setMobileID = () => {
    if (isMobile) return "optinform";
    if (isDesktop) return "desktop";
  };

  const setDesktopID = () => {
    if (isDesktop) return "optinform";
    if (isMobile) return "mobile";
  };

  return (
    <div
      id={`${setDesktopID()}`}
      className="w-full flex justify-center items-center pt-20"
    >
      <div className="hd:w-3/4 3xl:w-5/6 flex xl:flex-row xs:flex-col xl:justify-center hd:gap-36 3xl:gap-20 2xl:gap-20 xl:gap-10 lg:gap-14 xs:gap-16 xs:w-full">
        {/* content */}
        <div className="xl:w-2/5 xs:w-full flex flex-col items-start justify-center xl:px-0 lg:px-16 md:px-5 xs:px-0">
          <h1 className="font-bold xl:text-start xs:text-center hd:text-[3rem] hd:leading-tight 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl xs:text-2xl">
            Hire AI-Powered Virtual Assistants While{" "}
            <span className="text-blue-600">Saving 70%</span> on Costs
          </h1>

          <button className="text-[#F9756D] font-medium hover:text-white bg-white hover:bg-[#F9756D] border-2 border-[#F9756D] transition-all rounded-xl cursor-default w-full hd:py-2 hd:px-8 hd:text-2xl hd:my-16 3xl:py-2 3xl:text-2xl 3xl:my-14 2xl:py-2 2xl:text-2xl 2xl:my-16 xl:py-2 xl:text-[1.35rem] xl:my-14 lg:py-1 lg:text-xl lg:my-12 xs:py-1 xs:text-xl xs:my-12">
            Talent starts at $997/month
          </button>

          <div className="w-full flex lg:flex-row xs:flex-col justify-between gap-5">
            <div className="flex flex-col items-center lg:w-1/3">
              <img
                src={chip}
                alt={chip}
                className="w-auto hd:h-20 3xl:h-20 2xl:h-20 xl:h-16 lg:h-20 xs:h-20"
              />
              <p className="font-medium text-center text-gray-400 hd:text-lg 2xl:text-base xl:text-sm">
                AI Training
              </p>
            </div>

            <div className="border border-slate-300 lg:block xs:hidden" />

            <div className="flex flex-col items-center lg:w-1/3">
              <img
                src={leader}
                alt={chip}
                className="w-auto hd:h-20 3xl:h-20 2xl:h-20 xl:h-16 lg:h-20 xs:h-20"
              />
              <p className="font-medium text-center text-gray-400 hd:text-lg 2xl:text-base xl:text-sm">
                VAs managed end-to-end
              </p>
            </div>

            <div className="border border-slate-300 lg:block xs:hidden" />

            <div className="flex flex-col items-center lg:w-1/3">
              <img
                src={exchange}
                alt={chip}
                className="w-auto hd:h-20 3xl:h-20 2xl:h-20 xl:h-16 lg:h-20 xs:h-20"
              />
              <p className="font-medium text-center text-gray-400 hd:text-lg 2xl:text-base xl:text-sm">
                Unlimited FREE Replacements
              </p>
            </div>
          </div>
        </div>
        {/* end of content */}

        <div id={`${setMobileID()}`} className="xl:hidden xs:block "></div>

        {/* Form */}
        <div className="xl:w-1/2 xs:w-full h:full">
          <EmbeddedForm />
        </div>
        {/* End of Form */}
      </div>
    </div>
  );
}
