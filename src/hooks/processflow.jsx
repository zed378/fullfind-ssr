import { useState, useEffect } from "react";

function useOverflow(ref) {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        setIsOverflowing(ref.current.scrollWidth > ref.current.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [ref]);

  return isOverflowing;
}

function useScroll(ref) {
  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -325, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: 325, behavior: "smooth" });
    }
  };

  return { scrollLeft, scrollRight };
}

export { useOverflow, useScroll };
