import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        // pathname: '/path/**' // optionally specify a pathname pattern
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // pathname: '/photo/**'
      }
    ]
  }
};

export default nextConfig;
