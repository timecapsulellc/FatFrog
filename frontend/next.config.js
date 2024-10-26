/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io'], // Add any image domains you'll use
  },
}

module.exports = nextConfig
