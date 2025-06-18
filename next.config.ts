/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {}, // Correto
  },
};

module.exports = nextConfig;
