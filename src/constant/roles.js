// Roles on explore
import acc from "explore/acc.webp";
import ads from "explore/ads.webp";
import gd from "explore/gd.webp";
import pm from "explore/pm.webp";
import uiux from "explore/uiux.webp";
import va from "explore/va.webp";
import vids from "explore/vids.webp";

// icons
import r1 from "icons/r1.svg";
import r2 from "icons/r2.svg";
import r3 from "icons/r3.svg";
import r4 from "icons/r4.svg";
import r5 from "icons/r5.svg";
import r6 from "icons/r6.svg";
import r7 from "icons/r7.svg";
import marketing from "niche/marketing.svg";
import creative from "niche/creative.svg";
import sosmed from "niche/sosmed.svg";
import lead from "niche/lead.svg";
import admin from "niche/admin.svg";
import creative1 from "niche/creative1.svg";
import marketing1 from "niche/marketing1.svg";
import sosmed1 from "niche/sosmed1.svg";
import lead1 from "niche/lead1.svg";
import admin1 from "niche/admin1.svg";

export const roles = [
  {
    id: 1,
    title: "Virtual Marketing Assistant",
    image: marketing,
    alt: marketing1,
    route: "/roles/ads",
  },
  {
    id: 2,
    title: "Creative Assistant",
    image: creative,
    alt: creative1,
    route: "/roles/creative",
  },
  {
    id: 3,
    title: "Social Media Growth Assistant",
    image: sosmed,
    alt: sosmed1,
    route: "/roles/sosmed",
  },
  {
    id: 4,
    title: "Lead Generation Assistant",
    image: lead,
    alt: lead1,
    route: "/roles/lead",
  },
  {
    id: 5,
    title: "Administrative Assistant",
    image: admin,
    alt: admin1,
    route: "/roles/admin",
  },
];

export const roleSection = [
  {
    id: 1,
    title: "Digital Marketers",
    image: ads,
    route: "/roles/ads",
    bg: "bg-pink-200",
    icons: r3,
  },
  {
    id: 2,
    title: "Client Success Managers",
    image: acc,
    route: "/roles/account",
    bg: "bg-red-200",
    icons: r5,
  },
  {
    id: 3,
    title: "Graphic Designers",
    image: gd,
    route: "/roles/designer",
    bg: "bg-sky-200",
    icons: r2,
  },
  {
    id: 4,
    title: "Project Managers",
    image: pm,
    route: "/roles/pm",
    bg: "bg-orange-100",
    icons: r7,
  },
  {
    id: 5,
    title: "UI/UX Designers",
    image: uiux,
    route: "/roles/ui-ux",
    bg: "bg-green-100",
    icons: r6,
  },
];
