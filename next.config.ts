import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://wegogym-production.up.railway.app/api/:path*", // Proxy to Backend
  //     },
  //   ];
  // },
};

export default nextConfig;
