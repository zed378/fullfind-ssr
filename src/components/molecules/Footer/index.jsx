import { useRouter } from "next/router";
import Image from "next/image";

// components
import { Fade } from "react-awesome-reveal";

// assets
import logo from "brand/logoFull.png";

export default function Footer() {
  const router = useRouter();

  const testi = () => {
    if (router.pathname === "/") {
      window.location.href = "#testi";
    } else {
      router.push("/");
      setTimeout(() => {
        window.location.href = "#testi";
      }, 1000);
    }
  };

  const guarantee = () => {
    if (router.pathname === "/") {
      window.location.href = "#guarantee";
    } else {
      router.push("/");
      setTimeout(() => {
        window.location.href = "#guarantee";
      }, 1000);
    }
  };

  const hire = () => {
    if (router.pathname === "/") {
      window.location.href = "#hire";
    } else {
      router.push("/");
      setTimeout(() => {
        window.location.href = "#hire";
      }, 1000);
    }
  };

  return (
    <div className="bg-[#343434] flex justify-center">
      <div className="max-w-[1920px] w-full xl:py-3 xl:pt-20 xl:pb-32 xl:px-16 xs:px-4 xs:pt-14 xs:pb-24 text-white flex xl:flex-row xs:flex-col xl:items-start xs:items-center xl:justify-around wide:justify-between xs:justify-center xl:gap-0 xs:gap-10">
        <div className="flex flex-col xl:items-start xs:items-center xl:w-[30%] xs:w-full xs:text-center xl:text-start">
          <Fade direction="down" duration={1000} delay={200}>
            <Image
              src={logo}
              alt="Fullfind brand logo"
              className="w-24 cursor-pointer"
              onClick={() => router.push("/")}
            />
          </Fade>
          <Fade direction="up" duration={1000} delay={200}>
            <p className="mt-5 xl:text-lg font-normal xl:max-w-[80%] xs:max-w-full xl:px-0 xs:px-7">
              A team of people passionate in helping agencies and brands find
              their ‘perfect people’, no matter how far they are.
            </p>
          </Fade>
        </div>

        <div className="xl:w-[30%] xs:w-full">
          <Fade direction="down" duration={200} cascade>
            <ul className="flex flex-col gap-2 xl:items-start xs:items-center">
              <li className="text-3xl font-bold mb-5">Navigation</li>
              <li
                className="cursor-pointer xl:text-lg font-normal"
                onClick={guarantee}
              >
                Guarantees
              </li>
              <li
                className="cursor-pointer xl:text-lg font-normal"
                onClick={hire}
              >
                Who can I hire?
              </li>
              <li
                className="cursor-pointer xl:text-lg font-normal"
                onClick={testi}
              >
                Testimonials
              </li>
              <li
                className="cursor-pointer xl:text-lg font-normal"
                onClick={() => router.push("/pricing")}
              >
                Pricing
              </li>
            </ul>
          </Fade>
        </div>

        {/* <div className="xl:w-[30%] xs:w-full">
          <Fade direction="down" duration={200} cascade>
            <ul className="flex flex-col gap-2 xl:items-start xs:items-center">
              <li className="text-3xl font-bold mb-5">Roles</li>
              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/video-editor')}>
                Video Editors
              </li>
              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/designer')}>
                Graphic Designers
              </li>
              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/uiux')}>
                UI/UX Designers
              </li>
              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/ads')}>
                Digital Marketers
              </li>
              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/account')}>
                Client Success Managers
              </li>

              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/pm')}>
                Project Managers
              </li>

              <li className="cursor-pointer xl:text-lg font-normal" onClick={() => router.push('/roles/VA')}>
                Virtual Assistants
              </li>
            </ul>
          </Fade>
        </div> */}
      </div>
    </div>
  );
}
