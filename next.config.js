/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "firebasestorage.googleapis.com",
      "leetcard.jacoblin.cool",
      "github-readme-stats.vercel.app",
    ],
  },
  // swcMinify: false,
};

module.exports = nextConfig;
