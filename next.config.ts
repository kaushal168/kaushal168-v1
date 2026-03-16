import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false, // Hides the static route indicator
    buildActivity: false, // Hides the compilation indicator
  },
};

export default nextConfig;
