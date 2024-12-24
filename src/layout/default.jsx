import Head from "next/head";

import Navbar from "molecules/Navbar";
import Footer from "molecules/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>FullFind - Save 75% in hiring costs. Risk-free.</title>
      </Head>

      <div className="w-screen h-screen m-0 p-0 flex flex-col">
        <div className="flex justify-center">
          <div className="max-w-[1920px] w-full">
            <Navbar />
          </div>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="max-w-[1920px] w-full relative">{children}</div>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
