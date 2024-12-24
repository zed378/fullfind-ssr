import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router"; // Next.js's router
import { Fade } from "react-awesome-reveal";

// Assets
import { GoArrowRight } from "react-icons/go";
import Image from "next/image"; // Import next/image for image optimization

export default function RolesCard({ item, close }) {
  const router = useRouter(); // Use Next.js's useRouter
  const [arr, setArr] = useState("");
  const [image, setImage] = useState(item.image);
  const [arrBg, setArrBg] = useState("bg-black text-white");

  return (
    <li
      className="hd:min-h-52 3xl:min-h-44 2xl:min-h-36 xl:min-h-32 bg-zinc-100 hover:bg-blue-300 3xl:px-6 2xl:px-5 xl:px-3 3xl:py-7 2xl:py-5 xl:py-4 rounded-2xl text-sm gap-2 text-black outline outline-1 outline-zinc-300 hover:outline-none relative overflow-hidden cursor-pointer"
      onMouseEnter={() => {
        setArr("animate__animated animate__slideInLeft");
        setArrBg("bg-slate-100 text-black");
        setImage(item.alt);
      }}
      onMouseLeave={() => {
        setArr("animate__animated animate__slideInRight");
        setArrBg("bg-black text-white");
        setImage(item.image);
      }}
      onClick={() => {
        router.push(item.route); // Use Next.js's router.push instead of navigate
        close();
      }}
    >
      <Fade duration={300} delay={500} direction="down">
        <h1 className="font-light hd:text-2xl 3xl:text-xl 2xl:text-lg xl:text-sm relative z-20">
          AI-Powered
        </h1>
      </Fade>

      <Fade
        duration={300}
        delay={500}
        direction="down"
        className="relative z-50"
      >
        <h1 className="font-bold hd:text-2xl 3xl:text-xl 2xl:text-xl xl:text-sm ">
          {item.title}
        </h1>
      </Fade>

      <Fade duration={300} delay={500} direction="left">
        <span
          className={`2xl:w-12 xl:w-8 hd:h-7 3xl:h-6 2xl:h-5 xl:h-4 mt-3 rounded-full ${arrBg} overflow-hidden flex items-center justify-center`}
        >
          <GoArrowRight
            className={`${arr} hd:w-8 hd:h-8 3xl:h-7 3xl:w-7 2xl:w-6 2xl:h-6 xl:w-5 xl:h-5`}
          />
        </span>
      </Fade>

      {/* Use next/image for optimized image loading */}
      <div className="absolute hd:-bottom-6 3xl:-bottom-3 2xl:-bottom-3 xl:-bottom-2 hd:right-10 3xl:right-4 2xl:right-10 xl:right-5 hd:h-28 hd:w-28 3xl:h-24 3xl:w-24 2xl:h-20 2xl:w-20 xl:h-16 xl:w-16 -z-0">
        <Image
          src={image}
          alt="Card background"
          objectFit="contain"
          layout="intrinsic" // Ensures it maintains aspect ratio
          loading="lazy" // Lazy loading for performance optimization
        />
      </div>
    </li>
  );
}

RolesCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    route: PropTypes.string,
  }),
  close: PropTypes.func.isRequired,
};
