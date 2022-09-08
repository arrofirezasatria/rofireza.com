/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require('next-compose-plugins')
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'media.giphy.com',
            'giphy.com',
            'i.giphy.com',
            'i.giphy.com',
            'ik.imagekit.io',
        ],
    },
}

module.exports = withPlugins([withContentlayer(), nextConfig])
