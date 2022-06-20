/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withBundleAnalyzer = require("@next/bundle-analyzer")(
    enabled: process.env.ANALYZE === 'true',
);


const nextConfig = {
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
module.exports = withBundleAnalyzer({})