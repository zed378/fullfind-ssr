import { useState } from "react";

// components
import { Fade } from "react-awesome-reveal";

// assets
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQCard() {
  const [show, setShow] = useState({
    what: false,
    are: false,
    ensure: false,
    roles: false,
    update: false,
    replacement: false,
    quick: false,
    fluent: false,
    industry: false,
    price: false,
    scale: false,
    tools: false,
    support: false,
  });

  const handleState = (param) => {
    const [key, value] = Object.entries(param)[0];

    setShow((prevState) => {
      const isKeyActive = prevState[key] === true;

      if (value === false && isKeyActive) {
        return Object.keys(prevState).reduce((acc, k) => {
          acc[k] = false;
          return acc;
        }, {});
      }

      return Object.keys(prevState).reduce((acc, k) => {
        acc[k] = k === key ? value : false;
        return acc;
      }, {});
    });
  };

  return (
    <div className={`overflow-hidden w-full flex justify-center mt-16 py-10`}>
      <div className="hd:w-10/12 3xl:w-3/4 xs:w-full  rounded-3xl relative hd:px-10 hd:py-14 3xl:px-10 3xl:py-12 2xl:px-12 2xl:pt-14 2xl:pb-10 xl:px-6 xl:pt-14 xl:pb-10 lg:px-8 lg:pt-16 lg:pb-10 xs:px-5 xs:pt-12 xs:pb-10 flex flex-col">
        <p className="text-zinc-400 text-center font-bold 3xl:text-2xl xl:text-xl">
          GET CLARITY ON WHAT YOU NEED TO KNOW
        </p>

        <h1 className="text-center text-blue-600 3xl:my-12 2xl:my-8 xl:my-7 lg:my-5 xs:my-4 3xl:text-6xl xl:text-5xl lg:text-4xl xs:text-4xl font-bold">
          Frequently Asked Questions
        </h1>

        <p className="text-center font-bold 3xl:text-2xl xl:text-xl mb-16">
          Your top questions answered, all in one place
        </p>

        <ul className="w-full">
          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ what: !show.what })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                What makes AI-powered virtual assistants different from regular
                virtual assistants?
              </h1>

              {show.what ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.what && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    AI-powered virtual assistants are equipped with the latest
                    AI tools like ChatGPT, Canva AI, Zapier, and LinkedIn Sales
                    Navigator, enabling them to work faster and more
                    efficiently. Unlike regular VAs, they’re trained to
                    integrate AI into workflows, doubling productivity while
                    maintaining high-quality output.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ are: !show.are })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                Are the assistants fully AI, or are they human?
              </h1>

              {show.are ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.are && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Our assistants are highly skilled professionals who leverage
                    AI tools to enhance their performance. They’re not AI
                    chatbots—they’re human experts who use AI to complete tasks
                    faster and more accurately.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ ensure: !show.ensure })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                How do you ensure the assistant will be the right fit for my
                business?
              </h1>

              {show.ensure ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.ensure && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    We conduct a thorough vetting process, including skill
                    tests, interviews, and customized sample tasks to ensure the
                    candidate matches your requirements. Additionally, we focus
                    on cultural fit to align the assistant with your team’s
                    values and workflows.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ roles: !show.roles })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                What roles can your AI-powered virtual assistants handle?
              </h1>

              {show.roles ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.roles && (
              <Fade direction="down" duration={500}>
                <div className="w-full mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    We offer assistants tailored to specific business needs,
                    including:
                  </p>
                  <ul className="w-full xl:pl-10 lg:pl-7 xs:pl-5 list-disc hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    <li>
                      <span className="font-bold">
                        Virtual Marketing Assistants:
                      </span>{" "}
                      Generalists who handle a wide range of tasks like admin
                      support, content creation, and social media scheduling.
                    </li>

                    <li>
                      <span className="font-bold">
                        Administrative Assistants:
                      </span>{" "}
                      Experts in email management, calendar scheduling, and
                      workflow automation.
                    </li>

                    <li>
                      <span className="font-bold">
                        Social Media Growth Assistants:
                      </span>{" "}
                      Specialists in content creation, trend analysis, and
                      audience engagement across platforms like TikTok,
                      Instagram, and LinkedIn.
                    </li>

                    <li>
                      <span className="font-bold">
                        Lead Generation Assistants:
                      </span>{" "}
                      Professionals skilled in prospect research, outreach, and
                      CRM management.
                    </li>
                  </ul>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ update: !show.update })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                What if I need the assistant to learn new tools or workflows?
              </h1>

              {show.update ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.update && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Our assistants undergo ongoing training to stay up-to-date
                    with the latest AI tools and industry trends. If your
                    business requires specific workflows or tools, our team
                    ensures the assistant is trained during the onboarding
                    phase.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ replacement: !show.replacement })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                How does the replacement guarantee work?
              </h1>

              {show.replacement ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.replacement && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    If your assistant isn’t the right fit, you can request a
                    replacement at any time, free of charge, as long as you
                    remain a client. This ensures you always have the right
                    talent for your team.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ quick: !show.quick })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                How quickly can I get an assistant onboarded?
              </h1>

              {show.quick ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.quick && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    The timeline varies depending on your requirements, but
                    typically, candidates are shortlisted within 2-3 weeks.
                    Onboarding begins immediately after you select your
                    assistant.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ fluent: !show.fluent })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                Are the assistants fluent in English?
              </h1>

              {show.fluent ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.fluent && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Yes, all our assistants are tested for English proficiency
                    to ensure clear communication and effective collaboration
                    with your team.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ industry: !show.industry })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                What industries do you specialize in?
              </h1>

              {show.industry ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.industry && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Our AI-powered virtual assistants are perfect for marketing
                    teams, e-commerce brands, SaaS companies, personal brands,
                    and B2B agencies.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ price: !show.price })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                Is the pricing inclusive of all fees?
              </h1>

              {show.price ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.price && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Yes, our pricing includes the assistant’s salary, management
                    fees, ongoing AI training, and local benefits to ensure
                    long-term retention.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ scale: !show.scale })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                Can I scale my assistant’s hours as my business grows?
              </h1>

              {show.scale ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.scale && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Yes, you can start with a part-time assistant and upgrade to
                    full-time support as your business needs expand.
                  </p>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ tools: !show.tools })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                What tools are your assistants proficient in?
              </h1>

              {show.tools ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.tools && (
              <Fade direction="down" duration={500}>
                <div className="w-full mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Our assistants are trained in a range of tools depending on
                    their role, including:
                  </p>
                  <ul className="w-full xl:pl-10 lg:pl-7 xs:pl-5 list-disc hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    <li>
                      <span className="font-bold">General Tools:</span> ChatGPT,
                      Canva AI, Zapier, and Runway.
                    </li>

                    <li>
                      <span className="font-bold">Social Media:</span> Buffer,
                      Jasper, Hootsuite, and MidJourney.
                    </li>

                    <li>
                      <span className="font-bold">Lead Generation:</span>{" "}
                      Apollo.io, LinkedIn Sales Navigator, and CRM platforms
                      like HubSpot.
                    </li>
                  </ul>
                </div>
              </Fade>
            )}
          </li>

          <li
            className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
            onClick={() => handleState({ support: !show.support })}
          >
            <div className=" flex items-center justify-between ">
              <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                Do you offer support after the assistant is hired?
              </h1>

              {show.support ? (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black rounded-full">
                  <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                </div>
              )}
            </div>

            {show.support && (
              <Fade direction="down" duration={500}>
                <div className="w-full flex items-start mt-4">
                  <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                    Yes, we provide ongoing support, including performance
                    oversight through a dedicated project manager and regular
                    updates on the assistant’s progress.
                  </p>
                </div>
              </Fade>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
