// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hp-api.herokuapp.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "e0.pxfuel.com",
        port: "",
        pathname: "/wallpapers/**",
      },
    ],
  },
};

export default nextConfig;
