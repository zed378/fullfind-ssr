import { useRouter } from "next/router";

// assets
import card1 from "pricing/card1.png";
import card2 from "pricing/card2.png";
import dot from "pricing/dot.webp";

const PriceCard = ({ title, subTitle, price, description, image, onClick }) => (
  <div
    className="relative w-full hd:h-[45rem] 3xl:h-[43rem] 2xl:h-[40rem] xl:h-[36rem] lg:h-[30rem] lg:py-0 xs:py-8 shadow-2xl rounded-3xl hd:border-[6px] 3xl:border-[6px] 2xl:border-4 xl:border-4 lg:border-2 xs:border-2 border-[#F9756D] overflow-hidden flex flex-col justify-center items-center xl:px-10 lg:px-7 xs:px-5 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${image})` }}
  >
    <h1 className="text-center font-black text-[#F9756D] mb-3 hd:text-5xl 3xl:text-5xl 2xl:text-5xl xl:text-5xl lg:text-4xl xs:text-3xl">
      {title}
    </h1>

    <h2 className="text-center font-medium text-[#F9756D] hd:text-4xl 3xl:text-4xl 2xl:text-3xl xl:text-3xl lg:text-2xl xs:text-xl">
      {subTitle}
    </h2>

    <h3 className="text-center text-black font-extrabold hd:text-8xl hd:my-10 3xl:text-8xl 3xl:my-10 2xl:text-7xl 2xl:my-8 xl:text-6xl xl:my-8 lg:text-5xl lg:my-7 xs:text-5xl xs:my-8">
      {price}
      <span className="font-bold xl:text-lg lg:text-base xs:text-xs">/MO</span>
    </h3>

    <ul className="flex flex-col 2xl:gap-3 lg:gap-2 font-bold w-full text-black 3xl:text-base 2xl:text-sm lg:text-[0.65rem] xs:text-[0.6rem] ">
      {description.map((item, index) => (
        <li
          key={index}
          className="flex xl:gap-4 lg:gap-2 xs:gap-2 items-center"
        >
          <span className="3xl:w-4 2xl:w-3 xl:w-2 lg:w-2 xs:w-2">
            <img src={dot} alt="dot" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <button
      className="w-full bg-[#F9756D] text-white hover:bg-white hover:text-[#F9756D] hover:border-4 hover:border-[#F9756D] cursor-pointer mt-10 rounded-full font-bold px-4 hd:py-3 hd:text-3xl 3xl:py-3 3xl:text-3xl 2xl:py-2 2xl:text-2xl xl:py-2 xl:text-2xl lg:py-2 lg:text-[1rem] xs:py-1 xs:text-base shadow-2xl transition-all"
      onClick={onClick}
    >
      Start 2-Week Free Trial
    </button>
  </div>
);

export default function PriceCards() {
  const router = useRouter();

  const move = () => {
    if (router.pathname === "/landing-page-1") {
      window.location.href = "#optinform";
    } else {
      router.push("/pricing");
    }
  };

  const cardData = [
    {
      title: "PART-TIME",
      subTitle: "AI-Powered Virtual Assistant",
      price: "$997",
      description: [
        "20 Hours/week",
        "End-to-end management (includes recruiting)",
        "Ongoing AI training and updates",
        "Dedicated Client Success Manager",
        "2-week free trial",
      ],
      image: card1,
    },
    {
      title: "FULL-TIME",
      subTitle: "AI-Powered Virtual Assistant",
      price: "$1,947",
      description: [
        "40 Hours/week",
        "End-to-end management (includes recruiting)",
        "Ongoing AI training and updates",
        "Dedicated Client Success Manager",
        "2-week free trial",
      ],
      image: card2,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid lg:grid-cols-2 hd:gap-9 3xl:gap-10 2xl:gap-8 xl:gap-7 lg:gap-8 xs:gap-6 hd:w-3/5 3xl:w-4/5 2xl:w-11/12 xl:w-full lg:w-11/12">
        {cardData.map((card, index) => (
          <PriceCard key={index} {...card} onClick={move} />
        ))}
      </div>
    </div>
  );
}
