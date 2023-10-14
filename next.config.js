/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [
       "via.placeholder.com" 
  ] },
  reactStrictMode: true,
  serverActions: true,
  distDir: 'build',
  // basePath: '/',
  env: {
    DOMAIN:"http://stage3api.qhami.com:8080",
    },
};

module.exports = nextConfig;
