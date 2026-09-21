import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-websites',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
