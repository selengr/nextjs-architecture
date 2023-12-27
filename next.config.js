/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: { domains: ['via.placeholder.com'] },
  reactStrictMode: true,
  // serverActions: true,
  // distDir: 'build',
  // basePath: '/',
  env: {
    DOMAIN: 'https://stage3api.qhami.com'
  }
};

module.exports = nextConfig;
