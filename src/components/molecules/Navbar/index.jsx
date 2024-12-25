import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { menuOpen } from "redux/menu";
// Components
import { StartHiringBtn, MobileMenu } from "atoms/Button";
import { Fade } from "react-awesome-reveal";
import NavCard from "atoms/NavCard";
import { MobileMenuCard } from "atoms/Card";
import Image from "next/image";

// Assets
import logo from "brand/logoFull.png";
import logoS from "brand/logo.png";
import WidthSize from "hooks/screenSize";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const router = useRouter();
  const width = WidthSize();
  const { menus, updateOpen } = menuOpen();
  const [openAnim, setOpenAnim] = useState("hidden");

  const [roleMenu, setRoleMenu] = useState(false);
  const [anim, setAnim] = useState("hidden");

  const [role, setRole] = useState(false);
  const [how, setHow] = useState(false);
  const [price, setPrice] = useState(false);

  useEffect(() => {
    if (!roleMenu) {
      setTimeout(() => {
        setAnim("hidden");
      }, 500);
    } else {
      setAnim("");
    }
  }, [roleMenu]);

  useEffect(() => {
    if (!menus) {
      setTimeout(() => {
        setOpenAnim("hidden");
      }, 500);
    } else {
      setOpenAnim("");
    }
  }, [menus]);

  return (
    <div
      className="fixed xs:mt-3 2xl:mt-8 xs:w-screen xl:w-full z-50 max-w-[1920px]"
      id="test"
    >
      <Fade duration={300} direction="down">
        <div className="xl:px-16 xs:px-3 relative z-50 w-full">
          <div className="w-full bg-white xs:pb-3 xs:pt-2 xl:py-3 2xl:py-4 xl:px-8 xs:px-4 rounded-xl flex justify-between items-center shadow-lg">
            <Fade direction="left" duration={1000} delay={200}>
              <div
                className="xs:h-7 3xl:h-10 2xl:h-8 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <Image
                  src={width > 1024 ? logo : logoS}
                  alt="Fullfind Logo"
                  style={{ width: "auto", height: "100%" }}
                />
              </div>
            </Fade>

            {width >= 1024 && (
              <Fade cascade duration={500} direction="down" delay={200}>
                <div className="flex items-center xl:gap-20 xl:text-md 2xl:gap-24 2xl:text-base">
                  <div
                    className="overflow-hidden cursor-pointer"
                    onMouseEnter={() => {
                      setRole(true);
                      setRoleMenu(true);
                    }}
                    onMouseLeave={() => {
                      setRole(false);
                    }}
                  >
                    <p className="font-normal flex items-center gap-1 m-0 p-0">
                      Roles
                      {roleMenu ? (
                        <IoIosArrowDropdown />
                      ) : (
                        <IoIosArrowDropright />
                      )}
                    </p>
                    <hr
                      className={`-mt-0.5 border-black border-1 animate__animated ${
                        role ? "animate__slideInLeft" : "animate__slideOutRight"
                      }`}
                    />
                  </div>

                  <div
                    className="overflow-hidden cursor-pointer"
                    onMouseEnter={() => {
                      setHow(true);
                      setRoleMenu(false);
                    }}
                    onMouseLeave={() => setHow(false)}
                    onClick={() => router.push("/our-process")}
                  >
                    <p className="font-normal flex items-center gap-1 m-0 p-0">
                      Our Process
                    </p>
                    <hr
                      className={`-mt-0.5 border-black border-1 animate__animated ${
                        how ? "animate__slideInLeft" : "animate__slideOutRight"
                      }`}
                    />
                  </div>

                  <div
                    className="overflow-hidden cursor-pointer"
                    onMouseEnter={() => {
                      setPrice(true);
                      setRoleMenu(false);
                    }}
                    onMouseLeave={() => setPrice(false)}
                    onClick={() => router.push("/pricing")}
                  >
                    <p className="font-normal flex items-center gap-1 m-0 p-0">
                      Pricing
                    </p>
                    <hr
                      className={`-mt-0.5 border-black border-1 animate__animated ${
                        price
                          ? "animate__slideInLeft"
                          : "animate__slideOutRight"
                      }`}
                    />
                  </div>
                </div>
              </Fade>
            )}

            {width >= 1024 ? (
              <Fade duration={500} direction="right" delay={200}>
                <StartHiringBtn nav={true} />
              </Fade>
            ) : (
              <Fade duration={500} direction="right" delay={200}>
                <MobileMenu update={updateOpen} menus={menus} />
              </Fade>
            )}
          </div>
        </div>

        <NavCard roleMenu={roleMenu} anim={anim} setRoleMenu={setRoleMenu} />
        <MobileMenuCard menus={menus} anim={openAnim} open={updateOpen} />
      </Fade>
    </div>
  );
}
