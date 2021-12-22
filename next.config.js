/** @type {import('next').NextConfig} */

const DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
    DEV: DEV
  }
}
