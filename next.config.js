/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'cf.bstatic.com',
      'lh3.googleusercontent.com',
      'graph.facebook.com',
    ],
  },
}
