export const detectDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(
    userAgent
  );
  const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(
    userAgent
  );

  if (isMobile) {
    return "Mobile";
  } else if (isTablet) {
    return "Tablet";
  } else {
    return "Desktop";
  }
};

export const useDeviceDetection = () => {
  const device = detectDevice();

  const handleDeviceDetection = () => {
    const currentDevice = detectDevice();
    if (currentDevice !== device) {
      console.log(`Device type changed to: ${currentDevice}`);
    }
  };

  window.addEventListener("resize", handleDeviceDetection);

  return () => {
    window.removeEventListener("resize", handleDeviceDetection);
  };
};
