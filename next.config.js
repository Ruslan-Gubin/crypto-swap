/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    formats: [ 'image/webp'],
    domains: ["cryptocompare.com"],
  },
}

module.exports = nextConfig
