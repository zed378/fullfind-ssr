import LP from "pages/Campaign/LP";
import VideoEditors from "pages/Campaign/VideoEditors";
import Booking from "pages/Campaign/Booking";
import Thanks from "pages/Campaign/Thanks";

export const campaignRoutes = [
  {
    id: 1,
    path: "/landing-page-1",
    component: LP,
    auth: false,
  },
  {
    id: 2,
    path: "/editor-ads",
    component: VideoEditors,
    auth: false,
  },
  {
    id: 3,
    path: "/booking-ads-1",
    component: Booking,
    auth: false,
  },
  {
    id: 4,
    path: "/thank-you-ads-1",
    component: Thanks,
    auth: false,
  },
];
