import { useEffect, useState } from "react";

export default function useIframeEvents(iframeRef) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleEvent = (event) => {
      // Access event details here
      console.log("Event received:", event);
      setEventData(event);
    };

    // Add event listener for desired events (e.g., click, submit, etc.)
    iframe.addEventListener("click", handleEvent);

    // Clean up event listener on unmount
    return () => {
      iframe.removeEventListener("click", handleEvent);
    };
  }, [iframeRef]);

  return eventData;
}
