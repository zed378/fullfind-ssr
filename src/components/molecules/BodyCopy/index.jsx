import PropTypes from "prop-types";

// components
import { Fade } from "react-awesome-reveal";

export default function BodyCopy({ val, sub, data }) {
  return (
    <div className="w-full bg-white hd:px-60 hd:py-40 3xl:px-32 3xl:py-36 2xl:px-20 2xl:py-24 xl:px-16 xl:py-16 lg:px-12 lg:py-14 xs:px-5 xs:py-14">
      <Fade direction="down" duration={1000}>
        <h1
          className={`font-semibold lg:text-start xs:text-center ${
            location.pathname !== "/roles/admin" && "uppercase"
          } hd:text-7xl 3xl:text-[4.1rem] 3xl:leading-tight 2xl:text-5xl xl:text-5xl lg:text-4xl xs:text-3xl`}
        >
          Why Choose FullFind&apos;s <br className="lg:block xs:hidden" /> {val}
          ?
        </h1>
      </Fade>

      <Fade direction="up" duration={1000}>
        <p className="text-gray-500 lg:text-start xs:text-center hd:text-3xl hd:my-20 3xl:text-3xl 3xl:my-16 2xl:text-2xl 2xl:my-14 xl:text-xl xl:my-10 lg:text-lg lg:my-10 xs:text-base xs:my-10">
          {sub}
        </p>
      </Fade>

      <div className="w-full h-auto flex flex-col items-start hd:gap-16 3xl:gap-16 2xl:gap-12 xl:gap-10 lg:gap-7 xs:gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full flex lg:items-center xs:items-start hd:gap-5 3xl:gap-5 2xl:gap-4 xl:gap-4 lg:gap-3 xs:gap-2 relative"
          >
            <div className="bg-[#F9756D] flex items-center justify-center hd:w-24 hd:h-24 hd:p-5 3xl:w-24 3xl:h-24 3xl:p-5 2xl:w-20 2xl:h-20 2xl:p-4 xl:w-16 xl:h-16 xl:p-3 lg:w-16 lg:h-16 lg:p-3 xs:w-10 xs:h-10 xs:p-2 lg:mt-0 xs:mt-1.5">
              <Fade duration={1000}>
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-auto"
                />
              </Fade>
            </div>

            <div className="flex flex-col hd:gap-3 3xl:gap-3 2xl:gap-2 xl:gap-2 lg:gap-1 xs:gap-1 lg:w-auto xs:w-[85%]">
              <Fade direction="down" duration={1000}>
                <h1 className="hd:text-5xl 3xl:text-4xl 2xl:text-3xl xl:text-2xl lg:text-xl xs:text-2xl">
                  {item.title}
                </h1>
              </Fade>

              <Fade direction="up" duration={1000}>
                <p className="text-gray-500 hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-lg lg:text-sm xs:text-sm">
                  {item.desc}
                </p>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

BodyCopy.propTypes = {
  val: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};
