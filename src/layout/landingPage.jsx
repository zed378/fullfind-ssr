import { Outlet } from "react-router-dom";

export default function LandingPageLayout() {
  return (
    <div className="w-screen h-screen m-0 p-0 flex flex-col scroll-smooth">
      <div className="flex-grow flex justify-center">
        <div className="max-w-[1920px] w-full relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
