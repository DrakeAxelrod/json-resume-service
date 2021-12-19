/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
  }
}
