/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
    sourceMap: true
  },
  /*images: {
    loader: "imgix",
    path: "https://noop/",
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },*/
}

module.exports = nextConfig