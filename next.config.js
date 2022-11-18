/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    STEPZEN_API_KEY: process.env.STEPZEN_API_KEY,
    STEPZEN_ENDPOINT: process.env.STEPZEN_ENDPOINT,
  },
};

module.exports = nextConfig;
