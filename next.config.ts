/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true, // se usar Next.js 14+ com server actions
  },
};

module.exports = nextConfig;
