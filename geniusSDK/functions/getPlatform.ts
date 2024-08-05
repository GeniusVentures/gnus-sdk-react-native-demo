// TypeScript definition for platform types
type PlatformType =
  | "iOS"
  | "Android"
  | "Web"
  | "Windows"
  | "MacOS"
  | "Linux"
  | "Unknown";

// Function to detect platform
const getPlatform = (): PlatformType => {
  // Check for React Native environment
  if (typeof global !== "undefined" && typeof global.__DEV__ !== "undefined") {
    const { Platform } = require("react-native");
    return Platform.OS as PlatformType;
  }

  // Check for browser environment
  if (typeof navigator !== "undefined") {
    const { userAgent } = navigator;
    if (/windows/i.test(userAgent)) return "Windows";
    if (/macintosh|mac os x/i.test(userAgent)) return "MacOS";
    if (/linux/i.test(userAgent)) return "Linux";
    if (/android/i.test(userAgent)) return "Android";
    if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
    return "Unknown";
  }

  return "Unknown";
};

console.log(getPlatform());
