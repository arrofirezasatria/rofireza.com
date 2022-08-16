/**
 * @type {import('next').NextConfig}
 */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.giphy.com", "giphy.com", "i.giphy.com"],
  },
};

module.exports = withContentlayer({ nextConfig });
