import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function AllRoles() {
  const [arr, setArr] = useState("");
  return (
    <button
      className={`w-[10rem] hover:bg-blue-500 px-4 py-3 rounded-full 3xl:text-sm xl:text-xs flex items-center justify-center hover:text-white gap-2 text-black outline outline-2 outline-blue-500 hover:outline-none`}
      onMouseEnter={() => setArr("animate__animated animate__slideInLeft")}
      onMouseLeave={() => setArr("animate__animated animate__slideInRight")}
    >
      View All Roles
      <span className="overflow-hidden flex items-center">
        <BsArrowRight className={arr} />
      </span>
    </button>
  );
}
