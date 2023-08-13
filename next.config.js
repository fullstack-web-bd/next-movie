/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        // pathname: "",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon",
        port: "",
        // pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;
