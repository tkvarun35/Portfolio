/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "leetcard.jacoblin.cool",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
        pathname: "**",
      },
    ],

    dangerouslyAllowSVG: true,
    // domains: [
    //   "firebasestorage.googleapis.com",
    //   "leetcard.jacoblin.cool",
    //   "github-readme-stats.vercel.app",
    // ],
  },
  // swcMinify: false,
};

module.exports = nextConfig;
