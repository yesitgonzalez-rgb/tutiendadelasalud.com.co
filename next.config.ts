import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [375, 768, 1024, 1280, 1440],
  },
};

export default nextConfig;
