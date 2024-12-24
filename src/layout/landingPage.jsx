import Head from "next/head";
export default function LandingPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>FullFind - Save 75% in hiring costs. Risk-free.</title>
      </Head>

      <div className="w-screen h-screen m-0 p-0 flex flex-col scroll-smooth">
        <div className="flex-grow flex justify-center">
          <div className="max-w-[1920px] w-full relative">{children}</div>
        </div>
      </div>
    </>
  );
}
