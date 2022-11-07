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
            'dev-to-uploads.s3.amazonaws.com',
            'i.ytimg.com',
        ],
    },
}

module.exports = withContentlayer(nextConfig)
