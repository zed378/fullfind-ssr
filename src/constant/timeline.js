// assets
import w1 from "icons/w1.svg";
import w2 from "icons/w2.svg";
import w6 from "icons/w6.svg";
import w4 from "icons/w4.svg";
import w5 from "icons/w5.svg";
import w7 from "icons/w7.svg";

export const options = {
  animate: true,
  layout: "1-column-left",
  lineColor: "#B1B1B1",
  className: "vertical-timeline p-0",
};

const iconStyle = { background: "#B5B5B5" };
const contentArrowStyle = { display: "none" };
export const contentStyle = (w) => {
  let styles = {
    border: "solid 2px #B5B5B5",
    backgroundColor: "none",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "1.5em 1.75em",
    width: w,
  };

  return styles;
};

export const childrenOptions = {
  className: "vertical-timeline-element--work",
  iconClassName:
    "bg-[#B5B5B5] hd:w-2 hd:h-2 left-3 hd:top-32 xl:top-24 lg:top-32 xs:top-24 shadow-none  ",
  contentArrowStyle: contentArrowStyle,
  contentStyle: contentStyle(),
  iconStyle: iconStyle,
  dateClassName: "none",
};

export const timelineData = [
  {
    id: 1,
    icon: w1,
    title: "Sourcing",
    description:
      "We meticulously recruit and vet candidates from our curated global talent pool, focusing on professionals from developing countries who bring top-tier skills and cost efficiency.",
  },
  {
    id: 2,
    icon: w2,
    title: "Skill Testing",
    description:
      "Each candidate completes a customized sample task and technical assessment, including proficiency with AI tools like ChatGPT, Canva AI, and Zapier, for your review.",
  },
  {
    id: 3,
    icon: w4,
    title: "Pre-Onboarding",
    description:
      "FullFind conducts detailed interviews, reference checks, and cultural fit assessments before sending the best candidates for your final interview.",
  },
  {
    id: 4,
    icon: w6,
    title: "AI Training",
    description:
      "Our team provides specialized training to ensure your assistant is proficient in the latest AI tools and workflows, enabling them to deliver immediate value to your business.",
  },
  {
    id: 5,
    icon: w7,
    title: "Ongoing Management & Oversight",
    description:
      "We assign a dedicated project manager to oversee your assistant’s performance, ensuring seamless integration and effective execution of tasks.",
  },
  {
    id: 6,
    icon: w2,
    title: "Retention & Continuous Development",
    description:
      "FullFind manages all payments, contracts, and benefits on your behalf, allowing you to settle invoices conveniently using your US debit or credit card. We also provide ongoing AI training to keep your assistant up-to-date with the latest tools and techniques, enhancing their value to your business over time.",
  },
  {
    id: 7,
    icon: w5,
    title: "Replacement",
    description:
      "Enjoy a FREE forever replacement guarantee with FullFind. If your talent isn't the right fit, replace them anytime at no cost, as long as you remain a client.",
  },
];
