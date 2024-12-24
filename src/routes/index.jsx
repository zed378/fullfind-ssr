// Pages
import Home from "pages/Home";
import Pricing from "pages/Pricing";
import OurProcess from "pages/OurProcess";
import VideoEditor from "pages/Role/VideoEditor";
import GraphicDesign from "pages/Role/GraphicDesign";
import UIUX from "pages/Role/UIUX";
import DigitalMarketing from "pages/Role/DigitalMarketing";
import ProjectManager from "pages/Role/ProjectManager";
import ClientSuccessManagers from "pages/Role/ClientSuccessManager";
import VirtualAssistant from "pages/Role/VirtualAssistant";

// Icons
import { RiHome2Line } from "react-icons/ri";

export const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 2,
    path: "/pricing",
    component: Pricing,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 3,
    path: "/our-process",
    component: OurProcess,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 4,
    path: "/roles/video-editor",
    component: VideoEditor,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 5,
    path: "/roles/sosmed",
    component: GraphicDesign,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 6,
    path: "/roles/admin",
    component: UIUX,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 7,
    path: "/roles/ads",
    component: DigitalMarketing,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 8,
    path: "/roles/lead",
    component: ProjectManager,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 9,
    path: "/roles/creative",
    component: ClientSuccessManagers,
    auth: false,
    icon: <RiHome2Line />,
  },
  {
    id: 10,
    path: "/roles/VA",
    component: VirtualAssistant,
    auth: false,
    icon: <RiHome2Line />,
  },
];
