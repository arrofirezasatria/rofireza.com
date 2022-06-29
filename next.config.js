/** @type {import('next').NextConfig} */
// const { withContentlayer } = require("next-contentlayer");

// const nextConfig = {
//     reactStrictMode: true,
// };

// module.exports = withContentlayer(nextConfig);
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({});


const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({});