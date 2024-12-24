// components
import { PriceCards } from "atoms/Card";

// constant
// import { padding } from "constant/padding";

export default function Price() {
  return (
    <div
      id="price"
      className={`hd:py-28 3xl:py-16 2xl:py-16 xl:py-16 lg:py-14 xs:py-12 xl:px-16 xs:px-8 w-full h-auto overflow-hidden bg-[#F6F4F4]`}
    >
      <h1 className="text-center font-black hd:text-7xl 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-6xl xs:text-4xl">
        Pricing
      </h1>

      <PriceCards />
    </div>
  );
}
