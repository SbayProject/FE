/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
    domains: ['vemaybayvietnam.com', 'sbaygroup.com', 'firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
