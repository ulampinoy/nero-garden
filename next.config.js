/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['assets.example.com'] // Add your image domains here
    },
    output: 'standalone',
    experimental: {
        outputFileTracingRoot: process.env.NODE_ENV === 'production' ? '/var/task' : undefined
    },
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
