const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { removeConsole: false },
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
