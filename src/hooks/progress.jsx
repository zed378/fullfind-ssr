import { useState, useEffect, useRef } from "react";

const useProgress = (maxValue, duration) => {
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);
  const frameId = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
          setProgress(0); // Reset progress when not in view
          cancelAnimationFrame(frameId.current);
        }
      },
      { threshold: 0.1 } // Adjust this to determine how much of the element needs to be in view
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
      cancelAnimationFrame(frameId.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progressValue = Math.min(
          (elapsedTime / duration) * maxValue,
          maxValue
        );
        setProgress(progressValue);

        if (progressValue < maxValue) {
          frameId.current = requestAnimationFrame(animate);
        }
      };

      frameId.current = requestAnimationFrame(animate);
    }
  }, [inView, maxValue, duration]);

  return { progress, progressRef, inView };
};

export default useProgress;
