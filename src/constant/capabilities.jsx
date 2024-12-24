// capabilities styles
export const len4 =
  "w-full h-auto items-center hd:px-40 hd:py-28 hd:gap-10 3xl:px-32 3xl:py-24 2xl:px-24 2xl:py-20 xl:px-12 xl:py-20 lg:px-12 lg:py-20 xs:px-10 xs:py-20";

export const len5 =
  "w-full h-auto items-center hd:px-32 hd:py-28 hd:gap-10 3xl:px-20 3xl:py-24 2xl:px-12 2xl:py-20 xl:px-12 xl:py-20 lg:px-12 lg:py-20 xs:px-10 xs:py-20";

export const len7 =
  "hd:w-[23%] hd:gap-4 3xl:w-[22%] 3xl:gap-4 2xl:w-[22%] 2xl:gap-4 xl:w-[30%] xl:gap-3 lg:w-[47%] lg:gap-3 xs:w-full xs:gap-3 flex flex-col items-center relative";

export const card4 =
  "w-full grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 hd:gap-40 3xl:gap-24 2xl:gap-16 xl:gap-14 lg:gap-20 xs:gap-10";

export const card5 =
  "w-full grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 grid-rows-auto hd:gap-x-28 hd:gap-y-4 3xl:gap-x-24 3xl:gap-y-4 2xl:gap-x-12 2xl:gap-y-3 xl:gap-x-14 xl:gap-y-2 lg:gap-10 xs:gap-10";

export const card7 =
  "flex flex-wrap justify-center hd:gap-10 hd:mt-0 3xl:gap-10 3xl:mt-16 2xl:gap-10 2xl:mt-20 xl:gap-10 lg:gap-10 xs:gap-10";

export const p4 =
  "text-center hd:text-xl 3xl:text-base 2xl:text-sm xl:text-xs lg:text-base xs:text-base";

export const p5 =
  "text-center hd:text-base 3xl:text-xs 2xl:text-xs xl:text-xs lg:text-sm xs:text-xs";

// creative assets
import c1 from "capabilities/creative/c1.webp";
import c2 from "capabilities/creative/c2.webp";
import c3 from "capabilities/creative/c3.webp";
import c4 from "capabilities/creative/c4.webp";

export const creativeCapabilities = [
  {
    id: 1,
    title: "",
    image: c1,
    desc: (
      <>
        High-quality video editing using tools like{" "}
        <span className="font-semibold">Adobe Premiere Pro and Runway</span>
      </>
    ),
  },
  {
    id: 2,
    title: "",
    image: c2,
    desc: (
      <>
        Stunning motion graphics and animations with{" "}
        <span className="font-semibold">Adobe After Effects and Synthesia</span>
      </>
    ),
  },
  {
    id: 3,
    title: "",
    image: c3,
    desc: (
      <>
        Eye-catching graphic designs using{" "}
        <span className="font-semibold">Canva AI and Adobe Sensei</span>
      </>
    ),
  },
  {
    id: 4,
    title: "",
    image: c4,
    desc: (
      <>
        <span className="font-semibold">Fast content adaptations</span> for
        various platforms using AI tools
      </>
    ),
  },
];

// marketing capabalities
import m1 from "capabilities/marketing/m1.webp";
import m2 from "capabilities/marketing/m2.webp";
import m3 from "capabilities/marketing/m3.webp";
import m4 from "capabilities/marketing/m4.webp";
import m5 from "capabilities/marketing/m5.webp";

export const marketingCapabilities = [
  {
    id: 1,
    title: "Admin Support",
    image: m1,
    desc: "Email management, calendar scheduling, and CRM updates",
  },
  {
    id: 2,
    title: "Social Media Management",
    image: m2,
    desc: "Scheduling posts, monitoring engagement, and drafting captions",
  },
  {
    id: 3,
    title: "Content Creation",
    image: m3,
    desc: "Designing visuals with Canva AI and writing copy with ChatGPT",
  },
  {
    id: 4,
    title: "Copywriting",
    image: m4,
    desc: "Producing effective ad copy, blog drafts, and newsletters",
  },
  {
    id: 5,
    title: "Workflow Automation",
    image: m5,
    desc: "Streamlining repetitive tasks with Zapier and other automation tools",
  },
];

// admin capabalities
import a1 from "capabilities/admin/a1.webp";
import a2 from "capabilities/admin/a2.webp";
import a3 from "capabilities/admin/a3.webp";
import a4 from "capabilities/admin/a4.webp";
import a5 from "capabilities/admin/a5.webp";

export const adminCapabilities = [
  {
    id: 1,
    title: "Inbox Management",
    image: a1,
    desc: "Organizing, sorting, and responding to emails with tools like ChatGPT",
  },
  {
    id: 2,
    title: "Calendar Scheduling",
    image: a2,
    desc: "Streamlining appointments and reminders across time zones",
  },
  {
    id: 3,
    title: "Data Entry & Organization",
    image: a3,
    desc: "Ensuring accuracy and speed with tools like Microsoft Excel AI",
  },
  {
    id: 4,
    title: "CRM Management",
    image: a4,
    desc: "Updating and maintaining client records with platforms like Salesforce and HubSpot",
  },
  {
    id: 5,
    title: "Workflow Automation",
    image: a5,
    desc: "Using tools like Zapier to reduce repetitive tasks and improve processes",
  },
];

// sosmed capabalities
import s1 from "capabilities/sosmed/s1.webp";
import s2 from "capabilities/sosmed/s2.webp";
import s3 from "capabilities/sosmed/s3.webp";
import s4 from "capabilities/sosmed/s4.webp";
import s5 from "capabilities/sosmed/s5.webp";

export const sosmedCapabilities = [
  {
    id: 1,
    title: "Content Creation",
    image: s1,
    desc: "Writing engaging posts and captions with tools like ChatGPT and Jasper",
  },
  {
    id: 2,
    title: "Content Management",
    image: s2,
    desc: "Scheduling and posting content across platforms using Buffer and Hootsuite",
  },
  {
    id: 3,
    title: "Audience Analysis",
    image: s3,
    desc: "Tracking engagement, analyzing trends, and providing actionable insights",
  },
  {
    id: 4,
    title: "Competitor Monitoring",
    image: s4,
    desc: "Reviewing competitor strategies and adjusting your content accordingly",
  },
  {
    id: 5,
    title: "Platform Mastery",
    image: s5,
    desc: "Managing presence on Instagram, TikTok, LinkedIn, Twitter, and more",
  },
];

// lead capabalities
import l1 from "capabilities/lead/l1.webp";
import l2 from "capabilities/lead/l2.webp";
import l3 from "capabilities/lead/l3.webp";
import l4 from "capabilities/lead/l4.webp";
import l5 from "capabilities/lead/l5.webp";
import l6 from "capabilities/lead/l6.webp";
import l7 from "capabilities/lead/l7.webp";

export const leadCapabilities = [
  {
    id: 1,
    title: "Lead List Building",
    image: l1,
    desc: "Using tools like Apollo.io and LinkedIn Sales Navigator to identify high-quality prospects",
  },
  {
    id: 2,
    title: "Inbound Replies",
    image: l2,
    desc: "Handling responses and qualifying leads from inbound inquiries",
  },
  {
    id: 3,
    title: "Receive Inbound Calls",
    image: l6,
    desc: "Handle client inquiries through a call",
  },
  {
    id: 4,
    title: "Make Outbound Calls",
    image: l7,
    desc: "Cold call a lead list or customer list to promote your products or services",
  },
  {
    id: 5,
    title: "Cold Outreach",
    image: l3,
    desc: "Crafting and sending personalized outreach messages using ChatGPT and Claude",
  },
  {
    id: 6,
    title: "Follow-Ups",
    image: l4,
    desc: "Managing timely follow-ups to keep prospects engaged",
  },
  {
    id: 7,
    title: "CRM Management",
    image: l5,
    desc: "Organizing and updating client data within CRMs like HubSpot and Salesforce",
  },
];
