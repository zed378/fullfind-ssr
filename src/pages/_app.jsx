import { useEffect } from "react";

// These styles apply to every route in the application
import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/embla.css";
import "animate.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  }, []);

  return <Component {...pageProps} />;
}
