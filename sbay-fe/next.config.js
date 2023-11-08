/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        disableStaticImages: false,
        domains: ['vemaybayvietnam.com', 'png.pngtree.com', 'sbaygroup.com', 'firebasestorage.googleapis.com'],
    },
};

module.exports = nextConfig;
