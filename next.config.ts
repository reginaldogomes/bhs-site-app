import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
