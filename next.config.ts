import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ic3m9u5j9zgpcs25.public.blob.vercel-storage.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
