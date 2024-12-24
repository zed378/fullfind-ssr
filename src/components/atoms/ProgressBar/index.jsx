import { useState } from "react";

// components
import { Fade } from "react-awesome-reveal";

// assets
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";

// hooks
import useProgress from "hooks/progress";
import WidthSize from "hooks/screenSize";

export default function ProgressBar() {
  const [prog, setProg] = useState(5);
  const { progress, progressRef } = useProgress(prog, 50);

  const [view, setView] = useState({
    discover: false,
    screening: false,
    onboard: false,
  });

  const [desc, setDesc] = useState({
    discover: false,
    screening: false,
    onboard: false,
  });

  const [height, setHeight] = useState("h-28");
  const width = WidthSize();

  return (
    <>
      {width >= 768 && (
        <div
          ref={progressRef}
          className="w-full bg-[#F2EBEC] 3xl:h-10 2xl:h-9 lg:h-8 xs:h-5 rounded-full mt-10"
        >
          <div
            className="h-full bg-blue-600 rounded-full"
            style={{
              width: `${progress}%`,
              transition: progress === 0 ? "none" : "width 500ms linear",
            }}
          />
        </div>
      )}

      <div
        className="w-full flex hd:justify-evenly lg:justify-between lg:flex-row xs:flex-col lg:my-10 xs:my-4 lg:inline-flex xs:hidden"
        onMouseLeave={() => {
          setProg(5);
          setView({
            discover: false,
            screening: false,
            onboard: false,
          });
          setDesc({
            discover: false,
            screening: false,
            onboard: false,
          });
        }}
      >
        <div
          className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
          onClick={() => {
            setProg(20);
            setView({
              discover: true,
              screening: false,
              onboard: false,
            });

            setDesc({
              discover: true,
              screening: false,
              onboard: false,
            });
          }}
          onMouseEnter={() => {
            setProg(20);
            setView({
              discover: true,
              screening: false,
              onboard: false,
            });

            setDesc({
              discover: true,
              screening: false,
              onboard: false,
            });
          }}
        >
          <div
            className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
              view.discover ? "bg-blue-600" : `bg-black`
            }`}
          >
            1
          </div>

          <div className="w-[90%] ">
            <h1
              className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                view.discover ? "text-blue-600" : `text-black`
              } flex items-center gap-2`}
            >
              Discovery Call{" "}
              <span
              // className="xl:hidden xs:block"
              >
                {desc.discover ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropright />
                )}
              </span>
            </h1>

            {desc.discover && (
              <Fade direction="down" duration={500}>
                <p className="2xl:text-xl xl:text-sm">
                  We identify your needs, including the specific tasks and AI
                  tools your ideal assistant should be proficient in.
                </p>
              </Fade>
            )}
          </div>
        </div>

        <div
          className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
          onClick={() => {
            setProg(60);
            setView({
              discover: true,
              screening: true,
              onboard: false,
            });

            setDesc({
              discover: false,
              screening: true,
              onboard: false,
            });
          }}
          onMouseEnter={() => {
            setProg(60);
            setView({
              discover: true,
              screening: true,
              onboard: false,
            });

            setDesc({
              discover: false,
              screening: true,
              onboard: false,
            });
          }}
        >
          <div
            className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
              view.screening ? "bg-blue-600" : `bg-black`
            }`}
          >
            2
          </div>

          <div className="w-[90%] ">
            <h1
              className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                view.screening ? "text-blue-600" : `text-black`
              } flex items-center gap-2`}
            >
              Candidate Vetting{" "}
              <span
              // className="xl:hidden xs:block"
              >
                {desc.screening ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropright />
                )}
              </span>
            </h1>

            {desc.screening && (
              <Fade direction="down" duration={500}>
                <p className="2xl:text-xl xl:text-sm">
                  We screen candidates for proficiency in AI tools, workflow
                  efficiency, and cultural compatibility.
                </p>
              </Fade>
            )}
          </div>
        </div>

        <div
          className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
          onClick={() => {
            setProg(100);
            setView({
              discover: true,
              screening: true,
              onboard: true,
            });

            setDesc({
              discover: false,
              screening: false,
              onboard: true,
            });
          }}
          onMouseEnter={() => {
            setProg(100);
            setView({
              discover: true,
              screening: true,
              onboard: true,
            });

            setDesc({
              discover: false,
              screening: false,
              onboard: true,
            });
          }}
        >
          <div
            className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
              view.onboard ? "bg-blue-600" : `bg-black`
            }`}
          >
            3
          </div>

          <div className="w-[90%] ">
            <h1
              className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                view.onboard ? "text-blue-600" : `text-black`
              } flex items-center gap-2`}
            >
              Onboarding{" "}
              <span
              // className="xl:hidden xs:block"
              >
                {desc.onboard ? (
                  <IoIosArrowDropdown className="" />
                ) : (
                  <IoIosArrowDropright className="" />
                )}
              </span>
            </h1>

            {desc.onboard && (
              <Fade direction="down" duration={500}>
                <p className="2xl:text-xl xl:text-sm">
                  Our project managers ensure seamless onboarding and
                  integration of AI-powered workflows.
                </p>
              </Fade>
            )}
          </div>
        </div>
      </div>

      {width < 768 && (
        <div className="w-full flex flex-row items-start justify-between">
          <div
            className="w-[90%] flex hd:justify-evenly lg:justify-between lg:flex-row xs:flex-col lg:my-10  "
            onMouseLeave={() => {
              setProg(5);
              setView({
                discover: false,
                screening: false,
                onboard: false,
              });
              setDesc({
                discover: false,
                screening: false,
                onboard: false,
              });

              setHeight("h-28");
            }}
          >
            <div
              className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
              onClick={() => {
                setProg(20);
                setView({
                  discover: true,
                  screening: false,
                  onboard: false,
                });

                setDesc({
                  discover: true,
                  screening: false,
                  onboard: false,
                });

                setHeight("h-80");
              }}
              onMouseEnter={() => {
                setProg(20);
                setView({
                  discover: true,
                  screening: false,
                  onboard: false,
                });

                setDesc({
                  discover: true,
                  screening: false,
                  onboard: false,
                });
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
                  view.discover ? "bg-blue-600" : `bg-black`
                }`}
              >
                1
              </div>

              <div className="w-[90%] ">
                <h1
                  className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                    view.discover ? "text-blue-600" : `text-black`
                  } flex items-center gap-2`}
                >
                  Discovery Call{" "}
                  <span
                  // className="xl:hidden xs:block"
                  >
                    {desc.discover ? (
                      <IoIosArrowDropdown />
                    ) : (
                      <IoIosArrowDropright />
                    )}
                  </span>
                </h1>

                {desc.discover && (
                  <Fade direction="down" duration={500}>
                    <p className="2xl:text-xl xl:text-sm">
                      We identify your needs, including the specific tasks and
                      AI tools your ideal assistant should be proficient in.
                    </p>
                  </Fade>
                )}
              </div>
            </div>

            <div
              className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
              onClick={() => {
                setProg(60);
                setView({
                  discover: true,
                  screening: true,
                  onboard: false,
                });

                setDesc({
                  discover: false,
                  screening: true,
                  onboard: false,
                });

                setHeight("h-72");
              }}
              onMouseEnter={() => {
                setProg(60);
                setView({
                  discover: true,
                  screening: true,
                  onboard: false,
                });

                setDesc({
                  discover: false,
                  screening: true,
                  onboard: false,
                });
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
                  view.screening ? "bg-blue-600" : `bg-black`
                }`}
              >
                2
              </div>

              <div className="w-[90%] ">
                <h1
                  className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                    view.screening ? "text-blue-600" : `text-black`
                  } flex items-center gap-2`}
                >
                  Candidate Vetting{" "}
                  <span
                  // className="xl:hidden xs:block"
                  >
                    {desc.screening ? (
                      <IoIosArrowDropdown />
                    ) : (
                      <IoIosArrowDropright />
                    )}
                  </span>
                </h1>

                {desc.screening && (
                  <Fade direction="down" duration={500}>
                    <p className="2xl:text-xl xl:text-sm">
                      We screen candidates for proficiency in AI tools, workflow
                      efficiency, and cultural compatibility.
                    </p>
                  </Fade>
                )}
              </div>
            </div>

            <div
              className="xl:w-1/4 flex items-start gap-3 cursor-pointer xl:mr-0 lg:mr-4 mb-3"
              onClick={() => {
                setProg(100);
                setView({
                  discover: true,
                  screening: true,
                  onboard: true,
                });

                setDesc({
                  discover: false,
                  screening: false,
                  onboard: true,
                });

                setHeight("h-64");
              }}
              onMouseEnter={() => {
                setProg(100);
                setView({
                  discover: true,
                  screening: true,
                  onboard: true,
                });

                setDesc({
                  discover: false,
                  screening: false,
                  onboard: true,
                });
              }}
            >
              <div
                className={`rounded-full flex items-center justify-center hd:w-10 hd:h-10 3xl:w-7 3xl:h-7 2xl:w-8 2xl:h-8 xs:w-6 xs:h-6 text-white hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm font-medium ${
                  view.onboard ? "bg-blue-600" : `bg-black`
                }`}
              >
                3
              </div>

              <div className="w-[90%] ">
                <h1
                  className={`hd:text-4xl 2xl:text-2xl mb-2 ${
                    view.onboard ? "text-blue-600" : `text-black`
                  } flex items-center gap-2`}
                >
                  Onboarding{" "}
                  <span
                  // className="xl:hidden xs:block"
                  >
                    {desc.onboard ? (
                      <IoIosArrowDropdown className="" />
                    ) : (
                      <IoIosArrowDropright className="" />
                    )}
                  </span>
                </h1>

                {desc.onboard && (
                  <Fade direction="down" duration={500}>
                    <p className="2xl:text-xl xl:text-sm">
                      Our project managers ensure seamless onboarding and
                      integration of AI-powered workflows.
                    </p>
                  </Fade>
                )}
              </div>
            </div>
          </div>

          <div
            ref={progressRef}
            className={`w-2 ${height} bg-[#F2EBEC] rounded-full`}
          >
            <div
              className="w-full bg-blue-600 rounded-full"
              style={{
                height: `${progress}%`,
                transition: progress === 0 ? "none" : "all 500ms linear",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
