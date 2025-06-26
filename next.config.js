/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cf.bstatic.com',
      'lh3.googleusercontent.com',
    ],
  },
  env: {
    mapbox_key:
      'pk.eyJ1Ijoic2FiYXN0aW5lIiwiYSI6ImNsMW04bDR6ZDBpZXozZGtxMWpsMjN6d2UifQ.SKrpTmQig13anUxS6DZRIg',
  },
}
