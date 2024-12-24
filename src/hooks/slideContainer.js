export function setSlideWidth(width) {
  if (typeof window === "object" && width > 1900) {
    document.documentElement.style.setProperty("--slide-width", "23.2%");
  } else if (typeof window === "object" && width >= 1400 && width < 1901) {
    document.documentElement.style.setProperty("--slide-width", "22.5%");
  } else if (typeof window === "object" && width >= 1200 && width < 1400) {
    document.documentElement.style.setProperty("--slide-width", "22.5%");
  } else if (typeof window === "object" && width >= 1024 && width < 1200) {
    document.documentElement.style.setProperty("--slide-width", "30.5%");
  } else if (typeof window === "object" && width >= 768 && width < 1024) {
    document.documentElement.style.setProperty("--slide-width", "48.5%");
  } else if (typeof window === "object" && width >= 240 && width < 768) {
    document.documentElement.style.setProperty("--slide-width", "85%");
  }
}

export function BannerSlideWidth(width) {
  if (typeof window === "object" && width > 1900) {
    document.documentElement.style.setProperty("--slide-width", "8.5%");
  } else if (typeof window === "object" && width >= 1400 && width < 1901) {
    document.documentElement.style.setProperty("--slide-width", "auto");
  } else if (typeof window === "object" && width >= 1200 && width < 1400) {
    document.documentElement.style.setProperty("--slide-width", "auto");
  } else if (typeof window === "object" && width >= 1024 && width < 1200) {
    document.documentElement.style.setProperty("--slide-width", "auto");
  } else if (typeof window === "object" && width >= 768 && width < 1024) {
    document.documentElement.style.setProperty("--slide-width", "auto");
  } else if (typeof window === "object" && width >= 240 && width < 768) {
    document.documentElement.style.setProperty("--slide-width", "auto");
  }
}

export function reasonSlideWidth(width) {
  if (typeof window === "object" && width > 1900) {
    document.documentElement.style.setProperty("--slide-width", "23%");
  } else if (typeof window === "object" && width >= 1400 && width < 1901) {
    document.documentElement.style.setProperty("--slide-width", "25%");
  } else if (typeof window === "object" && width >= 1200 && width < 1400) {
    document.documentElement.style.setProperty("--slide-width", "30%");
  } else if (typeof window === "object" && width >= 1024 && width < 1200) {
    document.documentElement.style.setProperty("--slide-width", "48%");
  } else if (typeof window === "object" && width >= 768 && width < 1024) {
    document.documentElement.style.setProperty("--slide-width", "47.5%");
  } else if (typeof window === "object" && width >= 240 && width < 768) {
    document.documentElement.style.setProperty("--slide-width", "90%");
  }
}
