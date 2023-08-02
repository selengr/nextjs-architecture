/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: [
       "via.placeholder.com" 
  ] },
  reactStrictMode: true,
  serverActions: true,
  distDir: 'build'
  // basePath: '/',
  // env: {
  //     HOST_API_KEY: 'http://localhost:8080',
  //   },
};

module.exports = nextConfig;
