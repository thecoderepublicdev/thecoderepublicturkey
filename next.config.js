/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = {
            fs: false
        }
    }

    return config;
  }
}

module.exports = nextConfig;

