/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'ts', 'tsx', 'js', 'jsx'],
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  trailingSlash: false,

  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV,
  },
}

module.exports = nextConfig
