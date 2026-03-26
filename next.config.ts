import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p.kaktusbooking.app",
      },
    ],
  },
};

export default nextConfig;
