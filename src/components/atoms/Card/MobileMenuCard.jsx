import { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

// Assets
import {
  IoIosArrowDropright,
  IoIosArrowDropdown,
  IoIosCloseCircle,
} from "react-icons/io";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";

// constant
import { roles } from "constant/roles";

export default function MobileMenuCard({ menus, anim, open }) {
  const router = useRouter();
  const [draw, setDraw] = useState(false);

  return (
    <>
      <div
        className={`w-screen h-screen bg-none absolute z-0 top-0 left-0 ${
          !menus && "hidden"
        }`}
        onClick={open}
      ></div>

      <div className="px-3 h-full -mt-6 relative z-50">
        <div
          className={`${anim} bg-white shadow-lg px-5 py-5 rounded-xl flex flex-col relative overflow-hidden animate__animated ${
            menus ? "animate__fadeInDown" : "animate__fadeOutUp"
          }`}
        >
          <Fade duration={500} delay={100} direction="right">
            <IoIosCloseCircle
              className="w-7 h-7 absolute z-20 -top-2 -right-3 text-blue-600"
              onClick={open}
            />
          </Fade>

          <Fade
            duration={400}
            delay={100}
            direction="down"
            cascade
            className="mt-2"
          >
            <ul>
              <li
                className="flex items-center gap-3 pt-3 font-medium text-blue-600"
                onClick={() => {
                  open();
                  router.push("/our-process");
                }}
              >
                <MdOutlineWifiProtectedSetup className="w-6 h-6" />
                Our Process
              </li>

              <li
                className="flex items-center flex-wrap gap-3 pt-3 font-medium text-blue-600"
                onClick={() => {
                  setDraw(!draw);
                }}
              >
                <BsPersonCheck className="w-6 h-6" />
                All Roles{" "}
                {draw ? <IoIosArrowDropdown /> : <IoIosArrowDropright />}
                {draw && (
                  <Fade direction="down" duration={250} cascade>
                    <ul className="w-full pl-6 py-3 text-sm text-blue-600 flex flex-col gap-3 ">
                      {roles.map((role) => (
                        <li
                          key={role.id}
                          onClick={() => {
                            router.push(role.route);
                            open();
                          }}
                        >
                          {role.title}
                        </li>
                      ))}
                    </ul>
                  </Fade>
                )}
              </li>

              <li
                className="flex items-center gap-3 pt-3 font-medium text-blue-600"
                onClick={() => {
                  open();
                  router.push("/pricing");
                }}
              >
                <IoPricetagsOutline className="w-6 h-6" />
                Pricing
              </li>
            </ul>
          </Fade>

          {/* <Fade duration={1200} delay={100} direction="down">
            <StartHiringBtn open={open} />
          </Fade> */}
        </div>
      </div>
    </>
  );
}

MobileMenuCard.propTypes = {
  menus: PropTypes.bool.isRequired,
  anim: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
};
