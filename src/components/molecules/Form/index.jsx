import { useState, useEffect } from "react";

// components
import { Fade } from "react-awesome-reveal";

// constant
import { padding } from "constant/padding";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [web, setWeb] = useState("");
  const [employee, setEmployee] = useState("");
  const [role, setRole] = useState("");
  const [hiring, setHiring] = useState("");

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  return (
    <div
      className={`${padding} overflow-hidden w-full flex justify-center bg-[#F6F4F4] `}
    >
      <div className="w-full bg-white shadow-2xl rounded-xl p-5">
        <div className="w-full p-5 rounded-xl xs:w-full flex flex-col hd:gap-10 3xl:gap-9 2xl:gap-8 xl:gap-7 xs:gap-6">
          {/* Name Section */}
          <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-center justify-between">
            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="firstName"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  First Name
                </label>
              </Fade>

              <Fade direction="down" duration={1500}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Zed"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Fade>
            </div>

            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="lastName"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  Last Name
                </label>
              </Fade>

              <Fade direction="down" duration={1500}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Trueblood"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Fade>
            </div>
          </div>
          {/* End of Name Section */}

          {/* 2nd Section */}
          <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-center justify-between">
            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="email"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  Work Email
                </label>
              </Fade>

              <Fade direction="down" duration={1500}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="zed@mail.com"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg pl-3 pr-4 py-2 xl:text-basem text-slate-500 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Fade>
            </div>

            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="company"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  Company Name
                </label>
              </Fade>

              <Fade direction="down" duration={1500}>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Galactic Company"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Fade>
            </div>
          </div>
          {/* End of 2nd Section */}

          {/* 3rd Section */}
          <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-center justify-between">
            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="web"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  Website URL
                </label>
              </Fade>

              <Fade direction="down" duration={1500}>
                <input
                  type="text"
                  id="web"
                  name="web"
                  placeholder="fullfind.co"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                  value={web}
                  onChange={(e) => setWeb(e.target.value)}
                />
              </Fade>
            </div>

            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="employee"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  How many employees in your marketing team?
                </label>
              </Fade>

              <Fade
                direction="down"
                duration={1500}
                className="select-wrapper relative"
              >
                <select
                  name="employee"
                  id="employee"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 appearance-none"
                  onChange={(e) => setEmployee(e.target.value)}
                  value={employee}
                >
                  <option value="">Please select...</option>
                  <option value="0-1 people">0-1 people</option>
                  <option value="2-10 people">2-10 people</option>
                  <option value="11-20 people">11-20 people</option>
                  <option value="20+ people">20+ people</option>
                </select>
              </Fade>
            </div>
          </div>
          {/* End of 3rd Section */}

          {/* Role Section */}
          <div className="w-full flex flex-col gap-2">
            <Fade direction="up" duration={1500}>
              <label
                htmlFor="role"
                className="font-medium 3xl:text-xl 2xl:text-base"
              >
                Which role are you looking to hire right now?
              </label>
            </Fade>

            <Fade
              direction="down"
              duration={1500}
              className="select-wrapper relative"
            >
              <select
                name="role"
                id="role"
                className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 appearance-none"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="">Please select...</option>
                <option value="Video Editor">Video Editor</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="UI / UX Designer">UI / UX Designer</option>
                <option value="Paid Ads Specialist">Paid Ads Specialist</option>
                <option value="Client Success Manager">
                  Client Success Manager
                </option>
                <option value="Project Manager">Project Manager</option>
                <option value="Copywriter">Copywriter</option>
              </select>
            </Fade>
          </div>
          {/* End of Role Section */}

          {/* Hiring Process */}
          <div className="w-full flex flex-col gap-2">
            <Fade direction="up" duration={1500}>
              <label
                htmlFor="hiring"
                className="font-medium 3xl:text-xl 2xl:text-base"
              >
                How soon are you looking to kick off the hiring process?
              </label>
            </Fade>

            <Fade
              direction="down"
              duration={1500}
              className="select-wrapper relative"
            >
              <select
                name="hiring"
                id="hiring"
                className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 appearance-none"
                onChange={(e) => setHiring(e.target.value)}
                value={hiring}
              >
                <option value="">Please select...</option>
                <option value="As Soon As Possible">As Soon As Possible</option>
                <option value="Within a few weeks">Within a few weeks</option>
                <option value="This or Next month">This or Next month</option>
                <option value="I’m not sure">I’m not sure</option>
              </select>
            </Fade>
          </div>
          {/* End of Hiring Process */}

          {/* CTA */}
          <div className="w-full flex xl:flex-row xs:flex-col items-end justify-between xl:gap-0 xs:gap-10">
            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <Fade direction="up" duration={1500}>
                <label
                  htmlFor="employee"
                  className="font-medium 3xl:text-xl 2xl:text-base"
                >
                  Where did you hear about us?
                </label>
              </Fade>

              <Fade
                direction="down"
                duration={1500}
                className="select-wrapper relative"
              >
                <select
                  name="employee"
                  id="employee"
                  className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 appearance-none"
                  onChange={(e) => setEmployee(e.target.value)}
                  value={employee}
                >
                  <option value="">Please select...</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter / X">Twitter / X</option>
                  <option value="Tiktok">Tiktok</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </Fade>
            </div>

            <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
              <button className="w-full bg-blue-600 text-white rounded-full xl:text-2xl lg:text-xl xs:text-base py-3">
                <h2 className="font-montserrat font-bold">
                  Start Hiring with FullFind
                </h2>
              </button>
            </div>
          </div>
          {/* End of CTA */}
        </div>
      </div>
    </div>
  );
}
