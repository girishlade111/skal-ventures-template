import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Subpath deploy on GitHub Pages. Remove basePath for root-domain / Vercel deploys.
  basePath: "/skal-ventures-template",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
