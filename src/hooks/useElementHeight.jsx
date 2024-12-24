import { useState, useEffect, useRef } from "react";

export default function useElementHeight() {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.offsetHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, []);

  return [height, elementRef];
}
