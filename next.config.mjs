/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // ppr: true,
  },
  images: { domains: ['via.placeholder.com', 'https://map.ir'] },
  reactStrictMode: true,
  // serverActions: true,
  // distDir: 'build',
  // basePath: '/',
  env: {
    DOMAIN: 'https://stage3api.qhami.com'
  }
};

export default nextConfig;
