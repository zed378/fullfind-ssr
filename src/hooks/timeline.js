export default function setTimlineTopHeight(width, setW) {
  if (typeof window === "object" && width > 1900) {
    document.documentElement.style.setProperty("--timeline-height", "84.5%");
    document.documentElement.style.setProperty("--timeline-top", "115px");
    document.documentElement.style.setProperty("--mar-l", "60px");
    setW("50%");
  } else if (typeof window === "object" && width >= 1400 && width < 1901) {
    document.documentElement.style.setProperty("--timeline-height", "84.5%");
    document.documentElement.style.setProperty("--timeline-top", "115px");
    document.documentElement.style.setProperty("--mar-l", "60px");
    setW("60%");
  } else if (typeof window === "object" && width >= 1200 && width < 1400) {
    document.documentElement.style.setProperty("--timeline-height", "85.5%");
    document.documentElement.style.setProperty("--timeline-top", "115px");
    document.documentElement.style.setProperty("--mar-l", "60px");
    setW("70%");
  } else if (typeof window === "object" && width >= 1024 && width < 1200) {
    document.documentElement.style.setProperty("--timeline-height", "85.5%");
    document.documentElement.style.setProperty("--timeline-top", "115px");
    document.documentElement.style.setProperty("--mar-l", "40px");
    setW("80%");
  } else if (typeof window === "object" && width >= 768 && width < 1024) {
    document.documentElement.style.setProperty("--timeline-height", "84.5%");
    document.documentElement.style.setProperty("--timeline-top", "130px");
    document.documentElement.style.setProperty("--mar-l", "40px");
    setW("95%");
  } else if (typeof window === "object" && width >= 240 && width < 768) {
    document.documentElement.style.setProperty("--timeline-height", "86.5%");
    document.documentElement.style.setProperty("--timeline-top", "115px");
    document.documentElement.style.setProperty("--mar-l", "40px");
    setW("90%");
  }
}
