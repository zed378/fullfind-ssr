// components
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

// assets

// constant
import { bannerData } from "constant/banner";

export default function Reason() {
  return (
    <div className="w-full h-auto flex justify-center items-center hd:mt-14 3xl:mt-12 xl:mt-10 lg:mt-8">
      <div className="w-full 3xl:w-5/6 xs:w-11/12 grid 2xl:grid-cols-3 lg:grid-cols-2 hd:gap-10 3xl:gap-9 2xl:gap-8 xl:gap-8 lg:gap-10 xs:gap-4">
        {bannerData.map((item) => (
          <div
            key={item.id}
            className={`w-full h-full flex flex-col lg:items-start xs:items-center hd:gap-5 3xl:gap-4 2xl:gap-3 xl:gap-3 lg:gap-3 xs:gap-2 hd:px-12 3xl:px-10 2xl:px-8 xs:px-0 ${
              (item.id === 2 ||
                item.id === 3 ||
                item.id === 5 ||
                item.id === 6) &&
              "2xl:border-l-[3px] border-zinc-300"
            }`}
          >
            <Fade direction="up" duration={800}>
              <div className="h-auto hd:w-28 3xl:w-24 2xl:w-20 xl:w-16 lg:w-20 xs:w-24">
                <Image
                  src={item.image}
                  alt="Icons for banner section"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </div>
            </Fade>

            <Fade direction="down" duration={1000}>
              <h1 className="font-bold lg:text-start xs:text-center hd:text-4xl 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-2xl xs:text-xl">
                {item.title}
              </h1>
            </Fade>

            <Fade direction="down" duration={1200}>
              <p className="font-medium lg:text-start xs:text-center text-zinc-400 hd:text-lg 2xl:text-base xl:text-sm lg:text-base xs:text-sm">
                {item.content}
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
