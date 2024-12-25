import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script>
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-K53FMLQK");
          `}
        </script>
        {/* End Google Tag Manager */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="We make sure you won't waste time or money - on top of saving 70% in employee costs. 15-day 'crazy fast' placement guarantee. We'll get a 'perfect fit' hire ..."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
