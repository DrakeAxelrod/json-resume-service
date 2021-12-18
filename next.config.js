/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_CLIENT: process.env.GITHUB_CLIENT,
    GITHUB_SECRET: process.env.GITHUB_SECRET
  }
}
