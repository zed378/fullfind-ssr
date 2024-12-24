import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// components
import { Fade } from "react-awesome-reveal";

// assets
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQCardMini({ data, val }) {
  const [isOpen, setIsOpen] = useState({});

  const createFAQObject = (datas) => {
    return datas.reduce((acc, item) => {
      acc[`faq${item.id}`] = false;
      return acc;
    }, {});
  };

  useEffect(() => {
    const initializedState = createFAQObject(data);
    setIsOpen(initializedState);
  }, [data]);

  const handleState = (key) => {
    setIsOpen((prevState) => ({
      ...Object.keys(prevState).reduce((acc, k) => {
        acc[k] = false;
        return acc;
      }, {}),
      [key]: !prevState[key],
    }));
  };

  return (
    <div className={`overflow-hidden w-full flex justify-center bg-white`}>
      <div className="hd:w-10/12 3xl:w-3/4 xs:w-full rounded-3xl relative hd:px-10 hd:py-14 3xl:px-10 3xl:py-12 2xl:px-12 2xl:pt-14 2xl:pb-10 xl:px-6 xl:pt-14 xl:pb-10 lg:px-8 lg:pt-16 lg:pb-10 xs:px-5 xs:pt-12 xs:pb-10 flex flex-col">
        <p className="text-zinc-400 text-center font-bold 3xl:text-2xl xl:text-xl">
          GET CLARITY ON WHAT YOU NEED TO KNOW
        </p>

        <h1 className="text-center text-blue-600 3xl:my-12 2xl:my-8 xl:my-7 lg:my-5 xs:my-4 3xl:text-6xl xl:text-5xl lg:text-4xl xs:text-4xl font-bold">
          FAQs for {val}
        </h1>

        <p className="text-center font-bold 3xl:text-2xl xl:text-xl mb-16">
          Your top questions answered, all in one place
        </p>

        <ul className="w-full">
          {data.map((item) => (
            <li
              key={item.id}
              className="w-full overflow-hidden cursor-pointer 3xl:mb-5 xl:mb-4 lg:mb-4 xs:mb-3 xl:border-4 xs:border-2 border-zinc-300 rounded-2xl 2xl:py-6 2xl:px-8 xl:py-5 xl:px-7 lg:py-4 lg:px-6 xs:py-3 xs:px-5"
              onClick={() => handleState(`faq${item.id}`)}
            >
              <div className="flex items-center justify-between">
                <h1 className="w-5/6 hd:text-2xl 2xl:text-2xl lg:text-xl xs:text-lg font-semibold">
                  {item.title}
                </h1>

                {isOpen[`faq${item.id}`] ? (
                  <div className="flex items-center justify-center bg-black rounded-full">
                    <IoIosArrowDown className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center bg-black rounded-full">
                    <IoIosArrowUp className="hd:w-8 hd:h-8 2xl:w-9 2xl:h-9 xl:w-7 xl:h-7 lg:w-8 lg:h-8 xs:w-7 xs:h-7 text-white" />
                  </div>
                )}
              </div>

              {isOpen[`faq${item.id}`] && (
                <Fade direction="down" duration={500}>
                  <div className="w-full flex items-start mt-4">
                    <p className="hd:text-lg 2xl:text-lg lg:text-base xs:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </Fade>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

FAQCardMini.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.node.isRequired,
    })
  ).isRequired,
  val: PropTypes.string.isRequired,
};
