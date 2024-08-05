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
      {
        protocol: "https",
        hostname: "reactormag.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dwhs64chr/**",
      },
    ],
  },
};

export default nextConfig;
