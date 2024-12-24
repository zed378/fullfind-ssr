import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState } from "react";

export default function WidthSize() {
  const { innerWidth } = useWindowSize();
  const [width, setWidth] = useState(1024); // Default width for SSR

  useEffect(() => {
    if (innerWidth) {
      setWidth(innerWidth);
    }
  }, [innerWidth]);

  return width;
}
