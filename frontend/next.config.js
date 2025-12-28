/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // 🔥 Prevent Konva from trying to load node-canvas
    config.resolve.alias.canvas = false;
    return config;
  }
};

module.exports = nextConfig;
