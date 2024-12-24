import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// components
import { Fade } from "react-awesome-reveal";

// assets
import load from "icons/loading.svg";

export default function HalfForm() {
  const nav = useNavigate();

  // input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [web, setWeb] = useState("");
  const [employee, setEmployee] = useState("");
  const [role, setRole] = useState("");
  const [hiring, setHiring] = useState("");
  const [references, setReferences] = useState("");

  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const submitted = async () => {
    try {
      setLoading(true);
      await axios
        .post("https://fullbe.webcompose.id/form/submit", {
          firstName,
          lastName,
          email,
          company,
          web,
          employee,
          role,
          hiring,
          references,
        })
        .then((res) => {
          res && setLoading(false);
          setMsg("Form Submitted. Redirecting to booking page.");
          setToast("animate__animated animate__fadeInRight");

          setFirstName("");
          setLastName("");
          setEmail("");
          setCompany("");
          setWeb("");
          setEmployee("");
          setRole("");
          setHiring("");
          setReferences("");

          setTimeout(() => {
            setToast("animate__animated animate__fadeOutUp");
          }, 2500);
          setTimeout(() => {
            setMsg("");
            nav("/thank-you-booking");
          }, 3000);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMsg("Form failed to submit");

      setTimeout(() => {
        setToast("animate__animated animate__fadOutUp");
      }, 4000);
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };

  return (
    <>
      {msg && (
        <div
          className={`bg-blue-200 text-blue-600 font-bold fixed top-[20px] right-5 z-50 px-5 py-3 rounded-b-xl rounded-tl-xl shadow-xl ${toast}`}
        >
          <p>{msg}</p>
        </div>
      )}

      <div className=" 2xl:w-[48%] xs:w-full bg-white shadow-2xl rounded-xl 3xl:p-10 2xl:p-7 xl:p-10 lg:p-8 xs:p-5 flex flex-col hd:gap-10 3xl:gap-9 2xl:gap-8 xl:gap-7 xs:gap-6">
        {/* Name Section */}
        <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-end justify-between">
          <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
            <Fade direction="up" duration={1500}>
              <label
                htmlFor="firstName"
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
              >
                First Name
              </label>
            </Fade>

            <Fade direction="down" duration={1500}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jeff"
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
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
              >
                Last Name
              </label>
            </Fade>

            <Fade direction="down" duration={1500}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Bezos"
                className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Fade>
          </div>
        </div>
        {/* End of Name Section */}

        {/* 2nd Section */}
        <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-end justify-between">
          <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
            <Fade direction="up" duration={1500}>
              <label
                htmlFor="email"
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
              >
                Work Email
              </label>
            </Fade>

            <Fade direction="down" duration={1500}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="jeff@amazon.com"
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
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
              >
                Company Name
              </label>
            </Fade>

            <Fade direction="down" duration={1500}>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Amazon"
                className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 "
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Fade>
          </div>
        </div>
        {/* End of 2nd Section */}

        {/* 3rd Section */}
        <div className="w-full flex xl:flex-row xs:flex-col xl:gap-0 xs:gap-6 items-end justify-between">
          <div className="xl:w-[48%] xs:w-full flex flex-col gap-2 ">
            <Fade direction="up" duration={1500}>
              <label
                htmlFor="web"
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
              >
                Website URL
              </label>
            </Fade>

            <Fade direction="down" duration={1500}>
              <input
                type="text"
                id="web"
                name="web"
                placeholder="amazon.com"
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
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
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
              className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
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
              className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
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
                className="font-medium hd:text-xl 3xl:text-lg 2xl:text-sm"
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
                name="references"
                id="references"
                className="w-full bg-transparent focus:bg-zinc-300 focus:outline-none border border-[#D9D9D9] rounded-lg px-3 py-2 xl:text-basem text-slate-500 appearance-none"
                onChange={(e) => setReferences(e.target.value)}
                value={references}
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
            <button
              disabled={
                firstName === "" ||
                lastName === "" ||
                email === "" ||
                company === "" ||
                web === "" ||
                employee === "" ||
                role === "" ||
                hiring === "" ||
                references === ""
                  ? true
                  : false
              }
              onClick={submitted}
              className="w-full bg-blue-600 text-white rounded-full hd:text-2xl 3xl:text-xl xl:text-lg lg:text-xl xs:text-base py-3 disabled:cursor-not-allowed"
            >
              <h2 className="font-montserrat font-bold">
                {loading ? (
                  <span className=" w-full flex items-center justify-center gap-2 ">
                    <img src={load} alt="" className="w-6 animate-spin" />{" "}
                    Submitting
                  </span>
                ) : (
                  "Start Hiring"
                )}
              </h2>
            </button>
          </div>
        </div>
        {/* End of CTA */}
      </div>
    </>
  );
}
