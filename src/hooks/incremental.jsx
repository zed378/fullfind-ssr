import { useState, useEffect, useCallback } from "react";

const useIncrementalValue = (targetValue, duration) => {
  const [value, setValue] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isDecrementing, setIsDecrementing] = useState(false);

  useEffect(() => {
    if (!isActive && !isDecrementing) return;

    const increment = targetValue / (duration / 10); // calculate the increment/decrement for each 10ms interval

    let current = value;
    const interval = setInterval(() => {
      if (isActive) {
        current += increment;
        if (current >= targetValue) {
          setValue(targetValue);
          clearInterval(interval);
        } else {
          setValue(Math.round(current));
        }
      }

      if (isDecrementing) {
        current -= increment;
        if (current <= 0) {
          setValue(0);
          clearInterval(interval);
          setIsDecrementing(false); // stop decrementing when value reaches 0
        } else {
          setValue(Math.round(current));
        }
      }
    }, 10); // update every 10ms

    return () => clearInterval(interval);
  }, [isActive, isDecrementing, targetValue, value]);

  const start = useCallback(() => {
    setIsActive(true);
    setIsDecrementing(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setIsDecrementing(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
    setIsDecrementing(false);
  }, []);

  return { value, start, stop, reset };
};

export default useIncrementalValue;
