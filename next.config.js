const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
// const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["media.giphy.com", "giphy.com", "i.giphy.com"],
    },
};

// module.exports = withContentlayer(nextConfig);
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//     enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({});

// const { withContentlayer } = require("next-contentlayer");

// module.exports = withContentlayer(nextConfig);

module.exports = withPlugins([withContentlayer(), nextConfig]);
