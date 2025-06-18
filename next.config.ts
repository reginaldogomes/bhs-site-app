/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  // Pode adicionar outras configurações conforme necessário
};

module.exports = nextConfig;
